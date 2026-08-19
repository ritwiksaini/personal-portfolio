import FadeIn from './FadeIn'

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 border-t border-ink-900 bg-[#0f0f0e]">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-[10px] tracking-[0.35em] uppercase text-gold font-medium mb-6">
            Let's Talk
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-display text-4xl md:text-5xl text-white font-semibold mb-4 leading-tight">
            Open to VC, PE & IB Opportunities<br />
            <em className="font-normal text-ink-400">and discussing energy-tech, AI Infra and deep-tech.</em>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-ink-400 text-sm font-light mb-12 max-w-md">
            I'm pursuing full-time roles in PE, VC, and IB. If you're looking for someone who can source deals, build investment theses, and automate financial workflows, let's connect. I'm also happy to chat about energy-tech, AI Infra, and deep-tech.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:sritwik24@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-gold text-[#0d0d0d] text-sm font-medium tracking-wide hover:bg-gold-light transition-colors duration-200"
            >
              <EmailIcon />
              sritwik24@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/ritwik-saini/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-ink-700 text-ink-300 text-sm font-light tracking-wide hover:border-gold hover:text-gold transition-colors duration-200"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
          </div>
        </FadeIn>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-ink-900 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <span className="font-display text-sm text-ink-600 italic">Ritwik Saini</span>
          <span className="text-[10px] tracking-widest uppercase text-ink-700">© 2026</span>
        </div>
      </div>
    </section>
  )
}

function EmailIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}
