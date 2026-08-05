import { motion } from 'framer-motion'
import headshot from '../assets/headshot.jpg'

export default function Hero() {
  return (
    <section
      id="top"
      className="min-h-screen flex items-center pt-16 px-6"
    >
      <div className="max-w-6xl mx-auto w-full py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[10px] tracking-[0.35em] uppercase text-gold font-medium mb-6"
            >
              Boston University '26 · CFA Level I
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.05] mb-6"
            >
              Ritwik
              <br />
              <em className="font-normal not-italic text-ink-300">Saini</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-ink-300 text-base font-light leading-relaxed max-w-md mb-10"
            >
              Venture Capital, Private Equity & Investment Banking. I source deals, build theses,
              model investments, and build automations around financial workflows, sitting at the intersection of rigorous
              financial analysis and technology-driven execution.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="https://www.linkedin.com/in/ritwik-saini/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-[#0d0d0d] text-sm font-medium tracking-wide hover:bg-gold-light transition-colors duration-200"
              >
                <LinkedInIcon />
                LinkedIn
              </a>
              <a
                href="/Saini, Ritwik - Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 border border-ink-700 text-ink-300 text-sm font-light tracking-wide hover:border-gold hover:text-gold transition-colors duration-200"
              >
                <DownloadIcon />
                Download Resume
              </a>
            </motion.div>
          </div>

          {/* Headshot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">
              <div className="w-64 h-80 md:w-72 md:h-96 overflow-hidden">
                <img
                  src={headshot}
                  alt="Ritwik Saini"
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              {/* Decorative border offset */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-gold/30 pointer-events-none" />
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-20 flex items-center gap-3 text-ink-600"
        >
          <div className="w-px h-10 bg-ink-800 animate-pulse" />
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        </motion.div>
      </div>
    </section>
  )
}

function LinkedInIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
  )
}
