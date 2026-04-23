import { createError, defineEventHandler, getQuery } from 'h3'
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

  const query = getQuery(event)
  const status = query.status ? String(query.status) : 'ALL'

  const where = status === 'ALL'
    ? {}
    : { status }

  const requests = await prisma.moduleRequest.findMany({
    where,
    orderBy: [
      { requestedAt: 'desc' }
    ]
  })

  const demandByModule = await prisma.moduleRequest.groupBy({
    by: ['moduleName'],
    _count: { moduleName: true },
    orderBy: { _count: { moduleName: 'desc' } },
    take: 8
  })

  return {
    requests,
    demandByModule
  }
})
