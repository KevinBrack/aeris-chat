import { Button } from '@/components/ui/button'
import { auth, signIn } from '@/auth'
import Link from 'next/link'
import { UserMenu } from '@/components/ui/user-menu'

export async function Navbar() {
  const session = await auth()

  return (
    <header className="sticky top-0 w-full p-4 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <h1 className="text-xl font-bold text-primary">Aeris Chat</h1>
        </Link>

        <div className="flex items-center gap-4">
          {session?.user ? (
            <UserMenu user={session.user} />
          ) : (
            <form
              action={async () => {
                'use server'
                await signIn(process.env.NODE_ENV !== 'production' ? 'mock-login' : 'google')
              }}
            >
              <Button
                variant="outline"
                size="sm"
                className="font-medium border-border hover:border-secondary hover:bg-secondary/10 text-secondary"
              >
                Sign in
              </Button>
            </form>
          )}
        </div>
      </div>
    </header>
  )
}
