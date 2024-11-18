import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Navbar } from '@/components/ui/navbar'
import { HelpMenu } from '@/components/ui/help-menu'
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
const aerisFont = localFont({
  src: './fonts/Aeris.woff',
  variable: '--font-aeris',
})

export const metadata: Metadata = {
  title: 'Aeris - Your Quantum Sass Companion',
  description:
    'Meet Aeris, your brilliantly witty AI companion with a dash of quantum sass',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${aerisFont.variable} font-sans antialiased min-h-screen flex flex-col dark`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <HelpMenu />
      </body>
    </html>
  )
}
