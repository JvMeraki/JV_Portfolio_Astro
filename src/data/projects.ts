import commonProjects from "./projects/common.json";
import enProjects from "./projects/en.json";
import esProjects from "./projects/es.json";
import frProjects from "./projects/fr.json";
import itProjects from "./projects/it.json";
import krProjects from "./projects/kr.json";
import ptProjects from "./projects/pt.json";
import { LOCALE_CODES, type Locale } from "@/i18n/locales";
import { TECHNOLOGIES, type TechnologyKey } from "./technologies";
import type { Project } from "./types";

type LocalizedProject = {
  id: string;
  title: string;
  description: string;
  url: string;
};

const translations = {
  en: enProjects,
  es: esProjects,
  fr: frProjects,
  it: itProjects,
  pt: ptProjects,
  kr: krProjects,
} satisfies Record<Locale, LocalizedProject[]>;

function validateProjects() {
  const commonIds = new Set<string>();

  for (const project of commonProjects) {
    if (commonIds.has(project.id)) {
      throw new Error(`Duplicate project id: ${project.id}`);
    }

    if (!project.image || !Number.isInteger(project.featured)) {
      throw new Error(`Invalid common project data: ${project.id}`);
    }

    try {
      new URL(project.image, "https://portfolio.invalid");
    } catch {
      throw new Error(`Invalid project image: ${project.id}`);
    }

    for (const technology of project.technologies) {
      if (!(technology in TECHNOLOGIES)) {
        throw new Error(`Unknown technology "${technology}" in ${project.id}`);
      }
    }

    commonIds.add(project.id);
  }

  for (const locale of LOCALE_CODES) {
    const localizedIds = new Set<string>();

    for (const project of translations[locale]) {
      if (!commonIds.has(project.id) || localizedIds.has(project.id)) {
        throw new Error(`Invalid project translation id "${project.id}" in ${locale}`);
      }

      if (!project.title || !project.description) {
        throw new Error(`Incomplete project translation "${project.id}" in ${locale}`);
      }

      try {
        new URL(project.url);
      } catch {
        throw new Error(`Invalid project URL "${project.id}" in ${locale}`);
      }

      localizedIds.add(project.id);
    }

    if (localizedIds.size !== commonIds.size) {
      throw new Error(`Missing project translation in ${locale}`);
    }
  }
}

validateProjects();

export function getProjects(locale: Locale): Project[] {
  return commonProjects
    .map((project) => {
      const translation = translations[locale].find(({ id }) => id === project.id);

      if (!translation) {
        throw new Error(`Missing project translation "${project.id}" in ${locale}`);
      }

      return {
        ...project,
        ...translation,
        technologies: project.technologies as TechnologyKey[],
      };
    })
    .sort((first, second) => first.featured - second.featured);
}