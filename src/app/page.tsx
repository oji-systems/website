import Link from "next/link";
import { CtaLink } from "@/components/cta-link";
import { Manifesto } from "@/components/manifesto";
import { Section, SectionHeading } from "@/components/section";
import { WorkCard } from "@/components/work-card";
import {
  capabilities,
  homeWorkPreviewCount,
  siteConfig,
  work,
} from "@/lib/site";
import { cn } from "@/lib/utils";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export default function HomePage() {
  return (
    <>
      <section className="hero-noise relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 pb-24 pt-24 md:pb-32 md:pt-32">
          <div className="rise rise-1">
            <p className="mono-caps text-stone">
              {siteConfig.shortName} / {siteConfig.location}
            </p>
          </div>
          <h1 className="rise rise-2 mt-8 max-w-5xl text-balance font-display text-[clamp(2.75rem,8vw,6rem)] font-medium leading-[0.95] tracking-[-0.03em]">
            We build{" "}
            <span
              className="italic text-[color:var(--oji-sienna)]"
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
            >
              quietly powerful
            </span>{" "}
            software.
          </h1>
          <p className="rise rise-3 mt-10 max-w-2xl text-pretty text-lg leading-relaxed text-stone md:text-xl">
            Oji Systems is a small studio in Austin. We design and operate our
            own products, and we partner with serious teams on the
            infrastructure underneath theirs.
          </p>
          <div className="rise rise-4 mt-12 flex flex-wrap items-center gap-4">
            <CtaLink href="/work" className="group">
              See the work
              <span
                aria-hidden
                className="transition-transform group-hover:translate-x-0.5"
              >
                →
              </span>
            </CtaLink>
            <CtaLink href="/contact" variant="secondary">
              Start a project
            </CtaLink>
          </div>

          <div className="mx-auto mt-24 max-w-3xl border-t border-hairline pt-8">
            <div className="grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-3">
              <FactStat label="Founded" value="2025" />
              <FactStat label="Based in" value="Austin, TX" />
              <FactStat label="Currently" value="Building & shipping" />
            </div>
          </div>
        </div>
      </section>

      <Manifesto attribution="The studio">
        Most software is built to look impressive in a demo and break under real
        load. We are interested in the opposite. Systems that earn their place,
        quietly, for a long time.
      </Manifesto>

      <Section>
        <SectionHeading
          index="01"
          kicker="Selected work"
          title="What we are building"
          description="A short list. Some of it is ours, some of it is theirs. Names appear when the work is ready to be talked about."
        />
        <div>
          {work.slice(0, homeWorkPreviewCount).map((entry) => (
            <WorkCard key={entry.id} {...entry} />
          ))}
        </div>
        <div className="mt-10 border-t border-hairline-strong pt-8">
          <Link
            href="/work"
            className={cn(
              focusRing,
              "mono-caps inline-flex items-center gap-2 rounded-sm text-ink hover:text-[color:var(--oji-sienna)]",
            )}
          >
            All work
            <span aria-hidden>→</span>
          </Link>
        </div>
      </Section>

      <Section className="border-t border-hairline">
        <SectionHeading
          index="02"
          kicker="Capabilities"
          title="What we are good at"
          description="Four ways we engage. Often two or three at once."
        />
        <ul className="grid gap-12 md:grid-cols-2">
          {capabilities.map((cap) => (
            <li
              key={cap.id}
              className="border-t border-hairline pt-6"
            >
              <p className="mono-caps text-[color:var(--oji-sienna)]">
                {cap.id}
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                {cap.title}
              </h3>
              <p className="mt-3 text-pretty leading-relaxed text-stone">
                {cap.body}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="border-t border-hairline">
        <div className="grid gap-10 rounded-2xl bg-paper p-10 md:grid-cols-12 md:p-16">
          <div className="md:col-span-8">
            <p className="mono-caps text-[color:var(--oji-sienna)]">
              Get in touch
            </p>
            <h2 className="mt-4 text-balance font-display text-3xl font-medium tracking-tight md:text-5xl">
              Bring us a real problem.
            </h2>
            <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-stone">
              We read every message. If your problem is in our orbit, you will
              hear back from Ayo directly.
            </p>
          </div>
          <div className="flex items-end md:col-span-4 md:justify-end">
            <CtaLink href="/contact" className="group">
              Contact the studio
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

function FactStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center">
      <p className="mono-caps text-stone">{label}</p>
      <p className="mt-1 text-sm font-medium text-ink">{value}</p>
    </div>
  );
}
