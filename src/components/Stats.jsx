import { useEffect, useRef, useState } from 'react'
import './Stats.css'

const stats = [
  { value: 15, decimals: 0, suffix: '+', label: 'rokov praxe', desc: 'Na slovenskom a medzinárodnom podnikateľskom trhu.' },
  { value: 450, decimals: 0, suffix: '+', label: 'klientov', desc: 'Pomohli sme im zvýšiť zisky a znížiť daňové riziko.' },
  { value: 10, decimals: 0, suffix: 'M €+', label: 'ročné tržby klientov', desc: 'Súhrnné tržby firiem, ktorým vedieme účtovníctvo.' },
]

const format = (n, decimals) => n.toFixed(decimals).replace('.', ',')

// Counts from 0 to the value once the number scrolls into view
function CountUp({ value, decimals, suffix }) {
  const ref = useRef(null)
  const reduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const [shown, setShown] = useState(reduced ? value : 0)

  useEffect(() => {
    if (reduced || !ref.current) return
    let frame = 0
    let started = false
    const run = () => {
      let start = null
      const tick = (now) => {
        if (start === null) start = now
        const t = Math.min(1, (now - start) / 1600)
        setShown(value * (1 - Math.pow(1 - t, 3)))
        if (t < 1) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
    }
    // Start once the number is well inside the viewport
    const check = () => {
      if (started || !ref.current) return
      if (ref.current.getBoundingClientRect().top < window.innerHeight * 0.8) {
        started = true
        window.removeEventListener('scroll', check)
        run()
      }
    }
    check()
    window.addEventListener('scroll', check, { passive: true })
    return () => { window.removeEventListener('scroll', check); cancelAnimationFrame(frame) }
  }, [value, reduced])

  return (
    <div className="stats__value" ref={ref} aria-label={`${format(value, decimals)}${suffix}`}>
      {format(shown, decimals)}{suffix}
    </div>
  )
}

export default function Stats() {
  return (
    <section className="stats">
      <div className="container stats__grid">
        {stats.map((s, i) => (
          <div key={i} className="stats__item">
            <CountUp value={s.value} decimals={s.decimals} suffix={s.suffix} />
            <div className="stats__label">{s.label}</div>
            <p className="stats__desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
