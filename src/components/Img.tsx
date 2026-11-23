import type { ImageAsset } from '../data/images'

interface ImgProps {
  image: ImageAsset
  className?: string
  light?: boolean
  round?: boolean
}

/**
 * Imagem com placeholder automático.
 * Recebe um item de `src/data/images.ts`; sem `src`, mostra o placeholder
 * já com a proporção e as dimensões recomendadas.
 */
export default function Img({ image, className = '', light = false, round = false }: ImgProps) {
  const { src, alt = '', width, height, label } = image
  const shape = round ? { borderRadius: '50%' } : undefined

  if (src) {
    return <img className={className} src={src} alt={alt} width={width} height={height} style={shape} />
  }

  return (
    <div
      className={`img-placeholder ${light ? 'img-placeholder--light' : ''} ${className}`.trim()}
      style={{ aspectRatio: `${width} / ${height}`, ...shape }}
      role="img"
      aria-label={alt || label}
    >
      <span>{label}</span>
      <small>
        {width}×{height}
      </small>
    </div>
  )
}
