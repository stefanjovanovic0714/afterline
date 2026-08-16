import Link from "next/link";
import { Reveal } from "@/app/components/Reveal";

export function CloseCta() {
  return (
    <section className="border-t border-white/5">
      <Reveal className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <h2 className="max-w-2xl font-display text-3xl tracking-tight md:text-5xl">
          Keep the evening line. Keep the morning book.
        </h2>
        <p className="mt-5 max-w-lg text-paper-dim">
          Tell us the number you want forwarded. We will walk the after-hours
          path with you — no contract on a first conversation.
        </p>
        <Link
          href="/contact"
          className="focus-ring mt-8 inline-flex rounded-full bg-copper px-6 py-3 text-sm font-medium text-ink hover:bg-copper-bright"
        >
          Request a demo
        </Link>
      </Reveal>
    </section>
  );
}
