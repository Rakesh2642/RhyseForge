import { createHash } from 'crypto'
import { getCookie } from 'h3'

/**
 * Hash a password using SHA-256 with a salt.
 */
export function hashPassword(password: string): string {
  const salt = 'rhyseforge-salt-2024'
  return createHash('sha256').update(password + salt).digest('hex')
}

export function verifyPassword(password: string, hash: string): boolean {
  return hashPassword(password) === hash
}

/**
 * Generate a simple JWT-like token encoding user data + device binding.
 */
export function generateToken(
  user: { id: string; email: string; role: string; plan?: string },
  deviceId: string
): string {
  const payload = {
    id: user.id,
    email: user.email,
    role: user.role,
    plan: user.plan || 'FREE',
    deviceId,
    iat: Date.now(),
    exp: Date.now() + 86400000 // 24 hours
  }
  return Buffer.from(JSON.stringify(payload)).toString('base64')
}

/**
 * Decode token and return payload, or null if invalid/expired.
 */
export function decodeToken(token: string): any | null {
  try {
    const cleaned = token.replace('Bearer ', '').trim()
    const payload = JSON.parse(Buffer.from(cleaned, 'base64').toString('utf-8'))

    // Check expiration
    if (payload.exp && payload.exp < Date.now()) {
      return null
    }

    return payload
  } catch {
    return null
  }
}

/**
 * Extract user + device info from the Authorization header OR Cookies.
 * Returns null if invalid.
 */
export function getServerSession(event: any) {
  // 1. Try Authorization Header
  const authHeader = event.node.req.headers['authorization']
  if (authHeader) {
    const session = decodeToken(authHeader)
    if (session) return session
  }

  // 2. Comprehensive Cookie Check for @sidebase/nuxt-auth and next-auth
  const possibleCookieNames = [
    'auth.token',
    'nuxt-auth.token',
    'auth:token',               // Common sidebase variant
    'next-auth.session-token',  // next-auth underlying token
    '__Secure-next-auth.session-token'
  ]

  for (const name of possibleCookieNames) {
    const cookieToken = getCookie(event, name)
    if (cookieToken) {
      const session = decodeToken(cookieToken)
      if (session) return session
    }
  }

  // 3. Fallback: Check if ANY cookie contains a Bearer token representation
  const allCookies = event.node.req.headers.cookie
  if (allCookies && allCookies.includes('Bearer')) {
      const match = allCookies.match(/Bearer([^;]+)/)
      if(match && match[0]) {
           const session = decodeToken(match[0].trim())
           if(session) return session
      }
  }

  return null
}

