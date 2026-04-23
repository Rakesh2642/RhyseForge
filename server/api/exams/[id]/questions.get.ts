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
  let plan: string = 'FREE'
  let beginningExamId: string | null = null
  if (session) {
    const user = await prisma.user.findUnique({ 
      where: { id: session.id },
      select: { plan: true, role: true, beginningExamId: true }
    })
    plan = user?.plan || 'FREE'
    beginningExamId = user?.beginningExamId || null

    if (user?.role === 'ADMIN') {
      hasFullAccess = true
    } else if (plan === 'ADVANCED' || plan === 'ENTERPRISE') {
      hasFullAccess = true
    } else if (plan === 'BEGINNING') {
      if (!beginningExamId) {
        throw createError({
          statusCode: 403,
          statusMessage: 'Beginning plan is active, but no module is assigned yet. Please contact support/admin.'
        })
      }
      if (beginningExamId !== id) {
        throw createError({
          statusCode: 403,
          statusMessage: 'Beginning plan allows access to only your selected module.'
        })
      }
      hasFullAccess = true
    }
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
    console.log(`[AUTH] Limited access for ${session?.email || 'Guest'}: ${plan} plan - Tier: 10 Qs`)
  }

  let questions: any[] = []

  if (shouldShuffle) {
    const allQuestions = await prisma.question.findMany({
      where,
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
    const shuffled = [...allQuestions]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    questions = effectiveLimit > 0 ? shuffled.slice(0, effectiveLimit) : shuffled
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
