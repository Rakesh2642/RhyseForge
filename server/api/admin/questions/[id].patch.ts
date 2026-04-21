import { defineEventHandler, readBody, createError } from 'h3'

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id
  const body = await readBody(event)
  
  if (!id) {
    throw createError({ statusCode: 400, statusMessage: 'Question ID is required' })
  }

  const updated = await prisma.question.update({
    where: { id },
    data: {
      question: body.question,
      options: typeof body.options === 'string' ? body.options : JSON.stringify(body.options),
      answer: parseInt(body.answer),
      explanation: body.explanation,
      topic: body.topic,
      difficulty: body.difficulty,
      status: body.status,
      updatedAt: new Date()
    }
  })

  return updated
})
