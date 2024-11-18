import { Button } from '@/components/ui/button'
import { auth, signIn } from '@/auth'
import Link from 'next/link'
import { UserMenu } from '@/components/ui/user-menu'

export async function Navbar() {
  const session = await auth()

  return (
    <header className="sticky top-0 w-full py-2 px-4 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <h1 className="text-5xl font-aeris text-primary">Aeris</h1>
        </Link>

        <div className="flex items-center gap-4">
          {session?.user ? (
            <UserMenu user={session.user} />
          ) : (
            <form
              action={async () => {
                'use server'
                await signIn(
                  process.env.NODE_ENV !== 'production'
                    ? 'mock-login'
                    : 'google'
                )
              }}
            >
              <Button>Sign in</Button>
            </form>
          )}
        </div>
      </div>
    </header>
  )
}
