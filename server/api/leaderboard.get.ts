import { defineEventHandler } from 'h3'

export default defineEventHandler(async () => {
  // Real-time leaderboard aggregation
  const sessions = await prisma.session.groupBy({
    by: ['userId'],
    _sum: {
      score: true
    },
    _count: {
      id: true
    },
    orderBy: {
      _sum: {
        score: 'desc'
      }
    },
    take: 10 // Top 10 only
  })

  // Batch fetch user details to avoid N+1 performance hit
  const userIds = sessions.map(s => s.userId)
  const users = await prisma.user.findMany({
    where: { id: { in: userIds } },
    select: { id: true, name: true }
  })

  // Create a quick lookup map
  const userMap = {}
  users.forEach(u => {
    const [name, image] = u.name?.includes('|||') ? u.name.split('|||') : [u.name, null]
    userMap[u.id] = { name: name || 'Anonymous Forger', image: image || null }
  })

  const leaderboard = sessions.map(s => {
    const userData = userMap[s.userId] || { name: 'Anonymous Forger', image: null }
    
    return {
      name: userData.name,
      image: userData.image,
      exams_taken: s._count.id,
      score: Math.round(s._sum.score || 0)
    }
  })

  return leaderboard
})
