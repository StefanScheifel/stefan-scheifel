import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isLocale, LOCALE_COOKIE, locales } from "@/i18n/config";
import {
  getPreferredLocale,
  persistLocaleCookie,
} from "@/i18n/get-preferred-locale";

const localePattern = new RegExp(`^/(${locales.join("|")})(/|$)`);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const localeMatch = pathname.match(localePattern);
  if (localeMatch) {
    const locale = localeMatch[1];
    if (isLocale(locale)) {
      const response = NextResponse.next();
      persistLocaleCookie(response, locale);
      return response;
    }
    return NextResponse.next();
  }

  const preferredLocale = getPreferredLocale(
    request.cookies.get(LOCALE_COOKIE)?.value,
    request.headers.get("accept-language"),
  );

  const url = request.nextUrl.clone();
  url.pathname = `/${preferredLocale}${pathname === "/" ? "" : pathname}`;
  const response = NextResponse.redirect(url);
  persistLocaleCookie(response, preferredLocale);
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
