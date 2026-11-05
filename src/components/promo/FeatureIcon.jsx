const PATHS = {
  diagnostic: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M9 8h6M9 12h6M9 16h4" />
    </>
  ),
  people: (
    <>
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M15 14.5c3 0 6 2 6 5.5" />
    </>
  ),
  chat: <path d="M4 5h16v11H8l-4 4z" />,
  shield: (
    <>
      <path d="M12 3l8 4v5c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V7z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  chart: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
  screen: (
    <>
      <rect x="3" y="5" width="18" height="12" rx="2" />
      <path d="M10 9l5 2-5 2z" />
      <path d="M8 21h8" />
    </>
  ),
}

/** Ícone de linha (24×24) usado na grade "O que você tem na mentoria". */
export default function FeatureIcon({ name }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {PATHS[name]}
    </svg>
  )
}
