import type { TechnologyKey  } from "./technologies";

export type Project = {
    title: string;
    image: string;
    url: string;
    featured: number;
    description?: string;
    technologies?: TechnologyKey[];
};