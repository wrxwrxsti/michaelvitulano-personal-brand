import type { Metadata } from 'next'
import Link from 'next/link'
import CalButton from '@/components/CalButton'

export const metadata: Metadata = {
  title: 'Therapy | Online Therapy for Anxiety, Burnout & ADHD',
  description:
    'Evidence-based, supportive care for anxiety, burnout, ADHD, and more — online, from the comfort of home. In-network with United Healthcare, Medicaid CT, and Lyra Health.',
  openGraph: {
    title: 'Therapy | Dr. Michael Vitulano',
    description: 'Therapy that meets you where you are.',
    url: 'https://michaelvitulano.com/therapy',
  },
}

export default function TherapyPage() {
  return (
    <>
      {/* THER-01 Hero */}
      <section className="bg-slate-blue">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <h1 className="font-serif text-4xl md:text-6xl text-base leading-tight mb-6 max-w-3xl">
            Therapy that meets you where you are
          </h1>
          <p className="font-sans text-lg text-base/80 leading-relaxed mb-8 max-w-xl">
            Evidence-based, supportive care for anxiety, burnout, ADHD, and more, online, from the comfort of home.
          </p>
          <CalButton className="btn-outline-light">Book a Free Consultation</CalButton>
        </div>
      </section>

      {/* THER-02 What psychotherapy is */}
      <section className="section-pad max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-slate-blue mb-6">What is psychotherapy?</h2>
        <p className="font-sans text-lg text-near-black/80 leading-relaxed">
          Psychotherapy, sometimes called talk therapy, is a research-supported treatment for a wide range of challenges. It&apos;s a space to understand what&apos;s going on, build practical skills, and feel more like yourself again, with someone trained to help.
        </p>
      </section>

      {/* THER-03 What it helps with */}
      <section className="bg-muted-blue/10">
        <div className="section-pad max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-slate-blue mb-6">What it can help with</h2>
          <p className="font-sans text-lg text-near-black/80 leading-relaxed">
            Therapy can support many areas of life, including chronic stress and burnout, ADHD, anxiety (generalized, social, and obsessive-compulsive), and mood difficulties such as depression. On a free consultation we&apos;ll talk about what you&apos;re facing and whether we&apos;re a good fit.
          </p>
        </div>
      </section>

      {/* THER-04 How sessions work */}
      <section className="section-pad max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-slate-blue mb-6">How sessions work</h2>
        <p className="font-sans text-lg text-near-black/80 leading-relaxed">
          Everything is online, so you can meet from home or wherever you feel comfortable. We start with a free phone consultation to talk through what&apos;s going on and answer your questions, then schedule from there.
        </p>
      </section>

      {/* THER-05 Billing & insurance */}
      <section className="bg-muted-blue/10">
        <div className="section-pad max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-slate-blue mb-6">Billing &amp; insurance</h2>
          <p className="font-sans text-lg text-near-black/80 leading-relaxed">
            I&apos;m in-network with United Healthcare, Medicaid of CT (Husky Health), and Lyra Health. For all other insurances I&apos;m out-of-network: you pay per session and I provide a Superbill (an itemized invoice) you can submit for reimbursement. Payment is by credit card.
          </p>
        </div>
      </section>

      {/* THER-06 Cancellation policy */}
      <section className="section-pad max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-slate-blue mb-6">Cancellation policy</h2>
        <p className="font-sans text-lg text-near-black/80 leading-relaxed">
          Keeping appointments is part of making progress. If you need to cancel, please let me know by email at least 24 hours ahead. Cancellations with less notice are charged the full session fee (not a co-pay).
        </p>
      </section>

      {/* THER-07 Availability note */}
      <section className="bg-slate-blue">
        <div className="section-pad max-w-3xl mx-auto">
          <p className="font-sans text-lg text-base/90 leading-relaxed">
            I see therapy clients located in the states where I&apos;m licensed or authorized to practice: CT, WA, CO, and the 43 PSYPACT states. We&apos;ll confirm your location on the consultation.
          </p>
        </div>
      </section>

      {/* THER-08 Link to SEO page */}
      <section className="section-pad max-w-3xl mx-auto">
        <Link
          href="/anxiety-therapy-online"
          className="block bg-muted-blue/10 border border-muted-blue/30 p-6 rounded-sm hover:border-gold hover:bg-gold/5 transition-colors font-sans text-near-black font-medium"
        >
          Anxiety Therapy Online →
        </Link>
      </section>

      {/* THER-09 CTA */}
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
