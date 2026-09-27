import enLabels from "./locales/en.json";
import esLabels from "./locales/es.json";
import frLabels from "./locales/fr.json";
import itLabels from "./locales/it.json";
import krLabels from "./locales/kr.json";
import ptLabels from "./locales/pt.json";
import { DEFAULT_LOCALE, type Locale } from "./locales";

export { LANGUAGES } from "./locales";

export const DEFAULTLANG = DEFAULT_LOCALE;

type UIDictionary = typeof enLabels;

export const LABELS = {
  en: enLabels,
  es: esLabels,
  fr: frLabels,
  it: itLabels,
  pt: ptLabels,
  kr: krLabels,
} satisfies Record<Locale, UIDictionary>;

const requiredKeys = Object.keys(enLabels);

for (const [locale, labels] of Object.entries(LABELS)) {
  for (const key of requiredKeys) {
    if (!Object.hasOwn(labels, key)) {
      throw new Error(`Missing UI translation "${key}" in ${locale}`);
    }
  }
}

export type UIDictionaryKeys = keyof UIDictionary;
