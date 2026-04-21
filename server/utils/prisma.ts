import { PrismaClient } from '@prisma/client'

let prisma: PrismaClient

import path from 'path'

if (process.env.NODE_ENV === 'production') {
  const dbPath = process.env.NETLIFY ? path.join(process.cwd(), 'prisma', 'dev.db') : undefined;
  
  prisma = new PrismaClient(dbPath ? {
    datasources: {
      db: { url: `file:${dbPath}` }
    }
  } : undefined)
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient()
  }
  prisma = global.prisma
}

export default prisma
