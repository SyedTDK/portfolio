import type { Metadata } from 'next'
import { Sevillana } from 'next/font/google'
import './globals.css'
import './globalicons.css'

const sevillana = Sevillana({
  subsets: ['latin'],
  weight: '400'
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
    <html lang="en">
        <body className={sevillana.className}>{children}</body>
      </html>
  )
}
