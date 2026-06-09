import { FolderKanban } from "lucide-react";
import type { PortfolioProject } from "@/i18n/types";

export type ProjectCardProps = PortfolioProject;

export default function ProjectCard({ title, description, tags }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-white/10 bg-card/60 p-6 backdrop-blur-sm transition-colors hover:border-accent/30">
      <div className="mb-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10">
        <FolderKanban className="h-5 w-5 text-accent" />
      </div>

      <h3 className="mb-2 text-xl font-semibold text-foreground">{title}</h3>
      <p className="mb-5 flex-1 text-muted-foreground">{description}</p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-card/50 px-3 py-1.5 text-sm text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
