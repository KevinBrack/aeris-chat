import { UserButton } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

export default async function ChatPage() {
  const { userId } = await auth()

  if (!userId) {
    redirect('/')
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header with user button */}
      <header className="fixed w-full p-4 z-10 bg-background/50 backdrop-blur-sm border-b border-border">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <h1 className="text-xl font-bold text-primary">Aeris Chat</h1>
          <UserButton afterSignOutUrl="/" />
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
