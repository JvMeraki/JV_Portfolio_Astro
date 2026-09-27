import commonExperience from "./experience/common.json";
import enExperience from "./experience/en.json";
import esExperience from "./experience/es.json";
import frExperience from "./experience/fr.json";
import itExperience from "./experience/it.json";
import krExperience from "./experience/kr.json";
import ptExperience from "./experience/pt.json";
import { LOCALE_CODES, type Locale } from "@/i18n/locales";

export type ExperienceItem = {
  role: string;
  entity: string;
  date: string;
  tasks: string[];
};

const translations = {
  en: enExperience,
  es: esExperience,
  fr: frExperience,
  it: itExperience,
  pt: ptExperience,
  kr: krExperience,
} satisfies Record<Locale, Omit<ExperienceItem, "entity">[] & { id: string }[]>;

const commonIds = new Set(commonExperience.map(({ id }) => id));

for (const locale of LOCALE_CODES) {
  const localizedIds = new Set(translations[locale].map(({ id }) => id));

  if (localizedIds.size !== commonIds.size || [...commonIds].some((id) => !localizedIds.has(id))) {
    throw new Error(`Missing experience translation in ${locale}`);
  }
}

export function getExperience(locale: Locale): ExperienceItem[] {
  return commonExperience
    .map((common) => {
      const translation = translations[locale].find(({ id }) => id === common.id);

      if (!translation) {
        throw new Error(`Missing experience item "${common.id}" in ${locale}`);
      }

      return { ...translation, entity: common.entity, order: common.order };
    })
    .sort((first, second) => first.order - second.order)
    .map((item) => {
      const { order, id, ...experience } = item;
      void order;
      void id;
      return experience;
    });
}