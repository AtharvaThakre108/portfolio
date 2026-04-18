import { useEffect } from 'react'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import { AnimatePresence, motion } from 'framer-motion'
import StarCanvas from './components/StarCanvas'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import BoostButton from './components/BoostButton'
import GameDevMode from './components/GameDevMode'

function AppInner() {
  const { boosted } = useTheme()

  useEffect(() => {
    const root = document.documentElement
    if (boosted) {
      root.classList.add('boosted')
    } else {
      root.classList.remove('boosted')
    }
  }, [boosted])

  return (
    <div className={`app ${boosted ? 'boosted' : ''}`}>
      <StarCanvas />
      <Navbar />

      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <div className="full-divider" />
        <Projects />
        <div className="full-divider" />

        {/* Game Dev section — slides in when boosted */}
        <AnimatePresence>
          {boosted && (
            <motion.div
              key="gamedev"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            >
              <GameDevMode />
            </motion.div>
          )}
        </AnimatePresence>

        <About />
        <div className="full-divider" />
        <Skills />
        <div className="full-divider" />
        <Contact />
      </main>

      <BoostButton />
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  )
}