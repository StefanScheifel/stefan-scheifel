"use client";

import { motion } from "motion/react";

type AnimatedLettersProps = {
  text: string;
  className?: string;
  startDelay?: number;
};

function AnimatedLetters({
  text,
  className,
  startDelay = 0,
}: AnimatedLettersProps) {
  return (
    <span className={className}>
      {text.split("").map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.1,
            delay: startDelay + index * 0.05,
            ease: "easeOut",
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

type AnimatedNameProps = {
  name: string;
  className?: string;
};

export default function AnimatedName({ name, className }: AnimatedNameProps) {
  const [firstName, ...rest] = name.split(" ");
  const lastName = rest.join(" ");
  const letterDelay = 0.06;

  return (
    <span className={className} aria-label={name}>
      <span className="sr-only">{name}</span>
      <span aria-hidden="true">
        <AnimatedLetters text={firstName} />
        {lastName ? (
          <span className="block text-accent">
            <AnimatedLetters
              text={lastName}
              startDelay={firstName.length * letterDelay + 0.15}
            />
          </span>
        ) : null}
      </span>
    </span>
  );
}
