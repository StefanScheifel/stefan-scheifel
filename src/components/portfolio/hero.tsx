"use client";

import { ArrowDown, Mail } from "lucide-react";
import AnimatedName from "@/components/portfolio/animated-name";
import Eyebrow from "@/components/portfolio/eyebrow";
import HeroContactCard from "@/components/portfolio/hero-contact-card";
import { localePath } from "@/i18n/get-dictionary";
import { usePortfolio } from "@/i18n/locale-provider";

export default function HeroSection() {
  const { locale, dict } = usePortfolio();
  const { profile, hero } = dict;

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.08),transparent_55%)]" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <Eyebrow className="mb-4">{profile.title}</Eyebrow>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            <AnimatedName name={profile.name} />
          </h1>
          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {hero.intro}
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              <Mail className="h-4 w-4" />
              {hero.emailCta}
            </a>
            <a
              href={`${localePath(locale)}#experience`}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent/40 hover:text-accent"
            >
              {hero.resumeCta}
            </a>
          </div>
        </div>

        <HeroContactCard />
      </div>

      <a
        href={`${localePath(locale)}#skills`}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce text-muted-foreground transition-colors hover:text-accent sm:inline-flex"
        aria-label={hero.scrollAriaLabel}
      >
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  );
}
