import type { Metadata } from 'next'
import CalButton from '@/components/CalButton'

export const metadata: Metadata = {
  title: 'Philosophy | The Life Force Framework',
  description:
    'A simple framework for building drive, purpose, and momentum. Action comes before certainty — the philosophy behind both coaching and therapy with Dr. Michael Vitulano.',
  openGraph: {
    title: 'Philosophy | Dr. Michael Vitulano',
    description: 'You don\'t have to wait for motivation to start.',
    url: 'https://michaelvitulano.com/philosophy',
  },
}

const pyramidLayers = [
  {
    label: 'Purpose',
    sub: 'The direction it all points toward',
    bg: 'bg-gold',
    text: 'text-white',
    width: 'max-w-xs',
  },
  {
    label: 'Self',
    sub: 'Self-compassion, reflection, self-awareness',
    bg: 'bg-slate-blue',
    text: 'text-base',
    width: 'max-w-sm',
  },
  {
    label: 'Others',
    sub: 'Friendship, community, intimacy',
    bg: 'bg-muted-blue',
    text: 'text-slate-blue',
    width: 'max-w-md',
  },
  {
    label: 'Body',
    sub: 'Sleep, movement, diet',
    bg: 'bg-muted-blue/40',
    text: 'text-slate-blue',
    width: 'max-w-lg',
  },
]

export default function PhilosophyPage() {
  return (
    <>
      {/* PHIL-01 Hero */}
      <section className="bg-slate-blue">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <h1 className="font-serif text-4xl md:text-6xl text-base leading-tight mb-6 max-w-3xl">
            You don&apos;t have to wait for motivation to start.
          </h1>
          <p className="font-sans text-lg text-base/80 leading-relaxed max-w-xl">
            A simple framework I use with clients for building drive, purpose, and momentum, whether or not you&apos;re in therapy.
          </p>
        </div>
      </section>

      {/* PHIL-02 The framework – 4-layer pyramid */}
      <section className="section-pad max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-slate-blue mb-4">The Life Force framework</h2>
        <p className="font-sans text-lg text-near-black/80 leading-relaxed mb-12">
          Think of motivation like fuel. You don&apos;t wait for the tank to fill on its own before a long drive; you fill it. These four layers are where that energy comes from.
        </p>

        {/* Pyramid diagram */}
        <div className="flex flex-col items-center gap-2" aria-label="Life Force pyramid diagram" role="img">
          {pyramidLayers.map((layer) => (
            <div
              key={layer.label}
              className={`w-full ${layer.width} ${layer.bg} ${layer.text} px-6 py-4 rounded-sm text-center mx-auto`}
            >
              <p className="font-serif text-xl font-semibold">{layer.label}</p>
              <p className="font-sans text-sm mt-1 opacity-80">{layer.sub}</p>
            </div>
          ))}
        </div>

        <p className="font-sans text-sm text-near-black/50 text-center mt-4">
          ↑ Top layer is purpose; base is the foundation
        </p>
      </section>

      {/* PHIL-03 Action comes before certainty */}
      <section className="bg-muted-blue/10">
        <div className="section-pad max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-slate-blue mb-6">Action comes before certainty</h2>
          <p className="font-sans text-lg text-near-black/80 leading-relaxed">
            Real change is action-oriented. The hard part is that you have to act before you have proof it&apos;ll work. Confidence isn&apos;t what gets you started; it&apos;s what builds once you do. You take the step, then the belief follows.
          </p>
        </div>
      </section>

      {/* PHIL-04 Three things worth accepting */}
      <section className="section-pad max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-slate-blue mb-8">Three things worth accepting</h2>
        <ul className="space-y-4 mb-8">
          {[
            'There will always be some pain in life.',
            'There will always be uncertainty.',
            'You\'ll always have to do some of the work yourself.',
          ].map((item) => (
            <li key={item} className="flex gap-3 items-start">
              <span className="text-gold font-serif text-xl leading-none mt-0.5" aria-hidden="true">—</span>
              <span className="font-sans text-lg text-near-black/80 leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
        <p className="font-sans text-lg text-near-black/80 leading-relaxed italic border-l-4 border-gold pl-5">
          Accepting these isn&apos;t pessimism. It&apos;s what frees you to move anyway.
        </p>
      </section>

      {/* PHIL-05 How this shows up in the work */}
      <section className="bg-slate-blue">
        <div className="section-pad max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-base mb-6">How this shows up in the work</h2>
          <p className="font-sans text-lg text-base/80 leading-relaxed">
            This philosophy runs through both sides of my practice. In coaching, it&apos;s about acting decisively before you feel 100% ready. In therapy, it&apos;s about building a foundation strong enough to support real change. Same idea, different starting point.
          </p>
        </div>
      </section>

      {/* PHIL-06 CTA */}
      <section className="section-pad text-center max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-slate-blue mb-6">Curious where you&apos;d start?</h2>
        <CalButton className="btn-primary">Book a Free Consultation</CalButton>
      </section>
    </>
  )
}
