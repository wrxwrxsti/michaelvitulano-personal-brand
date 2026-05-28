import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Dr. Michael Vitulano | Psychologist & Executive Coach',
    template: '%s | Dr. Michael Vitulano',
  },
  description:
    'Evidence-based therapy and coaching for people who are ready to move from insight to action. Triple-state licensed psychologist specializing in ADHD, executive functioning, and business performance.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Dr. Michael Vitulano',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
