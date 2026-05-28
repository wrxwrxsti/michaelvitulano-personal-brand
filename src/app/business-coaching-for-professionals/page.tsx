import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Business Coaching for Professionals | Dr. Michael Vitulano',
  description:
    'Practical, evidence-based coaching for professionals who want to think more clearly, decide faster, and perform without burning out — led by a licensed psychologist and executive coach.',
  openGraph: {
    title: 'Business Coaching for Professionals',
    description: 'Evidence-based coaching for professionals who want to perform without burning out.',
    url: 'https://michaelvitulano.com/business-coaching-for-professionals',
  },
}

const CTA_HREF = 'mailto:michael.vitulano@gmail.com?subject=First%20Step%20to%20Success'

export default function BusinessCoachingPage() {
  return (
    <>
      <section className="bg-slate-blue">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <h1 className="font-serif text-4xl md:text-5xl text-base leading-tight mb-6 max-w-3xl">
            Business Coaching for Professionals
          </h1>
          <p className="font-sans text-lg text-base/80 leading-relaxed max-w-xl mb-8">
            Practical, evidence-based coaching for professionals who want to think more clearly, decide faster, and perform without burning out, led by a licensed psychologist and executive coach.
          </p>
          <a href={CTA_HREF} className="btn-outline-light">Book a Free Career Consultation</a>
        </div>
      </section>

      <section className="bg-muted-blue/10">
        <div className="section-pad max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-slate-blue mb-6">The problem</h2>
          <p className="font-sans text-lg text-near-black/80 leading-relaxed">
            You&apos;ve built real skills and a real career. But overthinking, inconsistent execution, or low-grade burnout are getting in the way of your best work. Generic advice hasn&apos;t moved the needle.
          </p>
        </div>
      </section>

      <section className="section-pad max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl text-slate-blue mb-6">How I help</h2>
        <p className="font-sans text-lg text-near-black/80 leading-relaxed">
          I combine clinical psychology (CBT and ACT) with executive coaching to work on the patterns underneath performance, not just the surface habits. We build systems that fit how you actually operate.
        </p>
      </section>

      <section className="bg-muted-blue/10">
        <div className="section-pad max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-slate-blue mb-8">What&apos;s included</h2>
          <ul className="space-y-3">
            {[
              '360 professional feedback',
              '1 to 2 monthly 1:1 sessions',
              'Action plans after each session',
              'Between-session call/text access',
              'A written professional development plan',
            ].map((item) => (
              <li key={item} className="flex gap-3 items-start">
                <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-sans text-near-black/80">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl text-slate-blue mb-6">Investment</h2>
        <p className="font-sans text-lg text-near-black/80 leading-relaxed">
          $3,000 minimum ($1,500 per month), 2-month minimum engagement.
        </p>
      </section>

      <section className="bg-muted-blue/10">
        <div className="section-pad max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-slate-blue mb-6">Credentials</h2>
          <p className="font-sans text-lg text-near-black/80 leading-relaxed">
            Triple-state licensed psychologist (CT, WA, CO), 20+ published research articles, fellowship at Seattle Children&apos;s Hospital and residency at UCLA.
          </p>
        </div>
      </section>

      <section className="section-pad max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl text-slate-blue mb-8">Common questions</h2>
        <div className="space-y-6">
          {[
            { q: 'Is this therapy?', a: 'No, it\'s performance coaching.' },
            { q: 'Do you work with teams and companies?', a: 'Yes, individuals, startups, and large international corporations.' },
            { q: 'How long is the engagement?', a: '2-month minimum.' },
          ].map(({ q, a }) => (
            <div key={q}>
              <p className="font-sans font-medium text-near-black mb-1">{q}</p>
              <p className="font-sans text-near-black/70">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gold">
        <div className="section-pad text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Ready to perform at your best?</h2>
          <a href={CTA_HREF} className="inline-block bg-white text-gold font-sans font-semibold px-8 py-3 rounded-sm hover:bg-base transition-colors">
            Book a Free Career Consultation
          </a>
        </div>
      </section>
    </>
  )
}
