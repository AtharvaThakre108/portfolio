import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const PROJECTS = [
  {
    num: '01',
    title: 'Distributed Task Queue',
    desc: 'Built a Redis-backed task queue from scratch to understand what Celery actually does under the hood. Implements 3-level priority queues via atomic BRPOP (zero CPU when idle), a Sorted Set scheduler for delayed execution, exponential backoff retries (2ⁿ seconds), dead letter queue for failed job replay, and graceful SIGTERM shutdown. Benchmarked at ~80k ops/sec; 50 jobs across 2 workers in 2.5s, scaling linearly to 1.3s at 4 workers.',
    tech: ['Python', 'Redis', 'FastAPI', 'Docker', 'docker-compose'],
    github: 'https://github.com/AtharvaThakre108/Distributed_Task_Queue',
    demo: null,
  },
  {
    num: '02',
    title: 'Fraud Detection API',
    desc: 'Trained LightGBM on 284k transactions with SMOTE-balanced classes — 0.83 F1 on the fraud class, outperforming XGBoost (0.76) and Isolation Forest (0.26). Deployed SHAP-powered explainability via Dockerized FastAPI, returning per-prediction feature attribution in under 50ms. Every prediction comes with a reason.',
    tech: ['Python', 'LightGBM', 'SHAP', 'FastAPI', 'Docker', 'SMOTE'],
    github: 'https://github.com/AtharvaThakre108/fraud_detection_api',
    demo: null,
  },
  {
    num: '03',
    title: 'Legal Contract Clause Extractor',
    desc: 'Fine-tuned BERT on the CUAD dataset (510 contracts, 8 clause types) — 0.93 F1 on Governing Law, 0.78 on Anti-Assignment clauses. Integrated Gemini API for plain-English summarization with risk flagging. Deployed via FastAPI with a Streamlit drag-and-drop PDF interface; no legal expertise required to use it.',
    tech: ['BERT', 'PyTorch', 'Gemini API', 'FastAPI', 'Streamlit', 'CUAD'],
    github: 'https://github.com/AtharvaThakre108/legal_contract_extractor',
    demo: null,
  },
  {
    num: '04',
    title: 'Document RAG API',
    desc: "RAG pipeline over RBI and GST regulatory PDFs using LangChain and ChromaDB with semantic chunking and MMR retrieval — answers regulatory questions with source attribution, not hallucinated summaries. Served via Dockerized FastAPI with Gemini API for answer generation. Built because reading 400-page compliance documents is nobody's idea of a good time.",
    tech: ['LangChain', 'ChromaDB', 'FastAPI', 'Docker', 'Gemini API', 'Python'],
    github: 'https://github.com/AtharvaThakre108/Document_RAG_API',
    demo: null,
  },
  {
    num: '05',
    title: 'Vessel Trajectory Prediction',
    desc: 'LSTM trained on 1.2M AIS records for maritime vessel position forecasting. Engineered 8 temporal features — speed, heading delta, port proximity, time-of-day cyclical encoding. Achieved MAE of 0.42 nautical miles at a 30-minute horizon, outperforming the XGBoost baseline by 31%. Sequence-to-point architecture with sliding window preprocessing.',
    tech: ['LSTM', 'PyTorch', 'Python', 'AIS Data', 'Time Series', 'XGBoost'],
    github: 'https://github.com/AtharvaThakre108/Vessel_path_prediction',
    demo: null,
  },
  {
    num: '06',
    title: 'WheelPicker',
    desc: 'A Windows desktop randomizer built with C# and WPF to solve decision fatigue. Loads item libraries from JSON — games, music genres, movies, activities. Music libraries support two-stage hierarchical spin: first spin selects a genre, second picks the subgenre. Smooth animated wheel with randomized spin physics, sound effects, and a live pointer. Ships as a self-contained .exe with no runtime dependency.',
    tech: ['C#', 'WPF', '.NET 9', 'XAML', 'JSON'],
    github: 'https://github.com/AtharvaThakre108/WheelofFortune',
    demo: null,
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
        {project.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
      </div>
      <div className="card-links">
        <a href={project.github} target="_blank" rel="noreferrer" className="card-link">GitHub ↗</a>
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noreferrer" className="card-link">Live Demo ↗</a>
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
          <h2 className="section-title">Things I have<br /><em>built</em></h2>
        </div>
        <a
          href="https://github.com/AtharvaThakre108"
          target="_blank"
          rel="noreferrer"
          className="btn-ghost"
          style={{ alignSelf: 'flex-end', marginBottom: '3.5rem' }}
        >
          All Projects ↗
        </a>
      </div>

      <div className="projects-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.num} project={p} index={i} />
        ))}
      </div>
    </section>
  )
}