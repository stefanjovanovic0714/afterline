import Link from "next/link";
import { industries } from "@/app/lib/site";
import { Reveal } from "@/app/components/Reveal";

export function Industries() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.28em] text-copper">
          Built for the phone-first trades
        </p>
        <h2 className="mt-4 max-w-xl font-display text-3xl tracking-tight md:text-4xl">
          Same story. Different chair, bay, or desk.
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((item, i) => (
          <Reveal key={item.slug} delay={i * 0.05}>
            <article className="h-full border border-white/10 p-6">
              <h3 className="font-display text-xl">{item.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-paper-dim">
                {item.example}
              </p>
            </article>
          </Reveal>
        ))}
        <Reveal delay={0.25}>
          <Link
            href="/industries"
            className="focus-ring flex h-full min-h-40 items-end border border-dashed border-white/15 p-6 text-sm text-copper hover:border-copper/50"
          >
            All industries →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
