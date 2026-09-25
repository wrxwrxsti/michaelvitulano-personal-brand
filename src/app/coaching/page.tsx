import type { Metadata } from 'next'
import Link from 'next/link'
import CalButton from '@/components/CalButton'

export const metadata: Metadata = {
  title: 'Executive Coaching for Founders & Professionals',
  description:
    'Sharpen your focus, make better decisions, and execute consistently with structured, evidence-based coaching from a licensed psychologist. 2-month minimum engagement.',
  openGraph: {
    title: 'Executive Coaching | Dr. Michael Vitulano',
    description: 'Sharpen your focus, make better decisions, and execute consistently.',
    url: 'https://michaelvitulano.com/coaching',
  },
}

export default function CoachingPage() {
  return (
    <>
      {/* COACH-01 Hero */}
      <section className="bg-slate-blue">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <h1 className="font-serif text-4xl md:text-6xl text-base leading-tight mb-6 max-w-3xl">
            Executive coaching for founders and professionals
          </h1>
          <p className="font-sans text-lg text-base/80 leading-relaxed mb-8 max-w-xl">
            Sharpen your focus, make better decisions, and execute consistently, with structured, evidence-based coaching from a licensed psychologist.
          </p>
          <CalButton className="btn-outline-light">Book a Free Career Consultation</CalButton>
        </div>
      </section>

      {/* COACH-02 Problem framing */}
      <section className="bg-muted-blue/10">
        <div className="section-pad max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-slate-blue mb-6">
            When you&apos;re the one everyone counts on
          </h2>
          <p className="font-sans text-lg text-near-black/80 leading-relaxed">
            You&apos;re capable and driven, but lately you&apos;re overthinking decisions, starting more than you finish, or running close to burnout. The usual productivity advice doesn&apos;t touch it, because the issue isn&apos;t information. It&apos;s the patterns underneath how you work.
          </p>
        </div>
      </section>

      {/* COACH-03 What coaching is */}
      <section className="section-pad max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-slate-blue mb-6">What executive coaching is</h2>
        <p className="font-sans text-lg text-near-black/80 leading-relaxed">
          A structured, evidence-based system for founders, executives, and professionals who want clarity, focus, and decisive action. Not generic advice. We work on the specific behavioral patterns and systems that drive how you perform, using the same psychological tools I use clinically, applied to your work.
        </p>
      </section>

      {/* COACH-04 Focus areas */}
      <section className="bg-muted-blue/10">
        <div className="section-pad max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-slate-blue mb-8">What we focus on</h2>
          <ul className="space-y-4">
            {[
              'Understanding your behavioral patterns and self-limiting beliefs',
              'Building organizational systems and strategies that fit how you actually operate',
              'Strengthening leadership and performance at work',
            ].map((item) => (
              <li key={item} className="flex gap-3 items-start">
                <svg className="w-5 h-5 text-gold flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-sans text-near-black/80 leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* COACH-05 Format */}
      <section className="section-pad max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-slate-blue mb-8">How it works</h2>
        <ul className="space-y-4">
          {[
            '360 professional feedback: structured input from colleagues, direct reports, partners, and where relevant, your spouse',
            'One to two 1:1 coaching sessions per month',
            'A personalized action plan emailed after every session',
            'Direct call/text access between sessions',
            'A written professional development plan you keep',
          ].map((item) => (
            <li key={item} className="flex gap-3 items-start">
              <svg className="w-5 h-5 text-gold flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-sans text-near-black/80 leading-snug">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* COACH-06 Outcomes */}
      <section className="bg-slate-blue">
        <div className="section-pad max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-base mb-8">What you get out of it</h2>
          <ul className="space-y-4">
            {[
              'Increased productivity',
              'Career clarity, captured in a professional development plan',
              'Better decisions, made faster',
              'Systems that make consistent follow-through easier',
              'Less time lost to overthinking and procrastination',
            ].map((item) => (
              <li key={item} className="flex gap-3 items-start">
                <svg className="w-5 h-5 text-gold flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-sans text-base leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* COACH-07 Who it's for */}
      <section className="section-pad max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-slate-blue mb-6">Who this is for</h2>
        <p className="font-sans text-lg text-near-black/80 leading-relaxed">
          Founders, executives, and high-performing professionals, whether you&apos;re leading a startup or operating inside a large organization, who want to perform at their best without burning out.
        </p>
      </section>

      {/* COACH-08 Engagement + investment */}
      <section className="bg-muted-blue/10">
        <div className="section-pad max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-slate-blue mb-8">Engagement &amp; investment</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-base border border-muted-blue/30 p-6 rounded-sm">
              <p className="font-sans text-sm text-muted-blue uppercase tracking-widest mb-2">Length</p>
              <p className="font-serif text-2xl text-slate-blue">2-month minimum</p>
            </div>
            <div className="bg-base border border-muted-blue/30 p-6 rounded-sm">
              <p className="font-sans text-sm text-muted-blue uppercase tracking-widest mb-2">Investment</p>
              <p className="font-serif text-2xl text-slate-blue">$3,000 minimum</p>
              <p className="font-sans text-sm text-near-black/60 mt-1">($1,500 per month)</p>
            </div>
          </div>
          <p className="font-sans text-sm text-near-black/60 mt-4">
            Contracts depend on your goals, level of support, and scope of the work.
          </p>
        </div>
      </section>

      {/* COACH-09 Links to SEO pages */}
      <section className="section-pad max-w-3xl mx-auto">
        <h2 className="font-serif text-2xl text-slate-blue mb-6">Explore by focus area</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { href: '/business-coaching-for-professionals', label: 'Business Coaching for Professionals' },
            { href: '/executive-functioning-adhd', label: 'Executive Functioning Skills to Overcome ADHD' },
            { href: '/career-transition-coaching', label: 'Career Transition Coaching' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block bg-muted-blue/10 border border-muted-blue/30 p-5 rounded-sm hover:border-gold hover:bg-gold/5 transition-colors font-sans text-near-black font-medium leading-snug"
            >
              {link.label} →
            </Link>
          ))}
        </div>
      </section>

      {/* COACH-10 CTA band */}
      <section className="bg-gold">
        <div className="section-pad text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Get your mental edge back.</h2>
          <p className="font-sans text-white/90 text-lg mb-8 max-w-xl mx-auto">
            Book a free career consultation and we&apos;ll map out where you&apos;re stuck and how coaching can help.
          </p>
          <CalButton className="inline-block bg-white text-gold font-sans font-semibold px-8 py-3 rounded-sm hover:bg-base transition-colors">Book a Free Career Consultation</CalButton>
        </div>
      </section>
    </>
  )
}
