import FadeIn from './FadeIn'
import SectionLabel from './SectionLabel'
import { skills } from '../data/content'

export default function Skills() {
  return (
    <section className="py-28 px-6 border-t border-ink-900 bg-[#0f0f0e]">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionLabel>Skills</SectionLabel>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12">
          <FadeIn delay={0.1}>
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-6 font-medium">
                Finance & Investment
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.finance.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 border border-ink-800 text-ink-300 text-xs font-light tracking-wide hover:border-gold/50 hover:text-gold transition-colors duration-200"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-6 font-medium">
                Tools & Data
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 border border-ink-800 text-ink-300 text-xs font-light tracking-wide hover:border-gold/50 hover:text-gold transition-colors duration-200"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
