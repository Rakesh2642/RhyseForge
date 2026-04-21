export default defineEventHandler(async (event) => {

  // In a real application, check auth level here (must be admin)
  
  const exams = await prisma.exam.findMany({
    include: {
      _count: {
        select: { questions: true }
      }
    },
    orderBy: { createdAt: 'desc' }
  })

  return exams.map(e => ({
    ...e,
    categoryTags: JSON.parse(e.categoryTags)
  }))
})
