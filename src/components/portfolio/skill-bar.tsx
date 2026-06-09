"use client";

import { motion } from "motion/react";

export type SkillBarProps = {
  name: string;
  level: number;
  maxLevel?: number;
  showLabel?: boolean;
  delay?: number;
};

export default function SkillBar({
  name,
  level,
  maxLevel = 5,
  showLabel = true,
  delay = 0,
}: SkillBarProps) {
  const widthPercent = (level / maxLevel) * 100;

  return (
    <div>
      {showLabel && name ? (
        <div className="mb-2 flex items-center justify-between gap-4">
          <span className="text-sm font-medium text-foreground">{name}</span>
          <span className="text-xs text-muted-foreground">
            {level}/{maxLevel}
          </span>
        </div>
      ) : null}
      <div className="h-2 overflow-hidden rounded-full bg-white/5">
        <motion.div
          className="h-full rounded-full bg-white/90 shadow-[0_0_8px_oklch(1_0_0/0.25)]"
          initial={{ width: 0 }}
          whileInView={{ width: `${widthPercent}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
