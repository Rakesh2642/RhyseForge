import { defineEventHandler, readBody, createError } from 'h3'
import { getServerSession } from '../../../utils/auth'
import prisma from '../../../utils/prisma'

export default defineEventHandler(async (event) => {
  // ── Admin auth check ──
  const session = getServerSession(event)
  if (!session) throw createError({ statusCode: 401, statusMessage: 'Not authenticated' })

  const admin = await prisma.user.findUnique({ where: { id: session.id } })
  if (!admin || admin.role !== 'ADMIN') {
    throw createError({ statusCode: 403, statusMessage: 'Admin access required' })
  }

  const userId = event.context.params?.id
  if (!userId) throw createError({ statusCode: 400, statusMessage: 'User ID is required' })

  const body = await readBody(event)

  try {
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        role: body.role,
        plan: body.plan,
        // If boundDeviceId is empty string, convert to null to clear it
        boundDeviceId: body.boundDeviceId?.trim() ? body.boundDeviceId : null
      }
    })

    return { success: true, user: updatedUser }
  } catch (err) {
    console.error('Failed to patch user:', err)
    throw createError({ statusCode: 500, statusMessage: 'Failed to update user' })
  }
})
