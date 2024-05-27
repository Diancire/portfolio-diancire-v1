import { defaultLocale, locales } from "./constants/locales";

export const i18n = {
    defaultLocale,
    locales: locales.map((l) => l.locale),
};

// Accédez directement au type Locale sans l'annotation de type
export const Locale = i18n.locales[0];