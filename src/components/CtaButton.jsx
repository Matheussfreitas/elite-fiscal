import { CTA_LABEL, CTA_URL } from '../data/content'

/** Botão dourado "QUERO DISPUTAR UMA VAGA". `className` controla posição/tamanho do wrapper. */
export default function CtaButton({ className = '' }) {
  return (
    <div className={`btn-wrap ${className}`.trim()}>
      <a className="btn" href={CTA_URL} target="_blank" rel="noopener noreferrer">
        {CTA_LABEL}
      </a>
    </div>
  )
}
