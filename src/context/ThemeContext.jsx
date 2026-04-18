import { createContext, useContext, useState } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [boosted, setBoosted] = useState(false)
  const [transitioning, setTransitioning] = useState(false)

  const triggerBoost = () => {
    if (transitioning) return
    setTransitioning(true)
    setTimeout(() => {
      setBoosted(b => !b)
      setTransitioning(false)
    }, 600)
  }

  return (
    <ThemeContext.Provider value={{ boosted, transitioning, triggerBoost }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)