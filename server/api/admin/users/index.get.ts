import { defineEventHandler, createError } from 'h3'
import { getServerSession } from '../../../utils/auth'

export default defineEventHandler(async (event) => {
  // ── Admin auth check ──
  const session = getServerSession(event)

  if (!session) {
    throw createError({ statusCode: 401, statusMessage: 'Not authenticated' })
  }

  const admin = await prisma.user.findUnique({ where: { id: session.id } })
  if (!admin || admin.role !== 'ADMIN') {
    throw createError({ statusCode: 403, statusMessage: 'Admin access required' })
  }

  try {
    const users = await prisma.user.findMany({
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        email: true,
        name: true,
        phone: true,
        role: true,
        plan: true,
        beginningExamId: true,
        beginningExam: {
          select: { id: true, title: true, certificationCode: true }
        },
        boundDeviceId: true,
        planPurchasedAt: true,
        createdAt: true,
        subscriptions: true,
        _count: {
          select: { sessions: true }
        }
      }
    })

    // Send full raw data to Admins
    return users
  } catch (err) {
    console.error('Failed to fetch users:', err)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch user list'
    })
  }
})
