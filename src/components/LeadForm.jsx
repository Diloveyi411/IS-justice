import { useState } from 'react'
import './LeadForm.css'

export default function LeadForm() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', company: '', type: '', email: '', phone: '' })

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = (e) => { e.preventDefault(); setSent(true) }

  return (
    <section className="lead" id="audit">
      <div className="container lead__inner">
        <p className="eyebrow">Bezplatný audit</p>
        <h2 className="lead__heading">Pripravení na kontrolu<br />nad biznisom?</h2>
        <p className="lead__sub">Zanechajte kontakt a do 24 hodín preberieme váš aktuálny stav.</p>

        {sent ? (
          <div className="lead__success">
            <div className="lead__success-icon">✓</div>
            <strong>Odoslané!</strong>
            <p>Ozveme sa vám do 24 hodín.</p>
          </div>
        ) : (
          <form className="lead__form" onSubmit={submit}>
            <div className="lead__row lead__row--3">
              <input name="name" value={form.name} onChange={handle} placeholder="Vaše meno" required className="lead__input" />
              <input name="company" value={form.company} onChange={handle} placeholder="Názov firmy" className="lead__input" />
              <select name="type" value={form.type} onChange={handle} className="lead__input lead__select">
                <option value="">Typ podnikania</option>
                <option value="szco">SZČO</option>
                <option value="sro">S.R.O.</option>
                <option value="new">Zakladám firmu</option>
              </select>
            </div>
            <div className="lead__row">
              <input name="email" type="email" value={form.email} onChange={handle} placeholder="Email" required className="lead__input" />
              <input name="phone" type="tel" value={form.phone} onChange={handle} placeholder="Telefón" className="lead__input" />
            </div>
            <button type="submit" className="btn btn-primary lead__submit">
              Získajte bezplatný audit
            </button>
            <p className="lead__disclaimer">Bez záväzkov. Vaše údaje nezdieľame s tretími stranami.</p>
          </form>
        )}
      </div>
    </section>
  )
}
