import { defineEventHandler, readBody } from 'h3'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { ids } = body

  if (!ids || !Array.isArray(ids)) {
    throw createError({ statusCode: 400, statusMessage: 'IDs array is required' })
  }

  // Bulk update status to 'published'
  const result = await prisma.question.updateMany({
    where: {
      id: { in: ids }
    },
    data: {
      status: 'published'
    }
  })

  return {
    count: result.count
  }
})
