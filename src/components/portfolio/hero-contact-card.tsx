"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Mail, MapPin, Phone } from "lucide-react";
import Eyebrow from "@/components/portfolio/eyebrow";
import { usePortfolio } from "@/i18n/locale-provider";

export default function HeroContactCard() {
  const { dict } = usePortfolio();
  const { contact, hero, profile } = dict;
  return (
    <motion.div
      className="mx-auto w-full max-w-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, delay: 1, ease: "easeOut" }}
    >
      <div className="rounded-3xl border border-white/10 bg-card/60 p-6 backdrop-blur-sm sm:p-8">
        <div className="flex items-center gap-6 sm:gap-8">
          <div className="min-w-0 flex-1">
            <Eyebrow className="mb-4">{contact.eyebrow}</Eyebrow>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <p className="font-medium text-foreground">{profile.location}</p>
              </div>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-accent"
              >
                <Mail className="h-5 w-5 shrink-0 text-accent" />
                <span className="truncate">{profile.email}</span>
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-accent"
              >
                <Phone className="h-5 w-5 shrink-0 text-accent" />
                {profile.phone}
              </a>
            </div>
          </div>

          <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border border-white/10 p-1 sm:h-32 sm:w-32">
            <Image
              src="/profile.png"
              alt={hero.portraitAlt}
              fill
              className="rounded-full object-cover object-top"
              priority
              sizes="(max-width: 640px) 112px, 128px"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
