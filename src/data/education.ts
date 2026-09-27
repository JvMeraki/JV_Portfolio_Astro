import commonEducation from "./education/common.json";
import enEducation from "./education/en.json";
import esEducation from "./education/es.json";
import frEducation from "./education/fr.json";
import itEducation from "./education/it.json";
import krEducation from "./education/kr.json";
import ptEducation from "./education/pt.json";
import { LOCALE_CODES, type Locale } from "@/i18n/locales";

export type EducationItem = {
  entity: string;
  date: string;
  title: string;
};

const translations = {
  en: enEducation,
  es: esEducation,
  fr: frEducation,
  it: itEducation,
  pt: ptEducation,
  kr: krEducation,
} satisfies Record<Locale, (EducationItem & { id: string })[]>;

const commonIds = new Set(commonEducation.map(({ id }) => id));

for (const locale of LOCALE_CODES) {
  const localizedIds = new Set(translations[locale].map(({ id }) => id));

  if (localizedIds.size !== commonIds.size || [...commonIds].some((id) => !localizedIds.has(id))) {
    throw new Error(`Missing education translation in ${locale}`);
  }
}

export function getEducation(locale: Locale): EducationItem[] {
  return commonEducation
    .map((common) => {
      const translation = translations[locale].find(({ id }) => id === common.id);

      if (!translation) {
        throw new Error(`Missing education item "${common.id}" in ${locale}`);
      }

      const { id, ...education } = translation;
      void id;
      return { ...education, order: common.order };
    })
    .sort((first, second) => first.order - second.order)
    .map((item) => {
      const { order, ...education } = item;
      void order;
      return education;
    });
}