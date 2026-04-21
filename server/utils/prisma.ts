import { PrismaClient } from '@prisma/client'
import fs from 'fs'
import path from 'path'

let prisma: PrismaClient

if (process.env.NODE_ENV === 'production') {
  const tmpDbPath = path.join('/tmp', 'dev.db')
  
  // Lambda unpacks files unpredictably. Search all possible mount locations:
  const possiblePaths = [
    path.join(process.cwd(), 'prisma', 'dev.db'),
    path.join(process.cwd(), 'dev.db')
  ]

  const foundPath = possiblePaths.find(p => fs.existsSync(p))

  try {
    // Netlify's serverless environment is completely READ-ONLY. 
    // SQLite crashes instantly because it cannot write its WAL logging file.
    // We MUST copy it to the only writable lambda directory: /tmp
    if (foundPath && !fs.existsSync(tmpDbPath)) {
      console.log('Copying SQLite DB to writable temporary storage: ' + tmpDbPath)
      fs.copyFileSync(foundPath, tmpDbPath)
    }
  } catch (e) {
    console.error("Failed to copy DB to /tmp", e)
  }

  // Connect cleanly to the guaranteed read/writable file
  const activePath = fs.existsSync(tmpDbPath) ? tmpDbPath : (foundPath || 'dev.db')
  
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
