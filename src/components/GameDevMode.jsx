import { motion } from 'framer-motion'

// TODO: Replace ALL game dev project data with your real game projects
const GAME_PROJECTS = [
  {
    num: '01',
    title: 'VOID RUNNER',
    desc: '2D platformer with procedural level generation and custom physics. Hand-authored lighting system using shadow casting. 2,400+ downloads on itch.io.',
    tags: ['Unity', 'C#', 'GLSL', 'Procedural Gen'],
    link: '#',  // TODO: itch.io or repo link
  },
  {
    num: '02',
    title: 'ECHO PROTOCOL',
    desc: 'Multiplayer tactical shooter prototype. Client-side prediction + server reconciliation netcode. Built across a 48hr game jam with a team of 3.',
    tags: ['Unreal', 'C++', 'Blueprints', 'Netcode'],
    link: '#',
  },
  {
    num: '03',
    title: 'TERRAIN ENGINE',
    desc: 'Infinite voxel world renderer. Compute shader-driven chunk meshing, dynamic LOD, and real-time biome blending. 60fps on mid-tier hardware.',
    tags: ['Unity', 'C#', 'Compute Shaders', 'ECS'],
    link: '#',
  },
  {
    num: '04',
    title: 'NPC BEHAVIOR SYS',
    desc: 'Behavior Tree + Utility AI hybrid for open-world NPC decision making. Used across 3 released game jam entries. Published as a Unity package.',
    tags: ['C#', 'Behavior Trees', 'DOTS', 'Open Source'],
    link: '#',
  },
  {
    num: '05',
    title: 'FRACTAL DESCENT',
    desc: 'Infinite fractal explorer rendered via ray marching with DE functions. Real-time parameter tweaking, color mapping, orbit trap shading.',
    tags: ['WebGL', 'GLSL', 'Ray Marching', 'JS'],
    link: '#',
  },
  {
    num: '06',
    title: 'SIGNAL LOST',
    desc: 'Solo-developed horror puzzle game. Diegetic UI, environmental storytelling, custom post-processing stack. GMTK Jam 2023 Top 5% entry.',
    tags: ['Godot', 'GDScript', 'Shader Graph'],
    link: '#',
  },
]

// TODO: Replace with your actual game dev skills
const GM_SKILLS = [
  'UNITY', 'UNREAL ENGINE', 'GODOT', 'C# / C++',
  'GLSL / HLSL', 'PHYSICS SIMS', 'NETCODE', 'ECS / DOTS',
  'COMPUTE SHADERS', 'PROCEDURAL GEN', 'AI / BEHAVIOR TREES', 'GAME JAM VET',
]

const stagger = {
  animate: { transition: { staggerChildren: 0.07 } },
}
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
          <p className="gm-unlocked">— SIGNAL UNLOCKED —</p>
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
        {/* TODO: Replace with your game dev background */}
        <div className="gm-bio">
          <strong>HANDLE:</strong> Alex Kumar &nbsp;|&nbsp; <strong>CLASS:</strong> Developer / Designer<br /><br />
          Been making games since I was 12 — RPG Maker, then Game Maker, now Unity and Unreal. 
          What drives me is the craft: <strong>systems design that creates emergent player behavior</strong>, 
          shader work that makes the mundane feel alive, netcode that holds up under pressure.<br /><br />
          My software background crosses over cleanly: <strong>performance optimization</strong>, 
          real-time data structures, multiplayer networking. Looking for a team that treats 
          game dev as a discipline, not a product.
        </div>

        {/* Projects */}
        <p className="gm-section-head">SHIPPED PROJECTS</p>
        <motion.div
          className="gm-grid"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {GAME_PROJECTS.map(p => (
            <motion.div key={p.num} className="gm-card" variants={fadeItem}>
              <p className="gm-card-num">{p.num}</p>
              <h3 className="gm-card-title">{p.title}</h3>
              <p className="gm-card-desc">{p.desc}</p>
              <div className="gm-tags">
                {p.tags.map(t => <span key={t} className="gm-tag">{t}</span>)}
              </div>
              <a href={p.link} target="_blank" rel="noreferrer" className="gm-card-link">
                [ VIEW PROJECT ]
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill tree */}
        <p className="gm-section-head">SKILL TREE UNLOCKED</p>
        <motion.div
          className="gm-skills-wrap"
          variants={stagger}
          initial="initial"
          animate="animate"
          style={{ marginBottom: '3.5rem' }}
        >
          {GM_SKILLS.map(s => (
            <motion.div key={s} className="gm-skill-cell" variants={fadeItem}>
              {s}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="gm-cta">
          {/* TODO: Replace email */}
          <a
            href="mailto:YOUR@EMAIL.COM?subject=Game%20Dev%20Role%20Inquiry"
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