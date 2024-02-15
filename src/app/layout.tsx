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
        <footer className="bg-gray-800 rounded-lg shadow m-4">
          <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm sm:text-center text-gray-400">© 2023 WellBeing™. All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-400 sm:mt-0">
              <li>
                  <a href="#" className="hover:underline me-4 md:me-6">About</a>
              </li>
              <li>
                  <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
              </li>
              <li>
                  <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
              </li>
              <li>
                  <a href="#" className="hover:underline">Contact</a>
              </li>
          </ul>
          </div>
      </footer>
      </body>
    </html>
  )
}
