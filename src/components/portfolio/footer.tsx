"use client";

import Link from "next/link";
import { localePath } from "@/i18n/get-dictionary";
import { usePortfolio } from "@/i18n/locale-provider";

export default function PortfolioFooter() {
  const { locale, dict } = usePortfolio();
  const { profile, footer } = dict;

  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. {footer.roleSuffix}.
        </p>
        <div className="flex gap-6 text-sm">
          <Link
            href={localePath(locale, "/imprint")}
            className="text-muted-foreground transition-colors hover:text-accent"
          >
            {footer.imprint}
          </Link>
          <Link
            href={localePath(locale, "/privacy")}
            className="text-muted-foreground transition-colors hover:text-accent"
          >
            {footer.privacy}
          </Link>
        </div>
      </div>
    </footer>
  );
}
