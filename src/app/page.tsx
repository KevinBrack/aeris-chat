import { Card, CardContent, CardHeader } from '@/components/ui/card'

export default async function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero section */}
      <div className="flex items-center justify-center min-h-screen p-4">
        <Card className="max-w-2xl w-full">
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
