import { useEffect, useState } from 'react'
import { useTheme } from '../context/ThemeContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { boosted } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo"><span>A</span>T</div>

      <ul className="nav-links">
        <li><a href="#projects">Work</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="/AtharvaThakre_resume.pdf" download>Résumé</a></li>
      </ul>

      <div className="nav-status">
        <span className="nav-status-dot" />
        {boosted ? 'Radahn Defeated' : 'Open to Work'}
      </div>
    </nav>
  )
}