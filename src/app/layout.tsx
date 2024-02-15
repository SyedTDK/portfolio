import type { Metadata } from 'next'
import { Playfair_Display } from 'next/font/google'
import './globals.css'
import './globalicons.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Syed Faizullah',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={'${playfair.variable}'}>
      <body >
        {children}
      </body>
    </html>
  )
}
