import { useState } from 'react'
import { EVENT, bf } from '../../data/blackFriday'

const t = bf.hero.form

/** Máscara (DD) 99999-9999 */
function maskPhone(value) {
  const d = value.replace(/\D/g, '').replace(/^55(?=\d{10,11}$)/, '').slice(0, 11)
  if (d.length > 7) return `(${d.slice(0, 2)}) ${d.slice(2, d.length - 4)}-${d.slice(-4)}`
  if (d.length > 2) return `(${d.slice(0, 2)}) ${d.slice(2)}`
  return d
}

function WhatsappIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.6.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.1 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a.9.9 0 0 0-.7.3 2.8 2.8 0 0 0-.9 2.1 5 5 0 0 0 1 2.6 11.3 11.3 0 0 0 4.3 3.8c1.6.7 2.2.7 3 .6a2.6 2.6 0 0 0 1.7-1.2 2.1 2.1 0 0 0 .1-1.2c0-.1-.2-.2-.4-.3Z"
      />
    </svg>
  )
}

/** Formulário de captação (e-mail + WhatsApp). Ligue o envio em `EVENT.leadEndpoint`. */
export default function LeadForm({ emailRef }) {
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [error, setError] = useState({ field: null, text: '' })
  const [status, setStatus] = useState('idle') // idle | sending | done

  async function handleSubmit(e) {
    e.preventDefault()
    if (honeypot) return // bot

    const cleanEmail = email.trim().toLowerCase()
    const digits = whatsapp.replace(/\D/g, '')
    if (!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(cleanEmail)) return setError({ field: 'email', text: t.errorEmail })
    if (digits.length < 10 || digits.length > 11) return setError({ field: 'whatsapp', text: t.errorWhatsapp })

    setError({ field: null, text: '' })
    setStatus('sending')

    try {
      if (EVENT.leadEndpoint) {
        const res = await fetch(EVENT.leadEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: cleanEmail, whatsapp: digits, page: window.location.pathname }),
        })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
      }
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({ event: 'lead_ok' })
      if (EVENT.thanksUrl) {
        window.location.href = EVENT.thanksUrl
        return
      }
      setStatus('done')
    } catch {
      setStatus('idle')
      setError({ field: null, text: t.errorSend })
    }
  }

  if (status === 'done') {
    return (
      <p className="bf-success" role="status">
        {t.success}
      </p>
    )
  }

  return (
    <form id="bf-form" className="bf-form" onSubmit={handleSubmit} noValidate>
      <input
        ref={emailRef}
        className={`bf-input ${error.field === 'email' ? 'is-error' : ''}`}
        type="email"
        name="email"
        placeholder={t.email}
        autoComplete="email"
        inputMode="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
          setError({ field: null, text: '' })
        }}
        required
      />
      <input
        className={`bf-input ${error.field === 'whatsapp' ? 'is-error' : ''}`}
        type="tel"
        name="whatsapp"
        placeholder={t.whatsapp}
        autoComplete="tel-national"
        inputMode="tel"
        maxLength={16}
        value={whatsapp}
        onChange={(e) => {
          setWhatsapp(maskPhone(e.target.value))
          setError({ field: null, text: '' })
        }}
        required
      />
      <input
        className="bf-honeypot"
        type="text"
        name="site"
        tabIndex={-1}
        autoComplete="off"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        aria-hidden="true"
      />
      <button className="bf-submit" type="submit" disabled={status === 'sending'}>
        <WhatsappIcon />
        <span>{status === 'sending' ? t.sending : t.button}</span>
      </button>
      {error.text && <div className="bf-error">{error.text}</div>}
    </form>
  )
}
