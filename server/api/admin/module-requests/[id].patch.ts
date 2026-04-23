import { createError, defineEventHandler, getRouterParam, readBody } from 'h3'
import { getServerSession } from '../../../utils/auth'

export default defineEventHandler(async (event) => {
  const session = getServerSession(event)
  if (!session) {
    throw createError({ statusCode: 401, statusMessage: 'Not authenticated' })
  }

  const admin = await prisma.user.findUnique({ where: { id: session.id } })
  if (!admin || admin.role !== 'ADMIN') {
    throw createError({ statusCode: 403, statusMessage: 'Admin access required' })
  }

  const id = getRouterParam(event, 'id')
  if (!id) {
    throw createError({ statusCode: 400, statusMessage: 'Request id is required' })
  }

  const body = await readBody(event)
  const status = String(body?.status || '').toUpperCase()
  const adminNotes = body?.adminNotes ? String(body.adminNotes).trim() : null

  const allowed = ['NEW', 'IN_REVIEW', 'PLANNED', 'RELEASED', 'REJECTED']
  if (!allowed.includes(status)) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid status value' })
  }

  const isResolved = status === 'RELEASED' || status === 'REJECTED'

  const updated = await prisma.moduleRequest.update({
    where: { id },
    data: {
      status,
      adminNotes,
      resolvedAt: isResolved ? new Date() : null
    }
  })

  return {
    ok: true,
    request: updated
  }
})
