import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const SKILL_GROUPS = [
  {
    category: 'AI / Machine Learning',
    skills: [
      { name: 'LightGBM / XGBoost / SHAP', level: 90 },
      { name: 'PyTorch / Deep Learning', level: 85 },
      { name: 'LangChain / RAG Systems', level: 88 },
      { name: 'BERT / NLP Fine-tuning', level: 82 },
    ],
  },
  {
    category: 'Backend & Systems',
    skills: [
      { name: 'Python / Django', level: 92 },
      { name: 'FastAPI / Flask', level: 90 },
      { name: 'Redis (BRPOP, Sorted Sets, Hashes)', level: 84 },
      { name: 'PostgreSQL / MySQL', level: 85 },
    ],
  },
  {
    category: 'DevOps & Infrastructure',
    skills: [
      { name: 'Docker / docker-compose', level: 86 },
      { name: 'CI/CD / GitHub Actions', level: 80 },
      { name: 'REST API Design', level: 90 },
      { name: 'Git', level: 92 },
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
          style={{ width: `${level}%`, transitionDelay: `${delay}s` }}
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
      <h2 className="section-title">What I<br /><em>know</em></h2>

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

      {/* Languages strip */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        style={{ marginTop: '3rem', paddingTop: '2.5rem', borderTop: '1px solid var(--border)' }}
      >
        <p style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1.25rem' }}>
          Languages
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {['Python', 'JavaScript', 'C#', 'C++', 'Java', 'SQL', 'Bash'].map(lang => (
            <span key={lang} className="tech-tag" style={{ fontSize: '11px', padding: '6px 14px' }}>
              {lang}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Concepts strip */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.75 }}
        style={{ marginTop: '2rem' }}
      >
        <p style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1.25rem' }}>
          Concepts & Patterns
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {[
            'Producer-Consumer Pattern',
            'Distributed Systems',
            'Microservices',
            'RBAC / Auth',
            'Query Optimization',
            'Exponential Backoff',
            'Dead Letter Queues',
            'Semantic Search',
            'Feature Engineering',
            'Model Explainability',
          ].map(c => (
            <span key={c} className="tech-tag" style={{ fontSize: '11px', padding: '6px 14px' }}>
              {c}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}