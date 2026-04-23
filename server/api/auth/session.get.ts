import { defineEventHandler } from 'h3'
import { getServerSession } from '../../utils/auth'

export default defineEventHandler(async (event) => {
  const session = getServerSession(event)

  if (!session) {
    return { user: null }
  }

  // ── Look up real user from database ──
  const user = await prisma.user.findUnique({
    where: { id: session.id },
    include: {
      beginningExam: {
        select: { id: true, title: true, certificationCode: true }
      },
      subscriptions: {
        where: { status: 'ACTIVE' },
        orderBy: { purchasedAt: 'desc' },
        take: 1
      }
    }
  })

  if (!user) {
    return { user: null }
  }

  // ── Device fingerprint verification (anti-sharing on every request) ──
  if (user.role !== 'ADMIN' && user.boundDeviceId && session.deviceId && user.boundDeviceId !== session.deviceId) {
    return { user: null } // Force re-login on mismatched device
  }

  const activeSub = user.subscriptions[0] || null

  return {
    user: {
      id: user.id,
      name: user.name || user.email.split('@')[0],
      email: user.email,
      role: user.role,
      plan: user.plan || 'FREE',
      beginningModule: user.beginningExam || null,
      phone: user.phone,
      // Mask device ID for security — only show last 4 chars
      boundDeviceId: user.boundDeviceId
        ? '••••' + user.boundDeviceId.slice(-4)
        : null,
      subscription: activeSub
        ? {
            plan: activeSub.plan,
            status: activeSub.status,
            purchasedAt: activeSub.purchasedAt,
            deviceId: '••••' + activeSub.deviceId.slice(-4)
          }
        : null,
      image: null
    }
  }
})
