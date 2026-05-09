export type Theme = 'light' | 'dark' | 'system';

export function getTheme(): Theme {
    return (localStorage.getItem('theme') as Theme) ?? 'system';
}

export function setTheme(theme: Theme) {
    const root = document.documentElement;

    if (theme === 'system') {
        localStorage.removeItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        root.classList.toggle('dark', prefersDark);
    } else {
        localStorage.setItem('theme', theme);
        root.classList.toggle('dark', theme === 'dark');
    }
}

export function watchSystemTheme() {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    mq.addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            document.documentElement.classList.toggle('dark', e.matches);
        }
    });
}