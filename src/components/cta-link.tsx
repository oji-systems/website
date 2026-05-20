import Link from "next/link";
import { cn } from "@/lib/utils";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

type CtaLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function CtaLink({
  href,
  children,
  variant = "primary",
  className,
}: CtaLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        focusRing,
        "group inline-flex h-12 items-center gap-2 rounded-full px-6 text-sm font-medium transition-colors",
        variant === "primary" &&
          "bg-ink text-bone hover:bg-[color:var(--oji-sienna)]",
        variant === "secondary" &&
          "border border-hairline-strong text-ink hover:bg-paper",
        className,
      )}
    >
      {children}
    </Link>
  );
}
