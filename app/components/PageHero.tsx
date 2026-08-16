export function PageHero({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede: string;
}) {
  return (
    <header className="mx-auto max-w-6xl px-5 pb-6 pt-16 md:px-8 md:pt-20">
      <p className="text-xs uppercase tracking-[0.28em] text-copper">{kicker}</p>
      <h1 className="mt-4 max-w-3xl font-display text-4xl tracking-tight md:text-5xl">
        {title}
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-paper-dim">{lede}</p>
    </header>
  );
}
