import { useEffect, useRef } from 'react'
import './Comparison.css'

const rows = [
  { label: 'Výkazy', old: 'Raz ročne, papierovo, neskoro', new: 'Real-time prehľad kedykoľvek' },
  { label: 'Dane', old: 'Reaktívne, keď je problém', new: 'Proaktívne, pred termínom' },
  { label: 'Komunikácia', old: 'Email, čakáte dni', new: 'Odpoveď do 24h, dedikovaný kontakt' },
  { label: 'Reporting', old: 'Žiadny', new: 'Mesačné reporty pre Váš biznis' },
  { label: 'Zakladanie', old: 'Sami na úradoch', new: 'My zariadime všetko' },
]

const clamp = (v) => Math.min(1, Math.max(0, v))

export default function Comparison() {
  const tableRef = useRef(null)

  // Scroll progress through the table, split so each row is struck in turn
  useEffect(() => {
    const table = tableRef.current
    if (!table) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const rowEls = table.querySelectorAll('.comparison__row')
    let frame = 0
    const update = () => {
      frame = 0
      const vh = window.innerHeight
      const rect = table.getBoundingClientRect()
      // starts when the table top reaches 70% of the screen, ends when its bottom reaches 60%
      const total = rect.height + vh * 0.1
      const s = clamp((vh * 0.7 - rect.top) / total)
      rowEls.forEach((el, i) => {
        el.style.setProperty('--r', clamp(s * rowEls.length - i).toFixed(3))
      })
    }
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section className="comparison">
      <div className="container">
        <div className="comparison__header">
          <h2 className="comparison__title">
            Prečo väčšina firiem robí<br />chyby v účtovníctve
          </h2>
          <p className="comparison__sub">Väčšina účtovníkov rieši vaše doklady. Nie váš biznis.</p>
        </div>

        <div className="comparison__table" ref={tableRef}>
          <div className="comparison__head">
            <div className="comparison__head-cell"></div>
            <div className="comparison__head-cell comparison__head-cell--old">Tradičný prístup</div>
            <div className="comparison__head-cell comparison__head-cell--new metal-text metal-text--dark">IS Justice</div>
          </div>
          {rows.map((row, i) => (
            <div key={i} className="comparison__row">
              <div className="comparison__label">{row.label}</div>
              <div className="comparison__cell comparison__cell--old">
                <span className="comparison__x">✕</span><span className="comparison__old-text">{row.old}</span>
              </div>
              <div className="comparison__cell comparison__cell--new">
                <span className="comparison__check">✓</span><span>{row.new}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="comparison__footer">
          <span className="comparison__tag">Strácate prehľad</span>
          <span className="comparison__tag">Rastúce daňové riziko</span>
          <span className="comparison__tag">Neskoré rozhodovanie</span>
        </div>
      </div>
    </section>
  )
}
