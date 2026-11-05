import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Img from '../components/Img'
import Reveal from '../components/Reveal'
import Rich from '../components/Rich'
import FeatureIcon from '../components/promo/FeatureIcon'
import { CTA_URL } from '../data/content'
import { PROMO, promoText as t } from '../data/blackFriday'
import { images, proofPrints, proofVideos } from '../data/images'
import { useCountdown } from '../hooks/useCountdown'

const phase = PROMO.phase // 'cupom' | 'lote'
const isCoupon = phase === 'cupom'
const vars = {
  coupon: PROMO.coupon,
  couponEnds: PROMO.couponEndsLabel,
  lotEnds: PROMO.lotEndsLabel,
}
const target = isCoupon ? PROMO.couponEnds : PROMO.lotEnds

function PlayButton() {
  return (
    <span className="pm-play" aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <path d="M8 5v14l11-7z" fill="currentColor" />
      </svg>
    </span>
  )
}

function CouponBox() {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(PROMO.coupon)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* navegador sem permissão de clipboard: o cupom continua visível */
    }
  }

  return (
    <div className="pm-coupon">
      <div>
        <span>CUPOM DE HOJE</span>
        <strong>{PROMO.coupon}</strong>
      </div>
      <button type="button" onClick={copy}>
        {copied ? 'Copiado!' : 'Copiar'}
      </button>
    </div>
  )
}

function Plans() {
  const [tab, setTab] = useState(t.plans.tabs[0].id)
  const current = t.plans.tabs.find((x) => x.id === tab)

  return (
    <div className="pm-plans">
      <h2 className="pm-h2">{t.plans.title}</h2>
      <p className="pm-choose">{t.plans.choose}</p>

      <div className="pm-tabs" role="tablist">
        {t.plans.tabs.map((x) => (
          <button
            key={x.id}
            type="button"
            role="tab"
            aria-selected={x.id === tab}
            className={x.id === tab ? 'is-on' : ''}
            onClick={() => setTab(x.id)}
          >
            <b>{x.label}</b>
            <small>{x.hint}</small>
          </button>
        ))}
      </div>
      <p className="pm-tabsub">{current.sub}</p>

      <div className="pm-cards">
        {t.plans.items[tab].map((p) => (
          <div key={p.name} className={`pm-card ${p.featured ? 'is-featured' : ''}`}>
            {p.featured && <span className="pm-card__seal">{t.plans.badge}</span>}
            <div className="pm-card__head">
              <h3>{p.name}</h3>
              <span className="pm-card__off">{p.off}</span>
            </div>
            <div className="pm-card__access">{p.access}</div>
            <div className="pm-card__x">
              de <s>{p.list}</s>
            </div>
            <div className="pm-card__x">por 12x de</div>
            <div className="pm-card__price">
              <small>R$</small>
              {p.installment}
            </div>
            <div>
              <span className="pm-card__day">{p.perDay}</span>
            </div>
            <ul>
              <li>
                <span>À vista</span>
                <span>{p.cash}</span>
              </li>
              <li>
                <span>No PIX</span>
                <b>{p.pix}</b>
              </li>
            </ul>
            <a className="btn pm-card__buy" href={p.checkoutUrl || CTA_URL} target="_blank" rel="noopener noreferrer">
              {t.plans.buy}
            </a>
          </div>
        ))}
      </div>

      <Rich as="p" className="pm-foot" html={t.plans.footnote[phase]} vars={vars} />
    </div>
  )
}

export default function BlackFridayPromo() {
  const { d, h, m, s, totalHours } = useCountdown(target)
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowFixed(window.scrollY > 700)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const steps = t.steps[phase]
  const whatsappHref = PROMO.whatsapp
    ? `https://wa.me/${PROMO.whatsapp}?text=${encodeURIComponent(PROMO.whatsappText)}`
    : null

  return (
    <div className="pm">
      <div className="pm-tape" aria-hidden="true" />

      {/* ───── Barra ───── */}
      <div className="pm-bar">
        <span>{t.barBrand}</span> · Lote especial até {PROMO.lotEndsLabel}
        <small>{isCoupon ? `Condição de hoje · Cupom ${PROMO.coupon}` : 'Lote especial, sem cupom'}</small>
      </div>

      {/* ───── Hero + card de oferta ───── */}
      <section className="pm-hero">
        <div className="pm-w pm-hero__grid">
          <div>
            <div className="pm-logo">
              <Img image={images.logo} />
            </div>
            <div className="pm-chip">{t.chip}</div>
            <h1 className="pm-h1">
              {t.heroTitle.before}
              <em>{t.heroTitle.accent}</em>
            </h1>
            <p className="pm-lead">
              Mentoria Elite Fiscal com <b>até {PROMO.discountMax} de desconto</b> e <b>mais {PROMO.pixDiscount} no PIX</b>. Um plano
              de estudos individual, encontros quinzenais com o Wyllo e acompanhamento até a aprovação.
            </p>
          </div>

          <div className="pm-offer">
            <div className="pm-offer__label">{t.offerLabel}</div>
            <div className="pm-offer__from">{t.from}</div>
            <div className="pm-offer__val">
              <small>{t.offerInstallment}</small>
              {t.offerValue[phase]}
            </div>
            <div className="pm-offer__day">{t.offerPerDay[phase]}</div>

            {isCoupon && <CouponBox />}

            <div className="pm-time">
              <span>{isCoupon ? 'O cupom acaba em' : 'O lote especial acaba em'}</span>
              <div className="pm-cd">
                <i>
                  <b>{totalHours}</b>
                  <small>HORAS</small>
                </i>
                <i>
                  <b>{m}</b>
                  <small>MIN</small>
                </i>
                <i>
                  <b>{s}</b>
                  <small>SEG</small>
                </i>
              </div>
            </div>

            <a className="btn pm-offer__cta" href="#planos">
              {t.seePlans} <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </section>

      <div className="pm-tape" aria-hidden="true" />

      {/* ───── Aviso ───── */}
      <div className="pm-notice">
        <div className="pm-w">
          <span className="pm-notice__tag">{t.notice.tag[phase]}</span>
          <Rich as="p" html={t.notice[phase]} vars={vars} />
        </div>
      </div>
      <div className="pm-tape" aria-hidden="true" />

      {/* ───── Premiação (somente no dia do cupom) ───── */}
      {isCoupon && (
        <section className="pm-sec pm-sec--dark">
          <div className="pm-w">
            <h2 className="pm-h2 pm-center">{t.prizes.title}</h2>
            <p className="pm-sub pm-center">{t.prizes.sub}</p>
            <div className="pm-prizes">
              {t.prizes.items.map((p) => (
                <div key={p.range} className="pm-prize">
                  <span>{p.range}</span>
                  <b>{p.value}</b>
                </div>
              ))}
            </div>
            <p className="pm-obs pm-center">{t.prizes.note}</p>
          </div>
        </section>
      )}

      {/* ───── O que você tem na mentoria ───── */}
      <section className="pm-sec pm-sec--dark pm-sec--features">
        <div className="pm-w">
          <h2 className="pm-h2 pm-center">{t.features.title}</h2>
          <div className="pm-features">
            {t.features.items.map((f) => (
              <Reveal key={f.title} className="pm-feature">
                <div className="pm-feature__icon">
                  <FeatureIcon name={f.icon} />
                </div>
                <div>
                  <b>{f.title}</b>
                  <p>{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="pm-obs pm-center">{t.features.note}</p>
        </div>
      </section>

      {/* ───── Planos ───── */}
      <section className="pm-sec pm-sec--navy" id="planos">
        <div className="pm-w">
          <h2 className="pm-h2 pm-center">{t.steps.title}</h2>
          <div className={`pm-steps ${isCoupon ? '' : 'pm-steps--two'}`}>
            {steps.map((step, i) => (
              <div key={step} className="pm-step">
                <i>{i + 1}</i>
                <Rich html={step} vars={vars} />
              </div>
            ))}
          </div>
          {isCoupon && <p className="pm-obs pm-center">{t.steps.couponNote}</p>}

          <Plans />
        </div>
      </section>

      {/* ───── Como funciona (vídeo) ───── */}
      <section className="pm-sec pm-sec--light">
        <div className="pm-w pm-w--narrow">
          <h2 className="pm-h2 pm-center">{t.how.title}</h2>
          <p className="pm-sub pm-center">{t.how.sub}</p>
          <div className="pm-video">
            <Img image={images.promoVideo} />
            <PlayButton />
          </div>
        </div>
      </section>

      {/* ───── Depoimentos ───── */}
      <section className="pm-sec pm-sec--dark">
        <div className="pm-w">
          <h2 className="pm-h2 pm-center">{t.proof.title}</h2>
          <p className="pm-sub pm-center">{t.proof.sub}</p>

          <div className="pm-vids">
            {proofVideos.map((v) => (
              <div key={v.name} className="pm-vid">
                <Img image={v} />
                <PlayButton />
                <div className="pm-vid__cap">
                  <b>{v.name}</b>
                  {v.role}
                </div>
              </div>
            ))}
          </div>

          <div className="pm-prints">
            {proofPrints.map((p, i) => (
              <Img key={i} image={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ───── Mentor ───── */}
      <section className="pm-sec pm-sec--navy">
        <div className="pm-w pm-mentor">
          <Img image={images.mentor} className="pm-mentor__photo" />
          <div>
            <p className="pm-eyebrow">{t.mentor.eyebrow}</p>
            <h2 className="pm-h2">{t.mentor.name}</h2>
            {t.mentor.paragraphs.map((p) => (
              <Rich key={p} as="p" className="pm-text" html={p} />
            ))}
            <div className="pm-stats">
              {t.mentor.stats.map((st) => (
                <div key={st.value}>
                  <b>{st.value}</b>
                  {st.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───── Garantia ───── */}
      <section className="pm-sec pm-sec--dark pm-guarantee">
        <div className="pm-w pm-w--narrow">
          <div className="pm-gbox">
            <div className="pm-seal">
              <b>{t.guarantee.seal}</b>
              {t.guarantee.sealLabel}
            </div>
            <div>
              <h3>{t.guarantee.title}</h3>
              <p>{t.guarantee.text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ───── CTA final ───── */}
      <section className="pm-final">
        <div className="pm-w pm-w--narrow">
          <h2 className="pm-h2 pm-center">{t.final.title}</h2>
          <Rich as="p" className="pm-text pm-center" html={t.final[phase]} vars={vars} />
          <a className="btn pm-final__cta" href="#planos">
            {t.final.cta}
          </a>
        </div>
      </section>

      <div className="pm-tape" aria-hidden="true" />

      <Footer />

      {/* ───── Elementos flutuantes ───── */}
      {whatsappHref && (
        <a className="pm-wpp" href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp">
          <svg viewBox="0 0 32 32" aria-hidden="true">
            <path
              fill="currentColor"
              d="M16 3C8.8 3 3 8.7 3 15.8c0 2.5.7 4.9 2 7L3 29l6.4-2c2 1.1 4.3 1.7 6.6 1.7 7.2 0 13-5.7 13-12.8S23.2 3 16 3zm0 23.4c-2.1 0-4.1-.6-5.9-1.7l-.4-.3-3.8 1.2 1.2-3.7-.3-.4c-1.2-1.8-1.9-3.9-1.9-6.1C4.9 9.8 9.9 4.9 16 4.9s11.1 4.9 11.1 10.9S22.1 26.4 16 26.4z"
            />
          </svg>
        </a>
      )}

      <div className={`pm-fixed ${showFixed ? 'is-on' : ''}`}>
        <div>
          <b>{isCoupon ? `CUPOM ${PROMO.coupon}` : 'LOTE ESPECIAL'}</b>
          acaba em{' '}
          <span>
            {d}d {h}:{m}:{s}
          </span>
        </div>
        <a href="#planos">Ver planos</a>
      </div>
    </div>
  )
}
