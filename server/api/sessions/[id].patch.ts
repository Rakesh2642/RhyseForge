import { defineEventHandler, getRouterParam, readBody, createError } from 'h3'
import prisma from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
  const sessionId = getRouterParam(event, 'id')
  const body = await readBody(event)
  
  if (!sessionId) {
    throw createError({ statusCode: 400, statusMessage: 'Session ID is required' })
  }

  const { score, passed } = body

  const updatedSession = await prisma.session.update({
    where: { id: sessionId },
    data: {
      score,
      passed,
      endTime: new Date()
    }
  })

  return updatedSession
})
