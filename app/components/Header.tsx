"use client";

import Link from "next/link";
import { useState } from "react";
import { nav, site } from "@/app/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-ink/75 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Link
          href="/"
          className="focus-ring font-display text-lg tracking-tight text-paper"
        >
          {site.name}
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring text-sm text-paper-dim transition-colors hover:text-paper"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="focus-ring rounded-full bg-copper px-4 py-2 text-sm text-ink transition hover:bg-copper-bright"
          >
            Request a demo
          </Link>
        </nav>
        <button
          type="button"
          className="focus-ring md:hidden text-sm text-paper-dim"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-white/5 px-5 py-4 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="focus-ring block py-1 text-paper"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="focus-ring mt-2 inline-block rounded-full bg-copper px-4 py-2 text-sm text-ink"
                onClick={() => setOpen(false)}
              >
                Request a demo
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
