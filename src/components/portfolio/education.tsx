"use client";

import { GraduationCap } from "lucide-react";
import { motion } from "motion/react";
import SectionHeader from "@/components/portfolio/section-header";
import { usePortfolio } from "@/i18n/locale-provider";

export default function EducationSection() {
  const { dict } = usePortfolio();
  const { education, educationSection } = dict;

  return (
    <section id="education" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow={educationSection.eyebrow}
          title={educationSection.title}
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {education.map((item, index) => (
            <motion.article
              key={`${item.institution}-${item.period}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              className="flex h-full flex-col rounded-2xl border border-white/10 bg-card/50 p-6 transition-colors hover:border-accent/30"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <p className="mb-2 text-sm text-foreground/80">{item.period}</p>
              <h3 className="mb-1 text-lg font-semibold text-foreground">
                {item.title ?? item.degree}
              </h3>
              <p className="mb-3 text-muted-foreground">{item.institution}</p>
              {item.title && item.degree && (
                <p className="mt-auto text-sm text-foreground/80">{item.degree}</p>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
