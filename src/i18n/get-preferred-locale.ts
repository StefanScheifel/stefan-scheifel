import type { NextResponse } from "next/server";
import {
  defaultLocale,
  isLocale,
  LOCALE_COOKIE,
  locales,
  type Locale,
} from "@/i18n/config";

function languageTagToLocale(tag: string): Locale | null {
  const primary = tag.trim().toLowerCase().split("-")[0];
  return isLocale(primary) ? primary : null;
}

/** Match browser/system `Accept-Language` against supported locales. */
export function negotiateLocaleFromAcceptLanguage(
  acceptLanguage: string | null | undefined,
): Locale {
  if (!acceptLanguage) {
    return defaultLocale;
  }

  const ranked = acceptLanguage
    .split(",")
    .map((part, index) => {
      const [tag, ...params] = part.trim().split(";");
      let q = 1 - index * 0.001;
      for (const param of params) {
        const trimmed = param.trim();
        if (trimmed.startsWith("q=")) {
          const parsed = Number.parseFloat(trimmed.slice(2));
          if (!Number.isNaN(parsed)) {
            q = parsed;
          }
        }
      }
      return { tag, q };
    })
    .sort((a, b) => b.q - a.q);

  for (const { tag } of ranked) {
    const locale = languageTagToLocale(tag);
    if (locale) {
      return locale;
    }
  }

  return defaultLocale;
}

export function getPreferredLocale(
  cookieValue: string | undefined,
  acceptLanguage: string | null | undefined,
): Locale {
  if (cookieValue && isLocale(cookieValue)) {
    return cookieValue;
  }
  return negotiateLocaleFromAcceptLanguage(acceptLanguage);
}

export function persistLocaleCookie(
  response: NextResponse,
  locale: Locale,
): void {
  if (!locales.includes(locale)) {
    return;
  }
  response.cookies.set(LOCALE_COOKIE, locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
}
