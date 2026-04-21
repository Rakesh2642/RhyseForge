import { defineEventHandler, readBody, createError } from 'h3'
import { getServerSession } from '../../utils/auth'

export default defineEventHandler(async (event) => {
  const session = getServerSession(event)

  if (!session) {
    throw createError({ statusCode: 401, statusMessage: 'Not authenticated' })
  }

  const body = await readBody(event)
  const { name, image } = body

  try {
    const user = await prisma.user.update({
      where: { id: session.id },
      data: {
        ...(name && { name: name.trim() })
        // Image handling would need file storage in production
      }
    })

    const { password: _, ...safeUser } = user
    return {
      ...safeUser,
      name: user.name || user.email.split('@')[0],
      image: null
    }
  } catch (error) {
    console.error('Update error:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to update profile'
    })
  }
})
