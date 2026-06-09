"use client";

import Link from "next/link";
import { useState } from "react";
import { Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { localePath } from "@/i18n/get-dictionary";
import { usePortfolio } from "@/i18n/locale-provider";

const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const { locale, dict } = usePortfolio();
  const { contact, profile } = dict;
  const { form } = contact;
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!accessKey) {
      setStatus("error");
      return;
    }

    const formData = new FormData(event.currentTarget);
    const payload = {
      access_key: accessKey,
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone") || "",
      message: formData.get("message"),
      subject: `${form.subject} – ${formData.get("name")}`,
      from_name: profile.name,
    };

    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
        event.currentTarget.reset();
        return;
      }

      setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  if (!accessKey) {
    return (
      <p className="rounded-2xl border border-white/10 bg-background/50 p-5 text-sm text-muted-foreground">
        {form.notConfigured}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-lg font-semibold text-foreground">{form.title}</h3>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="contact-name">{form.nameLabel}</Label>
          <Input
            id="contact-name"
            name="name"
            required
            autoComplete="name"
            placeholder={form.namePlaceholder}
            className="border-white/10 bg-background/50"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-email">{form.emailLabel}</Label>
          <Input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder={form.emailPlaceholder}
            className="border-white/10 bg-background/50"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-phone">{form.phoneLabel}</Label>
        <Input
          id="contact-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder={form.phonePlaceholder}
          className="border-white/10 bg-background/50"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-message">{form.messageLabel}</Label>
        <Textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder={form.messagePlaceholder}
          className="border-white/10 bg-background/50"
        />
      </div>

      <label className="flex cursor-pointer items-start gap-3 text-sm text-muted-foreground">
        <input
          type="checkbox"
          name="privacy"
          required
          className="mt-1 size-4 shrink-0 rounded border-white/20 accent-accent"
        />
        <span>
          {form.privacyLabel}{" "}
          <Link
            href={localePath(locale, "/privacy")}
            className="text-accent underline-offset-4 hover:underline"
          >
            {form.privacyLink}
          </Link>{" "}
          {form.privacySuffix}
        </span>
      </label>

      {status === "success" && (
        <p className="rounded-xl border border-accent/30 bg-accent/10 px-4 py-3 text-sm text-foreground">
          {form.success}
        </p>
      )}

      {status === "error" && (
        <p className="rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-foreground">
          {form.error}
        </p>
      )}

      <Button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            {form.sending}
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            {form.submit}
          </>
        )}
      </Button>
    </form>
  );
}
