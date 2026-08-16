"use client";

import { faq } from "@/app/lib/site";

export function Faq() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-24">
      <p className="text-xs uppercase tracking-[0.28em] text-copper">FAQ</p>
      <h2 className="mt-4 font-display text-3xl tracking-tight md:text-4xl">
        Straight answers
      </h2>
      <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
        {faq.map((item) => (
          <details key={item.q} className="group py-5">
            <summary className="focus-ring cursor-pointer list-none font-display text-lg text-paper [&::-webkit-details-marker]:hidden">
              <span className="flex items-start justify-between gap-4">
                {item.q}
                <span className="text-copper group-open:rotate-45" aria-hidden>
                  +
                </span>
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-paper-dim">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
