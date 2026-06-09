"use client";

import { motion } from "motion/react";
import ProjectCard from "@/components/portfolio/project-card";
import SectionHeader from "@/components/portfolio/section-header";
import { usePortfolio } from "@/i18n/locale-provider";
import { cn } from "@/lib/utils";

export default function ProjectsSection({
  id = "projects",
  className,
}: {
  id?: string;
  className?: string;
}) {
  const { dict } = usePortfolio();
  const { projects, projectsSection } = dict;

  return (
    <section id={id} className={cn("scroll-mt-24 py-24", className)}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow={projectsSection.eyebrow}
          title={projectsSection.title}
          intro={projectsSection.intro}
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              className="h-full"
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
