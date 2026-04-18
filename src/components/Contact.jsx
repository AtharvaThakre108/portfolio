import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  // TODO: Replace all links and email
  const links = [
    {
      label: 'GitHub',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      ),
      href: 'https://github.com/YOUR_GITHUB',
    },
    {
      label: 'LinkedIn',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      href: 'https://linkedin.com/in/YOUR_LINKEDIN',
    },
    {
      label: 'YOUR@EMAIL.COM',  // TODO: your email
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      ),
      href: 'mailto:YOUR@EMAIL.COM',
    },
    {
      label: 'Download Résumé',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 16l-4-4h3V4h2v8h3l-4 4zM4 20h16v2H4z"/>
        </svg>
      ),
      href: 'YOUR_RESUME.pdf',   // TODO
      download: true,
    },
  ]

  return (
    <section className="site-section" id="contact" ref={ref}>
      <p className="section-eyebrow">Get In Touch</p>

      <div className="contact-inner">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="contact-links">
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.download ? undefined : '_blank'}
                rel="noreferrer"
                download={link.download || undefined}
                className="contact-link-row"
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.4, 0, 0.2, 1] }}
              >
                <span className="contact-link-label">
                  <span className="contact-link-icon">{link.icon}</span>
                  {link.label}
                </span>
                <span className="contact-link-arrow">↗</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="contact-cta"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        >
          <h3>
            Let's build<br />something <em>great</em>
          </h3>
          <p>
            I'm always open to interesting projects, collaborations, 
            or just a good conversation about engineering and design. 
            Drop me a line.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <a href="mailto:YOUR@EMAIL.COM" className="btn-primary">
              Say Hello →
            </a>
          </div>
        </motion.div>
      </div>

      <footer className="footer" style={{ marginTop: '4rem', padding: '2.5rem 0 0', borderTop: '1px solid var(--border)' }}>
        {/* TODO: Replace name */}
        <span className="footer-note">Built by Alex Kumar · {new Date().getFullYear()}</span>
        <div className="footer-links">
          <a href="https://github.com/YOUR_GITHUB" target="_blank" rel="noreferrer" className="footer-link">GitHub</a>
          <a href="https://linkedin.com/in/YOUR_LINKEDIN" target="_blank" rel="noreferrer" className="footer-link">LinkedIn</a>
        </div>
      </footer>
    </section>
  )
}