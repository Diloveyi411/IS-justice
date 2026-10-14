import { useEffect, useRef, useState } from 'react'
import './Stats.css'
import { t } from '../i18n'

// Numbers per stat, in the order of t.stats (labels and descriptions)
const stats = [
  { value: 15, decimals: 0, suffix: '+' },
  { value: 450, decimals: 0, suffix: '+' },
  { value: 10, decimals: 0, suffix: 'M €+' },
]

const format = (n, decimals) => n.toFixed(decimals).replace('.', ',')

// Counts from 0 to the value once the number scrolls into view
function CountUp({ value, decimals, prefix = '', suffix }) {
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
    <div className="stats__value" ref={ref} aria-label={`${prefix}${format(value, decimals)}${suffix}`}>
      {prefix}{format(shown, decimals)}{suffix}
    </div>
  )
}

export default function Stats() {
  return (
    <section className="stats">
      <div className="container stats__grid">
        {stats.map((s, i) => (
          <div key={i} className="stats__item">
            <CountUp value={s.value} decimals={s.decimals} prefix={t.stats[i].prefix} suffix={t.stats[i].suffix ?? s.suffix} />
            <div className="stats__label">{t.stats[i].label}</div>
            <p className="stats__desc">{t.stats[i].desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
