import Link from "next/link";
import { nav, site } from "@/app/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <p className="font-display text-xl text-paper">{site.name}</p>
          <p className="mt-2 max-w-sm text-sm text-paper-dim">{site.tagline}</p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-paper-dim">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="focus-ring hover:text-paper">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/privacy" className="focus-ring hover:text-paper">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="focus-ring hover:text-paper">
                Terms
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="mx-auto max-w-6xl px-5 pb-10 text-xs text-paper-dim/80 md:px-8">
        © {new Date().getFullYear()} {site.name}. After-hours coverage is not
        emergency medical or legal advice.
      </div>
    </footer>
  );
}
