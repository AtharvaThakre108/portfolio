import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="site-section" id="about" ref={ref}>
      <p className="section-eyebrow">About Me</p>

      <div className="about-inner">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        >
          <h2 className="section-title">
            A bit<br />about <em>me</em>
          </h2>

          {/* TODO: Replace with your bio */}
          <p>
            I'm a <strong>full-stack developer</strong> with X years building 
            products used by real people. I care deeply about clean architecture, 
            thoughtful UI, and systems that don't fall over under pressure.
          </p>
          <p>
            My background spans <strong>distributed systems</strong>, modern frontend 
            frameworks, and the full deployment pipeline. I've led small teams, 
            shipped solo, and contributed to open source.
          </p>
          <p>
            Outside of work I'm either <strong>reading about compilers</strong>, 
            building games, or going on long bike rides to justify the amount of 
            coffee I drink.
          </p>
          <p>
            Currently open to <strong>full-time roles</strong> — remote or 
            [Your City]. I thrive on ownership and craft.
          </p>

          <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {/* TODO: Replace links */}
            <a href="https://github.com/YOUR_GITHUB" target="_blank" rel="noreferrer" className="btn-ghost">
              GitHub ↗
            </a>
            <a href="https://linkedin.com/in/YOUR_LINKEDIN" target="_blank" rel="noreferrer" className="btn-ghost">
              LinkedIn ↗
            </a>
          </div>
        </motion.div>

        {/* Photo placeholder — swap img src when you have a photo */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="about-photo">
            {/*
              To add your photo:
              Replace the div below with:
              <img src="/your-photo.jpg" alt="Your Name" style={{width:'100%',height:'100%',objectFit:'cover'}} />
              and place your-photo.jpg in the /public folder
            */}
            <span className="about-photo-placeholder">AK</span>
            <div className="about-photo-corner tl" />
            <div className="about-photo-corner br" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}