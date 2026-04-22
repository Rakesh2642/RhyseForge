import { PrismaClient } from '@prisma/client'
import fs from 'fs'
import path from 'path'

let prisma: PrismaClient

if (process.env.NODE_ENV === 'production') {
  const tmpDbPath = path.join('/tmp', 'dev.db')
  
  // Search for the DB file in multiple locations relative to the function runtime
  const possiblePaths = [
    path.join(process.cwd(), 'prisma', 'dev.db'),
    path.join(process.cwd(), 'server', 'prisma', 'dev.db'), // Nitro's likely structure
    path.join(process.cwd(), '..', 'prisma', 'dev.db'),      // Alternative
    path.join('/var/task', 'prisma', 'dev.db'),           // Lambda root
    'dev.db'                                                // Fallback to local
  ]

  console.log('[Prisma Diagnostics] Searching for SQLite DB in possible paths...')
  let foundPath = possiblePaths.find(p => {
    const exists = fs.existsSync(p)
    if (exists) console.log(`[Prisma Diagnostics] Found DB at: ${p}`)
    return exists
  })

  try {
    if (foundPath && !fs.existsSync(tmpDbPath)) {
      console.log('[Prisma Diagnostics] Copying SQLite DB to writable temporary storage: ' + tmpDbPath)
      fs.copyFileSync(foundPath, tmpDbPath)
      // Ensure write permissions
      fs.chmodSync(tmpDbPath, 0o666)
    } else if (fs.existsSync(tmpDbPath)) {
      console.log('[Prisma Diagnostics] DB already exists in /tmp, using existing copy.')
    } else {
      console.error('[Prisma Diagnostics] CRITICAL: Source SQLite DB file not found in any expected location.')
    }
  } catch (e) {
    console.error("[Prisma Diagnostics] Failed to copy DB to /tmp", e)
  }

  // Connect cleanly to the guaranteed read/writable file
  const activePath = fs.existsSync(tmpDbPath) ? tmpDbPath : (foundPath || 'dev.db')
  console.log(`[Prisma Diagnostics] Final active database path: ${activePath}`)

  prisma = new PrismaClient({
    datasources: {
      db: { url: `file:${activePath}` }
    }
  })
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient()
  }
  prisma = global.prisma
}

export default prisma
