import type { ElementType, HTMLAttributes } from 'react'
import { useReveal } from '../hooks/useReveal'

type RevealProps = HTMLAttributes<HTMLElement> & { as?: ElementType }

/** Aplica a animação fadeIn quando o bloco entra na tela. */
export default function Reveal({ as: Tag = 'div', className = '', children, ...rest }: RevealProps) {
  const [ref, visible] = useReveal()
  return (
    <Tag ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  )
}
