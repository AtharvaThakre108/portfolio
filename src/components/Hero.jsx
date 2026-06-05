import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.4, 0, 0.2, 1] },
})

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-grid" />
      <div className="hero-horizon" />

      <div className="hero-content">
        <motion.div className="hero-eyebrow" {...fadeUp(0.2)}>
          <span className="hero-eyebrow-line" />
          Full Stack &nbsp;·&nbsp; Backend Engineer &nbsp;·&nbsp; AI Systems &nbsp;·&nbsp; India
        </motion.div>

        <motion.h1 className="hero-name" {...fadeUp(0.35)}>
          Atharva<br />
          <span className="last">Thakre</span>
        </motion.h1>

        <motion.p className="hero-tagline" {...fadeUp(0.5)}>
          I build systems that think — fraud detectors, document pipelines, 
          RAG APIs, and backends that hold up under pressure. 
          Somewhere underneath all of it, a game developer is waiting.
        </motion.p>

        <motion.div className="hero-actions" {...fadeUp(0.65)}>
          <a href="#projects" className="btn-primary">View My Work ↓</a>
          <a href="/AtharvaThakre_resume.pdf" download className="btn-ghost">↓ Download Résumé</a>
        </motion.div>
      </div>

      <motion.div className="scroll-indicator" {...fadeUp(1.1)}>
        <div className="scroll-track" />
        <span>Scroll</span>
      </motion.div>
    </section>
  )
}