import Link from "next/link";
import { Section } from "@/components/section";
import { siteConfig } from "@/lib/site";

export default function NotFound() {
  return (
    <Section>
      <p className="mono-caps text-stone">404</p>
      <h1 className="mt-6 max-w-2xl font-display text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.02em]">
        This page is not here.
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone">
        The link may be outdated or mistyped. Start from the home page or reach
        out directly.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href="/"
          className="inline-flex h-12 items-center rounded-full bg-ink px-6 text-sm font-medium text-bone transition-colors hover:bg-[color:var(--oji-sienna)]"
        >
          Home
        </Link>
        <Link
          href="/contact"
          className="inline-flex h-12 items-center rounded-full border border-hairline-strong px-6 text-sm font-medium text-ink transition-colors hover:border-[color:var(--oji-sienna)] hover:text-[color:var(--oji-sienna)]"
        >
          Contact
        </Link>
        <a
          href={`mailto:${siteConfig.emails.info}`}
          className="inline-flex h-12 items-center rounded-full border border-hairline-strong px-6 text-sm font-medium text-ink transition-colors hover:border-[color:var(--oji-sienna)] hover:text-[color:var(--oji-sienna)]"
        >
          {siteConfig.emails.info}
        </a>
      </div>
    </Section>
  );
}
