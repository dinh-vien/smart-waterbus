import { vi } from './dictionaries/vi'

export type Locale = 'en' | 'vi'

export const LOCALES: { code: Locale; label: string; short: string }[] = [
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'vi', label: 'Tiếng Việt', short: 'VI' },
]

export const DEFAULT_LOCALE: Locale = 'en'

const DICTIONARIES: Record<Locale, Record<string, string>> = { en: {}, vi }

// The active locale lives at module level so plain functions (services, formatters) can read it.
// The provider updates it before rendering and remounts the tree when it changes.
let active: Locale = DEFAULT_LOCALE

export const getLocale = (): Locale => active

export function setActiveLocale(locale: Locale) {
  active = locale
}

export function isLocale(value: unknown): value is Locale {
  return value === 'en' || value === 'vi'
}

type Vars = Record<string, string | number>

function interpolate(text: string, vars?: Vars): string {
  if (!vars) return text
  return text.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in vars ? String(vars[key]) : match,
  )
}

/** Strings worth translating: they contain a letter (skips numbers, times, ids and symbols). */
const HAS_LETTER = /[A-Za-z]/

/**
 * Translates an English source string. The English text is the key, so English needs no
 * dictionary and any string without a translation simply shows in English.
 * `{name}` placeholders are filled from `vars`.
 */
export function t(source: string, vars?: Vars): string {
  const translated = DICTIONARIES[active][source]
  if (
    translated === undefined &&
    active !== 'en' &&
    import.meta.env.DEV &&
    HAS_LETTER.test(source)
  ) {
    reportMissing(source)
  }
  return interpolate(translated ?? source, vars)
}

const missing = new Set<string>()

function reportMissing(source: string) {
  if (missing.has(source)) return
  missing.add(source)
  ;(window as unknown as { __i18nMissing?: string[] }).__i18nMissing = [...missing]
}

/**
 * Deep-translates every string in `value` that has an exact dictionary entry, leaving ids,
 * numbers, icon names and untranslated text as they are. Services use it so mock data comes
 * back already in the active language, like a localized API response.
 */
export function localize<T>(value: T): T {
  if (typeof value === 'string') {
    const translated = DICTIONARIES[active][value]
    return (translated ?? value) as T
  }
  if (Array.isArray(value)) return value.map((item) => localize(item)) as T
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>).map(([key, item]) => [key, localize(item)]),
    ) as T
  }
  return value
}

/** Locale tag for Intl / toLocaleString. */
export function numberLocale(): string {
  return active === 'vi' ? 'vi-VN' : 'en-US'
}
