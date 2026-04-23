import { defineEventHandler, readBody, createError } from 'h3'
import { getServerSession } from '../../../../utils/auth'
import prisma from '../../../../utils/prisma'

export default defineEventHandler(async (event) => {
  // ── Admin auth check ──
  const session = getServerSession(event)
  if (!session) throw createError({ statusCode: 401, statusMessage: 'Not authenticated' })

  const admin = await prisma.user.findUnique({ where: { id: session.id } })
  if (!admin || admin.role !== 'ADMIN') {
    throw createError({ statusCode: 403, statusMessage: 'Admin access required' })
  }

  const subId = event.context.params?.id
  if (!subId) throw createError({ statusCode: 400, statusMessage: 'Subscription ID is required' })

  const body = await readBody(event)
  const { status, userId } = body

  if (!['ACTIVE', 'REJECTED'].includes(status)) {
     throw createError({ statusCode: 400, statusMessage: 'Invalid status' })
  }

  try {
    // 1. Update the subscription record
    const updatedSub = await prisma.subscription.update({
      where: { id: subId },
      data: { status }
    })

    // 2. If approved (ACTIVE), mark old ones UPGRADED, and update the User's actual access plan
    if (status === 'ACTIVE') {
      await prisma.subscription.updateMany({
        where: { userId: userId, status: 'ACTIVE', id: { not: subId } },
        data: { status: 'UPGRADED' }
      })

      if (updatedSub.plan === 'BEGINNING' && !updatedSub.beginningExamId) {
        throw createError({
          statusCode: 400,
          statusMessage: 'Beginning plan approval requires a selected module.'
        })
      }

      await prisma.user.update({
        where: { id: userId },
        data: {
          plan: updatedSub.plan,
          beginningExamId: updatedSub.plan === 'BEGINNING' ? updatedSub.beginningExamId : null,
          planPurchasedAt: new Date()
        }
      })
    }

    return { success: true, subscription: updatedSub }
  } catch (err) {
    console.error('Failed to approve subscription:', err)
    throw createError({ statusCode: 500, statusMessage: 'Failed to update subscription' })
  }
})
