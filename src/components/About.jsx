import FadeIn from './FadeIn'
import SectionLabel from './SectionLabel'

export default function About() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionLabel>About</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="font-display text-2xl md:text-3xl lg:text-4xl text-white font-normal leading-[1.4] max-w-3xl text-balance">
            Most people with a CS degree go into tech.{' '}
            <em className="italic">I chose private markets</em>
            <span className="text-ink-400">
              {' '}— because I think the questions are harder, the feedback
              loops are longer, and the thinking that actually creates an edge
              isn't taught in any single discipline.
            </span>
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-6 text-ink-400 text-base font-light leading-relaxed max-w-2xl">
            CS left me with one habit I can't shake: don't trust the output
            until you understand the mechanism. I've been applying that to
            companies, theses, and capital allocation ever since.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
