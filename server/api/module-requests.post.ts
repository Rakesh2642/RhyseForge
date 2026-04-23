import { createError, defineEventHandler, readBody } from 'h3'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const name = String(body?.name || '').trim()
  const email = String(body?.email || '').trim().toLowerCase()
  const moduleName = String(body?.moduleName || '').trim()
  const provider = body?.provider ? String(body.provider).trim() : null
  const urgency = String(body?.urgency || 'LATER').trim().toUpperCase()
  const notes = body?.notes ? String(body.notes).trim() : null
  const preorderReady = Boolean(body?.preorderReady)

  if (!name || name.length < 2) {
    throw createError({ statusCode: 400, statusMessage: 'Please enter your name.' })
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw createError({ statusCode: 400, statusMessage: 'Please enter a valid email.' })
  }

  if (!moduleName || moduleName.length < 3) {
    throw createError({ statusCode: 400, statusMessage: 'Please enter the module name.' })
  }

  const allowedUrgency = ['ASAP', 'THIS_MONTH', 'LATER']
  const safeUrgency = allowedUrgency.includes(urgency) ? urgency : 'LATER'

  const existing = await prisma.moduleRequest.findFirst({
    where: {
      email,
      moduleName: { equals: moduleName, mode: 'insensitive' },
      status: { in: ['NEW', 'IN_REVIEW', 'PLANNED'] }
    }
  })

  if (existing) {
    return {
      ok: true,
      message: 'We already have your request and it is under review.',
      id: existing.id
    }
  }

  const request = await prisma.moduleRequest.create({
    data: {
      name,
      email,
      moduleName,
      provider,
      urgency: safeUrgency,
      preorderReady,
      notes
    },
    select: {
      id: true,
      status: true,
      requestedAt: true
    }
  })

  return {
    ok: true,
    message: 'Request submitted. We will notify you once this module is planned.',
    request
  }
})
