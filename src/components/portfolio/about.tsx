"use client";

import { CheckCircle2 } from "lucide-react";
import SectionHeader from "@/components/portfolio/section-header";
import { usePortfolio } from "@/i18n/locale-provider";

export default function AboutSection() {
  const { dict } = usePortfolio();
  const { about, highlights } = dict;

  return (
    <section id="about" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow={about.eyebrow}
          title={about.title}
          intro={about.intro}
        />

        <div className="grid gap-6 md:grid-cols-2">
          {highlights.map((item) => (
            <div
              key={item}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-card/50 p-5 transition-colors hover:border-accent/30"
            >
              <CheckCircle2 className="h-5 w-5 shrink-0 text-green-500" />
              <p className="text-foreground/90">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
