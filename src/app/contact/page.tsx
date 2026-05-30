import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Section } from "@/components/section";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${siteConfig.name} in ${siteConfig.location}. We respond to serious technical inquiries.`,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact | ${siteConfig.shortName}`,
    description: `Contact ${siteConfig.name} in ${siteConfig.location}. We respond to serious technical inquiries.`,
    url: `${siteConfig.url}/contact`,
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <Section>
      <div className="grid gap-16 lg:grid-cols-12 lg:gap-x-16">
        <div className="lg:col-span-5">
          <p className="mono-caps text-stone">Contact</p>
          <h1 className="mt-6 text-balance font-display text-[clamp(2.25rem,5vw,3.75rem)] font-medium leading-[1] tracking-[-0.02em]">
            Tell us what you are{" "}
            <span
              className="italic text-[color:var(--oji-sienna)]"
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
            >
              building
            </span>
            .
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-stone">
            We respond to serious technical inquiries. If your problem is in our
            orbit, you will hear back from Ayo directly.
          </p>

          <div className="mt-12 space-y-6 border-t border-hairline pt-8">
            <ContactRow label="Email">
              <a
                href={`mailto:${siteConfig.emails.info}`}
                className="text-ink hover:text-[color:var(--oji-sienna)]"
              >
                {siteConfig.emails.info}
              </a>
            </ContactRow>
            <ContactRow label="Direct">
              <a
                href={`mailto:${siteConfig.emails.ayo}`}
                className="text-ink hover:text-[color:var(--oji-sienna)]"
              >
                {siteConfig.emails.ayo}
              </a>
            </ContactRow>
            <ContactRow label="Location">
              <span className="text-ink">{siteConfig.location}</span>
            </ContactRow>
            <ContactRow label="Hours">
              <span className="text-ink">
                Mon to Fri, Central Time. We reply within 24 hours on business
                days.
              </span>
            </ContactRow>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-2xl bg-paper p-8 md:p-10">
            <p className="mono-caps text-[color:var(--oji-sienna)]">
              Send a message
            </p>
            <p className="mt-2 text-sm text-stone">
              Two or three sentences is plenty. We will follow up with the right
              questions.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function ContactRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-3 gap-4 text-sm">
      <p className="mono-caps text-stone">{label}</p>
      <div className="col-span-2 leading-relaxed">{children}</div>
    </div>
  );
}
