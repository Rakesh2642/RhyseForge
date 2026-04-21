import { defineEventHandler, readBody, createError } from 'h3'
import { hashPassword, generateToken } from '../../utils/auth'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { email, password, name, phone, deviceId } = body

  // ── Validation ──
  if (!email || !password || !name) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Name, email, and password are required'
    })
  }

  if (password.length < 6) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Password must be at least 6 characters'
    })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Please enter a valid email address'
    })
  }

  if (!deviceId) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Device verification failed. Please enable JavaScript and try again.'
    })
  }

  // ── Check existing user ──
  const existingUser = await prisma.user.findUnique({
    where: { email: email.toLowerCase().trim() }
  })

  if (existingUser) {
    throw createError({
      statusCode: 409,
      statusMessage: 'An account with this email already exists'
    })
  }

  // ── Create user with device binding ──
  const hashedPassword = hashPassword(password)

  const user = await prisma.user.create({
    data: {
      email: email.toLowerCase().trim(),
      password: hashedPassword,
      name: name.trim(),
      phone: phone?.trim() || null,
      role: 'USER',
      boundDeviceId: deviceId,  // Bind device on registration
      plan: 'FREE'
    }
  })

  // ── Generate token with device binding ──
  const token = generateToken(
    { id: user.id, email: user.email, role: user.role, plan: user.plan },
    deviceId
  )

  return {
    token,
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      plan: user.plan
    }
  }
})
