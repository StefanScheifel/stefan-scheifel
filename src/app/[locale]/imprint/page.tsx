import Link from "next/link";
import PortfolioFooter from "@/components/portfolio/footer";
import PortfolioNav from "@/components/portfolio/nav";
import { getDictionary, localePath } from "@/i18n/get-dictionary";
import { isLocale } from "@/i18n/config";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ImprintPage({ params }: Props) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    notFound();
  }
  const { legal, profile } = getDictionary(localeParam);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PortfolioNav />
      <main className="mx-auto max-w-3xl px-4 py-28 sm:px-6">
        <Link
          href={localePath(localeParam)}
          className="mb-8 inline-block text-sm text-accent transition-opacity hover:opacity-80"
        >
          {legal.backToHome}
        </Link>
        <h1 className="mb-8 text-3xl font-bold">{legal.imprint.title}</h1>
        <div className="space-y-6 text-muted-foreground">
          <section>
            <h2 className="mb-2 text-lg font-semibold text-foreground">
              {legal.imprint.tmgHeading}
            </h2>
            <p>{profile.name}</p>
            <p>{profile.location}</p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-semibold text-foreground">
              {legal.imprint.contactHeading}
            </h2>
            <p>
              {legal.imprint.phonePrefix} {profile.phone}
            </p>
            <p>
              {legal.imprint.emailPrefix} {profile.email}
            </p>
          </section>
        </div>
      </main>
      <PortfolioFooter />
    </div>
  );
}
