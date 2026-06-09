"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  type ReactNode,
} from "react";
import type { Locale } from "@/i18n/config";
import { getDictionary, getNavLinks } from "@/i18n/get-dictionary";
import type { NavLink, PortfolioDictionary } from "@/i18n/types";

type PortfolioContextValue = {
  locale: Locale;
  dict: PortfolioDictionary;
  navLinks: NavLink[];
};

const PortfolioContext = createContext<PortfolioContextValue | null>(null);

export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  const value = useMemo(
    () => ({
      locale,
      dict: getDictionary(locale),
      navLinks: getNavLinks(locale),
    }),
    [locale],
  );

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error("usePortfolio must be used within LocaleProvider");
  }
  return context;
}
