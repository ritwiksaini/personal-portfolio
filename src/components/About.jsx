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
            I bring systems-level thinking to private markets: breaking problems down
            to first principles, whether that's a deal thesis, due diligence, a
            sourcing process, or a workflow that shouldn't need a human in the loop.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-6 text-ink-400 text-base font-light leading-relaxed max-w-2xl">
            That's the thread across venture, private equity, and the automations I
            build around both: understanding a business by its structure, not its
            narrative. I'm particularly drawn to energy-tech, deep-tech, and AI
            infrastructure, sectors where the technology itself is the thesis.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <p className="mt-4 text-ink-400 text-base font-light leading-relaxed max-w-2xl">
            Outside of that: I play drums, spend a lot of weekends hiking, and listen
            to more rock music than is probably useful for anything.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
