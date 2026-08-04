import FadeIn from './FadeIn'
import SectionLabel from './SectionLabel'
import { education } from '../data/content'

export default function Education() {
  return (
    <section className="py-28 px-6 border-t border-ink-900">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionLabel>Education</SectionLabel>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((e, i) => (
            <FadeIn key={e.school} delay={i * 0.1}>
              <div className="border border-ink-900 p-8 hover:border-ink-700 transition-colors duration-300">
                <p className="text-[10px] tracking-[0.3em] uppercase text-gold font-medium mb-3">
                  {e.period}
                </p>
                <h3 className="font-display text-xl text-white font-semibold mb-1">
                  {e.school}
                </h3>
                <p className="text-ink-400 text-sm font-light mb-4">{e.degree}</p>
                {e.details.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {e.details.map((d) => (
                      <span
                        key={d}
                        className="px-2.5 py-1 bg-ink-950 text-ink-400 text-xs font-light"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
