import type { Metadata, Viewport } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import localFont from 'next/font/local'
import { Footer } from '@/components/ui/footer'
import './globals.css'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Aeris - Your Quantum Sass Companion',
  description:
    'Meet Aeris, your brilliantly witty AI companion with a dash of quantum sass',
}

export const viewport: Viewport = {
  themeColor: '#282A36',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary: 'bg-primary hover:bg-primary/90',
          footerActionLink: 'text-primary hover:text-primary/90',
          card: 'bg-background',
        },
      }}
    >
      <html lang="en" className="dark">
        <body
          className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased min-h-screen flex flex-col`}
          style={{ backgroundColor: '#282A36' }}
        >
          <main className="flex-1">{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  )
}
