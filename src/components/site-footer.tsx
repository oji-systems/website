import { NavLink } from "@/components/nav-link";
import { Wordmark } from "@/components/wordmark";
import { navLinks, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Wordmark size="sm" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-stone">
              A small venture studio in {siteConfig.location}. We design and
              build our own software, and we partner with serious teams on the
              infrastructure underneath theirs.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="mono-caps text-stone">Pages</p>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <NavLink
                    href={link.href}
                    className="text-sm text-ink hover:text-[color:var(--oji-sienna)]"
                    activeClassName="text-[color:var(--oji-sienna)]"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="mono-caps text-stone">Contact</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.emails.info}`}
                  className={cn(
                    focusRing,
                    "rounded-sm text-ink hover:text-[color:var(--oji-sienna)]",
                  )}
                >
                  {siteConfig.emails.info}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.emails.ayo}`}
                  className={cn(
                    focusRing,
                    "rounded-sm text-ink hover:text-[color:var(--oji-sienna)]",
                  )}
                >
                  {siteConfig.emails.ayo}
                </a>
              </li>
              <li className="text-stone">{siteConfig.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-hairline pt-6 md:flex-row md:items-center md:justify-between">
          <p className="mono-caps text-stone">
            Built and operated by {siteConfig.shortName}
          </p>
          <p className="mono-caps text-stone">
            © {year} {siteConfig.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
