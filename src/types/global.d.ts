export {}

declare global {
  interface Window {
    /** Google Tag Manager data layer. */
    dataLayer?: Record<string, unknown>[]
  }
}
