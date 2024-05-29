import type { Metadata } from 'next'
import { Sevillana } from 'next/font/google'
import './globals.css'
import './globalicons.css'

const sevillana = Sevillana({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
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
    <html lang="en" className={sevillana.className}>
      <body>{children}</body>
    </html>
  )
}
