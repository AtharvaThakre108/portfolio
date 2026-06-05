import { motion } from 'framer-motion'

// Skills that cross over from software to game dev
const CROSSOVER_SKILLS = [
  'C++ / C#', 'PYTHON SCRIPTING', 'REAL-TIME SYSTEMS',
  'PHYSICS SIMULATION', 'DATA STRUCTURES', 'OPTIMIZATION',
  'DOCKER / DEVOPS', 'NETWORKING / APIs', 'AI / BEHAVIOR',
  'PROCEDURAL GEN', 'MATH / LINEAR ALGEBRA', 'SYSTEMS DESIGN',
]

const stagger = { animate: { transition: { staggerChildren: 0.07 } } }
const fadeItem = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export default function GameDevMode() {
  return (
    <section className="gamedev-section" id="gamedev">
      <div className="gamedev-inner">

        {/* Header */}
        <div className="gm-title-row">
          <p className="gm-unlocked">— CHAPTER UNLOCKED —</p>
          <motion.h2
            className="gm-big-title"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            GAME DEV<br />MODE.EXE
          </motion.h2>
        </div>

        {/* Bio */}
        <p className="gm-section-head">PLAYER PROFILE</p>
        <div className="gm-bio">
          <strong>HANDLE:</strong> Atharva Thakre &nbsp;|&nbsp;
          <strong>CLASS:</strong> Engineer → Game Developer<br /><br />

          The games I grew up playing didn't feel like products. They felt like
          systems — economies of tension, emergent behavior, rules that produced
          surprise. That's what I want to build.<br /><br />

          I'm a backend and AI engineer by training. That means I think about
          <strong> performance under constraint</strong>, real-time data pipelines,
          and systems that have to work correctly at all times. Every one of those
          skills has a direct mapping into game development —{' '}
          <strong>netcode, AI behavior trees, physics simulation, procedural generation</strong>.<br /><br />

          I don't have a shipped game yet. I'm going to be honest about that.
          What I have is a <strong>software foundation most junior game devs don't</strong>,
          a clear-eyed understanding of what it takes to build real systems,
          and the intent to apply all of it to games. Looking for a team
          that values engineers who can learn fast and think in systems.
        </div>

        {/* Crossover skills */}
        <p className="gm-section-head">TRANSFERABLE SKILL TREE</p>
        <motion.div
          className="gm-skills-wrap"
          variants={stagger}
          initial="initial"
          animate="animate"
          style={{ marginBottom: '3.5rem' }}
        >
          {CROSSOVER_SKILLS.map(s => (
            <motion.div key={s} className="gm-skill-cell" variants={fadeItem}>{s}</motion.div>
          ))}
        </motion.div>

        {/* What I'm learning */}
        <p className="gm-section-head">CURRENTLY LEARNING</p>
        <motion.div
          className="gm-grid"
          variants={stagger}
          initial="initial"
          animate="animate"
          style={{ marginBottom: '3.5rem' }}
        >
          {[
            {
              num: '01',
              title: 'UNITY ENGINE',
              desc: 'Working through the fundamentals — scene management, physics, the component system. Building small prototypes to understand the engine before building anything serious.',
              tags: ['Unity', 'C#', 'Game Objects', 'Physics'],
            },
            {
              num: '02',
              title: 'GAME MATH',
              desc: 'Linear algebra, quaternions, matrix transforms. The math I already know from ML applies — now applying it to 3D space and rendering.',
              tags: ['Linear Algebra', 'Quaternions', 'Vectors', '3D Math'],
            },
            {
              num: '03',
              title: 'SHADER BASICS',
              desc: 'Starting with GLSL. Vertex and fragment shaders. I want to understand rendering at the hardware level before using high-level abstractions.',
              tags: ['GLSL', 'Vertex Shaders', 'Fragment Shaders'],
            },
          ].map(item => (
            <motion.div key={item.num} className="gm-card" variants={fadeItem}>
              <p className="gm-card-num">{item.num}</p>
              <h3 className="gm-card-title">{item.title}</h3>
              <p className="gm-card-desc">{item.desc}</p>
              <div className="gm-tags">
                {item.tags.map(t => <span key={t} className="gm-tag">{t}</span>)}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="gm-cta">
          <a
            href="mailto:atharvathakre.108@gmail.com?subject=Game%20Dev%20Role%20Inquiry"
            className="gm-cta-btn"
          >
            ▶ PRESS START ◀
          </a>
          <p className="gm-cta-sub">[ REACH OUT ABOUT GAME DEV OPPORTUNITIES ]</p>
        </div>

      </div>
    </section>
  )
}