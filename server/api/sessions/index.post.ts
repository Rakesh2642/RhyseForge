import { defineEventHandler, readBody, createError } from 'h3'
import prisma from '~/server/utils/prisma'
import { getServerSession } from '~/server/utils/auth'

export default defineEventHandler(async (event) => {
  const authSession = getServerSession(event)
  if (!authSession) {
    throw createError({ statusCode: 401, statusMessage: 'Please login to start an exam session.' })
  }

  const body = await readBody(event)
  const { examId, mode } = body

  if (!examId) {
    throw createError({ statusCode: 400, statusMessage: 'Exam ID is required' })
  }

  const user = await prisma.user.findUnique({
    where: { id: authSession.id },
    select: { id: true, role: true, plan: true, beginningExamId: true }
  })

  if (!user) {
    throw createError({ statusCode: 404, statusMessage: 'User not found' })
  }

  if (user.role !== 'ADMIN' && user.plan === 'BEGINNING') {
    if (!user.beginningExamId) {
      throw createError({
        statusCode: 403,
        statusMessage: 'Beginning plan is active, but no module is assigned yet. Please contact support/admin.'
      })
    }
    if (user.beginningExamId !== examId) {
      throw createError({
        statusCode: 403,
        statusMessage: 'Beginning plan allows access to only your selected module.'
      })
    }
  }

  const createdSession = await prisma.session.create({
    data: {
      examId,
      userId: user.id,
      mode: mode || 'practice',
      startTime: new Date()
    }
  })

  return createdSession
})
