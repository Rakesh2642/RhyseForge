import { defineEventHandler, createError } from 'h3'
import prisma from '~/server/utils/prisma'

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

  return exam
})
