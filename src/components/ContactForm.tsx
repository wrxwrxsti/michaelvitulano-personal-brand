'use client'

import { useState, FormEvent } from 'react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = data.get('name') as string
    const email = data.get('email') as string
    const message = data.get('message') as string

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}${message ? `\n\nMessage: ${message}` : ''}`
    )
    window.location.href = `mailto:michael.vitulano@gmail.com?subject=First%20Step%20to%20Success&body=${body}`
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-muted-blue/10 border border-muted-blue/30 rounded-sm p-8 text-center">
        <p className="font-serif text-xl text-slate-blue mb-2">Thanks — your email client should open.</p>
        <p className="font-sans text-near-black/60 text-sm">If it didn&apos;t, email directly: michael.vitulano@gmail.com</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="name" className="block font-sans text-sm font-medium text-near-black mb-1.5">
          Name <span aria-hidden="true" className="text-gold">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="w-full border border-muted-blue/50 rounded-sm px-4 py-2.5 font-sans text-near-black bg-base focus:outline-none focus:border-slate-blue focus:ring-1 focus:ring-slate-blue"
        />
      </div>

      <div>
        <label htmlFor="email" className="block font-sans text-sm font-medium text-near-black mb-1.5">
          Email <span aria-hidden="true" className="text-gold">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full border border-muted-blue/50 rounded-sm px-4 py-2.5 font-sans text-near-black bg-base focus:outline-none focus:border-slate-blue focus:ring-1 focus:ring-slate-blue"
        />
      </div>

      <div>
        <label htmlFor="message" className="block font-sans text-sm font-medium text-near-black mb-1.5">
          What would you like to talk about? <span className="text-near-black/40">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full border border-muted-blue/50 rounded-sm px-4 py-2.5 font-sans text-near-black bg-base focus:outline-none focus:border-slate-blue focus:ring-1 focus:ring-slate-blue resize-none"
        />
      </div>

      <button type="submit" className="btn-primary w-full text-center">
        Request my consultation
      </button>

      <p className="font-sans text-xs text-near-black/50 leading-relaxed">
        This form collects your name and email only. Please don&apos;t share medical or sensitive personal details here.
      </p>
    </form>
  )
}
