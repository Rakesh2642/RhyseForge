import { defineEventHandler, createError } from 'h3'
import { getServerSession } from '../../utils/auth'

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

  // Fire ALL queries in parallel for maximum speed
  const [userCount, examCount, sessionsToday, passedCount, totalCompleted, pendingModuleRequests] = await Promise.all([
    prisma.user.count(),
    prisma.exam.count({ where: { status: 'published' } }),
    prisma.session.count({
      where: {
        startTime: { gt: new Date(new Date().setHours(0, 0, 0, 0)) }
      }
    }),
    prisma.session.count({
      where: { endTime: { not: null }, score: { gte: 70 } }
    }),
    prisma.session.count({
      where: { endTime: { not: null } }
    }),
    prisma.moduleRequest.count({
      where: { status: { in: ['NEW', 'IN_REVIEW', 'PLANNED'] } }
    })
  ])

  const passRate = totalCompleted > 0
    ? Math.round((passedCount / totalCompleted) * 100)
    : 0

  return {
    userCount: userCount.toLocaleString(),
    examCount: examCount.toLocaleString(),
    sessionsToday: sessionsToday.toLocaleString(),
    passRate: `${passRate}%`,
    pendingModuleRequests: pendingModuleRequests.toLocaleString()
  }
})
