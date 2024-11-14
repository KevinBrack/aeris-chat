import { handlers } from '@/auth'

// NextAuth automatically handles:
// 1. OAuth flow with Google
// 2. User creation/update via Prisma adapter
// 3. Session management
// 4. Account linking
export const { GET, POST } = handlers
