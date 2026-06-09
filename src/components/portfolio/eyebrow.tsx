import { cn } from "@/lib/utils";

export function eyebrowClassName(className?: string) {
  return cn(
    "text-xs font-semibold uppercase tracking-[0.28em] text-zinc-400 sm:text-sm",
    className,
  );
}

type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Eyebrow({ children, className }: EyebrowProps) {
  return <p className={eyebrowClassName(cn("mb-3", className))}>{children}</p>;
}
