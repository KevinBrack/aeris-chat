import { auth } from '@/auth'
import { redirect } from 'next/navigation'

export default async function ChatPage() {
  const session = await auth()

  if (!session?.user) {
    redirect('/')
  }

  return (
    <div className="pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        <p className="text-muted-foreground">Chat interface coming soon...</p>
      </div>
    </div>
  )
}
