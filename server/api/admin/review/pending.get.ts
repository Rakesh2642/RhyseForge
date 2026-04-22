import { defineEventHandler } from 'h3'
import prisma from '~/server/utils/prisma'

export default defineEventHandler(async () => {
  const pendingQuestions = await prisma.question.findMany({
    where: {
      status: 'pending_review'
    },
    orderBy: {
      createdAt: 'asc'
    }
  })

  return pendingQuestions.map(q => {
    let parsedOptions: string[] = []
    try {
      parsedOptions = JSON.parse(q.options)
    } catch (e) {
      console.error(`Failed to parse options for question ${q.id}:`, e)
    }

    return {
      ...q,
      options: parsedOptions
    }
  })
})
