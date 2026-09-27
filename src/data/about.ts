import enAbout from "./about/en.json";
import esAbout from "./about/es.json";
import frAbout from "./about/fr.json";
import itAbout from "./about/it.json";
import krAbout from "./about/kr.json";
import ptAbout from "./about/pt.json";
import { LOCALE_CODES, type Locale } from "@/i18n/locales";

export type AboutItem = {
  title: string;
  description: string;
  emphasis?: string;
};

const translations = {
  en: enAbout,
  es: esAbout,
  fr: frAbout,
  it: itAbout,
  pt: ptAbout,
  kr: krAbout,
} satisfies Record<Locale, AboutItem[]>;

for (const locale of LOCALE_CODES) {
  const items = translations[locale];

  if (items.length !== 4 || items.some(({ title, description }) => !title || !description)) {
    throw new Error(`Invalid About content in ${locale}`);
  }
}

export function getAbout(locale: Locale): AboutItem[] {
  return translations[locale];
}