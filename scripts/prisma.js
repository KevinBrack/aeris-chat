const { execSync } = require('child_process')
const path = require('path')
require('dotenv').config({ path: path.join(process.cwd(), '.env.local') })

// Get the Prisma command from process arguments
const prismaCommand = process.argv.slice(2).join(' ')

try {
  // Execute the Prisma command with environment variables
  execSync(`npx prisma ${prismaCommand}`, {
    stdio: 'inherit',
    env: process.env,
  })
} catch (error) {
  process.exit(1)
}
