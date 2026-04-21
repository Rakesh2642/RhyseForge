import { defineEventHandler, readBody, createError, getHeader } from 'h3'
import { getServerSession } from '../../utils/auth'

/**
 * Plan definitions with INR pricing (Indian standard).
 * BEGINNING  = ₹200  — Single module access
 * ADVANCED   = ₹500  — All modules, lifetime
 * ENTERPRISE = ₹5000 — Source code + white-label license
 */
const PLANS: Record<string, { price: number; name: string }> = {
  BEGINNING:  { price: 200,  name: 'Beginning' },
  ADVANCED:   { price: 500,  name: 'Advanced' },
  ENTERPRISE: { price: 5000, name: 'Enterprise' }
}

export default defineEventHandler(async (event) => {
  // ── Auth check ──
  const session = getServerSession(event)

  if (!session) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Please login to purchase a plan'
    })
  }

  const body = await readBody(event)
  const { plan, deviceId } = body

  // ── Validate plan ──
  if (!plan || !PLANS[plan]) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid plan selected. Choose BEGINNING, ADVANCED, or ENTERPRISE.'
    })
  }

  // ── Device must be present ──
  if (!deviceId) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Device verification required for purchase'
    })
  }

  // ── Fetch user ──
  const user = await prisma.user.findUnique({
    where: { id: session.id }
  })

  if (!user) {
    throw createError({ statusCode: 404, statusMessage: 'User not found' })
  }

  // ── Device binding enforcement ──
  if (user.boundDeviceId && user.boundDeviceId !== deviceId) {
    throw createError({
      statusCode: 403,
      statusMessage: 'Device mismatch. Purchases must be made from your registered device. Contact support@rhyseforge.com for help.'
    })
  }

  // ── Check upgrade path ──
  const planRank: Record<string, number> = { FREE: 0, BEGINNING: 1, ADVANCED: 2, ENTERPRISE: 3 }
  const currentRank = planRank[user.plan || 'FREE'] || 0
  const newRank = planRank[plan] || 0

  if (newRank <= currentRank && currentRank > 0) {
    throw createError({
      statusCode: 400,
      statusMessage: `You already have the ${user.plan} plan. You can only upgrade to a higher plan.`
    })
  }

  const selectedPlan = PLANS[plan]

  // ── Check for existing pending request ──
  const existingPending = await prisma.subscription.findFirst({
     where: { userId: user.id, status: 'PENDING_APPROVAL' }
  })
  if (existingPending) {
       throw createError({
        statusCode: 400,
        statusMessage: `You already have a pending request for a plan. Please wait for the admin to approve your request, or contact support.`
      })
  }

  // ── Create new subscription request ──
  const subscription = await prisma.subscription.create({
    data: {
      userId: user.id,
      plan,
      amount: selectedPlan.price,
      currency: 'INR',
      deviceId,
      status: 'PENDING_APPROVAL' // Requires admin approval
    }
  })

  return {
    success: true,
    message: `Payment confirmation received! The request for the ${selectedPlan.name} plan has been sent to the Admin for manual approval.`,
    subscription: {
      id: subscription.id,
      plan: subscription.plan,
      status: subscription.status,
    }
  }
})
