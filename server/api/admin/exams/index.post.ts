import { defineEventHandler, readBody, createError } from 'h3'


export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  
  if (!body.title) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Title is required'
    })
  }

  try {
    const exam = await prisma.exam.create({
      data: {
        title: body.title,
        provider: body.provider || 'Other',
        certificationCode: body.certificationCode || null,
        passingScore: Number(body.passingScore) || 70,
        timeLimit: Number(body.timeLimit) || 120,
        categoryTags: body.categoryTags || '[]',
        status: 'draft' // Default to draft
      }
    })
    
    return exam
  } catch (err) {
    console.error('Failed to create exam:', err)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to create exam in database'
    })
  }
})
