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
      subscriptions: {
        orderBy: { purchasedAt: 'desc' }
      }
    }
  })

  if (!user) {
    throw createError({ statusCode: 404, statusMessage: 'User not found' })
  }

  const activeSub = user.subscriptions.find(s => s.status === 'ACTIVE')

  return {
    plan: user.plan || 'FREE',
    subscription: activeSub
      ? {
          id: activeSub.id,
          plan: activeSub.plan,
          amount: activeSub.amount,
          currency: activeSub.currency,
          status: activeSub.status,
          deviceId: '••••' + activeSub.deviceId.slice(-4),
          purchasedAt: activeSub.purchasedAt
        }
      : null,
    boundDevice: user.boundDeviceId
      ? '••••' + user.boundDeviceId.slice(-4)
      : null,
    history: user.subscriptions.map(s => ({
      plan: s.plan,
      amount: s.amount,
      currency: s.currency,
      status: s.status,
      purchasedAt: s.purchasedAt
    }))
  }
})
