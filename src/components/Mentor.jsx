import { mentor } from '../data/content'
import { images } from '../data/images'
import CtaButton from './CtaButton'
import Img from './Img'

export default function Mentor() {
  return (
    <section className="mentor">
      <div className="mentor__card">
        <div className="mentor__info">
          <h2 className="title mentor__eyebrow">{mentor.eyebrow}</h2>
          <h1 className="title mentor__name">{mentor.name}</h1>
          <div className="title mentor__bio">
            {mentor.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <CtaButton className="mentor__cta" />
        </div>

        <div className="mentor__media">
          <Img image={images.mentor} className="mentor__photo" />
        </div>
      </div>
    </section>
  )
}
