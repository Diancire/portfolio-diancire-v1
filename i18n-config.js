import { defaultLocale, locales } from "./constants/locales";

export const i18n = {
    defaultLocale,
    locales: locales.map((l) => l.locale),
};

export const Locale = i18n.locales[0];