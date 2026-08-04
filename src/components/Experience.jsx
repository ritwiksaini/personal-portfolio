import FadeIn from './FadeIn'
import SectionLabel from './SectionLabel'
import { experience } from '../data/content'

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 border-t border-ink-900">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionLabel>Experience</SectionLabel>
        </FadeIn>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-ink-900 hidden md:block" />

          <div className="space-y-16">
            {experience.map((item, i) => (
              <FadeIn key={item.company} delay={i * 0.07}>
                <div className="md:pl-10 relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-gold hidden md:block" />

                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-4">
                    <div>
                      <h3 className="text-white font-medium text-base">
                        {item.company}
                      </h3>
                      <p className="text-ink-400 text-sm font-light">
                        {item.role} · {item.location}
                      </p>
                    </div>
                    <span className="text-[11px] tracking-widest uppercase text-ink-500 font-light shrink-0">
                      {item.period}
                    </span>
                  </div>

                  <ul className="space-y-2.5">
                    {item.bullets.map((b, bi) => (
                      <li key={bi} className="flex gap-3 text-ink-300 text-sm font-light leading-relaxed">
                        <span className="text-gold mt-1 shrink-0">—</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
