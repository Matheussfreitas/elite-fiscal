# Elite Fiscal — React + Vite

Migração do site https://elitefiscal.com.br/ (WordPress/Elementor) para React + Vite.

```bash
npm install
npm run dev      # desenvolvimento
npm run build    # gera /dist
```

## Páginas

| Rota | O que é | Conteúdo |
| --- | --- | --- |
| `/` | Home (mentoria) | `src/data/content.js` |
| `/black-friday` | Captação de leads para a abertura da Black Friday | `src/data/blackFriday.js` (`EVENT`, `bf`) |
| `/black-friday/promo` | Oferta, cupom e planos | `src/data/blackFriday.js` (`PROMO`, `promoText`) |

> As rotas são tratadas no navegador (react-router). Em produção, configure o servidor para devolver `index.html` em qualquer rota (SPA fallback).

### Antes de publicar as páginas de Black Friday
Os valores abaixo são **exemplos/zerados** em `src/data/blackFriday.js`:
- Datas da campanha (`EVENT.opening`, `PROMO.couponEnds`, `PROMO.lotEnds`) e rótulos.
- Preços, descontos, cupom (`PROMO.coupon`) e premiação.
- Links de checkout (`checkoutUrl` de cada plano; se vazio usa o link padrão do CTA).
- WhatsApp (`PROMO.whatsapp`; vazio esconde o botão flutuante).
- Formulário de leads: `EVENT.leadEndpoint` (se `null`, só valida e mostra confirmação, **nada é enviado**) e `EVENT.thanksUrl`.
- `PROMO.phase`: `'cupom'` (dia do cupom, com premiação) ou `'lote'` (lote especial).

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Textos, links e botão CTA | `src/data/content.js` |
| Imagens (hoje são placeholders) | `src/data/images.js` |
| Estilos por seção / responsivo | `src/styles/sections.css` |
| Cores, fontes, botão, placeholder | `src/styles/base.css` |
| Ícones (SVG) | `src/components/icons.jsx` |

## Trocar um placeholder por foto

1. Coloque o arquivo em `public/images/` (ex.: `public/images/mentor.webp`).
2. Em `src/data/images.js`, troque `src: null` por `src: '/images/mentor.webp'`.

Placeholders atuais: logo, fundo do hero (desktop e mobile), foto do mentor, 3 fotos de depoimentos e, nas páginas de Black Friday, foto do topo, miniaturas de vídeo e prints de depoimentos.

## Fonte

O original usa **Futura PT** (licença comercial, não incluída). Foi usada **Jost** (Google Fonts) como substituta.
Para usar a Futura PT: adicione os arquivos em `public/fonts/` e declare o `@font-face` em `src/styles/base.css`
— a variável `--font-display` já a prioriza.

## Estrutura

Home: `Hero → Audience → Pillars → Benefits → Mentor → Testimonials → Footer` (ver `src/pages/Home.jsx`).
