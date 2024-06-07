import type { Metadata } from 'next'
import './globals.css'
import './globalicons.css'
import { inter } from './fonts'



 
export const metadata: Metadata = {
  title: 'Syed Faizullah',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}
