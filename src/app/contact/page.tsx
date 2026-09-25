import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import CalButton from '@/components/CalButton'

export const metadata: Metadata = {
  title: 'Contact | Book a Free Consultation',
  description:
    'The first step is a free consultation. No pressure, no commitment, just a conversation. Reach Dr. Michael Vitulano by email, phone, or the form below.',
  openGraph: {
    title: 'Contact | Dr. Michael Vitulano',
    description: 'The first step is a free consultation.',
    url: 'https://michaelvitulano.com/contact',
  },
}

export default function ContactPage() {
  return (
    <>
      {/* CONT-01 Hero */}
      <section className="bg-slate-blue">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <h1 className="font-serif text-4xl md:text-6xl text-base leading-tight mb-6">
            Let&apos;s talk.
          </h1>
          <p className="font-sans text-lg text-base/80 leading-relaxed max-w-xl">
            The first step is a free consultation. No pressure, no commitment, just a conversation.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 md:px-10 py-16 md:py-24 grid md:grid-cols-2 gap-16">
        <div>
          {/* CONT-02 Scheduling CTA */}
          <h2 className="font-serif text-2xl text-slate-blue mb-4">Book your free consultation</h2>
          <CalButton className="btn-primary mb-4 inline-block">Book a Free Consultation</CalButton>
          <p className="font-sans text-sm text-near-black/60 mt-3">Prefer email? Reach me directly below.</p>

          {/* CONT-04 Direct contact */}
          <div className="mt-10">
            <h3 className="font-serif text-xl text-slate-blue mb-4">Direct contact</h3>
            <a
              href="mailto:michael.vitulano@gmail.com"
              className="flex items-center gap-3 font-sans text-near-black/80 hover:text-gold transition-colors mb-3"
            >
              <svg className="w-5 h-5 text-muted-blue flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              michael.vitulano@gmail.com
            </a>
            <a
              href="tel:12035215579"
              className="flex items-center gap-3 font-sans text-near-black/80 hover:text-gold transition-colors"
            >
              <svg className="w-5 h-5 text-muted-blue flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              1-203-521-5579
            </a>
          </div>

          {/* CONT-05 What happens next */}
          <div className="mt-10">
            <h3 className="font-serif text-xl text-slate-blue mb-6">What happens next</h3>
            <ol className="space-y-4">
              {[
                'You send your details or book a time.',
                'We have a short, free consultation call.',
                'If it\'s a fit, we schedule your first session. If not, I\'ll point you toward a better resource.',
              ].map((step, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-slate-blue text-base flex items-center justify-center font-sans text-sm font-medium">
                    {i + 1}
                  </span>
                  <span className="font-sans text-near-black/80 leading-snug pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* CONT-03 Simple form */}
        <div>
          <h2 className="font-serif text-2xl text-slate-blue mb-6">Request a consultation</h2>
          <ContactForm />
        </div>
      </div>
    </>
  )
}
