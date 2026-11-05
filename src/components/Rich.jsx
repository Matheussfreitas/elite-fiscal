/**
 * Renderiza texto com marcação simples (<strong>, <b>, <code>) vinda de src/data/*.js.
 * O conteúdo é estático e escrito por nós — nunca passe texto digitado por usuários aqui.
 * `vars` substitui marcadores como {coupon}.
 */
export default function Rich({ as: Tag = 'span', html, vars = {}, ...rest }) {
  const text = html.replace(/\{(\w+)\}/g, (_, key) => vars[key] ?? `{${key}}`)
  return <Tag {...rest} dangerouslySetInnerHTML={{ __html: text }} />
}
