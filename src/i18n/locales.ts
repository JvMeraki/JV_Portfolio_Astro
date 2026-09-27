export const LANGUAGES = {
  es: { label: "Español", flag: "es", htmlLang: "es" },
  en: { label: "English", flag: "us", htmlLang: "en" },
  fr: { label: "Français", flag: "fr", htmlLang: "fr" },
  it: { label: "Italiano", flag: "it", htmlLang: "it" },
  pt: { label: "Português", flag: "pt", htmlLang: "pt" },
  kr: { label: "한국어", flag: "kr", htmlLang: "ko" },
} as const;

export type Locale = keyof typeof LANGUAGES;

export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_CODES = Object.keys(LANGUAGES) as Locale[];