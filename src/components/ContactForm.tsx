'use client'

import { useState, FormEvent } from 'react'

// ─────────────────────────────────────────────────────────────────────────────
// After claiming your Formspree form (see README or the link Waris sent you),
// paste your endpoint here — it looks like: https://formspree.io/f/abcd1234
// ─────────────────────────────────────────────────────────────────────────────
const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? ''

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!FORMSPREE_ENDPOINT) {
      console.warn('Formspree endpoint not set — set NEXT_PUBLIC_FORMSPREE_ENDPOINT in .env.local')
      return
    }
    setStatus('submitting')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(e.currentTarget),
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        ;(e.target as HTMLFormElement).reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-muted-blue/10 border border-muted-blue/30 rounded-sm p-10 text-center">
        <svg className="w-10 h-10 text-gold mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="font-serif text-xl text-slate-blue mb-2">Message received.</p>
        <p className="font-sans text-near-black/60 text-sm">
          Michael will be in touch within one business day.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="name" className="block font-sans text-sm font-medium text-near-black mb-1.5">
          Name <span className="text-gold" aria-hidden="true">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          disabled={status === 'submitting'}
          className="w-full border border-muted-blue/50 rounded-sm px-4 py-2.5 font-sans text-near-black bg-base
                     focus:outline-none focus:border-slate-blue focus:ring-1 focus:ring-slate-blue
                     disabled:opacity-50"
        />
      </div>

      <div>
        <label htmlFor="email" className="block font-sans text-sm font-medium text-near-black mb-1.5">
          Email <span className="text-gold" aria-hidden="true">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          disabled={status === 'submitting'}
          className="w-full border border-muted-blue/50 rounded-sm px-4 py-2.5 font-sans text-near-black bg-base
                     focus:outline-none focus:border-slate-blue focus:ring-1 focus:ring-slate-blue
                     disabled:opacity-50"
        />
      </div>

      <div>
        <label htmlFor="message" className="block font-sans text-sm font-medium text-near-black mb-1.5">
          What would you like to talk about?{' '}
          <span className="text-near-black/40">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          disabled={status === 'submitting'}
          className="w-full border border-muted-blue/50 rounded-sm px-4 py-2.5 font-sans text-near-black bg-base
                     focus:outline-none focus:border-slate-blue focus:ring-1 focus:ring-slate-blue
                     resize-none disabled:opacity-50"
        />
      </div>

      {status === 'error' && (
        <p className="font-sans text-sm text-red-600" role="alert">
          Something went wrong. Please try again or email michael.vitulano@gmail.com directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-primary w-full text-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Sending…' : 'Request my consultation'}
      </button>

      <p className="font-sans text-xs text-near-black/50 leading-relaxed">
        This form collects your name and email only. Please don&apos;t share medical or sensitive personal details here.
      </p>
    </form>
  )
}
