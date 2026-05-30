"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import {
  contactFormSchema,
  type ContactFormInput,
} from "@/lib/validations/contact";
import { cn } from "@/lib/utils";

type FieldErrors = Partial<Record<keyof ContactFormInput, string>>;

const fieldClasses =
  "w-full rounded-md border border-hairline-strong bg-background px-3.5 py-2.5 text-base text-ink placeholder:text-stone-muted shadow-none transition-colors focus:border-ink focus:outline-none focus:ring-1 focus:ring-ink aria-invalid:border-destructive aria-invalid:ring-1 aria-invalid:ring-destructive disabled:opacity-60";

export function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setFieldErrors({});
    setFormError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const raw = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
      website: String(formData.get("website") ?? ""),
    };

    const parsed = contactFormSchema.safeParse(raw);
    if (!parsed.success) {
      const errors: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof ContactFormInput;
        if (!errors[key]) errors[key] = issue.message;
      }
      setFieldErrors(errors);
      setStatus("idle");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as {
          error?: string;
          fieldErrors?: FieldErrors;
        } | null;
        if (body?.fieldErrors) setFieldErrors(body.fieldErrors);
        setFormError(body?.error ?? "Something went wrong. Use email instead.");
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setFormError("Network error. Use the email links to the left.");
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="name" className="mono-caps text-stone">
          Name
        </Label>
        <input
          id="name"
          name="name"
          autoComplete="name"
          aria-invalid={Boolean(fieldErrors.name)}
          disabled={status === "submitting"}
          className={fieldClasses}
        />
        {fieldErrors.name ? (
          <p className="text-sm text-destructive">{fieldErrors.name}</p>
        ) : null}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="mono-caps text-stone">
          Email
        </Label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          aria-invalid={Boolean(fieldErrors.email)}
          disabled={status === "submitting"}
          className={fieldClasses}
        />
        {fieldErrors.email ? (
          <p className="text-sm text-destructive">{fieldErrors.email}</p>
        ) : null}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="mono-caps text-stone">
          Message
        </Label>
        <textarea
          id="message"
          name="message"
          rows={6}
          aria-invalid={Boolean(fieldErrors.message)}
          disabled={status === "submitting"}
          className={cn(fieldClasses, "resize-y leading-relaxed")}
        />
        {fieldErrors.message ? (
          <p className="text-sm text-destructive">{fieldErrors.message}</p>
        ) : null}
      </div>

      {formError ? (
        <p className="text-sm text-destructive" role="alert">
          {formError}
        </p>
      ) : null}

      {status === "success" ? (
        <p className="text-sm text-[color:var(--oji-sienna)]" role="status">
          Message sent. Check your inbox for a confirmation. We reply within 24
          hours on business days.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group inline-flex h-12 items-center gap-2 rounded-full bg-ink px-6 text-sm font-medium text-bone transition-colors hover:bg-[color:var(--oji-sienna)] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? (
          <>
            <span
              aria-hidden
              className="size-4 animate-spin rounded-full border-2 border-bone/40 border-t-bone"
            />
            Sending
          </>
        ) : (
          <>
            Send message
            <span
              aria-hidden
              className="transition-transform group-hover:translate-x-0.5"
            >
              →
            </span>
          </>
        )}
      </button>
    </form>
  );
}
