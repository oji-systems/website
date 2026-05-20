import type { Metadata } from "next";
import { CtaLink } from "@/components/cta-link";
import { Section, SectionHeading } from "@/components/section";
import { principles, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Studio",
  description: `About ${siteConfig.name}, a small venture studio in ${siteConfig.location} led by Ayo Oji.`,
  alternates: { canonical: "/studio" },
  openGraph: {
    title: `Studio | ${siteConfig.shortName}`,
    description: `About ${siteConfig.name}, a small venture studio in ${siteConfig.location} led by Ayo Oji.`,
    url: `${siteConfig.url}/studio`,
    type: "profile",
  },
};

export default function StudioPage() {
  return (
    <>
      <Section className="pb-12">
        <p className="mono-caps text-stone">Studio</p>
        <h1 className="mt-6 max-w-4xl text-balance font-display text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[1] tracking-[-0.02em]">
          A small studio with{" "}
          <span
            className="italic text-[color:var(--oji-sienna)]"
            style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
          >
            strong opinions
          </span>{" "}
          about software.
        </h1>
      </Section>

      <Section className="grid gap-12 border-t border-hairline pt-16 md:grid-cols-12 md:gap-x-16">
        <div className="md:col-span-4">
          <p className="mono-caps text-[color:var(--oji-sienna)]">
            What we are
          </p>
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-pretty text-ink md:col-span-8">
          <p>
            Oji Systems is a small venture studio in {siteConfig.location}. We
            design and build our own products, and we partner with serious
            teams on the infrastructure underneath theirs.
          </p>
          <p className="text-stone">
            Studio speed, not startup theater. We work in tight cycles,
            principal-led, and we ship measurable artifacts. We turn down work
            that is not in our orbit, and we say so when something is outside
            our expertise.
          </p>
        </div>
      </Section>

      <Section className="grid gap-12 border-t border-hairline md:grid-cols-12 md:gap-x-16">
        <div className="md:col-span-4">
          <p className="mono-caps text-[color:var(--oji-sienna)]">
            Who runs it
          </p>
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-pretty text-ink md:col-span-8">
          <p>
            Oji Systems is led by Ayo Oji. Engagements run principal to
            principal, from scoping through delivery, with direct
            communication and no account managers in the middle.
          </p>
          <p className="text-stone">
            Born in Nigeria, building from Austin for the world. The work is
            global by default.
          </p>
        </div>
      </Section>

      <Section className="border-t border-hairline">
        <SectionHeading
          index="01"
          kicker="Principles"
          title="How we operate"
        />
        <ol className="space-y-12">
          {principles.map((item, index) => (
            <li
              key={item.title}
              className="grid gap-6 border-t border-hairline pt-6 md:grid-cols-12"
            >
              <span
                className="mono-caps text-stone md:col-span-2"
                aria-hidden
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-2xl font-semibold tracking-tight md:col-span-4">
                {item.title}
              </h3>
              <p className="text-base leading-relaxed text-stone md:col-span-6">
                {item.body}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="border-t border-hairline">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <p className="text-lg text-stone">
            Based in {siteConfig.location}. Available for remote and on-site
            work.
          </p>
          <CtaLink href="/contact" className="group">
            Get in touch
            <span
              aria-hidden
              className="transition-transform group-hover:translate-x-0.5"
            >
              →
            </span>
          </CtaLink>
        </div>
      </Section>
    </>
  );
}
