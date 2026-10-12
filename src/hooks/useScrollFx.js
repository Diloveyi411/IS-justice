import { useEffect } from 'react'

// Elements that fade up as they enter the viewport, staggered among siblings
const REVEAL = [
  '.comparison__header', '.comparison__row', '.comparison__footer',
  '.services__header', '.services__card',
  '.stats__item',
  '.pricing__title', '.pricing__card', '.pricing__trust', '.pricing__transparency',
  '.cases__header', '.cases__card',
  '.founder__card',
  '.path__header', '.path__card',
  '.lead__heading', '.lead__sub', '.lead__form',
].join(',')

const clamp = (v) => Math.min(1, Math.max(0, v))

export default function useScrollFx() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const targets = document.querySelectorAll(REVEAL)

    if (reduced) {
      targets.forEach((el) => el.classList.add('is-in'))
      document.querySelectorAll('[data-fx]').forEach((el) => el.style.setProperty('--enter', 1))
      return
    }

    targets.forEach((el) => {
      const siblings = Array.from(el.parentElement.children).filter((c) => c.matches(REVEAL))
      el.style.setProperty('--i', Math.max(0, siblings.indexOf(el)))
      el.classList.add('fx-reveal')
    })

    let pending = Array.from(targets)

    // Curtains: --enter goes 0 -> 1 while the section top travels from the
    // bottom of the viewport to 35% from the top
    const curtains = document.querySelectorAll('[data-fx]')
    let frame = 0
    const update = () => {
      frame = 0
      const vh = window.innerHeight
      // Reveal once an element's top passes 88% of the viewport height
      pending = pending.filter((el) => {
        if (el.getBoundingClientRect().top < vh * 0.88) {
          el.classList.add('is-in')
          return false
        }
        return true
      })
      curtains.forEach((el) => {
        const top = el.getBoundingClientRect().top
        el.style.setProperty('--enter', clamp((vh - top) / (vh * 0.65)).toFixed(3))
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
}
