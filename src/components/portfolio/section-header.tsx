import Eyebrow from "@/components/portfolio/eyebrow";
import { cn } from "@/lib/utils";

export type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  className?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  intro,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 max-w-2xl", className)}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {intro ? (
        <p className="mt-4 text-lg text-muted-foreground">{intro}</p>
      ) : null}
    </div>
  );
}
