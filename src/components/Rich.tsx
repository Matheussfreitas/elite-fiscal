import type { ElementType, HTMLAttributes } from 'react'

type RichProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType
  html: string
  vars?: Record<string, string>
}

/**
 * Renderiza texto com marcação simples (<strong>, <b>, <code>) vinda de src/data/*.ts.
 * O conteúdo é estático e escrito por nós — nunca passe texto digitado por usuários aqui.
 * `vars` substitui marcadores como {coupon}.
 */
export default function Rich({ as: Tag = 'span', html, vars = {}, ...rest }: RichProps) {
  const text = html.replace(/\{(\w+)\}/g, (_: string, key: string) => vars[key] ?? `{${key}}`)
  return <Tag {...rest} dangerouslySetInnerHTML={{ __html: text }} />
}
