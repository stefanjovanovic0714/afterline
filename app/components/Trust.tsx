import { quotes, trust } from "@/app/lib/site";
import { Reveal } from "@/app/components/Reveal";

export function Trust() {
  return (
    <section className="bg-ink-soft">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.28em] text-copper">
            How we operate
          </p>
          <h2 className="mt-4 font-display text-3xl tracking-tight md:text-4xl">
            Quiet rules. No theatre.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {trust.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <article>
                <h3 className="font-display text-xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-paper-dim">
                  {item.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {quotes.map((item) => (
            <blockquote
              key={item.role}
              className="border border-white/10 p-6 text-paper-dim"
            >
              <p className="font-display text-xl leading-snug text-paper">
                “{item.quote}”
              </p>
              <footer className="mt-4 text-xs uppercase tracking-[0.18em]">
                {item.name} · {item.role}
              </footer>
            </blockquote>
          ))}
        </div>
        <p className="mt-6 text-xs text-paper-dim/70">
          Quotes are illustrative until launch partners are named.
        </p>
      </div>
    </section>
  );
}
