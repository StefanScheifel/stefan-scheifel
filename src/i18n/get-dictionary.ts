import type { Locale } from "@/i18n/config";
import { de } from "@/i18n/dictionaries/de";
import { en } from "@/i18n/dictionaries/en";
import type { NavLink, NavSectionId, PortfolioDictionary } from "@/i18n/types";

const dictionaries: Record<Locale, PortfolioDictionary> = {
  de,
  en,
};

const navSectionOrder: NavSectionId[] = [
  "experience",
  "projects",
  "education",
  "skills",
  "contact",
];

export function getDictionary(locale: Locale): PortfolioDictionary {
  return dictionaries[locale];
}

export function getNavLinks(locale: Locale): NavLink[] {
  const dict = getDictionary(locale);
  return navSectionOrder.map((id) => ({
    href: `/${locale}#${id}`,
    label: dict.nav.links[id],
  }));
}

export function localePath(locale: Locale, path = ""): string {
  const normalized = path.startsWith("/") ? path : path ? `/${path}` : "";
  return `/${locale}${normalized}`;
}
