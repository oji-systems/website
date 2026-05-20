import { cn } from "@/lib/utils";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  narrow?: boolean;
};

export function Section({ children, className, id, narrow }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "mx-auto px-6 py-20 md:py-28",
        narrow ? "max-w-3xl" : "max-w-6xl",
        className,
      )}
    >
      {children}
    </section>
  );
}

type SectionHeadingProps = {
  index?: string;
  kicker?: string;
  title?: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  index,
  kicker,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <header className={cn("mb-14 max-w-3xl", className)}>
      {(index || kicker) ? (
        <div className="mb-6 flex items-center gap-3 border-b border-hairline pb-3">
          {index ? (
            <span className="mono-caps text-[color:var(--oji-sienna)]">
              {index}
            </span>
          ) : null}
          {kicker ? (
            <span className="mono-caps text-stone">{kicker}</span>
          ) : null}
        </div>
      ) : null}
      {title ? (
        <h2 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
          {title}
        </h2>
      ) : null}
      {description ? (
        <p className="mt-5 max-w-2xl text-lg text-pretty leading-relaxed text-stone">
          {description}
        </p>
      ) : null}
    </header>
  );
}
