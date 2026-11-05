import { useEffect, useState } from 'react'

const pad = (n) => String(n).padStart(2, '0')

/**
 * Contagem regressiva até `target` (string ISO ou Date).
 * Retorna { d, h, m, s } já com 2 dígitos, `totalHours` (para formato "47 h") e `done`.
 */
export function useCountdown(target) {
  const end = new Date(target).getTime()
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])

  const total = Math.max(0, Math.floor((end - now) / 1000))
  const days = Math.floor(total / 86400)
  const hours = Math.floor((total % 86400) / 3600)
  const minutes = Math.floor((total % 3600) / 60)
  const seconds = total % 60

  return {
    d: pad(days),
    h: pad(hours),
    m: pad(minutes),
    s: pad(seconds),
    totalHours: pad(days * 24 + hours),
    done: total === 0,
  }
}
