import { defineEventHandler, createError } from 'h3'
import prisma from '~/server/utils/prisma'
import { getServerSession } from '~/server/utils/auth'

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id

  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Exam ID is required'
    })
  }

  const exam = await prisma.exam.findUnique({
    where: { id },
    include: {
      _count: {
        select: { questions: true }
      }
    }
  })

  if (!exam) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Exam not found'
    })
  }

  const session = getServerSession(event)
  if (session) {
    const user = await prisma.user.findUnique({
      where: { id: session.id },
      select: { role: true, plan: true, beginningExamId: true }
    })

    if (user && user.role !== 'ADMIN' && user.plan === 'BEGINNING') {
      if (!user.beginningExamId) {
        throw createError({
          statusCode: 403,
          statusMessage: 'Beginning plan is active, but no module is assigned yet. Please contact support/admin.'
        })
      }
      if (user.beginningExamId !== id) {
        throw createError({
          statusCode: 403,
          statusMessage: 'Beginning plan allows access to only your selected module.'
        })
      }
    }
  }

  return exam
})
