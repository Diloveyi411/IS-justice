import { useState } from 'react'
import './LeadForm.css'
import { lang, t } from '../i18n'
import sk from '../i18n/sk'

// Web3Forms public access key (safe in client code); submissions are emailed to the recipient set in the Web3Forms dashboard.
const WEB3FORMS_KEY = '7c76cc1f-cace-41b4-b96e-f64b647707d7'

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
          // The e-mail to the office stays in Slovak whatever the page language
          subject: `Nový dopyt z isjustice.sk${lang === 'sk' ? '' : ` (${lang.toUpperCase()})`}: ${form.name}`,
          from_name: 'isjustice.sk',
          replyto: form.email,
          botcheck: e.target.botcheck.checked,
          'Meno': form.name,
          'Firma': form.company,
          'Typ podnikania': sk.lead.types[form.type] || '',
          'Email': form.email,
          'Telefón': form.phone,
          'Jazyk': lang.toUpperCase(),
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
        <h2 className="lead__heading">{t.lead.heading[0]}<br />{t.lead.heading[1]}</h2>
        <p className="lead__sub">{t.lead.sub}</p>

        {status === 'sent' ? (
          <div className="lead__success">
            <div className="lead__success-icon">✓</div>
            <strong>{t.lead.sentTitle}</strong>
            <p>{t.lead.sentText}</p>
          </div>
        ) : (
          <form className="lead__form" onSubmit={submit}>
            <div className="lead__row lead__row--3">
              <input name="name" value={form.name} onChange={handle} placeholder={t.lead.name} required className="lead__input" />
              <input name="company" value={form.company} onChange={handle} placeholder={t.lead.company} className="lead__input" />
              <select name="type" value={form.type} onChange={handle} className="lead__input lead__select">
                <option value="">{t.lead.type}</option>
                {Object.entries(t.lead.types).map(([value, label]) => (
                  <option key={value} value={value}>{label}</option>
                ))}
              </select>
            </div>
            <div className="lead__row">
              <input name="email" type="email" value={form.email} onChange={handle} placeholder={t.lead.email} required className="lead__input" />
              <input name="phone" type="tel" value={form.phone} onChange={handle} placeholder={t.lead.phone} className="lead__input" />
            </div>
            <input type="checkbox" name="botcheck" className="lead__botcheck" tabIndex="-1" autoComplete="off" aria-hidden="true" />
            <button type="submit" className="btn btn-primary lead__submit" disabled={status === 'sending'}>
              {status === 'sending' ? t.lead.sending : t.lead.submit}
            </button>
            {status === 'error' && (
              <p className="lead__error" role="alert">{t.lead.error}</p>
            )}
            <p className="lead__disclaimer">{t.lead.disclaimer}</p>
          </form>
        )}
      </div>
    </section>
  )
}
