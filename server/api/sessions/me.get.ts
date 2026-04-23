import { defineEventHandler, createError } from 'h3'
import { getServerSession } from '~/server/utils/auth'
import prisma from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
  const session = getServerSession(event)

  if (!session) {
    throw createError({ statusCode: 401, statusMessage: 'Not authenticated' })
  }

  const user = await prisma.user.findUnique({
    where: { id: session.id },
    select: { id: true }
  })

  if (!user) {
    throw createError({ statusCode: 404, statusMessage: 'User not found' })
  }

  const sessions = await prisma.session.findMany({
    where: {
      userId: user.id,
      endTime: { not: null }
    },
    include: {
      exam: {
        select: { title: true }
      }
    },
    orderBy: {
      endTime: 'desc'
    }
  })

  return sessions
})
