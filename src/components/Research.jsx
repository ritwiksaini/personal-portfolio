import { useState } from 'react'
import FadeIn from './FadeIn'
import SectionLabel from './SectionLabel'
import { research } from '../data/content'

export default function Research() {
  return (
    <section id="research" className="py-28 px-6 border-t border-ink-900 bg-[#0f0f0e]">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionLabel>Research & Theses</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.05}>
          <p className="text-ink-500 text-sm font-light mb-14 max-w-xl">
            Sector theses built from first principles. The thesis, the data, and
            a recommendation, on the record.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6">
          {research.map((r, i) => (
            <ResearchCard key={r.title} item={r} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ResearchCard({ item, delay }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <FadeIn delay={delay}>
      <div className="border border-ink-900 p-8 hover:border-gold/40 transition-colors duration-300 group flex flex-col gap-6 h-full">
        {/* Header */}
        <div>
          <p className="text-[10px] tracking-[0.3em] uppercase text-gold font-medium mb-3">
            {item.context}
          </p>
          <h3 className="font-display text-xl text-white font-semibold leading-snug">
            {item.title}
          </h3>
        </div>

        {/* Thesis */}
        <blockquote className="border-l-2 border-gold/50 pl-4 text-ink-300 text-sm font-light leading-relaxed italic">
          "{item.thesis}"
        </blockquote>

        {/* Findings */}
        <div>
          <p className="text-[10px] tracking-[0.25em] uppercase text-ink-500 mb-3">
            Key Findings
          </p>
          <ul className="space-y-2.5">
            {item.findings.map((f, i) => (
              <li key={i} className="flex gap-3 text-ink-400 text-sm font-light leading-relaxed">
                <span className="text-gold/60 mt-1 shrink-0 text-xs">◆</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Recommendation */}
        <div className={`transition-all duration-300 ${expanded ? 'opacity-100' : 'opacity-0 max-h-0 overflow-hidden'}`}>
          <div className="pt-4 border-t border-ink-900">
            <p className="text-[10px] tracking-[0.25em] uppercase text-ink-500 mb-2">
              Recommendation
            </p>
            <p className="text-ink-300 text-sm font-light leading-relaxed">
              {item.recommendation}
            </p>
          </div>
        </div>

        {/* Toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-auto text-[11px] tracking-widest uppercase text-gold/70 hover:text-gold transition-colors flex items-center gap-2 font-medium"
        >
          {expanded ? 'Hide Recommendation' : 'View Recommendation'}
          <span className={`transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}>↓</span>
        </button>
      </div>
    </FadeIn>
  )
}
