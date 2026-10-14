import { useState } from 'react'
import './LeadForm.css'

// Web3Forms public access key (safe in client code); submissions are emailed to the recipient set in the Web3Forms dashboard.
const WEB3FORMS_KEY = '7c76cc1f-cace-41b4-b96e-f64b647707d7'
const TYPES = { szco: 'SZČO', sro: 'S.R.O.', new: 'Zakladám firmu' }

export default function LeadForm() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [form, setForm] = useState({ name: '', company: '', type: '', email: '', phone: '' })

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Nový dopyt z isjustice.sk: ${form.name}`,
          from_name: 'isjustice.sk',
          replyto: form.email,
          botcheck: e.target.botcheck.checked,
          'Meno': form.name,
          'Firma': form.company,
          'Typ podnikania': TYPES[form.type] || '',
          'Email': form.email,
          'Telefón': form.phone,
        }),
      })
      const data = await res.json()
      setStatus(res.ok && data.success ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="lead" id="audit">
      <div className="container lead__inner">
        <h2 className="lead__heading">Pripravení na kontrolu<br />nad biznisom?</h2>
        <p className="lead__sub">Zanechajte kontakt a do 24 hodín sa vám ozveme s termínom konzultácie.</p>

        {status === 'sent' ? (
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
            <input type="checkbox" name="botcheck" className="lead__botcheck" tabIndex="-1" autoComplete="off" aria-hidden="true" />
            <button type="submit" className="btn btn-primary lead__submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Odosielam…' : '15-minútová konzultácia zdarma'}
            </button>
            {status === 'error' && (
              <p className="lead__error" role="alert">Odoslanie sa nepodarilo. Skúste to prosím znova.</p>
            )}
            <p className="lead__disclaimer">Bez záväzkov. Vaše údaje nezdieľame s tretími stranami.</p>
          </form>
        )}
      </div>
    </section>
  )
}
