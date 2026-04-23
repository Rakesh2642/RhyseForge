import { defineEventHandler, readBody, createError } from 'h3'
import { verifyPassword, generateToken } from '../../utils/auth'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { email, password, deviceId } = body

  if (!email || !password) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Email and password are required'
    })
  }

  if (!deviceId) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Device verification failed. Please enable JavaScript and try again.'
    })
  }

  // ── Find user ──
  const user = await prisma.user.findUnique({
    where: { email: email.toLowerCase().trim() }
  })

  if (!user) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Invalid email or password'
    })
  }

  // ── Verify password ──
  const isValid = verifyPassword(password, user.password)
  if (!isValid) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Invalid email or password'
    })
  }

  // ────────────────────────────────────────────────────
  //  DEVICE BINDING — the core anti-sharing mechanism
  // ────────────────────────────────────────────────────
  //  • If user already has a bound device AND it doesn't match
  //    the current device → REJECT login immediately.
  //  • If no device bound yet → bind this device (first login).
  //  • If device matches → proceed normally.
  // ────────────────────────────────────────────────────

  if (user.role !== 'ADMIN' && user.boundDeviceId && user.boundDeviceId !== deviceId) {
    throw createError({
      statusCode: 403,
      statusMessage: 'This account is bound to another device. Each subscription can only be used on one device for security. Contact support@rhyseforge.com to request a device transfer.'
    })
  }

  // First login — bind device
  if (user.role !== 'ADMIN' && !user.boundDeviceId) {
    await prisma.user.update({
      where: { id: user.id },
      data: { boundDeviceId: deviceId }
    })
  }

  // ── Generate token ──
  const token = generateToken(
    { id: user.id, email: user.email, role: user.role, plan: user.plan || 'FREE' },
    deviceId
  )

  return { token }
})
