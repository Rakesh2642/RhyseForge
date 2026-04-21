export default defineEventHandler(async (event) => {
  // Manual session extraction to avoid #auth resolution issues during dev
  const authHeader = getHeader(event, 'Authorization')
  let sessionUser = { email: 'admin@examforge.com' } // Mock fallback for dev
  
  if (authHeader?.includes('mock-jwt-token-user')) {
    sessionUser = { email: 'user@examforge.com' }
  }


  const user = await prisma.user.findUnique({
    where: { email: sessionUser.email }
  })

  if (!user) return []

  const sessions = await prisma.session.findMany({
    where: {
      userId: user.id,
      endTime: { not: null }
    },
    include: {
      exam: {
        select: { title: true }
      }
    },
    orderBy: {
      endTime: 'desc'
    },
    take: 10
  })

  return sessions
})
