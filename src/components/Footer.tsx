import Link from 'next/link'
import CalButton from '@/components/CalButton'

export default function Footer() {
  return (
    <footer className="bg-slate-blue text-base mt-auto">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <p className="font-serif text-xl font-semibold mb-3">Dr. Michael Vitulano</p>
          <p className="text-sm text-muted-blue leading-relaxed">
            Evidence-based therapy and coaching for people who are ready to move from insight to action.
          </p>
        </div>

        <div>
          <p className="font-sans text-sm font-medium uppercase tracking-widest text-muted-blue mb-3">Contact</p>
          <a
            href="mailto:michael.vitulano@gmail.com"
            className="block text-sm hover:text-gold transition-colors"
          >
            michael.vitulano@gmail.com
          </a>
          <a href="tel:12035215579" className="block text-sm hover:text-gold transition-colors mt-1">
            1-203-521-5579
          </a>
          <CalButton className="btn-outline-light text-sm mt-4 inline-block" />
        </div>

        <div>
          <p className="font-sans text-sm font-medium uppercase tracking-widest text-muted-blue mb-3">Connect</p>
          <div className="flex gap-4 text-sm">
            <a href="#" className="hover:text-gold transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-gold transition-colors">X</a>
            <a href="#" className="hover:text-gold transition-colors">Instagram</a>
            <a
              href="https://www.youtube.com/channel/UC326Ie04t7c-cIHV7m9z9CA"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              YouTube
            </a>
          </div>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About' },
              { href: '/coaching', label: 'Coaching' },
              { href: '/therapy', label: 'Therapy' },
              { href: '/philosophy', label: 'Philosophy' },
              { href: '/podcast', label: 'Podcast' },
              { href: '/contact', label: 'Contact' },
            ].map(l => (
              <Link key={l.href} href={l.href} className="hover:text-gold transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-muted-blue/30">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-5 text-xs text-muted-blue">
          Licensed psychologist in CT, WA, and CO. Authorized to provide telepsychology in 43 PSYPACT states.
          &nbsp;·&nbsp; © {new Date().getFullYear()} Michael Vitulano, PhD
        </div>
      </div>
    </footer>
  )
}
