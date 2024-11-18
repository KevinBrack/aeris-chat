import { Button } from '@/components/ui/button'
import { auth, signOut } from '@/auth'
import { redirect } from 'next/navigation'

export default async function ChatPage() {
  const session = await auth()

  if (!session?.user) {
    redirect('/')
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header with user info and sign out */}
      <header className="fixed w-full p-4 z-10 bg-background/50 backdrop-blur-sm border-b border-border">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <h1 className="text-xl font-bold text-primary">Aeris Chat</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              {session.user.image && (
                <img
                  src={session.user.image}
                  alt={session.user.name ?? 'User'}
                  className="w-8 h-8 rounded-full"
                />
              )}
              <span className="text-sm text-muted-foreground">
                {session.user.name}
              </span>
            </div>
            <form
              action={async () => {
                'use server'
                await signOut()
              }}
            >
              <Button
                variant="outline"
                size="sm"
                className="font-medium border-secondary hover:border-secondary hover:bg-secondary/10 text-secondary"
              >
                Sign Out
              </Button>
            </form>
          </div>
        </div>
      </header>

      {/* Chat content */}
      <div className="pt-20 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-muted-foreground">Chat interface coming soon...</p>
        </div>
      </div>
    </main>
  )
}
