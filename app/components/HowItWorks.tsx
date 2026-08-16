import Link from "next/link";
import { steps } from "@/app/lib/site";
import { Reveal } from "@/app/components/Reveal";

export function HowItWorks() {
  return (
    <section className="bg-ink-soft">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.28em] text-copper">
            Three steps
          </p>
          <h2 className="mt-4 font-display text-3xl tracking-tight md:text-4xl">
            Forward. Answer. Book.
          </h2>
        </Reveal>
        <ol className="mt-14 grid gap-10 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.08}>
              <li>
                <p className="font-mono text-sm text-copper">{step.n}</p>
                <h3 className="mt-3 font-display text-2xl">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-paper-dim">
                  {step.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
        <Reveal className="mt-12">
          <Link
            href="/how-it-works"
            className="focus-ring text-sm text-copper hover:text-copper-bright"
          >
            The full sequence →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
