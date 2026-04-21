import { defineEventHandler, readBody, createError } from 'h3'

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id
  const body = await readBody(event)
  
  if (!id) {
    throw createError({ statusCode: 400, statusMessage: 'Exam ID is required' })
  }

  // Allow updating title, provider, certificationCode, and status
  const updatedExam = await prisma.exam.update({
    where: { id },
    data: {
      title: body.title,
      provider: body.provider,
      certificationCode: body.certificationCode,
      status: body.status,
      updatedAt: new Date()
    }
  })

  return updatedExam
})
