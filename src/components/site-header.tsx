"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MenuIcon } from "lucide-react";
import { NavLink } from "@/components/nav-link";
import { Wordmark } from "@/components/wordmark";
import { navLinks } from "@/lib/site";
import { cn } from "@/lib/utils";

const MobileMenu = dynamic(() => import("@/components/mobile-menu"), {
  ssr: false,
  loading: () => null,
});

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function SiteHeader() {
  const [armed, setArmed] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const armAndOpen = () => {
    setArmed(true);
    setOpen(true);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-200",
        scrolled
          ? "border-b border-hairline bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-background",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Wordmark href="/" />

        <nav
          className="hidden items-center gap-10 md:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              className="text-sm text-stone hover:text-ink"
              activeClassName="text-ink underline decoration-[color:var(--oji-sienna)] decoration-2 underline-offset-4"
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            href="/contact"
            className={cn(
              focusRing,
              "group relative inline-flex h-9 items-center gap-2 rounded-full bg-ink px-4 text-sm font-medium text-bone transition-colors hover:bg-[color:var(--oji-sienna)]",
            )}
          >
            Start a project
            <span
              aria-hidden
              className="transition-transform group-hover:translate-x-0.5"
            >
              →
            </span>
          </Link>
        </nav>

        <button
          type="button"
          onClick={armAndOpen}
          onPointerDown={() => setArmed(true)}
          aria-label="Open menu"
          aria-expanded={open}
          className={cn(
            focusRing,
            "inline-flex size-10 items-center justify-center rounded-full border border-hairline text-ink md:hidden",
          )}
        >
          <MenuIcon className="size-5" />
        </button>

        {armed ? <MobileMenu open={open} onOpenChange={setOpen} /> : null}
      </div>
    </header>
  );
}
