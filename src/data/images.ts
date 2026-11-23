/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  IMAGENS DO SITE — troque os `null` pelo caminho da imagem.  ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 * Enquanto o valor for `null`, o site mostra um placeholder com as dimensões
 * recomendadas. Para substituir:
 *   1. Coloque o arquivo em  /public/images/  (ex.: public/images/mentor.webp)
 *   2. Informe o caminho aqui:  src: '/images/mentor.webp'
 */
export interface ImageAsset {
  src: string | null
  alt?: string
  width: number
  height: number
  label: string
}

export const images = {
  // Logo branca no topo da página
  logo: { src: '/images/logo.png', alt: 'Elite Fiscal', width: 263, height: 127, label: 'LOGO' },

  // Fundo do primeiro bloco (desktop e mobile/tablet)
  heroBgDesktop: { src: '/images/hero-bg.webp', width: 1536, height: 2688, label: 'FUNDO HERO (DESKTOP)' },
  heroBgMobile: { src: '/images/hero-bg.webp', width: 1536, height: 2688, label: 'FUNDO HERO (MOBILE)' },

  // Foto do mentor
  mentor: { src: '/images/hero-bg.webp', alt: 'Wyllo Marques', width: 800, height: 1000, label: 'FOTO DO MENTOR' },

  // Fotos dos depoimentos (quadradas, exibidas em círculo)
  testimonial1: { src: null, alt: 'Camilla Pascally', width: 190, height: 190, label: 'FOTO' },
  testimonial2: { src: null, alt: 'Nayara Meneses', width: 190, height: 190, label: 'FOTO' },
  testimonial3: { src: null, alt: 'Carlos Augusto', width: 190, height: 190, label: 'FOTO' },

  /* ───── Páginas de Black Friday ───── */

  // Foto do mentor (busto, proporção 4:5) no topo de /black-friday
  bfPhoto: { src: null, alt: 'Wyllo Marques', width: 800, height: 1000, label: 'FOTO DO MENTOR' },

  // Vídeo "Saiba como funciona a mentoria" em /black-friday/promo (miniatura 16:9)
  promoVideo: { src: null, alt: 'Como funciona a mentoria', width: 1280, height: 720, label: 'MINIATURA DO VÍDEO' },
} satisfies Record<string, ImageAsset>

export type ImageKey = keyof typeof images

/** Miniaturas dos vídeos de depoimento (/black-friday/promo). Edite `src`, `name` e `role`. */
export interface ProofVideo extends ImageAsset {
  name: string
  role: string
}

export const proofVideos: ProofVideo[] = [
  { name: 'Camilla Pascally', role: 'Aprovada no TJ/DF' },
  { name: 'Nayara Meneses', role: 'Aprovada na UERN' },
  { name: 'Carlos Augusto', role: 'Aprovado na PC/RN' },
].map((p) => ({ ...p, src: null, alt: `Depoimento de ${p.name}`, width: 1280, height: 720, label: 'MINIATURA DO VÍDEO' }))

/** Prints de depoimentos (/black-friday/promo). Adicione/remova itens livremente. */
export const proofPrints: ImageAsset[] = Array.from({ length: 6 }, (_, i) => ({
  src: null,
  alt: `Print de depoimento ${i + 1}`,
  width: 600,
  height: 800,
  label: 'PRINT DE DEPOIMENTO',
}))
