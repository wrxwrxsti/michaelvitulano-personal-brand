'use client'

import { useEffect, useState } from 'react'

const CHOICES = [
  {
    link: 'michaelvitulano/coaching-consultation',
    emoji: '💼',
    label: 'Coaching',
    sub: 'Focus, decisions & performance',
  },
  {
    link: 'michaelvitulano/therapy',
    emoji: '🌿',
    label: 'Therapy',
    sub: 'Anxiety, burnout, ADHD & mood',
  },
]

export default function BookingModal() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const show = () => setOpen(true)
    window.addEventListener('open-booking-modal', show)
    return () => window.removeEventListener('open-booking-modal', show)
  }, [])

  // Trap focus inside modal when open
  useEffect(() => {
    if (!open) return
    const prev = document.activeElement as HTMLElement | null
    return () => { prev?.focus() }
  }, [open])

  function close() { setOpen(false) }

  function pick(calLink: string) {
    close()
    setTimeout(() => {
      const cal = (window as any).Cal
      if (cal) {
        try {
          cal('modal', { calLink, config: { layout: 'month_view' } })
          return
        } catch (_) {}
      }
      // Fallback: new tab
      window.open(`https://cal.com/${calLink}`, '_blank', 'noopener,noreferrer')
    }, 120)
  }

  if (!open) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="bm-title"
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-near-black/50 backdrop-blur-sm"
        onClick={close}
        aria-hidden="true"
      />

      {/* Card */}
      <div className="relative bg-base rounded-sm shadow-2xl max-w-md w-full p-8 animate-[fadeIn_0.15s_ease]">
        {/* Close */}
        <button
          onClick={close}
          aria-label="Close booking modal"
          className="absolute top-4 right-4 text-muted-blue hover:text-slate-blue transition-colors p-1"
        >
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <h2 id="bm-title" className="font-serif text-2xl text-slate-blue mb-2">
          What are you looking for?
        </h2>
        <p className="font-sans text-sm text-near-black/60 mb-8">
          Pick the right fit — we&apos;ll confirm everything on the call.
        </p>

        <div className="grid grid-cols-2 gap-4">
          {CHOICES.map(({ link, emoji, label, sub }) => (
            <button
              key={link}
              onClick={() => pick(link)}
              className="group flex flex-col gap-3 p-6 border-2 border-muted-blue/30 rounded-sm
                         hover:border-gold hover:bg-gold/5 active:scale-[0.98]
                         transition-all text-left cursor-pointer"
            >
              <span className="text-2xl" aria-hidden="true">{emoji}</span>
              <span className="font-serif text-lg text-slate-blue group-hover:text-gold transition-colors leading-tight">
                {label}
              </span>
              <span className="font-sans text-xs text-near-black/60 leading-snug">{sub}</span>
            </button>
          ))}
        </div>

        <p className="font-sans text-xs text-near-black/40 text-center mt-6">
          Not sure? Pick either — we&apos;ll sort out the right fit on the call.
        </p>
      </div>
    </div>
  )
}
