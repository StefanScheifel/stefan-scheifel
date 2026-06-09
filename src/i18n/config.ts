export const locales = ["de", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** Persisted when the user picks a locale; overrides Accept-Language on later visits. */
export const LOCALE_COOKIE = "portfolio-locale";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const localeLabels: Record<Locale, string> = {
  de: "DE",
  en: "EN",
};

export const localeFlags: Record<Locale, string> = {
  de: "🇩🇪",
  en: "🇬🇧",
};

export const localeNames: Record<Locale, string> = {
  de: "Deutsch",
  en: "English",
};
