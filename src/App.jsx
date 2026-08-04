import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Research from './components/Research'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-ink-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Research />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
    </div>
  )
}
