import { benefits } from '../data/content'
import { CheckIcon } from './icons'

export default function Benefits() {
  const { title, items, footnotes } = benefits
  return (
    <section className="benefits">
      <div className="benefits__inner">
        <h2 className="title benefits__title">
          {title.before}
          <span className="benefits__title-accent">{title.highlight}</span>
        </h2>

        <div className="benefits__grid">
          {items.map((text) => (
            <div key={text} className="benefits__item">
              <div className="benefits__check">
                <span>
                  <CheckIcon aria-hidden="true" />
                </span>
              </div>
              <h2 className="title benefits__item-text">{text}</h2>
            </div>
          ))}
        </div>

        <h2 className="title benefits__footnote">
          {footnotes.map((note, i) => (
            <span key={note}>
              {i > 0 && <br />}
              {note}
            </span>
          ))}
        </h2>
      </div>
    </section>
  )
}
