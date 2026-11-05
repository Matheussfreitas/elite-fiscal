import { footer } from '../data/content'

export default function Footer() {
  const { copyright, credit } = footer
  return (
    <footer className="footer">
      <div className="footer__row">
        {/* Coluna vazia: mantém o copyright centralizado no desktop */}
        <div className="footer__col footer__col--spacer" aria-hidden="true" />

        <div className="footer__col footer__col--copy">
          <h2 className="footer__text footer__text--inter">
            <b>{copyright.strong}</b>
            {copyright.rest}
          </h2>
        </div>

        <div className="footer__col footer__col--credit">
          <h2 className="footer__text footer__text--figtree footer__text--end">
            <b>{credit.label}</b>
            <br />
            {credit.name}
          </h2>
          <a className="footer__link" href={credit.url} target="_blank" rel="noopener noreferrer">
            {credit.urlLabel}
          </a>
        </div>
      </div>
    </footer>
  )
}
