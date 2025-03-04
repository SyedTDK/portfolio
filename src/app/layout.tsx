import type { Metadata } from 'next'
import './globals.css'
import './globalicons.css'
import { inter } from './fonts'
import StarsBackground from './components/StarsBackground'



 
export const metadata: Metadata = {
  title: 'Syed Faizullah',
}

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" className={inter.className}>
//       <body>{children}</body>
//     </html>
//   )
// }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="relative">
        <StarsBackground />
        {children}
      </body>
    </html>
  );
}