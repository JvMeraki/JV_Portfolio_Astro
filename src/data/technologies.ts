type Technology = {
    label: string;
    lightIcon?: string;
    darkIcon?: string;
};

export const TECHNOLOGIES = {
    astro: {
        label: "Astro",
        lightIcon: "astro-dark",
    },
    svelte: {
        label: "Svelte",
    },
    typeScript: {
        label: "TypeScript",
    },
    tailwind: {
        label: "Tailwind CSS",
    },
    nodejs: {
        label: "Node.js",
    },
    python: {
        label: "Python",
    },
    HTML5: {
        label: "HTML5",
    },
    CSS3: {
        label: "CSS3",
    },
    javaScript: {
        label: "JavaScript",
    },
    react: {
        label: "React",
    },
    vue: {
        label: "Vue.js",
    },
    git: {
        label: "Git",
    },
    flask: {
        label: "Flask",
        darkIcon: "flask-light",
    },
    figma: {
        label: "Figma",
    },
    mysql: {
        label: "MySQL",
        darkIcon: "mysql-light",
    },
} satisfies Record<string, Technology>;

export type TechnologyKey = keyof typeof TECHNOLOGIES;

export function getTechnology(name: TechnologyKey) {
    const {
        label,
        lightIcon,
        darkIcon,
    } = TECHNOLOGIES[name] as Technology;

    return {
        label,
        light: `/svg/${lightIcon ?? name}.svg`,
        dark: `/svg/${darkIcon ?? name}.svg`,
    };
}