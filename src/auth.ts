import NextAuth from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { prisma } from '@/lib/db'
import Google from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'

const isDev = process.env.NODE_ENV !== 'production'

const mockUser = {
  id: 'mock-id',
  name: 'Kevin Brack',
  email: 'brackkevin@gmail.com',
  image: 'https://avatars.githubusercontent.com/u/13532991',
  emailVerified: new Date(),
  accounts: [
    {
      id: 'mock-account-id',
      userId: 'mock-id',
      type: 'oauth',
      provider: 'google',
      providerAccountId: 'mock-google-id',
      refresh_token: 'mock-refresh-token',
      access_token: 'mock-access-token',
      expires_at: Math.floor(Date.now() / 1000) + 3600,
      token_type: 'Bearer',
      scope: 'openid profile email',
      id_token: 'mock-id-token',
      session_state: 'mock-session-state'
    }
  ],
  sessions: [
    {
      id: 'mock-session-id',
      sessionToken: 'mock-session-token',
      userId: 'mock-id',
      expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // 30 days from now
    }
  ]
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: isDev
    ? [
        CredentialsProvider({
          id: 'mock-login',
          name: 'Mock Login',
          credentials: {},
          async authorize() {
            return mockUser
          },
        }),
      ]
    : [
        Google({
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
      ],
  pages: {
    signIn: '/',
  },
  session: {
    strategy: isDev ? 'jwt' : 'database',
  },
  callbacks: {
    async session({ session, token }) {
      if (isDev && token) {
        session.user = mockUser
      } else if (session.user) {
        session.user.id = token.sub as string
      }
      return session
    },
    async redirect({ url, baseUrl }) {
      if (url === baseUrl) return `${baseUrl}/chat`
      return url
    },
  },
})
