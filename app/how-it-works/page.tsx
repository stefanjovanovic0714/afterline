import type { Metadata } from "next";
import { PageHero } from "@/app/components/PageHero";
import { howDetailed } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "How after-hours and unanswered calls forward to Afterline, get qualified, and become calendar appointments.",
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        kicker="The path"
        title="The caller still dialed you. The book still fills."
        lede="Carrier forward when you are closed or unavailable. Afterline answers in your name, offers only real slots, and writes the appointment back."
      />
      <section className="mx-auto max-w-6xl px-5 pb-20 md:px-8">
        <ol className="relative mt-6 space-y-0 border-l border-white/10 pl-8">
          {howDetailed.map((step, i) => (
            <li key={step.title} className="relative pb-12 last:pb-0">
              <span
                className="absolute -left-[39px] top-1 flex h-5 w-5 items-center justify-center rounded-full border border-copper bg-ink font-mono text-[10px] text-copper"
                aria-hidden
              >
                {i + 1}
              </span>
              <h2 className="font-display text-2xl">{step.title}</h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-paper-dim">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
        <figure className="mt-16 overflow-x-auto border border-white/10 p-6">
          <figcaption className="text-xs uppercase tracking-[0.22em] text-copper">
            Sequence
          </figcaption>
          <pre className="mt-4 font-mono text-xs leading-7 text-paper-dim md:text-sm">
            {`Caller → Your public number
      → Carrier forward (closed / no answer)
      → Afterline (disclosure + greeting)
      → Qualify visit type
      → Read open slots from your calendar
      → Book + SMS confirm
      → Transcript to you`}
          </pre>
        </figure>
      </section>
    </>
  );
}
