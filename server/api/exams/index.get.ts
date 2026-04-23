import { defineEventHandler, getQuery } from 'h3'
import prisma from '~/server/utils/prisma'
import { getServerSession } from '~/server/utils/auth'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const session = getServerSession(event)
  
  // Basic pagination and filtering
  const page = Number(query.page) || 1
  const limit = Number(query.limit) || 10
  const skip = (page - 1) * limit

  const where = {
    status: 'published'
  }

  let currentUser: { role: string; plan: string; beginningExamId: string | null } | null = null
  if (session) {
    currentUser = await prisma.user.findUnique({
      where: { id: session.id },
      select: { role: true, plan: true, beginningExamId: true }
    })
  }

  const [exams, total] = await Promise.all([
    prisma.exam.findMany({
      where,
      skip,
      take: limit,
      include: {
        _count: {
          select: { questions: true }
        }
      },
      orderBy: { createdAt: 'desc' }
    }),
    prisma.exam.count({ where })
  ])

  return {
    exams: exams.map((e: any) => {
      let parsedTags: string[] = []
      try {
        parsedTags = JSON.parse(e.categoryTags)
      } catch (err) {
        console.error(`Failed to parse tags for exam ${e.id}:`, err)
      }
      return {
        ...e,
        categoryTags: parsedTags,
        canAccess:
          !currentUser ||
          currentUser.role === 'ADMIN' ||
          currentUser.plan !== 'BEGINNING' ||
          !currentUser.beginningExamId ||
          currentUser.beginningExamId === e.id
      }
    }),
    meta: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit)
    }
  }
})
