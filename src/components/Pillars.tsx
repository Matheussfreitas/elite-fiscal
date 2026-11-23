import { pillars } from '../data/content'
import CtaButton from './CtaButton'
import Reveal from './Reveal'
import { PillarIcon1, PillarIcon2, PillarIcon3 } from './icons'

const ICONS = [PillarIcon1, PillarIcon2, PillarIcon3]

export default function Pillars() {
  const { title, items } = pillars
  return (
    <section className="pillars">
      <h2 className="title pillars__title">
        {title.before}
        <span className="title__accent">{title.highlight}</span>
      </h2>

      <div className="pillars__grid">
        {items.map((item, i) => {
          const Icon = ICONS[i]
          return (
            <Reveal key={item.title} className="pillars__card" data-label={`PILAR ${i + 1}`}>
              <Icon className="pillars__icon" aria-hidden="true" />
              <h1 className="title pillars__card-title">{item.title}</h1>
              <h1 className="title pillars__card-text">{item.text}</h1>
            </Reveal>
          )
        })}
      </div>

      <CtaButton className="pillars__cta" />
    </section>
  )
}
