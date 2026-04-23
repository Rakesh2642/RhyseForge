import { defineEventHandler, createError } from 'h3'
import { getServerSession } from '../../utils/auth'

export default defineEventHandler(async (event) => {
  const session = getServerSession(event)

  if (!session) {
    throw createError({ statusCode: 401, statusMessage: 'Not authenticated' })
  }

  const user = await prisma.user.findUnique({
    where: { id: session.id },
    include: {
      beginningExam: {
        select: { id: true, title: true, certificationCode: true }
      },
      _count: {
        select: { sessions: true }
      },
      subscriptions: {
        where: { status: 'ACTIVE' },
        orderBy: { purchasedAt: 'desc' },
        take: 1
      }
    }
  })

  if (!user) {
    throw createError({ statusCode: 404, statusMessage: 'User not found' })
  }

  const activeSub = user.subscriptions[0] || null

  // Remove sensitive data
  const { password, ...safeUser } = user

  return {
    ...safeUser,
    name: user.name || user.email.split('@')[0],
    image: null,
    beginningModule: user.beginningExam || null,
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
      : null
  }
})
