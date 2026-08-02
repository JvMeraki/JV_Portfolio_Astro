import { DEFAULTLANG, LABELS } from './ui';

export function interpolate(
    text: string,
    params?: Record<string, string | number>
) {
    if (!params) return text;

    return Object.entries(params).reduce(
        (result, [key, value]) =>
            result.replaceAll(`{${key}}`, String(value)),
        text
    );
}

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (lang in LABELS) { 
        return lang as keyof typeof LABELS
    };
    return DEFAULTLANG;
}

export function useTranslations(lang: keyof typeof LABELS) {
    return function t(
        key: keyof typeof LABELS[typeof DEFAULTLANG],
        params?: Record<string, string | number>
    ) {
        const translation = LABELS[lang][key] ?? LABELS[DEFAULTLANG][key];
        
        return interpolate(translation, params);
    }
}