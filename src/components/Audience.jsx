import { audience } from '../data/content'
import CtaButton from './CtaButton'
import Reveal from './Reveal'
import { AudienceIcon1, AudienceIcon2, AudienceIcon3, AudienceIcon4, AudienceIcon5, ScrollIcon } from './icons'

const ICONS = [AudienceIcon1, AudienceIcon2, AudienceIcon3, AudienceIcon4, AudienceIcon5]

export default function Audience() {
  const { title, items } = audience
  return (
    <section className="audience">
      <div className="audience__scroll">
        <span className="audience__scroll-icon">
          <ScrollIcon aria-hidden="true" />
        </span>
      </div>

      <h2 className="title audience__title">
        {title.before}
        <span className="title__accent">{title.highlight}</span>
        {title.after}
      </h2>

      <div className="audience__grid">
        {items.map((text, i) => {
          const Icon = ICONS[i]
          return (
            <Reveal key={text} className="audience__card">
              <div className="audience__card-icon">
                <Icon aria-hidden="true" />
              </div>
              <h3 className="audience__card-title">{text}</h3>
            </Reveal>
          )
        })}
      </div>

      <CtaButton className="audience__cta" />
    </section>
  )
}
