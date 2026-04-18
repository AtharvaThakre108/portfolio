import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.4, 0, 0.2, 1] },
})

export default function Hero() {
  const { boosted } = useTheme()

  return (
    <section className="hero" id="hero">
      <div className="hero-grid" />
      <div className="hero-horizon" />

      <div className="hero-content">
        <motion.div className="hero-eyebrow" {...fadeUp(0.2)}>
          <span className="hero-eyebrow-line" />
          {/* TODO: Replace with your role + city */}
          Full-Stack Developer &nbsp;·&nbsp; Your City
        </motion.div>

        {/* TODO: Replace with your name */}
        <motion.h1 className="hero-name" {...fadeUp(0.35)}>
          Alex<br />
          <span className="last">Kumar</span>
        </motion.h1>

        {/* TODO: Replace with your tagline */}
        <motion.p className="hero-tagline" {...fadeUp(0.5)}>
          I build thoughtful digital products — from performant 
          backends to interfaces people actually enjoy using. 
          Driven by craft, obsessed with the details.
        </motion.p>

        <motion.div className="hero-actions" {...fadeUp(0.65)}>
          <a href="#projects" className="btn-primary">View My Work ↓</a>
          {/* TODO: Replace YOUR_RESUME.pdf */}
          <a href="YOUR_RESUME.pdf" download className="btn-ghost">↓ Download Résumé</a>
        </motion.div>
      </div>

      <motion.div className="scroll-indicator" {...fadeUp(1.1)}>
        <div className="scroll-track" />
        <span>Scroll</span>
      </motion.div>
    </section>
  )
}