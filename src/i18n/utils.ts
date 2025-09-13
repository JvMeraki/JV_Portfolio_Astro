import { DEFAULTLANG, LABELS } from './ui';

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (lang in LABELS) {
        return lang as keyof typeof LABELS
    };
    return DEFAULTLANG;
}

export function useTranslations(lang: keyof typeof LABELS) {
    return function t(key: keyof typeof LABELS[typeof DEFAULTLANG]) {
        return LABELS[lang][key] || LABELS[DEFAULTLANG][key];
    }
}