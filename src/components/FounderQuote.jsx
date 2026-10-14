import './FounderQuote.css'
import ivana from '../assets/ivana.webp'
import david from '../assets/david.webp'
import { t } from '../i18n'

// People in the order of t.founder (eyebrow, quote, role, description)
const members = [
  { name: 'JUDr. Ivana Stancelová', photo: ivana, alt: 'JUDr. Ivana Stancelová' },
  {
    name: 'MSc. David Stancel',
    photo: david,
    link: { href: 'https://davidstancel.com/', label: 'davidstancel.com' },
    alt: 'MSc. David Stancel',
  },
]

export default function FounderQuote() {
  return (
    <section className="founder" id="about">
      <div className="container">

        <div className="founder__grid">
          {members.map((m, i) => (
            <div key={i} className="founder__card">
              <div className="founder__photo-wrap">
                <img src={m.photo} alt={m.alt} className="founder__photo" loading="lazy" />
              </div>
              <div className="founder__body">
                <p className="eyebrow founder__eyebrow">{t.founder[i].eyebrow}</p>
                <blockquote className="founder__quote">{t.founder[i].quote}</blockquote>
                <div className="founder__meta">
                  <p className="founder__name">{m.name}</p>
                  <p className="founder__role">{t.founder[i].role}</p>
                  {m.link && (
                    <a href={m.link.href} target="_blank" rel="noopener" className="founder__link">
                      {m.link.label} <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
                <p className="founder__desc">{t.founder[i].desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
