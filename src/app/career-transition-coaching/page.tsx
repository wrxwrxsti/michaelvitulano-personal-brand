import type { Metadata } from 'next'
import CalButton from '@/components/CalButton'

export const metadata: Metadata = {
  title: 'Career Transition Coaching | Dr. Michael Vitulano',
  description:
    'Navigate a career change with clarity instead of second-guessing, with a coach trained in the psychology of decision-making. Built for mid-to-senior professionals at a crossroads.',
  openGraph: {
    title: 'Career Transition Coaching',
    description: 'Navigate a career change with clarity instead of second-guessing.',
    url: 'https://michaelvitulano.com/career-transition-coaching',
  },
}

export default function CareerTransitionPage() {
  return (
    <>
      <section className="bg-slate-blue">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <h1 className="font-serif text-4xl md:text-5xl text-base leading-tight mb-6 max-w-3xl">
            Career Transition Coaching
          </h1>
          <p className="font-sans text-lg text-base/80 leading-relaxed max-w-xl mb-8">
            Navigate a career change with clarity instead of second-guessing, with a coach trained in the psychology of decision-making. Built for mid-to-senior professionals at a crossroads.
          </p>
          <CalButton className="btn-outline-light">Book a Free Career Consultation</CalButton>
        </div>
      </section>

      <section className="bg-muted-blue/10">
        <div className="section-pad max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-slate-blue mb-6">The problem</h2>
          <p className="font-sans text-lg text-near-black/80 leading-relaxed">
            Career transitions are some of the most uncertain moments in professional life. The hard part usually isn&apos;t the logistics; it&apos;s the overthinking, fear, and decision paralysis that come with a big change.
          </p>
        </div>
      </section>

      <section className="section-pad max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl text-slate-blue mb-6">How I help</h2>
        <p className="font-sans text-lg text-near-black/80 leading-relaxed">
          We get clear on what you actually want, work through the thinking that&apos;s keeping you stuck, and build a concrete plan to move, using the same evidence-based tools I use across my practice.
        </p>
      </section>

      <section className="bg-muted-blue/10">
        <div className="section-pad max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-slate-blue mb-8">What&apos;s included</h2>
          <ul className="space-y-3">
            {[
              '1 to 2 monthly 1:1 sessions',
              'Action plans after each session',
              'Between-session access',
              'A written plan to work from',
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
        <h2 className="font-serif text-3xl text-slate-blue mb-6">Credentials</h2>
        <p className="font-sans text-lg text-near-black/80 leading-relaxed">
          Licensed psychologist and executive coach; works with mid-to-senior professionals, entrepreneurs, and corporate leaders.
        </p>
      </section>

      <section className="bg-muted-blue/10">
        <div className="section-pad max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-slate-blue mb-8">Common questions</h2>
          <div className="space-y-6">
            {[
              { q: 'Who is this for?', a: 'Mid-to-senior professionals navigating a meaningful career change.' },
              { q: 'How is this different from a career counselor?', a: 'I focus on the psychology behind your decisions and follow-through, not just job-search tactics.' },
            ].map(({ q, a }) => (
              <div key={q}>
                <p className="font-sans font-medium text-near-black mb-1">{q}</p>
                <p className="font-sans text-near-black/70">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gold">
        <div className="section-pad text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Ready to make your next move with clarity?</h2>
          <CalButton className="inline-block bg-white text-gold font-sans font-semibold px-8 py-3 rounded-sm hover:bg-base transition-colors">Book a Free Career Consultation</CalButton>
        </div>
      </section>
    </>
  )
}
