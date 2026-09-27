import type { TechnologyKey  } from "./technologies";

export type Project = {
    id: string;
    title: string;
    image: string;
    url: string;
    featured: number;
    description: string;
    technologies: TechnologyKey[];
};