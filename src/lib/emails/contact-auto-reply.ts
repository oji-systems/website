import { siteConfig } from "@/lib/site";

export const contactAutoReplySubject = "We received your message — Oji Systems";

export function buildContactAutoReplyText(name: string): string {
  return [
    `Hi ${name},`,
    "",
    "Thanks for reaching out to Oji Systems. We received your message.",
    "",
    "We respond within 24 hours on business days (Mon to Fri, Central Time).",
    "",
    `If your note is urgent, reply to this email or write ${siteConfig.emails.info}.`,
    "",
    siteConfig.shortName,
    siteConfig.location,
  ].join("\n");
}

export function buildContactAutoReplyHtml(name: string): string {
  const escapedName = escapeHtml(name);

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.55;color:#0E0E10;">
  <p style="margin:0 0 16px;">Hi ${escapedName},</p>
  <p style="margin:0 0 16px;">Thanks for reaching out to Oji Systems. We received your message.</p>
  <p style="margin:0 0 16px;">We respond within 24 hours on business days (Mon to Fri, Central Time).</p>
  <p style="margin:0 0 24px;">If your note is urgent, reply to this email or write <a href="mailto:${siteConfig.emails.info}" style="color:#C2410C;text-decoration:none;">${siteConfig.emails.info}</a>.</p>
  <p style="margin:0;color:#6B675F;font-size:14px;">
    ${siteConfig.shortName}<br>
    ${siteConfig.location}
  </p>
</body>
</html>`;
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
