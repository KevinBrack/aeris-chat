import { Card, CardContent, CardHeader } from '@/components/ui/card'

export default async function Home() {
  return (
    <main className="h-[calc(100vh-57px)]">
      {/* Hero section */}
      <div className="flex items-center justify-center h-full p-4">
        <Card className="max-w-2xl w-full">
          <CardHeader>
            <h1 className="text-6xl text-center">
              <span className="font-sans">Meet</span>{' '}
              <span className="font-aeris text-8xl bg-gradient-to-r from-[#FF79C6] to-[#BD93F9] bg-clip-text text-transparent">
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
