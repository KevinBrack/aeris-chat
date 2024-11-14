const fs = require('fs')
const path = require('path')

// Load environment variables from .env.local
const envPath = path.join(process.cwd(), '.env.local')
require('dotenv').config({ path: envPath })

// Verify required environment variables
const requiredEnvVars = [
  // Database URLs
  'DATABASE_URL',
  'DATABASE_URL_UNPOOLED',

  // Postgres Connection Details
  'PGDATABASE',
  'PGHOST',
  'PGHOST_UNPOOLED',
  'PGPASSWORD',
  'PGUSER',

  // Vercel Postgres Configuration
  'POSTGRES_DATABASE',
  'POSTGRES_HOST',
  'POSTGRES_PASSWORD',
  'POSTGRES_PRISMA_URL',
  'POSTGRES_URL',
  'POSTGRES_URL_NON_POOLING',
  'POSTGRES_URL_NO_SSL',
  'POSTGRES_USER',
]

const missingVars = requiredEnvVars.filter((varName) => !process.env[varName])
if (missingVars.length > 0) {
  console.error(
    'Error: Missing required environment variables:',
    missingVars.join(', ')
  )
  console.error('Please ensure you have run: vercel env pull .env.local')
  process.exit(1)
}

console.log('Database environment verified!')
