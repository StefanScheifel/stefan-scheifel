import { cn } from "@/lib/utils";

export type TagPillsProps = {
  items: string[];
  className?: string;
};

export default function TagPills({ items, className }: TagPillsProps) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full border border-white/10 bg-card/50 px-3 py-1.5 text-sm text-muted-foreground"
        >
          {item}
        </span>
      ))}
    </div>
  );
}
