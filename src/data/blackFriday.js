/**
 * Conteúdo e configuração das duas páginas de Black Friday.
 *
 * ⚠️  ATENÇÃO — valores PLACEHOLDER: datas, preços, descontos, cupom, premiação,
 * link de WhatsApp e checkout foram deixados como exemplo/zerados. Substitua pelos
 * valores reais da campanha antes de publicar.
 */

/* ═════════════ Página 1 — /black-friday (captação de leads) ═════════════ */

export const EVENT = {
  /** Data/hora da abertura (alimenta a contagem regressiva). */
  opening: '2026-11-27T10:00:00-03:00',
  day: '27',
  month: 'NOV',
  weekday: 'Sexta-feira, às 10h',
  channel: 'Ao vivo no YouTube',
  longDate: '27 de novembro',
  whenLabel: '27 de novembro, sexta-feira, às 10h, ao vivo no YouTube',
  /**
   * Endpoint que recebe { email, whatsapp }. Se for `null`, o formulário só valida
   * e exibe a confirmação (nada é enviado). Se tiver `thanksUrl`, redireciona após o envio.
   */
  leadEndpoint: null,
  thanksUrl: null,
}

export const bf = {
  bar: { before: 'FALTAM', after: 'PARA A ABERTURA DA BLACK FRIDAY DA ELITE FISCAL' },
  hero: {
    title: { before: 'A maior Black dos concursos fiscais com oferta ', accent: 'INÉDITA!' },
    subtitle: {
      strong: 'Você vai estudar comigo com o ',
      highlight: 'MENOR preço do ano',
      end: ' na Mentoria Elite Fiscal.',
      rest: ' Vai ser uma condição irrecusável.',
    },
    form: {
      email: 'Seu melhor e-mail',
      whatsapp: 'Seu WhatsApp com DDD',
      button: 'ENTRAR NO GRUPO DA BLACK FRIDAY',
      sending: 'ENVIANDO...',
      success: 'Pronto! Você está na lista. Avisaremos você no WhatsApp quando a Black Friday abrir.',
      errorEmail: 'Confira o seu e-mail.',
      errorWhatsapp: 'Confira o seu WhatsApp com DDD.',
      errorSend: 'Não foi possível enviar agora. Tente novamente em instantes.',
    },
  },
  agenda: {
    title: 'O que você vai ver no dia',
    paragraphs: [
      'A maior parte dos concurseiros fiscais <strong>não trava por falta de material</strong>. Trava por não saber <strong>o que priorizar, quando revisar e como medir se está evoluindo</strong>.',
      'Quem só começa a se organizar depois do edital publicado chega na prova sem ter fechado o conteúdo. Em concursos fiscais, com quinze a vinte matérias, <strong>a preparação que decide acontece no pré-edital</strong>.',
    ],
    items: [
      'Como montar um <strong>plano de estudos sobre o tempo que você realmente tem</strong>, e não sobre o tempo ideal',
      'Como funciona o <strong>método de alta performance</strong>: volume de estudos com estratégia, controle emocional e consistência',
      'O que os <strong>aprovados fizeram de diferente</strong>, com nome e concurso',
      {
        highlight: true,
        text: 'Uma <strong>condição de entrada na mentoria que nunca foi oferecida antes</strong>, e que só vai existir neste dia',
      },
    ],
    cta: 'INSCREVA-SE GRATUITAMENTE',
  },
  approved: {
    title: { before: 'Quem já passou por esse ', accent: 'caminho' },
  },
  bio: {
    title: { before: 'Quem sou ', accent: 'eu' },
    paragraphs: [
      'Sou o <strong>Wyllo Marques</strong>, Auditor Fiscal da Receita Federal e ex-Analista do TRT — <strong>1º lugar no RN</strong>. Formado em Engenharia Elétrica pela UFRN, exerci atribuições de Delegado da RFB por 13 anos.',
      'Atuei por mais de 12 anos como professor em cursos preparatórios e hoje guio concurseiros pessoalmente na <strong>Mentoria Elite Fiscal</strong>, unindo método, estratégia e a disciplina que aprendi como atleta de triathlon.',
    ],
  },
  final: {
    title: { before: 'A condição só é revelada ', accent: 'no dia 27' },
    cta: 'QUERO PARTICIPAR DA BLACK FRIDAY DA ELITE FISCAL',
  },
}

/* ═════════════ Página 2 — /black-friday/promo (oferta) ═════════════ */

export const PROMO = {
  /**
   * 'cupom' → dia do cupom: mostra cupom, premiação e passos com cupom.
   * 'lote'  → lote especial: sem cupom e sem premiação.
   */
  phase: 'cupom',
  coupon: 'ELITE10',
  couponEnds: '2026-11-27T23:59:00-03:00',
  lotEnds: '2026-11-29T23:59:00-03:00',
  couponEndsLabel: 'sexta, 27 de novembro, até 23h59',
  lotEndsLabel: 'domingo, 29 de novembro, às 23h59',
  discountMax: 'XX%',
  pixDiscount: '10%',
  /** Número com DDI+DDD (ex.: 5584999999999). Vazio = esconde o botão flutuante. */
  whatsapp: '',
  whatsappText: 'Olá! Vim da página da Black Friday da Elite Fiscal e quero tirar uma dúvida sobre a mentoria.',
}

export const promoText = {
  barBrand: 'Black Friday da Elite Fiscal',
  chip: 'Lote especial · Black Friday',
  heroTitle: { before: 'O menor preço do ano para ', accent: 'entrar na mentoria.' },
  offerLabel: 'Mentoria Elite Fiscal',
  from: 'a partir de',
  offerInstallment: '12x R$',
  offerValue: { cupom: '000,00', lote: '000,00' },
  offerPerDay: {
    cupom: 'ou R$ 0,00 por dia no plano de 2 anos, com o cupom de hoje',
    lote: 'ou R$ 0,00 por dia no plano de 2 anos',
  },
  seePlans: 'Ver os planos',
  prizes: {
    title: 'Premiação para os primeiros',
    sub: 'Quem garantir a vaga primeiro, a partir da abertura, recebe:',
    items: [
      { range: 'Do 1º ao 5º', value: 'R$ 000 no PIX' },
      { range: 'Do 6º ao 10º', value: 'R$ 000 de cashback' },
      { range: 'Do 11º ao 15º', value: 'R$ 000 de cashback' },
    ],
    note: 'A lista dos premiados sai uma semana depois da abertura. Se houver cancelamento, o próximo da fila assume o lugar.',
  },
  features: {
    title: 'O que você tem na mentoria',
    items: [
      { icon: 'diagnostic', title: 'Diagnóstico individual de estudos', text: 'Formulário e videochamada para entender o seu nível, o seu tempo e o seu objetivo de cargo.' },
      { icon: 'people', title: 'Encontros quinzenais', text: 'Videochamadas individuais ou em grupo para tirar dúvidas e ajustar a rota. Os 3 primeiros são individuais.' },
      { icon: 'chat', title: 'Direcionamento pelo WhatsApp', text: 'Acesso contínuo ao mentor, com ajustes periódicos de rota.' },
      { icon: 'shield', title: 'Plano estratégico personalizado', text: 'Feito sobre o seu concurso e a sua rotina, com avaliações periódicas.' },
      { icon: 'chart', title: 'Método testado de alto nível', text: 'Material de estudos do Estratégia Concursos organizado de forma lógica e sustentável.' },
      { icon: 'screen', title: 'Plataforma “Tutory” incluída', text: 'Acompanhamento focado em execução, não em teoria.' },
    ],
    note: 'Nesta Black Friday nenhum plano tem meses de bônus. O acesso é exatamente o do plano contratado.',
  },
  steps: {
    title: 'Como garantir a sua vaga',
    cupom: [
      '<b>Escolha o plano</b> e clique no botão. Você vai para o checkout com o preço da Black já aplicado.',
      '<b>Aplique o cupom</b> <code>{coupon}</code> no campo de cupom. Ele dá <b>mais 10%</b> sobre o preço da Black e vale só hoje.',
      '<b>Pague no PIX</b> e o sistema tira <b>mais 10%</b> sobre o valor já com o cupom. No cartão, até 12x.',
    ],
    lote: [
      '<b>Escolha o plano</b> e clique no botão. Você vai para o checkout com o preço da Black já aplicado.',
      '<b>Pague no PIX</b> e o sistema tira <b>mais 10%</b>. No cartão, até 12x.',
    ],
    couponNote: 'Um cupom por compra. Cupons não se somam.',
  },
  plans: {
    title: 'Escolha o seu plano',
    choose: 'Primeiro, escolha:',
    tabs: [
      { id: 'sem', label: 'Sem material', hint: 'Para quem já tem material de estudo', sub: 'Para quem já tem material de estudo.' },
      { id: 'com', label: 'Com material', hint: 'Inclui a Assinatura Premium do Estratégia', sub: 'Inclui a Assinatura Premium do Estratégia Concursos.' },
    ],
    buy: 'Quero este plano',
    badge: 'MENOR CUSTO POR DIA',
    footnote: {
      cupom: 'Todos os percentuais desta página são calculados sobre o preço de tabela, considerando o pagamento no PIX e o cupom {coupon}.',
      lote: 'Todos os percentuais desta página são calculados sobre o preço de tabela, considerando o pagamento no PIX.',
    },
    // Valores PLACEHOLDER. `checkoutUrl: null` usa o link padrão (CTA_URL).
    items: {
      sem: [
        { name: '6 meses sem material', off: '-00,0%', access: '6 meses de acesso', list: 'R$ 0.000,00', installment: '000,00', perDay: 'R$ 0,00 por dia no PIX', cash: 'R$ 0.000,00', pix: 'R$ 0.000,00', checkoutUrl: null },
        { name: '1 ano sem material', off: '-00,0%', access: '12 meses de acesso', list: 'R$ 0.000,00', installment: '000,00', perDay: 'R$ 0,00 por dia no PIX', cash: 'R$ 0.000,00', pix: 'R$ 0.000,00', checkoutUrl: null },
        { name: '2 anos sem material', off: '-00,0%', access: '24 meses de acesso', list: 'R$ 0.000,00', installment: '000,00', perDay: 'R$ 0,00 por dia no PIX', cash: 'R$ 0.000,00', pix: 'R$ 0.000,00', checkoutUrl: null, featured: true },
      ],
      com: [
        { name: '6 meses com material', off: '-00,0%', access: '6 meses de acesso', list: 'R$ 0.000,00', installment: '000,00', perDay: 'R$ 0,00 por dia no PIX', cash: 'R$ 0.000,00', pix: 'R$ 0.000,00', checkoutUrl: null },
        { name: '1 ano com material', off: '-00,0%', access: '12 meses de acesso', list: 'R$ 0.000,00', installment: '000,00', perDay: 'R$ 0,00 por dia no PIX', cash: 'R$ 0.000,00', pix: 'R$ 0.000,00', checkoutUrl: null },
        { name: '2 anos com material', off: '-00,0%', access: '24 meses de acesso', list: 'R$ 0.000,00', installment: '000,00', perDay: 'R$ 0,00 por dia no PIX', cash: 'R$ 0.000,00', pix: 'R$ 0.000,00', checkoutUrl: null, featured: true },
      ],
    },
  },
  how: {
    title: 'Saiba como funciona a mentoria',
    sub: 'Neste vídeo, eu explico como funciona a metodologia e a mentoria para te conduzir, passo a passo, até a aprovação.',
  },
  proof: {
    title: 'Quem já passou pela mentoria',
    sub: 'Alunos aprovados em concursos fiscais e públicos. Veja o que alguns deles contam.',
  },
  mentor: {
    eyebrow: 'Quem vai te acompanhar',
    name: 'Wyllo Marques',
    paragraphs: [
      '<b>Auditor Fiscal da Receita Federal.</b> Ex-Auditor Fiscal do Trabalho e ex-Analista do TRT — 1º lugar no RN. Formado em Engenharia Elétrica pela UFRN.',
      'Atuou por mais de 12 anos como professor em cursos preparatórios e conhece de perto as histórias de sucesso e, principalmente, os erros que levam à reprovação.',
    ],
    stats: [
      { value: '1º lugar RN', label: 'ex-Analista do TRT' },
      { value: 'Auditor Fiscal', label: 'vive a carreira que você quer' },
      { value: 'Triatleta', label: '7 pódios Ironman e 70.3' },
    ],
  },
  guarantee: {
    seal: '7',
    sealLabel: 'dias',
    title: 'Garantia de satisfação',
    text: 'Você entra, recebe o acesso e conhece o método. Se em 7 dias perceber que não é para você, devolvemos o valor integral.',
  },
  final: {
    title: 'O menor preço do ano está no ar',
    cupom: 'Hoje, com o cupom <b>{coupon}</b>, você paga ainda menos. O cupom vale até <b>{couponEnds}</b>, e o lote especial segue até {lotEnds}.',
    lote: 'O lote especial vale até <b>{lotEnds}</b>. Depois disso, a condição muda.',
    cta: 'Escolher o meu plano',
  },
  notice: {
    tag: { cupom: 'Só hoje', lote: 'Lote especial' },
    cupom: '<b>Só hoje, {couponEnds}: cupom {coupon}</b> com mais 10% sobre o preço da Black. O lote especial segue até {lotEnds}.',
    lote: '<b>O lote especial vale até {lotEnds}.</b> Depois disso, a condição muda.',
  },
  footer: {
    brand: 'Wyllo Marques',
    line1: 'Auditor Fiscal da Receita Federal.',
    line2: 'Mentoria Elite Fiscal. Dúvidas: ',
    link: 'fale com o time comercial',
  },
}
