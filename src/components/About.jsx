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
            I picked private markets because{' '}
            <em className="italic">the questions are harder.</em>{' '}
            <span className="text-ink-400">
              In software, the system tells you when you're wrong. In capital
              allocation, it can take years.
            </span>
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-6 text-ink-400 text-base font-light leading-relaxed max-w-2xl">
            That longer feedback loop demands something different: the patience
            to sit with complexity, the discipline to separate signal from
            narrative, and the willingness to stake a position before the data
            is complete. I came to those habits through CS. I've been testing
            them in PE ever since.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
