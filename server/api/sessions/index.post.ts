import { defineEventHandler, readBody, createError } from 'h3'
import prisma from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { examId, mode, userId } = body

  if (!examId || !userId) {
    throw createError({ statusCode: 400, statusMessage: 'Exam ID and User ID are required' })
  }

  // Ensure the user exists to satisfy SQLite foreign keys
  await prisma.user.upsert({
    where: { id: userId },
    update: {},
    create: {
      id: userId,
      email: 'mock@example.com',
      password: 'no-password-needed',
      name: 'Mock Test User'
    }
  })

  const session = await prisma.session.create({
    data: {
      examId,
      userId,
      mode: mode || 'practice',
      startTime: new Date()
    }
  })

  return session
})
