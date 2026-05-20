"use client";

import Link from "next/link";
import { XIcon } from "lucide-react";
import { NavLink } from "@/components/nav-link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Wordmark } from "@/components/wordmark";
import { navLinks, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type MobileMenuProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export default function MobileMenu({ open, onOpenChange }: MobileMenuProps) {
  const close = () => onOpenChange(false);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        showCloseButton={false}
        className="w-full max-w-sm bg-background p-8"
      >
        <SheetHeader className="mb-12 flex flex-row items-center justify-between p-0">
          <SheetTitle>
            <Wordmark size="sm" />
          </SheetTitle>
          <button
            type="button"
            onClick={close}
            aria-label="Close menu"
            className={cn(
              focusRing,
              "inline-flex size-9 items-center justify-center rounded-full border border-hairline",
            )}
          >
            <XIcon className="size-4" />
          </button>
        </SheetHeader>
        <nav className="flex flex-col gap-6" aria-label="Mobile">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              onClick={close}
              className="font-display text-3xl font-semibold tracking-tight text-ink hover:text-[color:var(--oji-sienna)]"
              activeClassName="text-[color:var(--oji-sienna)]"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <Link
          href="/contact"
          onClick={close}
          className={cn(
            focusRing,
            "mt-10 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-ink text-sm font-medium text-bone transition-colors hover:bg-[color:var(--oji-sienna)]",
          )}
        >
          Start a project
          <span aria-hidden>→</span>
        </Link>
        <div className="mt-12 border-t border-hairline pt-6">
          <p className="mono-caps text-stone">{siteConfig.location}</p>
          <a
            href={`mailto:${siteConfig.emails.info}`}
            className={cn(
              focusRing,
              "mt-2 inline-block rounded-sm text-sm text-ink hover:text-[color:var(--oji-sienna)]",
            )}
          >
            {siteConfig.emails.info}
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}
