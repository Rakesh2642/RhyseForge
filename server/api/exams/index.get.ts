import { defineEventHandler, getQuery } from 'h3'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  
  // Basic pagination and filtering
  const page = Number(query.page) || 1
  const limit = Number(query.limit) || 10
  const skip = (page - 1) * limit

  const where = {
    status: 'published'
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
        categoryTags: parsedTags
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
