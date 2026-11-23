import type { CSSProperties } from 'react'
import { hero } from '../data/content'
import { images } from '../data/images'
import CtaButton from './CtaButton'
import Img from './Img'

export default function Hero() {
  const { heroBgDesktop, heroBgMobile } = images
  const style: CSSProperties & Record<`--${string}`, string> = {}
  if (heroBgDesktop.src) style['--hero-bg-desktop'] = `url("${heroBgDesktop.src}")`
  if (heroBgMobile.src) style['--hero-bg-mobile'] = `url("${heroBgMobile.src}")`

  return (
    <section className="hero" style={style}>
      {!heroBgDesktop.src && (
        <span className="hero__bg-tag">
          Placeholder · fundo do hero ({heroBgDesktop.width}×{heroBgDesktop.height} desktop · {heroBgMobile.width}×
          {heroBgMobile.height} mobile)
        </span>
      )}

      <div className="hero__inner">
        <div className="hero__logo">
          <Img image={images.logo} />
        </div>
        <h1 className="title hero__title">{hero.title}</h1>
        <h1 className="title hero__subtitle">{hero.subtitle}</h1>
        <h1 className="title hero__hint">{hero.hint}</h1>
        <CtaButton className="hero__cta" />
      </div>
    </section>
  )
}
