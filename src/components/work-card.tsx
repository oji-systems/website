import Link from "next/link";
import { cn } from "@/lib/utils";

type WorkCardProps = {
  id: string;
  year: string;
  kind: string;
  title: string;
  description: string;
  status: string;
  href?: string;
  className?: string;
};

const statusStyles: Record<string, string> = {
  Private: "text-stone-muted",
  Active: "text-stone",
  Live: "text-[color:var(--oji-sienna)]",
  Lab: "text-ink/50",
};

const statusDotStyles: Record<string, string> = {
  Private: "bg-stone-muted",
  Active: "bg-stone",
  Live: "bg-[color:var(--oji-sienna)]",
  Lab: "bg-[color:var(--oji-ink)]/30",
};

export function WorkCard({
  id,
  year,
  kind,
  title,
  description,
  status,
  href,
  className,
}: WorkCardProps) {
  const card = (
    <article
      className={cn(
        "group grid gap-6 border-t border-hairline-strong py-10 md:grid-cols-12 md:items-baseline md:gap-8",
        className,
      )}
    >
      <div className="mono-caps flex items-center gap-3 text-stone md:col-span-2">
        <span className="text-[color:var(--oji-sienna)]">{id}</span>
        <span>{year}</span>
      </div>

      <div className="md:col-span-4">
        <p className="mono-caps text-stone">{kind}</p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight transition-colors group-hover:text-[color:var(--oji-sienna)] md:text-3xl">
          {title}
        </h3>
      </div>

      <p className="text-base text-stone md:col-span-4">{description}</p>

      <div className="md:col-span-2 md:text-right">
        <span
          className={cn(
            "mono-caps inline-flex items-center gap-2",
            statusStyles[status] ?? "text-stone",
          )}
        >
          <span
            aria-hidden
            className={cn(
              "inline-block size-1.5 rounded-full",
              statusDotStyles[status] ?? "bg-stone",
            )}
          />
          {status}
        </span>
      </div>
    </article>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="block hover:bg-[color:var(--oji-paper)] -mx-6 px-6 transition-colors"
      >
        {card}
      </Link>
    );
  }

  return card;
}
