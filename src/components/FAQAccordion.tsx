'use client'

import { useState } from 'react'

const faqs = [
  {
    q: "What's the difference between coaching and therapy?",
    a: "Coaching focuses on performance, decisions, and outcomes at work. Therapy is clinical care for things like anxiety, burnout, or low mood. Some people start with one and add the other. On a free consultation we'll figure out which fits.",
  },
  {
    q: 'Do you take insurance?',
    a: "For therapy, I'm in-network with United Healthcare, Medicaid of CT (Husky Health), and Lyra Health. For other plans I'm out-of-network and provide a Superbill for reimbursement. Coaching is paid privately and isn't billed to insurance.",
  },
  {
    q: 'Is everything online?',
    a: 'Yes. All sessions are held securely online, so you can meet from home or your office.',
  },
  {
    q: 'Which states can you see therapy clients in?',
    a: "I'm licensed in CT, WA, and CO, and authorized to provide telepsychology in 43 PSYPACT states. On the consultation I'll confirm whether your state is covered.",
  },
  {
    q: 'What happens on the free consultation?',
    a: "A short, no-pressure call to talk through what's going on, answer your questions, and see if we're a good fit. No commitment.",
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-muted-blue/40">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-5 text-left font-sans font-medium text-near-black hover:text-slate-blue transition-colors"
        aria-expanded={open}
      >
        <span>{q}</span>
        <svg
          className={`w-5 h-5 flex-shrink-0 ml-4 text-slate-blue transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <p className="pb-5 font-sans text-near-black/80 leading-relaxed">{a}</p>
      )}
    </div>
  )
}

export default function FAQAccordion() {
  return (
    <div>
      {faqs.map((faq) => (
        <FAQItem key={faq.q} q={faq.q} a={faq.a} />
      ))}
    </div>
  )
}
