"use client";

import { Mail, Phone } from "lucide-react";
import ContactForm from "@/components/portfolio/contact-form";
import SectionHeader from "@/components/portfolio/section-header";
import { usePortfolio } from "@/i18n/locale-provider";

export default function ContactSection() {
  const { dict } = usePortfolio();
  const { contact, profile } = dict;
  return (
    <section id="contact" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-card/80 to-accent/10 p-8 sm:p-12">
          <SectionHeader
            className="mb-10"
            eyebrow={contact.eyebrow}
            title={contact.title}
            intro={contact.intro}
          />

          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
            <div className="space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-background/50 p-5 transition-colors hover:border-accent/30"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{contact.emailLabel}</p>
                  <p className="font-medium text-foreground">{profile.email}</p>
                </div>
              </a>

              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-background/50 p-5 transition-colors hover:border-accent/30"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{contact.phoneLabel}</p>
                  <p className="font-medium text-foreground">{profile.phone}</p>
                </div>
              </a>
            </div>

            <div className="rounded-2xl border border-white/10 bg-background/50 p-6 sm:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
