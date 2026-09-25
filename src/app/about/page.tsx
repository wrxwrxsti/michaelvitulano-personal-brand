import type { Metadata } from 'next'
import Image from 'next/image'
import CalButton from '@/components/CalButton'

export const metadata: Metadata = {
  title: 'About Dr. Michael Vitulano | Psychologist & Executive Coach',
  description:
    'A psychologist and executive coach helping people think clearly, act decisively, and follow through. PhD from University of Tennessee, residency at UCLA, fellowship at Seattle Children\'s Hospital.',
  openGraph: {
    title: 'About Dr. Michael Vitulano',
    description: 'Hi, I\'m Dr. Michael Vitulano — a psychologist and executive coach.',
    url: 'https://michaelvitulano.com/about',
  },
}

const credentials = [
  'Triple-state licensed psychologist: CT (PSY #003957), WA (PY #60607324), CO (PSY #0006009)',
  'Authorized to practice interjurisdictional telepsychology (APIT / PSYPACT #16208) across 43 states',
  '20+ published research articles and 2 textbook chapters',
  'Fellowship in ADHD & OCD, Seattle Children\'s Hospital',
  'Residency, UCLA Ronald Reagan Medical Center',
  'PhD in Clinical Psychology, University of Tennessee',
  'MA in Psychology, University of Tennessee',
  'BA in Psychology, Wesleyan University',
]

export default function AboutPage() {
  return (
    <>
      {/* ABOUT-01 Hero */}
      <section className="bg-slate-blue">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="font-serif text-4xl md:text-6xl text-base leading-tight mb-6">
              Hi, I&apos;m Dr. Michael Vitulano.
            </h1>
            <p className="font-sans text-lg text-base/80 leading-relaxed max-w-xl">
              A psychologist and executive coach helping people think clearly, act decisively, and follow through.
            </p>
          </div>
          {/* Headshot */}
          <div className="flex-shrink-0 w-56 md:w-72 relative">
            <Image
              src="/michael-vitulano.avif"
              alt="Dr. Michael Vitulano, psychologist and executive coach"
              width={288}
              height={360}
              priority
              className="rounded-sm object-cover w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* ABOUT-02 Michael's story */}
      <section className="section-pad max-w-3xl mx-auto">
        <div className="space-y-6 font-sans text-lg text-near-black/80 leading-relaxed">
          <p>
            My work sits where psychology and performance meet. I specialize in ADHD, executive functioning (the frontal-lobe skills behind focus, planning, and follow-through), men&apos;s mental health, and business performance. My approach combines CBT and ACT to help you move from insight to action.
          </p>
          <p>
            A large focus of my work is in men&apos;s mental health, ADHD, and career development. As a business coach, I work with individual entrepreneurs, startups, and large international corporations seeking business and career clarity.
          </p>
          <p>
            My career has been shaped by a variety of experiences: academic research, travel, and competitive sports. My background as a student-athlete at Wesleyan University gave me real experience in teamwork and group dynamics. I&apos;ve also gained a great deal of cultural and experiential learning through travel, teaching, and volunteerism all over the world.
          </p>
        </div>
      </section>

      {/* ABOUT-03 Approach */}
      <section className="bg-muted-blue/10">
        <div className="section-pad max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-slate-blue mb-6">How I work</h2>
          <p className="font-sans text-lg text-near-black/80 leading-relaxed">
            I combine CBT and ACT. CBT helps you see the thinking patterns and beliefs that keep you stuck. ACT helps you take meaningful action even when motivation or certainty isn&apos;t there yet. The point isn&apos;t endless insight. It&apos;s getting you moving.
          </p>
        </div>
      </section>

      {/* ABOUT-04 Credentials */}
      <section className="section-pad max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-slate-blue mb-8">Education &amp; training</h2>
        <ul className="space-y-3">
          {credentials.map((item) => (
            <li key={item} className="flex gap-3 items-start">
              <svg className="w-5 h-5 text-gold flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-sans text-near-black/80 leading-snug">{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6">
          <a href="#" className="font-sans text-slate-blue hover:text-gold underline underline-offset-4 transition-colors">
            View selected research →
          </a>
        </p>
      </section>

      {/* ABOUT-05 Who he works with */}
      <section className="bg-slate-blue">
        <div className="section-pad max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-base mb-6">Who I work with</h2>
          <p className="font-sans text-lg text-base/80 leading-relaxed">
            Individuals, entrepreneurs, startup teams, and large international companies. The common thread isn&apos;t a job title; it&apos;s capable people who want to close the gap between what they know and what they do.
          </p>
        </div>
      </section>

      {/* ABOUT-06 CTA */}
      <section className="section-pad text-center max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-slate-blue mb-6">Let&apos;s talk.</h2>
        <CalButton className="btn-primary">Book a Free Consultation</CalButton>
      </section>
    </>
  )
}
