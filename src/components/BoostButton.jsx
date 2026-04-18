import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

export default function BoostButton() {
  const { boosted, transitioning, triggerBoost } = useTheme()
  const [flash, setFlash] = useState(false)

  const handleClick = () => {
    if (transitioning) return
    setFlash(true)
    setTimeout(() => setFlash(false), 650)
    triggerBoost()
  }

  return (
    <>
      {/* Flash overlay */}
      <AnimatePresence>
        {flash && (
          <motion.div
            key="flash"
            className="boost-flash"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      <div className="boost-btn-wrap">
        <motion.button
          className={`boost-btn ${boosted ? 'active' : ''}`}
          onClick={handleClick}
          disabled={transitioning}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title={boosted ? 'Stars are falling. Click to restore.' : 'Unlock secret mode'}
        >
          {/* Pulsing rings */}
          <span className="boost-ring" />
          <span className="boost-ring" />
          {boosted ? '★' : 'BOOST'}
        </motion.button>
        <span className="boost-label">
          {boosted ? 'Radahn Defeated' : 'Boost'}
        </span>
      </div>
    </>
  )
}