import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  
  if (!id) throw createError({ statusCode: 400 })

  const deleted = await prisma.question.delete({
    where: { id }
  })

  return { success: true }
})
