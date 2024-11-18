import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { auth, signIn, signOut } from '@/auth'
import Link from 'next/link'

export default async function Home() {
  const session = await auth()

  return (
    <main className="min-h-screen bg-background">
      {/* Header with auth buttons */}
      <header className="fixed w-full p-4 z-10">
        <div className="flex justify-end max-w-7xl mx-auto gap-4">
          {session?.user ? (
            <>
              <Link href="/chat">
                <Button
                  variant="outline"
                  size="lg"
                  className="font-medium border-primary hover:border-primary hover:bg-primary/10 text-primary"
                >
                  Go to Chat
                </Button>
              </Link>
              <form
                action={async () => {
                  'use server'
                  await signOut()
                }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="font-medium border-secondary hover:border-secondary hover:bg-secondary/10 text-secondary"
                >
                  Sign Out
                </Button>
              </form>
            </>
          ) : (
            <form
              action={async () => {
                'use server'
                await signIn('google')
              }}
            >
              <Button
                variant="outline"
                size="lg"
                className="font-medium border-secondary hover:border-secondary hover:bg-secondary/10 text-secondary"
              >
                Sign in with Google
              </Button>
            </form>
          )}
        </div>
      </header>

      {/* Hero section */}
      <div className="flex items-center justify-center min-h-screen p-4">
        <Card className="bg-background/50 border-primary/20 backdrop-blur-sm max-w-2xl w-full">
          <CardHeader>
            <h1 className="text-6xl font-bold text-center">
              Meet{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Aeris
              </span>
            </h1>
          </CardHeader>
          <CardContent>
            <p className="text-xl text-muted-foreground text-center">
              Your brilliantly witty AI companion with a dash of quantum sass
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
