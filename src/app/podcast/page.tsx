import type { Metadata } from 'next'
import CalButton from '@/components/CalButton'

export const metadata: Metadata = {
  title: 'Resilience Real Talk Podcast | Dr. Michael Vitulano',
  description:
    'Honest conversations on mental health, resilience, and performance with Dr. Michael Vitulano. Watch on YouTube.',
  openGraph: {
    title: 'Resilience Real Talk | Dr. Michael Vitulano',
    description: 'Honest conversations on mental health, resilience, and performance.',
    url: 'https://michaelvitulano.com/podcast',
  },
}

const YOUTUBE_CHANNEL = 'https://www.youtube.com/channel/UC326Ie04t7c-cIHV7m9z9CA'

export default function PodcastPage() {
  return (
    <>
      {/* POD-01 Hero */}
      <section className="bg-slate-blue">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <h1 className="font-serif text-4xl md:text-6xl text-base leading-tight mb-6">
            Resilience Real Talk
          </h1>
          <p className="font-sans text-lg text-base/80 leading-relaxed max-w-xl">
            Honest conversations on mental health, resilience, and performance, with Dr. Michael Vitulano.
          </p>
        </div>
      </section>

      {/* POD-02 Embedded player */}
      <section className="section-pad max-w-4xl mx-auto">
        <h2 className="font-serif text-2xl text-slate-blue mb-6">Latest episode</h2>
        <div className="aspect-video w-full rounded-sm overflow-hidden bg-near-black/5 border border-muted-blue/30">
          <iframe
            src="https://www.youtube.com/embed?listType=user_uploads&list=UC326Ie04t7c-cIHV7m9z9CA"
            title="Resilience Real Talk – Latest Episode"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
            loading="lazy"
          />
        </div>
      </section>

      {/* POD-03 Episode grid */}
      <section className="bg-muted-blue/10">
        <div className="section-pad-wide">
          <h2 className="font-serif text-2xl text-slate-blue mb-4">More episodes</h2>
          <p className="font-sans text-near-black/60 mb-8">
            Browse recent conversations on the{' '}
            <a
              href={YOUTUBE_CHANNEL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-blue hover:text-gold underline underline-offset-4 transition-colors"
            >
              YouTube channel
            </a>
            .
          </p>

          {/* Featured radio interview */}
          <div className="bg-base border border-muted-blue/30 rounded-sm p-6 max-w-xl">
            <p className="font-sans text-xs text-muted-blue uppercase tracking-widest mb-2">Featured interview</p>
            <p className="font-serif text-xl text-slate-blue mb-3">Business Talk Radio</p>
            <p className="font-sans text-near-black/70 text-sm mb-4">
              A conversation on child psychology, performance, and resilience with Business Talk Radio.
            </p>
            <a
              href="https://businesstalkradio1.com/michael-vitulano-08-05-20-clinical-child-psychologist/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm text-slate-blue hover:text-gold underline underline-offset-4 transition-colors"
            >
              Listen to the interview →
            </a>
          </div>
        </div>
      </section>

      {/* POD-04 Subscribe */}
      <section className="section-pad max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-3xl text-slate-blue mb-6">Subscribe</h2>
        <a
          href={YOUTUBE_CHANNEL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary inline-flex items-center gap-2"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.75 15.5v-7l6.25 3.5-6.25 3.5z"/>
          </svg>
          Subscribe on YouTube
        </a>
      </section>

      {/* POD-06 CTA */}
      <section className="bg-gold">
        <div className="section-pad text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Want to work together?</h2>
          <CalButton className="inline-block bg-white text-gold font-sans font-semibold px-8 py-3 rounded-sm hover:bg-base transition-colors">Book a Free Consultation</CalButton>
        </div>
      </section>
    </>
  )
}
