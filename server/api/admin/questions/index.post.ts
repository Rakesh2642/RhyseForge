import { defineEventHandler, readBody, createError } from 'h3'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  
  if (!body.examId || !body.question || !body.options) {
    throw createError({ statusCode: 400, statusMessage: 'examId, question, and options are required' })
  }

  const question = await prisma.question.create({
    data: {
      examId: body.examId,
      question: body.question,
      options: typeof body.options === 'string' ? body.options : JSON.stringify(body.options),
      answer: parseInt(body.answer) || 0,
      explanation: body.explanation || '',
      topic: body.topic || '',
      difficulty: body.difficulty || 'medium',
      source: 'manual',
      status: body.status || 'published'
    }
  })

  return question
})
