"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  localeFlags,
  localeLabels,
  localeNames,
  locales,
  type Locale,
} from "@/i18n/config";
import { usePortfolio } from "@/i18n/locale-provider";
import { cn } from "@/lib/utils";

function swapLocaleInPath(pathname: string, nextLocale: Locale): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && locales.includes(segments[0] as Locale)) {
    segments[0] = nextLocale;
    return `/${segments.join("/")}`;
  }
  return `/${nextLocale}`;
}

export default function LanguageSwitcher({ className }: { className?: string }) {
  const pathname = usePathname();
  const { locale } = usePortfolio();

  return (
    <div
      className={cn(
        "flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-0.5 text-xs font-medium",
        className,
      )}
      role="group"
      aria-label="Language"
    >
      {locales.map((code) => {
        const href = swapLocaleInPath(pathname, code);
        const active = locale === code;
        return (
          <Link
            key={code}
            href={href}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 transition-colors",
              active
                ? "bg-accent text-accent-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
            aria-current={active ? "true" : undefined}
            aria-label={localeNames[code]}
            title={localeNames[code]}
          >
            <span className="text-base leading-none" aria-hidden>
              {localeFlags[code]}
            </span>
            <span>{localeLabels[code]}</span>
          </Link>
        );
      })}
    </div>
  );
}
