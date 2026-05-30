import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  buildContactAutoReplyHtml,
  buildContactAutoReplyText,
  contactAutoReplySubject,
} from "@/lib/emails/contact-auto-reply";
import { siteConfig } from "@/lib/site";
import { contactFormSchema } from "@/lib/validations/contact";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0]);
      if (!fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return NextResponse.json({ fieldErrors }, { status: 400 });
  }

  const { name, email, message } = parsed.data;

  const apiKey = process.env.RESEND_API_KEY;
  const contactTo = process.env.CONTACT_TO ?? siteConfig.emails.info;
  const fromEmail = process.env.CONTACT_FROM ?? "onboarding@resend.dev";
  const autoReplyFrom =
    process.env.AUTO_REPLY_FROM ?? siteConfig.emails.info;

  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "Contact form is not configured yet. Email us directly at info@ojisystems.com.",
      },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: `${siteConfig.shortName} <${fromEmail}>`,
    to: [contactTo],
    replyTo: email,
    subject: `Contact from ${name} via ojisystems.com`,
    text: [`Name: ${name}`, `Email: ${email}`, "", message].join("\n"),
  });

  if (error) {
    console.error("Resend notification error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Try email instead." },
      { status: 502 },
    );
  }

  const { error: autoReplyError } = await resend.emails.send({
    from: `${siteConfig.shortName} <${autoReplyFrom}>`,
    to: [email],
    replyTo: siteConfig.emails.info,
    subject: contactAutoReplySubject,
    text: buildContactAutoReplyText(name),
    html: buildContactAutoReplyHtml(name),
  });

  if (autoReplyError) {
    console.error("Resend auto-reply error:", autoReplyError);
  }

  return NextResponse.json({ ok: true });
}
