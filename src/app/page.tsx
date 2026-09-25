import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import FAQAccordion from '@/components/FAQAccordion'
import CalButton from '@/components/CalButton'

export const metadata: Metadata = {
  title: 'Dr. Michael Vitulano | Psychologist & Executive Coach',
  description:
    'Stop overthinking. Start moving forward. Dr. Michael Vitulano is a triple-state licensed psychologist and executive coach helping people gain focus, take action, and build momentum.',
  openGraph: {
    title: 'Dr. Michael Vitulano | Psychologist & Executive Coach',
    description: 'Stop overthinking. Start moving forward.',
    url: 'https://michaelvitulano.com',
  },
}

export default function HomePage() {
  return (
    <>
      {/* HOME-01 Hero */}
      <section className="bg-base">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-32 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="font-serif text-4xl md:text-6xl text-slate-blue leading-tight mb-6">
              Stop overthinking.<br />Start moving forward.
            </h1>
            <p className="font-sans text-lg text-near-black/80 leading-relaxed mb-8 max-w-xl">
              I&apos;m Dr. Michael Vitulano, a psychologist and executive coach. I help people gain focus, take action, and build momentum, in their careers and their mental health. The goal is simple: move from insight to action.
            </p>
            <div className="flex flex-wrap gap-4">
              <CalButton className="btn-primary">Book a Free Consultation</CalButton>
              <Link href="/coaching" className="btn-secondary">See how I can help</Link>
            </div>
          </div>
          {/* Headshot */}
          <div className="flex-shrink-0 w-64 md:w-80 relative">
            <Image
              src="/michael-vitulano.avif"
              alt="Dr. Michael Vitulano, psychologist and executive coach"
              width={320}
              height={400}
              priority
              className="rounded-sm object-cover w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* HOME-02 Trust bar */}
      <section className="bg-slate-blue" aria-label="Credentials and licensing">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            'Triple-state licensed psychologist (CT, WA, CO)',
            'Telepsychology across 43 PSYPACT states',
            '20+ published research articles',
            'CBT + ACT trained',
          ].map((item) => (
            <div key={item}>
              <p className="text-sm font-sans text-base leading-snug">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOME-03 Two-path split */}
      <section className="section-pad-wide">
        <h2 className="font-serif text-3xl md:text-4xl text-slate-blue text-center mb-12">Two ways to work together</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-muted-blue/10 border border-muted-blue/30 p-8 rounded-sm flex flex-col">
            <h3 className="font-serif text-2xl text-slate-blue mb-4">Coaching</h3>
            <p className="font-sans text-near-black/80 leading-relaxed flex-1 mb-6">
              For founders, executives, and professionals who want sharper focus, better decisions, and consistent execution at work.
            </p>
            <Link href="/coaching" className="btn-secondary self-start">Explore Coaching</Link>
          </div>
          <div className="bg-muted-blue/10 border border-muted-blue/30 p-8 rounded-sm flex flex-col">
            <h3 className="font-serif text-2xl text-slate-blue mb-4">Therapy</h3>
            <p className="font-sans text-near-black/80 leading-relaxed flex-1 mb-6">
              For people working through anxiety, burnout, ADHD, or low mood, with evidence-based, supportive care from home.
            </p>
            <Link href="/therapy" className="btn-secondary self-start">Explore Therapy</Link>
          </div>
        </div>
      </section>

      {/* HOME-04 Who this is for */}
      <section className="bg-muted-blue/10">
        <div className="section-pad">
          <h2 className="font-serif text-3xl md:text-4xl text-slate-blue mb-6">Does this sound familiar?</h2>
          <p className="font-sans text-lg text-near-black/80 leading-relaxed max-w-2xl">
            You&apos;re successful on paper. You hit deadlines, lead teams, carry responsibility. But privately, you&apos;re stuck, overthinking decisions, putting things off, running on empty. You know what you should do. Actually doing it is the hard part. That gap is exactly what this work addresses.
          </p>
        </div>
      </section>

      {/* HOME-05 Approach snapshot */}
      <section className="section-pad">
        <h2 className="font-serif text-3xl md:text-4xl text-slate-blue mb-6">Insight to action</h2>
        <p className="font-sans text-lg text-near-black/80 leading-relaxed max-w-2xl mb-6">
          My approach combines two evidence-based methods: CBT, to understand the thinking patterns that keep you stuck, and ACT, to help you act on what matters even when it&apos;s uncomfortable. Less analysis for its own sake. More momentum.
        </p>
        <Link href="/philosophy" className="font-sans text-slate-blue hover:text-gold underline underline-offset-4 transition-colors">
          More about my approach →
        </Link>
      </section>

      {/* HOME-06 What changes */}
      <section className="bg-slate-blue">
        <div className="section-pad">
          <h2 className="font-serif text-3xl md:text-4xl text-base mb-10">What changes</h2>
          <ul className="grid md:grid-cols-2 gap-5">
            {[
              'Clearer thinking when the pressure is on',
              'Faster decisions, with less second-guessing',
              'Systems that make follow-through easier',
              'More steadiness in how you handle stress',
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

      {/* HOME-07 Mini social proof */}
      <section className="section-pad-wide" aria-label="Testimonials">
        <div className="grid md:grid-cols-2 gap-8">
          <blockquote className="bg-muted-blue/10 border border-muted-blue/30 p-8 rounded-sm">
            <p className="font-serif text-xl text-slate-blue italic leading-relaxed mb-4">
              &ldquo;I came in stuck on the same decision for months. Within a few sessions I had a way to think it through, and actually made the call.&rdquo;
            </p>
            <footer className="font-sans text-sm text-near-black/60">Founder, tech startup</footer>
          </blockquote>
          <blockquote className="bg-muted-blue/10 border border-muted-blue/30 p-8 rounded-sm">
            <p className="font-serif text-xl text-slate-blue italic leading-relaxed mb-4">
              &ldquo;Michael gets how high performers think. He didn&apos;t hand me generic advice, he helped me build something that fit how I actually work.&rdquo;
            </p>
            <footer className="font-sans text-sm text-near-black/60">Senior executive</footer>
          </blockquote>
        </div>
      </section>

      {/* HOME-08 FAQ */}
      <section className="bg-muted-blue/10">
        <div className="section-pad">
          <h2 className="font-serif text-3xl md:text-4xl text-slate-blue mb-10">Frequently asked questions</h2>
          <div className="max-w-2xl">
            <FAQAccordion />
          </div>
        </div>
      </section>

      {/* HOME-09 Final CTA band */}
      <section className="bg-gold">
        <div className="section-pad text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Ready to stop overthinking and start moving?</h2>
          <p className="font-sans text-white/90 text-lg mb-8 max-w-xl mx-auto">
            Book a free consultation. We&apos;ll talk through where you&apos;re stuck and whether coaching or therapy is the right next step.
          </p>
          <CalButton className="inline-block bg-white text-gold font-sans font-semibold px-8 py-3 rounded-sm hover:bg-base transition-colors">Book a Free Consultation</CalButton>
        </div>
      </section>
    </>
  )
}
