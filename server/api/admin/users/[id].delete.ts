import { defineEventHandler, createError } from 'h3'

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id
  
  if (!id) throw createError({ statusCode: 400, statusMessage: 'User ID missing' })

  // Safety: Prevent deleting the main admin or self if we had the session
  // For now, simple implementation
  
  try {
    // Delete associated sessions first
    await prisma.session.deleteMany({ where: { userId: id } })
    await prisma.user.delete({ where: { id } })
    
    return { success: true }
  } catch (err) {
    console.error('User delete failed:', err)
    throw createError({ statusCode: 500, statusMessage: 'Failed to delete user' })
  }
})
