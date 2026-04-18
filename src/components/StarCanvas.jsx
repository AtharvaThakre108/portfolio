import { useEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'

export default function StarCanvas() {
  const canvasRef = useRef(null)
  const { boosted } = useTheme()
  const starsRef = useRef([])
  const animRef = useRef(null)
  const boostedRef = useRef(boosted)

  useEffect(() => { boostedRef.current = boosted }, [boosted])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initStars()
    }

    const initStars = () => {
      starsRef.current = Array.from({ length: 220 }, (_, i) => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.8 + 0.2,
        baseOpacity: Math.random() * 0.6 + 0.1,
        twinkleOffset: Math.random() * Math.PI * 2,
        twinkleSpeed: Math.random() * 0.015 + 0.005,
        // Meteor params
        vx: (Math.random() - 0.4) * 2.5,
        vy: Math.random() * 4 + 2,
        tailLen: Math.random() * 14 + 6,
      }))
    }

    resize()
    window.addEventListener('resize', resize)

    let tick = 0
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      tick++
      const b = boostedRef.current

      starsRef.current.forEach(star => {
        if (b) {
          // Meteor / streaming star mode
          star.x += star.vx
          star.y += star.vy

          if (star.y > canvas.height + 20) {
            star.y = -10
            star.x = Math.random() * canvas.width
          }
          if (star.x < -20 || star.x > canvas.width + 20) {
            star.x = Math.random() * canvas.width
            star.y = -10
          }

          const alpha = star.baseOpacity * 0.9
          // Draw tail (streak)
          const grad = ctx.createLinearGradient(
            star.x, star.y,
            star.x - star.vx * star.tailLen,
            star.y - star.vy * star.tailLen
          )
          grad.addColorStop(0, `rgba(240, 180, 100, ${alpha})`)
          grad.addColorStop(1, 'rgba(240,180,100,0)')
          ctx.beginPath()
          ctx.strokeStyle = grad
          ctx.lineWidth = star.size * 0.9
          ctx.moveTo(star.x, star.y)
          ctx.lineTo(star.x - star.vx * star.tailLen, star.y - star.vy * star.tailLen)
          ctx.stroke()

          // Head glow
          ctx.beginPath()
          ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255, 210, 140, ${alpha})`
          ctx.fill()

        } else {
          // Static twinkling star mode
          star.twinkleOffset += star.twinkleSpeed
          const osc = (Math.sin(star.twinkleOffset) + 1) / 2
          const alpha = star.baseOpacity * (0.35 + osc * 0.65)

          ctx.beginPath()
          ctx.arc(star.x, star.y, star.size * 0.7, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(190, 210, 240, ${alpha})`
          ctx.fill()
        }
      })

      animRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animRef.current)
    }
  }, [])

  return <canvas ref={canvasRef} className="star-canvas" />
}