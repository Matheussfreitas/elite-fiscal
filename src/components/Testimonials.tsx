import { testimonials } from '../data/content'
import { images } from '../data/images'
import Img from './Img'
import Reveal from './Reveal'
import { QuoteIcon } from './icons'

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials__row">
        {testimonials.map((t) => (
          <Reveal key={t.name} className="testimonials__card">
            <div className="testimonials__quote">
              <span>
                <QuoteIcon aria-hidden="true" />
              </span>
            </div>
            <h2 className="title testimonials__text">{t.text}</h2>
            <div className="testimonials__author">
              <Img image={images[t.image]} className="testimonials__avatar" light round />
              <div className="testimonials__author-info">
                <h3 className="testimonials__name">{t.name}</h3>
                <p className="testimonials__role">{t.role}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
