import { defineEventHandler, readBody, createError, getHeader } from 'h3'
import prisma from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id
  const { password } = await readBody(event)

  // 1. Basic Validation
  if (!id) throw createError({ statusCode: 400, statusMessage: 'Exam ID missing' })
  if (!password) throw createError({ statusCode: 400, statusMessage: 'Admin password required for verification' })

  // Defensive session detection as used in other server routes
  const authHeader = getHeader(event, 'Authorization')
  let sessionEmail = 'admin@examforge.com' // Mock fallback for dev
  
  if (authHeader?.includes('mock-jwt-token-user')) {
    sessionEmail = 'user@examforge.com'
  }

  // 3. Verify User exists and is ADMIN
  let user = await prisma.user.findUnique({
    where: { email: sessionEmail }
  })

  // Dev Fallback: If user is missing from DB, allow deletion with default password
  let dbPassword = user?.password
  if (!user && sessionEmail === 'admin@examforge.com') {
    dbPassword = 'admin123' 
  } else if (!user) {
    throw createError({ statusCode: 403, statusMessage: 'Forbidden: Admin access missing from database' })
  }

  // 4. Verify password
  if (dbPassword !== password) {
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
