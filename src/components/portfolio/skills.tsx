"use client";

import SectionHeader from "@/components/portfolio/section-header";
import SkillBar from "@/components/portfolio/skill-bar";
import TagPills from "@/components/portfolio/tag-pills";
import { usePortfolio } from "@/i18n/locale-provider";
import { cn } from "@/lib/utils";

export default function SkillsSection({
  id = "skills",
  className,
}: {
  id?: string;
  className?: string;
}) {
  const { dict } = usePortfolio();
  const {
    skills: skillItems,
    languages: languageItems,
    training: trainingItems,
    techStack: stackItems,
    tools: toolItems,
    skillsSection: section,
  } = dict;

  return (
    <section
      id={id}
      className={cn("scroll-mt-24 bg-muted/30 py-24", className)}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader eyebrow={section.eyebrow} title={section.title} />

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-5">
            <h3 className="text-lg font-semibold text-foreground">
              {section.coreSkills}
            </h3>
            {skillItems.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                delay={index * 0.08}
              />
            ))}
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="mb-4 text-lg font-semibold text-foreground">
                {section.languages}
              </h3>
              <div className="space-y-4">
                {languageItems.map((language, index) => (
                  <div
                    key={language.name}
                    className="rounded-xl border border-white/10 bg-card/50 p-4"
                  >
                    <div className="mb-1 flex items-center justify-between gap-4">
                      <span className="font-medium text-foreground">
                        {language.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {language.level}
                      </span>
                    </div>
                    <SkillBar
                      name=""
                      level={language.proficiency}
                      showLabel={false}
                      delay={index * 0.08}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold text-foreground">
                {section.training}
              </h3>
              <div className="space-y-3">
                {trainingItems.map((item) => (
                  <div
                    key={`${item.year}-${item.title}`}
                    className="flex gap-4 rounded-xl border border-white/10 bg-card/50 p-4"
                  >
                    <span className="shrink-0 text-sm font-medium text-foreground">
                      {item.year}
                    </span>
                    <span className="text-foreground/90">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">
              {section.techStack}
            </h3>
            <TagPills items={stackItems} />
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">
              {section.tools}
            </h3>
            <TagPills items={toolItems} />
          </div>
        </div>
      </div>
    </section>
  );
}
