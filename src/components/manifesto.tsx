import { Section } from "@/components/section";

type ManifestoProps = {
  children: React.ReactNode;
  attribution?: string;
};

export function Manifesto({ children, attribution }: ManifestoProps) {
  return (
    <Section className="border-y border-hairline py-24 md:py-32">
      <figure className="mx-auto max-w-4xl">
        <blockquote className="font-display text-3xl font-medium leading-tight tracking-tight text-balance md:text-5xl">
          {children}
        </blockquote>
        {attribution ? (
          <figcaption className="mono-caps mt-8 text-stone">
            — {attribution}
          </figcaption>
        ) : null}
      </figure>
    </Section>
  );
}
