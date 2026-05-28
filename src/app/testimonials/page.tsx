import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Testimonials | Dr. Michael Vitulano',
  description:
    'Real change looks different for everyone. Here\'s what working with Dr. Michael Vitulano has meant for clients.',
  openGraph: {
    title: 'In Their Words | Dr. Michael Vitulano',
    description: 'Real change looks different for everyone.',
    url: 'https://michaelvitulano.com/testimonials',
  },
}

const CTA_HREF = 'mailto:michael.vitulano@gmail.com?subject=First%20Step%20to%20Success'

const testimonials = [
  {
    quote: 'I\'d read every productivity book out there and still couldn\'t follow through. Michael helped me see why, and build something that actually stuck.',
    attribution: 'Founder, SaaS',
  },
  {
    quote: 'For the first time, my decisions don\'t keep me up at night. I think them through and move on.',
    attribution: 'VP, finance',
  },
  {
    quote: 'He understands ADHD from the inside out. The systems we built changed how I run my day.',
    attribution: 'Entrepreneur',
  },
  {
    quote: 'Therapy with Michael felt human, never clinical. I left every session lighter and clearer.',
    attribution: 'Therapy client',
  },
  {
    quote: 'I was burning out and didn\'t even see it. Michael helped me get my edge back without running myself into the ground.',
    attribution: 'Startup operator',
  },
  {
    quote: 'Calm, direct, and genuinely on your side. Exactly what I needed.',
    attribution: 'Executive',
  },
]

export default function TestimonialsPage() {
  return (
    <>
      {/* TEST-01 Hero */}
      <section className="bg-slate-blue">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <h1 className="font-serif text-4xl md:text-6xl text-base leading-tight mb-6">
            In their words
          </h1>
          <p className="font-sans text-lg text-base/80 leading-relaxed max-w-xl">
            Real change looks different for everyone. Here&apos;s what working together has meant for some of the people I&apos;ve worked with.
          </p>
        </div>
      </section>

      {/* TEST-02 Testimonial grid */}
      <section className="section-pad-wide">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <blockquote
              key={t.quote}
              className="bg-muted-blue/10 border border-muted-blue/30 p-8 rounded-sm flex flex-col"
            >
              <p className="font-serif text-lg text-slate-blue italic leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="font-sans text-sm text-near-black/60">{t.attribution}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* TEST-05 CTA */}
      <section className="bg-gold">
        <div className="section-pad text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Want to be the next success story?</h2>
          <a href={CTA_HREF} className="inline-block bg-white text-gold font-sans font-semibold px-8 py-3 rounded-sm hover:bg-base transition-colors">
            Book a Free Consultation
          </a>
        </div>
      </section>
    </>
  )
}
