import Link from "next/link";
import { cn } from "@/lib/utils";

type WordmarkProps = {
  href?: string;
  className?: string;
  size?: "sm" | "md";
};

export function Wordmark({ href, className, size = "md" }: WordmarkProps) {
  const content = (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 text-ink",
        className,
      )}
      aria-label="Oji Systems"
    >
      <span
        aria-hidden
        className={cn(
          "inline-block rounded-full bg-foreground",
          size === "sm" ? "size-1.5" : "size-2",
        )}
      />
      <span
        className={cn(
          "font-display font-semibold tracking-tight",
          size === "sm" ? "text-base" : "text-lg",
        )}
        style={{ fontVariationSettings: '"opsz" 30, "SOFT" 40' }}
      >
        Oji Systems
      </span>
    </span>
  );

  if (!href) return content;

  return (
    <Link
      href={href}
      className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
    >
      {content}
    </Link>
  );
}
