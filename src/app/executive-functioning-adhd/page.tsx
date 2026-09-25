import type { Metadata } from 'next'
import CalButton from '@/components/CalButton'

export const metadata: Metadata = {
  title: 'Executive Functioning Skills for Adults with ADHD | Dr. Michael Vitulano',
  description:
    'Build the focus, planning, and follow-through skills that ADHD makes harder — with support from a psychologist who\'s spent his career studying and treating ADHD.',
  openGraph: {
    title: 'Executive Functioning Skills for Adults with ADHD',
    description: 'Build focus, planning, and follow-through with evidence-based ADHD support.',
    url: 'https://michaelvitulano.com/executive-functioning-adhd',
  },
}

export default function ADHDPage() {
  return (
    <>
      <section className="bg-slate-blue">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <h1 className="font-serif text-4xl md:text-5xl text-base leading-tight mb-6 max-w-3xl">
            Executive Functioning Skills for Adults with ADHD
          </h1>
          <p className="font-sans text-lg text-base/80 leading-relaxed max-w-xl mb-8">
            Build the focus, planning, and follow-through skills that ADHD makes harder, with support from a psychologist who&apos;s spent his career studying and treating ADHD.
          </p>
          <CalButton className="btn-outline-light">Book a Free Consultation</CalButton>
        </div>
      </section>

      <section className="bg-muted-blue/10">
        <div className="section-pad max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-slate-blue mb-6">The problem</h2>
          <p className="font-sans text-lg text-near-black/80 leading-relaxed">
            With ADHD, the challenge usually isn&apos;t ability or intelligence. It&apos;s executive functioning: starting tasks, organizing, managing time, and following through. That gap can quietly undermine careers and confidence.
          </p>
        </div>
      </section>

      <section className="section-pad max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl text-slate-blue mb-6">How I help</h2>
        <p className="font-sans text-lg text-near-black/80 leading-relaxed">
          We work on practical executive-functioning skills and the systems that support them, grounded in evidence-based methods (CBT and ACT) and years of clinical and research experience with ADHD.
        </p>
      </section>

      <section className="bg-muted-blue/10">
        <div className="section-pad max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-slate-blue mb-6">What&apos;s included</h2>
          <p className="font-sans text-lg text-near-black/80 leading-relaxed">
            For coaching clients: structured skill-building, systems, and accountability. For therapy clients: clinical support including ADHD assessment and diagnosis where appropriate. We&apos;ll determine the right track on your consultation.
          </p>
        </div>
      </section>

      <section className="section-pad max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl text-slate-blue mb-6">Credentials</h2>
        <p className="font-sans text-lg text-near-black/80 leading-relaxed">
          Fellowship in ADHD &amp; OCD at Seattle Children&apos;s Hospital; 20+ published research articles, many focused on ADHD; triple-state licensed psychologist.
        </p>
      </section>

      <section className="bg-muted-blue/10">
        <div className="section-pad max-w-3xl mx-auto">
          <p className="font-sans text-sm text-near-black/60 leading-relaxed border-l-4 border-muted-blue pl-4">
            <strong className="font-medium text-slate-blue">Availability note:</strong> Clinical ADHD treatment and assessment are for therapy clients located in CT, WA, CO, and PSYPACT states. Coaching is available more broadly.
          </p>
        </div>
      </section>

      <section className="section-pad max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl text-slate-blue mb-8">Common questions</h2>
        <div className="space-y-6">
          {[
            { q: 'Do you diagnose ADHD?', a: 'Yes. Michael offers ADHD assessment and diagnosis for therapy clients.' },
            { q: 'Is this coaching or therapy?', a: 'Either, depending on what you need.' },
            { q: 'Can you prescribe medication?', a: 'No, psychologists don\'t prescribe.' },
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
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Ready to build real executive skills?</h2>
          <CalButton className="inline-block bg-white text-gold font-sans font-semibold px-8 py-3 rounded-sm hover:bg-base transition-colors">Book a Free Consultation</CalButton>
        </div>
      </section>
    </>
  )
}
