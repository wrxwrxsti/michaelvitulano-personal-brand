import type { Metadata } from 'next'
import CalButton from '@/components/CalButton'

export const metadata: Metadata = {
  title: 'Online Anxiety Therapy | Dr. Michael Vitulano',
  description:
    'Evidence-based therapy for anxiety, from the comfort of home, with a licensed psychologist. In-network with United Healthcare, Medicaid CT, and Lyra Health.',
  openGraph: {
    title: 'Online Anxiety Therapy',
    description: 'Evidence-based therapy for anxiety, from the comfort of home.',
    url: 'https://michaelvitulano.com/anxiety-therapy-online',
  },
}

export default function AnxietyTherapyPage() {
  return (
    <>
      <section className="bg-slate-blue">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <h1 className="font-serif text-4xl md:text-5xl text-base leading-tight mb-6 max-w-3xl">
            Online Anxiety Therapy
          </h1>
          <p className="font-sans text-lg text-base/80 leading-relaxed max-w-xl mb-8">
            Evidence-based therapy for anxiety, from the comfort of home, with a licensed psychologist.
          </p>
          <CalButton className="btn-outline-light">Book a Free Consultation</CalButton>
        </div>
      </section>

      <section className="bg-muted-blue/10">
        <div className="section-pad max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-slate-blue mb-6">The problem</h2>
          <p className="font-sans text-lg text-near-black/80 leading-relaxed">
            Anxiety can show up as constant worry, racing thoughts, trouble sleeping, or a sense of being on edge you can&apos;t switch off. It&apos;s exhausting, and it&apos;s treatable.
          </p>
        </div>
      </section>

      <section className="section-pad max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl text-slate-blue mb-6">How I help</h2>
        <p className="font-sans text-lg text-near-black/80 leading-relaxed">
          I use evidence-based approaches (CBT and ACT) to help you understand what&apos;s driving the anxiety and build practical skills to manage it, so it stops running the show.
        </p>
      </section>

      <section className="bg-muted-blue/10">
        <div className="section-pad max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-slate-blue mb-6">What&apos;s included</h2>
          <p className="font-sans text-lg text-near-black/80 leading-relaxed">
            Online sessions, a free initial consultation, and a clear, supportive plan tailored to you.
          </p>
        </div>
      </section>

      <section className="section-pad max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl text-slate-blue mb-6">Credentials</h2>
        <p className="font-sans text-lg text-near-black/80 leading-relaxed">
          Triple-state licensed psychologist with 20+ published research articles, including work on anxiety and ADHD.
        </p>
      </section>

      <section className="bg-muted-blue/10">
        <div className="section-pad max-w-3xl mx-auto">
          <p className="font-sans text-sm text-near-black/60 leading-relaxed border-l-4 border-muted-blue pl-4">
            <strong className="font-medium text-slate-blue">Availability:</strong> Online therapy is for clients located in CT, WA, CO, and PSYPACT states. We&apos;ll confirm your state on the consultation.
          </p>
        </div>
      </section>

      <section className="section-pad max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl text-slate-blue mb-6">Billing</h2>
        <p className="font-sans text-lg text-near-black/80 leading-relaxed">
          In-network with United Healthcare, Medicaid of CT (Husky Health), and Lyra Health; out-of-network with a Superbill for other plans. Payment by credit card.
        </p>
      </section>

      <section className="bg-muted-blue/10">
        <div className="section-pad max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-slate-blue mb-8">Common questions</h2>
          <div className="space-y-6">
            {[
              { q: 'Do you take my insurance?', a: 'See billing above — in-network with United Healthcare, Medicaid CT (Husky Health), and Lyra Health.' },
              { q: 'What states do you serve?', a: 'CT, WA, CO + PSYPACT states.' },
              { q: 'Is online therapy as effective as in-person?', a: 'Research supports its effectiveness for many people; we\'ll discuss fit.' },
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
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Take the first step.</h2>
          <p className="font-sans text-white/90 text-lg mb-8 max-w-xl mx-auto">
            Book a free consultation. No pressure, just a conversation about what you need.
          </p>
          <CalButton className="inline-block bg-white text-gold font-sans font-semibold px-8 py-3 rounded-sm hover:bg-base transition-colors">Book a Free Consultation</CalButton>
        </div>
      </section>
    </>
  )
}
