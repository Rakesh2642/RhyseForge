import { defineEventHandler, readBody, createError } from 'h3'
import prisma from '~/server/utils/prisma'
import { getServerSession, verifyPassword } from '~/server/utils/auth'

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id
  const { password } = await readBody(event)

  // 1. Basic Validation
  if (!id) throw createError({ statusCode: 400, statusMessage: 'Exam ID missing' })
  if (!password) throw createError({ statusCode: 400, statusMessage: 'Admin password required for verification' })

  const session = getServerSession(event)
  if (!session) {
    throw createError({ statusCode: 401, statusMessage: 'Not authenticated' })
  }

  const user = await prisma.user.findUnique({
    where: { id: session.id }
  })

  if (!user || user.role !== 'ADMIN') {
    throw createError({ statusCode: 403, statusMessage: 'Admin access required' })
  }

  // 4. Verify password
  if (!verifyPassword(password, user.password)) {
     throw createError({ statusCode: 400, statusMessage: 'Invalid admin password' })
  }


  try {
    // 5. Cascade cleanup
    await prisma.$transaction([
      prisma.question.deleteMany({ where: { examId: id } }),
      prisma.session.deleteMany({ where: { examId: id } }),
      prisma.exam.delete({ where: { id } })
    ])

    return { success: true, message: 'Exam and associated data deleted successfully' }
  } catch (err: any) {
    console.error('Delete failed:', err)
    throw createError({ 
      statusCode: 500, 
      statusMessage: `Database error: ${err.message || 'Operation failed'}` 
    })
  }
})
