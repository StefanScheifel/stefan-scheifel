import Link from "next/link";
import PortfolioFooter from "@/components/portfolio/footer";
import PortfolioNav from "@/components/portfolio/nav";
import { isLocale } from "@/i18n/config";
import { getDictionary, localePath } from "@/i18n/get-dictionary";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function PrivacyPage({ params }: Props) {
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
        <h1 className="mb-8 text-3xl font-bold">{legal.privacy.title}</h1>
        <div className="space-y-6 text-muted-foreground">
          <section>
            <h2 className="mb-2 text-lg font-semibold text-foreground">
              {legal.privacy.responsibleHeading}
            </h2>
            <p>{profile.name}</p>
            <p>{profile.location}</p>
            <p>
              {legal.privacy.emailPrefix} {profile.email}
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-semibold text-foreground">
              {legal.privacy.dataCollectionHeading}
            </h2>
            <p>{legal.privacy.dataCollectionText}</p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-semibold text-foreground">
              {legal.privacy.hostingHeading}
            </h2>
            <p>{legal.privacy.hostingText}</p>
          </section>
        </div>
      </main>
      <PortfolioFooter />
    </div>
  );
}
