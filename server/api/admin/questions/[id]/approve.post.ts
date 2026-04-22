import { defineEventHandler, getRouterParam, createError } from 'h3'
import prisma from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  
  if (!id) throw createError({ statusCode: 400 })

  const updated = await prisma.question.update({
    where: { id },
    data: { status: 'published' }
  })

  return updated
})
