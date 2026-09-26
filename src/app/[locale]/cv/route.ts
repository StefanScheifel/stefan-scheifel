import { NextResponse } from "next/server";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { buildCvPdf } from "@/lib/cv-pdf";

export const runtime = "nodejs";

type RouteContext = {
  params: Promise<{ locale: string }>;
};

export async function GET(_request: Request, context: RouteContext) {
  const { locale } = await context.params;
  if (!isLocale(locale)) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const dict = getDictionary(locale);
  const pdf = await buildCvPdf(dict);

  return new NextResponse(Buffer.from(pdf), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename="${dict.cv.fileName}"`,
      "Cache-Control": "public, max-age=3600",
    },
  });
}
