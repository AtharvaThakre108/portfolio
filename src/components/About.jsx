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
          <h2 className="section-title">A bit<br />about <em>me</em></h2>

          <p>
            Atharva builds things that think. Trained as a backend engineer and sharpened 
            through production internships, he has spent the last two years writing systems 
            that <strong>detect fraud in milliseconds</strong>, read legal contracts like lawyers, 
            and answer regulatory questions from raw PDF archives.
          </p>
          <p>
            He does not believe in the boundary between software engineering and machine 
            learning. A pipeline is just a system. An API serving model predictions is just 
            backend work with <strong>interesting inputs</strong>. He builds both without distinction be it 
            from PostgreSQL query optimization to fine-tuning BERT and deploying RAG APIs with Docker.
          </p>
          <p>
            Underneath all of it, there is a <strong>game developer in waiting</strong>. Not a hobbyist but 
            someone who understands that the best games are engineered experiences, that the 
            fun lives in the systems, and who intends to build them properly.
          </p>
          <p>
            Finished his <strong>MCA at PES University</strong> and looking for a team 
            that ships things worth using.
          </p>

          {/* Experience timeline */}
          <div style={{ marginTop: '2.5rem', borderTop: '1px solid var(--border)', paddingTop: '2rem' }}>
            <p style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1.5rem' }}>
              Experience
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <p style={{ fontSize: '12px', color: 'var(--text)', marginBottom: '0.25rem' }}>
                  Software Development Intern &nbsp;·&nbsp; <span style={{ color: 'var(--accent)' }}>Ordinet Solutions</span>
                </p>
                <p style={{ fontSize: '11px', color: 'var(--muted)' }}>Feb 2025 – Jul 2025 &nbsp;·&nbsp; Django, PostgreSQL, Docker, CI/CD</p>
              </div>
              <div>
                <p style={{ fontSize: '12px', color: 'var(--text)', marginBottom: '0.25rem' }}>
                  Backend Development Intern &nbsp;·&nbsp; <span style={{ color: 'var(--accent)' }}>Noviga Automation</span>
                </p>
                <p style={{ fontSize: '11px', color: 'var(--muted)' }}>May 2024 – Sept 2024 &nbsp;·&nbsp; Flask, SQLAlchemy, REST APIs</p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="https://github.com/AtharvaThakre108" target="_blank" rel="noreferrer" className="btn-ghost">
              GitHub ↗
            </a>
            <a href="https://www.linkedin.com/in/atharva-thakre-20011228a/" target="_blank" rel="noreferrer" className="btn-ghost">
              LinkedIn ↗
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="about-photo">
            {/*
              To add your photo:
              1. Place your image in the /public folder e.g. /public/photo.jpg
              2. Replace the <span> below with:
                 <img src="/photo.jpg" alt="Atharva Thakre"
                      style={{width:'100%',height:'100%',objectFit:'cover'}} />
            */}
            <img
            src="/photo.jpg"
            alt="Atharva Thakre"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div className="about-photo-corner tl" />
            <div className="about-photo-corner br" />
          </div>

          {/* Education */}
          <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <p style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.5rem' }}>
              Education
            </p>
            <div style={{ padding: '1rem 1.25rem', border: '1px solid var(--border)' }}>
              <p style={{ fontSize: '12px', color: 'var(--text)', marginBottom: '0.25rem' }}>Master of Computer Applications</p>
              <p style={{ fontSize: '11px', color: 'var(--muted)' }}>PES University &nbsp;·&nbsp; 2022 – 2024</p>
            </div>
            <div style={{ padding: '1rem 1.25rem', border: '1px solid var(--border)' }}>
              <p style={{ fontSize: '12px', color: 'var(--text)', marginBottom: '0.25rem' }}>B.Sc. Computer Science</p>
              <p style={{ fontSize: '11px', color: 'var(--muted)' }}>MediCaps University &nbsp;·&nbsp; 2019 – 2022</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}