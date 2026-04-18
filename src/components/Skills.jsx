import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

// TODO: Replace with your actual skills and proficiency levels (0–100)
const SKILL_GROUPS = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React / Next.js', level: 92 },
      { name: 'TypeScript', level: 88 },
      { name: 'CSS / Animation', level: 80 },
      { name: 'WebGL / Canvas', level: 65 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Python / FastAPI', level: 85 },
      { name: 'PostgreSQL', level: 82 },
      { name: 'Redis', level: 74 },
    ],
  },
  {
    category: 'Infrastructure',
    skills: [
      { name: 'Docker / K8s', level: 78 },
      { name: 'AWS / GCP', level: 75 },
      { name: 'CI/CD Pipelines', level: 84 },
      { name: 'Linux / Shell', level: 80 },
    ],
  },
]

function SkillBar({ name, level, inView, delay }) {
  return (
    <div className="skill-item-row">
      <div className="skill-label">
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <div className="skill-bar-bg">
        <div
          className={`skill-bar-fill ${inView ? 'visible' : ''}`}
          style={{
            width: `${level}%`,
            transitionDelay: `${delay}s`,
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="site-section" id="skills" ref={ref}>
      <p className="section-eyebrow">Capabilities</p>
      <h2 className="section-title">
        What I<br /><em>know</em>
      </h2>

      <div className="skills-categories">
        {SKILL_GROUPS.map((group, gi) => (
          <motion.div
            key={group.category}
            className="skill-category"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: gi * 0.15, ease: [0.4, 0, 0.2, 1] }}
          >
            <h4>{group.category}</h4>
            {group.skills.map((skill, si) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                inView={inView}
                delay={gi * 0.15 + si * 0.08 + 0.3}
              />
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  )
}