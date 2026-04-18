import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

// TODO: Replace ALL project data below with your real projects
const PROJECTS = [
  {
    num: '01',
    title: 'Project Alpha',
    desc: 'A production-grade SaaS platform serving 15k monthly active users. Real-time collaboration features, role-based access control, and a custom billing engine.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
    github: '#',   // TODO: your GitHub link
    demo: '#',     // TODO: your live demo link
  },
  {
    num: '02',
    title: 'Project Beta',
    desc: 'ML pipeline for processing and classifying large document sets. Reduced manual review time by 70% and integrated directly into existing business workflows.',
    tech: ['Python', 'FastAPI', 'PyTorch', 'Docker'],
    github: '#',
    demo: '#',
  },
  {
    num: '03',
    title: 'Project Gamma',
    desc: 'Open-source CLI tool for database schema migrations. 2k+ GitHub stars, used in production by 400+ teams. Built with extensibility as a first-class concern.',
    tech: ['TypeScript', 'Node.js', 'SQLite'],
    github: '#',
    demo: null,
  },
  {
    num: '04',
    title: 'Project Delta',
    desc: 'Real-time multiplayer trivia app. WebSocket-based game engine, matchmaking queue, custom anti-cheat heuristics, and a mobile-first React frontend.',
    tech: ['Next.js', 'WebSockets', 'Prisma', 'AWS'],
    github: '#',
    demo: '#',
  },
  {
    num: '05',
    title: 'Project Epsilon',
    desc: 'Browser extension that summarizes and annotates research papers using a local LLM. Zero server costs, privacy-preserving, used by 3k+ researchers.',
    tech: ['JavaScript', 'WebAssembly', 'Rust'],
    github: '#',
    demo: '#',
  },
  {
    num: '06',
    title: 'Project Zeta',
    desc: 'Custom rendering engine for geospatial data visualizations. Handles 1M+ data points at 60fps via WebGL instancing and spatial indexing.',
    tech: ['WebGL', 'GLSL', 'TypeScript', 'D3'],
    github: '#',
    demo: '#',
  },
]

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      className="project-card"
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="card-top">
        <span className="card-num">{project.num}</span>
        <span className="card-arrow">↗</span>
      </div>
      <h3 className="card-title">{project.title}</h3>
      <p className="card-desc">{project.desc}</p>
      <div className="card-tech">
        {project.tech.map(t => (
          <span key={t} className="tech-tag">{t}</span>
        ))}
      </div>
      <div className="card-links">
        <a href={project.github} target="_blank" rel="noreferrer" className="card-link">
          GitHub ↗
        </a>
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noreferrer" className="card-link">
            Live Demo ↗
          </a>
        )}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section className="site-section" id="projects">
      <div className="projects-header">
        <div>
          <p className="section-eyebrow">Selected Work</p>
          <h2 className="section-title">
            Things I've<br /><em>built</em>
          </h2>
        </div>
        {/* TODO: Replace with your GitHub profile */}
        <a
          href="https://github.com/YOUR_GITHUB"
          target="_blank"
          rel="noreferrer"
          className="btn-ghost"
          style={{ alignSelf: 'flex-end', marginBottom: '3.5rem' }}
        >
          All Projects ↗
        </a>
      </div>

      <div className="projects-grid">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.num} project={p} index={i} />
        ))}
      </div>
    </section>
  )
}