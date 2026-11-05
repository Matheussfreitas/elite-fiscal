import { useRef } from 'react'
import Footer from '../components/Footer'
import Img from '../components/Img'
import Reveal from '../components/Reveal'
import Rich from '../components/Rich'
import LeadForm from '../components/bf/LeadForm'
import { useCountdown } from '../hooks/useCountdown'
import { bf, EVENT } from '../data/blackFriday'
import { testimonials } from '../data/content'
import { images } from '../data/images'

function CheckCircle() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="#EAB76E" />
      <path d="M7 12.5l3.2 3.2L17 9" fill="none" stroke="#090F37" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CountdownBar() {
  const { d, h, m, s } = useCountdown(EVENT.opening)
  return (
    <div className="bf-bar" role="timer">
      {bf.bar.before}
      <span className="bf-bar__cd">
        {[
          [d, 'D'],
          [h, 'H'],
          [m, 'M'],
          [s, 'S'],
        ].map(([value, unit]) => (
          <span key={unit}>
            {value}
            <small>{unit}</small>
          </span>
        ))}
      </span>
      {bf.bar.after}
    </div>
  )
}

function Tapes() {
  const items = Array.from({ length: 14 })
  return (
    <div className="bf-tapes" aria-hidden="true">
      {['t1', 't2'].map((cls) => (
        <div key={cls} className={`bf-tape ${cls}`}>
          {items.map((_, i) => (
            <b key={i}>
              BLACK <i>FRIDAY</i>
            </b>
          ))}
        </div>
      ))}
    </div>
  )
}

export default function BlackFriday() {
  const emailRef = useRef(null)

  /** Botões "inscreva-se" levam ao formulário do topo. */
  function goToForm(e) {
    e.preventDefault()
    document.getElementById('bf-topo')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setTimeout(() => emailRef.current?.focus({ preventScroll: true }), 600)
  }

  const { hero, agenda, approved, bio, final } = bf

  return (
    <div className="bf">
      <CountdownBar />

      {/* ───── Hero com formulário ───── */}
      <section className="bf-hero" id="bf-topo">
        <div className="bf-wrap bf-hero__grid">
          <div className="bf-col">
            <div className="bf-logo">
              <Img image={images.logo} />
            </div>

            <div className="bf-date">
              <span className="bf-date__day">
                {EVENT.day}
                <small>{EVENT.month}</small>
              </span>
              <span className="bf-date__info">
                {EVENT.weekday}
                <b>{EVENT.channel}</b>
              </span>
            </div>

            <h1 className="bf-title">
              {hero.title.before}
              <em>{hero.title.accent}</em>
            </h1>

            <p className="bf-sub">
              <strong>
                {hero.subtitle.strong}
                <b>{hero.subtitle.highlight}</b>
                {hero.subtitle.end}
              </strong>
              {hero.subtitle.rest}
            </p>

            <LeadForm emailRef={emailRef} />
          </div>

          <div className="bf-photo">
            <Img image={images.bfPhoto} />
          </div>
        </div>
      </section>

      <Tapes />

      {/* ───── O que você vai ver ───── */}
      <section className="bf-sec bf-sec--dark">
        <div className="bf-wrap">
          <div className="bf-narrow">
            <h2 className="bf-h2">
              {agenda.title} <span>{EVENT.longDate}</span>
            </h2>
            {agenda.paragraphs.map((p) => (
              <Rich key={p} as="p" className="bf-text" html={p} />
            ))}
            <ul className="bf-list">
              {agenda.items.map((item) => {
                const highlight = typeof item === 'object'
                const text = highlight ? item.text : item
                return (
                  <li key={text} className={highlight ? 'is-new' : ''}>
                    <CheckCircle />
                    <Rich html={text} />
                  </li>
                )
              })}
            </ul>
            <a className="btn bf-cta" href="#bf-topo" onClick={goToForm}>
              {agenda.cta}
            </a>
          </div>
        </div>
      </section>

      {/* ───── Aprovados ───── */}
      <section className="bf-sec bf-sec--light">
        <div className="bf-wrap">
          <h2 className="bf-h2 bf-h2--center">
            {approved.title.before}
            <span>{approved.title.accent}</span>
          </h2>
          <div className="bf-grid">
            {testimonials.map((t) => (
              <Reveal key={t.name} className="bf-ap">
                <Img image={images[t.image]} className="bf-ap__avatar" light round />
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Quem sou eu ───── */}
      <section className="bf-sec bf-sec--dark">
        <div className="bf-wrap bf-bio">
          <Img image={images.mentor} className="bf-bio__photo" />
          <div>
            <h2 className="bf-h2">
              {bio.title.before}
              <span>{bio.title.accent}</span>
            </h2>
            {bio.paragraphs.map((p) => (
              <Rich key={p} as="p" className="bf-text" html={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ───── CTA final ───── */}
      <section className="bf-final">
        <div className="bf-wrap">
          <h2 className="bf-h2 bf-h2--center">
            {final.title.before}
            <span>{final.title.accent}</span>
          </h2>
          <p className="bf-when">{EVENT.whenLabel}</p>
          <a className="btn bf-cta" href="#bf-topo" onClick={goToForm}>
            {final.cta}
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
