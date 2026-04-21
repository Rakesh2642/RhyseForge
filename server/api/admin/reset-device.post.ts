import { defineEventHandler, readBody, createError } from 'h3'
import { getServerSession } from '../../utils/auth'

/**
 * Admin-only endpoint to reset a user's device binding.
 * Use case: user gets a new device and needs their account unbound.
 * Only ADMIN role can invoke this.
 */
export default defineEventHandler(async (event) => {
  // ── Auth + Admin check ──
  const session = getServerSession(event)

  if (!session) {
    throw createError({ statusCode: 401, statusMessage: 'Not authenticated' })
  }

  // Verify caller is admin from DB (don't trust token role alone)
  const admin = await prisma.user.findUnique({
    where: { id: session.id }
  })

  if (!admin || admin.role !== 'ADMIN') {
    throw createError({ statusCode: 403, statusMessage: 'Admin access required' })
  }

  const body = await readBody(event)
  const { userId } = body

  if (!userId) {
    throw createError({ statusCode: 400, statusMessage: 'userId is required' })
  }

  // ── Find target user ──
  const targetUser = await prisma.user.findUnique({
    where: { id: userId }
  })

  if (!targetUser) {
    throw createError({ statusCode: 404, statusMessage: 'User not found' })
  }

  const oldDeviceId = targetUser.boundDeviceId

  // ── Reset device binding ──
  await prisma.user.update({
    where: { id: userId },
    data: { boundDeviceId: null }
  })

  return {
    success: true,
    message: `Device binding reset for ${targetUser.email}. They will be bound to the next device they log in from.`,
    previousDevice: oldDeviceId ? '••••' + oldDeviceId.slice(-4) : 'none'
  }
})
