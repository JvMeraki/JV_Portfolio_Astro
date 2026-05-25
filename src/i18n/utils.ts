import { DEFAULTLANG, LABELS } from './ui';

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
        let translation: string = LABELS[lang][key] || LABELS[DEFAULTLANG][key];
        if (!translation) return "";

        if (params) {
            Object.entries(params).forEach(([paramKey, paramValue]) => {
                translation = translation.replace(new RegExp(`{${paramKey}}`, 'g'), String(paramValue));
            });
        }
        return translation;
    }
}