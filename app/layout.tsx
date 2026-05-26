import type { Metadata } from 'next'
import './globals.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import GSAPAnimations from './components/GSAPAnimations'

export const metadata: Metadata = {
  title: "Baker's Inn | Simbisa Brands",
  description: "Baker's Inn brand page for Simbisa Brands.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Nav />
        <main>{children}</main>
        <Footer />
        <GSAPAnimations />
      </body>
    </html>
  )
}
