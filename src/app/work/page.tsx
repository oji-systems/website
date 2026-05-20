import type { Metadata } from "next";
import { CtaLink } from "@/components/cta-link";
import { Section, SectionHeading } from "@/components/section";
import { WorkCard } from "@/components/work-card";
import { siteConfig, work } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work",
  description: `Selected work from ${siteConfig.name}: products in private development and infrastructure built for partner teams.`,
  alternates: { canonical: "/work" },
  openGraph: {
    title: `Work | ${siteConfig.shortName}`,
    description: `Selected work from ${siteConfig.name}: products in private development and infrastructure built for partner teams.`,
    url: `${siteConfig.url}/work`,
    type: "website",
  },
};

export default function WorkPage() {
  return (
    <>
      <Section>
        <SectionHeading
          index="01"
          kicker="Work, 2025 – 2026"
          title="Quietly shipping."
          description="Some of this is ours. Some of it is theirs. Most of it cannot be talked about yet. The list grows when a project earns its line."
          className="mb-4"
        />
        <div>
          {work.map((entry) => (
            <WorkCard key={entry.id} {...entry} />
          ))}
        </div>
      </Section>

      <Section className="border-t border-hairline">
        <div className="grid gap-10 md:grid-cols-12 md:items-start">
          <div className="md:col-span-7">
            <p className="mono-caps text-[color:var(--oji-sienna)]">
              Working with us
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-tight md:text-4xl">
              We are selective about the work we take on.
            </h2>
            <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-stone">
              We engage when the technical problem is real, the scope is
              concrete, and the team is ready to move. If that sounds like you,
              tell us what you are building.
            </p>
          </div>
          <div className="md:col-span-5 md:flex md:justify-end">
            <CtaLink href="/contact" className="group">
              Start a conversation
              <span
                aria-hidden
                className="transition-transform group-hover:translate-x-0.5"
              >
                →
              </span>
            </CtaLink>
          </div>
        </div>
      </Section>
    </>
  );
}
