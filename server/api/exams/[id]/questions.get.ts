import { defineEventHandler, getRouterParam, getQuery, createError } from 'h3'
import { getServerSession } from '~/server/utils/auth'
import prisma from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  
  if (!id) {
    throw createError({ statusCode: 400, statusMessage: 'Exam ID is required' })
  }

  const query = getQuery(event)

  // ── Authentication & Access Control ──
  const session = getServerSession(event)

  let hasFullAccess = false
  if (session) {
    const user = await prisma.user.findUnique({ 
      where: { id: session.id },
      select: { plan: true, role: true }
    })
    // Admins and Paid Users get full access
    hasFullAccess = user?.role === 'ADMIN' || (user?.plan && user.plan !== 'FREE')
  }

  const where = {
    examId: id,
    status: 'published' // Always show published for questions
  }

  const offset = parseInt(query.offset as string || '0')
  const requestedLimit = parseInt(query.limit as string || '0')
  const shouldShuffle = query.shuffle === 'true'

  // If user has no session or is on FREE plan, limit to 10 questions only (Trial Mode)
  let effectiveLimit = requestedLimit
  if (!hasFullAccess) {
    effectiveLimit = 10
    console.log(`[AUTH] Limited access for ${session?.email || 'Guest'}: FREE Plan / No Session - Tier: 10 Qs`)
  }

  let questions: any[] = []

  if (shouldShuffle) {
    questions = await prisma.$queryRawUnsafe(`
      SELECT id, examId, question, options, topic, difficulty, answer, explanation
      FROM Question
      WHERE examId = '${id}' AND status = 'published'
      ORDER BY RANDOM()
      ${effectiveLimit > 0 ? `LIMIT ${effectiveLimit}` : ''}
    `)
  } else {
    questions = await prisma.question.findMany({
      where,
      skip: isNaN(offset) ? 0 : offset,
      ...(effectiveLimit > 0 ? { take: effectiveLimit } : {}),
      select: {
        id: true,
        examId: true,
        question: true,
        options: true,
        topic: true,
        difficulty: true,
        answer: true,
        explanation: true
      }
    })
  }

  return (questions || []).map((q: any) => {
    let parsedOptions: string[] = []
    try {
      parsedOptions = typeof q.options === 'string' ? JSON.parse(q.options) : q.options
    } catch (err) {
      console.error(`Failed to parse options for question ${q.id}:`, err)
    }
    return {
      ...q,
      options: parsedOptions,
      isSample: !hasFullAccess
    }
  })
})
