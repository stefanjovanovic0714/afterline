import { losses } from "@/app/lib/site";
import { Reveal } from "@/app/components/Reveal";

export function Problem() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.28em] text-copper">
          After the door locks
        </p>
        <h2 className="mt-4 max-w-2xl font-display text-3xl tracking-tight md:text-4xl">
          The call still comes. The booking usually does not.
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {losses.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.08}>
            <article className="h-full border border-white/10 p-6">
              <p className="font-mono text-xs text-copper">0{i + 1}</p>
              <h3 className="mt-4 font-display text-2xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-paper-dim">
                {item.body}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
