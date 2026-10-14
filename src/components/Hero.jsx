import { useEffect, useRef } from 'react'
import './Hero.css'
import heroBg from '../assets/hero-rook.webp'
import heroBlur from '../assets/hero-rook-blur.webp'
import heroRook from '../assets/hero-rook-cutout.webp'
import { t } from '../i18n'

// Scroll windows (0-1 of the pinned scroll) for each word in the sequence; the words come from t.hero.words
const words = [
  { from: 0.15, to: 0.33 },
  { from: 0.35, to: 0.53 },
  { from: 0.55, to: 0.73 },
]
const FINAL_FROM = 0.75

const clamp = (v) => Math.min(1, Math.max(0, v))
// Fade in over the first quarter of the window, out over the last quarter
const windowOpacity = (p, from, to) => {
  const edge = (to - from) / 4
  return clamp(Math.min((p - from) / edge, (to - p) / edge))
}

export default function Hero() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const wordEls = section.querySelectorAll('[data-word]')
    const finalEl = section.querySelector('[data-final]')
    let frame = 0

    const update = () => {
      frame = 0
      const rect = section.getBoundingClientRect()
      const distance = rect.height - window.innerHeight
      const p = distance > 0 ? clamp(-rect.top / distance) : 0
      section.style.setProperty('--p', p.toFixed(4))
      wordEls.forEach((el, i) => {
        el.style.setProperty('--o', windowOpacity(p, words[i].from, words[i].to).toFixed(3))
      })
      finalEl.style.setProperty('--o', clamp((p - FINAL_FROM) / 0.08).toFixed(3))
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
    <section className="hero" ref={sectionRef}>
      <div className="hero__sticky">
        <div className="hero__scene" aria-hidden="true">
          <img className="hero__layer hero__layer--bg" src={heroBg} alt="" fetchPriority="high" />
          <img className="hero__layer hero__layer--blur" src={heroBlur} alt="" />
          <img className="hero__layer hero__layer--rook" src={heroRook} alt="" />
        </div>
        <div className="hero__shade" />

        <div className="container hero__inner">
          <div className="hero__content">
            <h1 className="hero__title">
              {t.hero.title[0]}{' '}<br />
              {t.hero.title[1]} <em className="metal-text metal-text--dark">{t.hero.title[2]}</em>{' '}<br />
              {t.hero.title[3]}
            </h1>
            <p className="hero__sub">
              {t.hero.sub}
            </p>
            <div className="hero__actions">
              <a href="#audit" className="btn btn-primary">
                {t.hero.cta}
              </a>
              <a href="#services" className="btn hero__btn-ghost">
                {t.hero.secondary}
              </a>
            </div>
            <p className="hero__note">{t.hero.note}</p>
          </div>

          <div className="hero__words" aria-hidden="true">
            {t.hero.words.map((w) => (
              <p key={w} className="hero__word" data-word>{w}</p>
            ))}
            <p className="hero__word hero__word--final" data-final>
              {t.hero.final[0]}<br />
              <em className="metal-text metal-text--dark">{t.hero.final[1]}</em>
            </p>
          </div>
        </div>

        <div className="hero__hint" aria-hidden="true">
          <span>{t.hero.hint}</span>
          <i />
        </div>
      </div>
    </section>
  )
}
