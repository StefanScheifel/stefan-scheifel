"use client";

import { Briefcase } from "lucide-react";
import { motion } from "motion/react";
import SectionHeader from "@/components/portfolio/section-header";
import { usePortfolio } from "@/i18n/locale-provider";

export default function ExperienceSection() {
  const { dict } = usePortfolio();
  const { experience, experienceSection } = dict;

  return (
    <section id="experience" className="scroll-mt-24 bg-muted/30 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow={experienceSection.eyebrow}
          title={experienceSection.title}
        />

        <div className="relative space-y-8">
          <motion.div
            aria-hidden
            className="absolute top-6 bottom-6 left-[1.125rem] w-px origin-top -translate-x-1/2 bg-white/10"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
          {experience.map((job, index) => (
            <motion.article
              key={`${job.company}-${job.period}`}
              initial={{ opacity: 0, x: 48 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.55,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              className="relative grid grid-cols-[2.25rem_minmax(0,1fr)] gap-4 sm:gap-6"
            >
              <div className="flex justify-center pt-6">
                <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-background">
                  <Briefcase className="h-4 w-4 text-white" />
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-card/60 p-6 backdrop-blur-sm">
                <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {job.role}
                    </h3>
                    <p className="text-base font-medium text-foreground">
                      {job.company}
                      {job.location ? (
                        <span className="font-normal text-muted-foreground">
                          {" "}
                          · {job.location}
                        </span>
                      ) : null}
                    </p>
                    {"context" in job && job.context && (
                      <p className="mt-1 text-sm text-muted-foreground">
                        {job.context}
                      </p>
                    )}
                  </div>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-sm text-muted-foreground">
                    {job.period}
                  </span>
                </div>

                <ul className="space-y-2">
                  {job.tasks.map((task) => (
                    <li
                      key={task}
                      className="flex gap-2 text-muted-foreground before:mt-2 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-accent"
                    >
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
