'use client'

import Link from 'next/link'
import { useState } from 'react'
import CalButton from '@/components/CalButton'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/coaching', label: 'Coaching' },
  { href: '/therapy', label: 'Therapy' },
  { href: '/philosophy', label: 'Philosophy' },
  { href: '/podcast', label: 'Podcast' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-base/95 backdrop-blur border-b border-muted-blue/30">
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-slate-blue text-xl font-semibold tracking-tight hover:text-gold transition-colors"
          aria-label="Dr. Michael Vitulano – Home"
        >
          Dr. Michael Vitulano
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Primary navigation">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-sans text-near-black hover:text-gold transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <CalButton className="btn-primary text-sm" />
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-slate-blue"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="8" x2="21" y2="8" /><line x1="3" y1="16" x2="21" y2="16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          className="md:hidden bg-base border-t border-muted-blue/30 px-6 py-4 flex flex-col gap-4"
          aria-label="Mobile navigation"
        >
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="text-base font-sans text-near-black hover:text-gold transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <CalButton className="btn-primary text-center mt-2 w-full" />
        </nav>
      )}
    </header>
  )
}
