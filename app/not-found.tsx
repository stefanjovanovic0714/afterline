import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 md:px-8">
      <p className="text-xs uppercase tracking-[0.28em] text-copper">404</p>
      <h1 className="mt-4 font-display text-4xl tracking-tight">
        That page is closed.
      </h1>
      <p className="mt-4 max-w-md text-paper-dim">
        The line you dialed is not in service. The home page still is.
      </p>
      <Link
        href="/"
        className="focus-ring mt-8 inline-flex rounded-full bg-copper px-6 py-3 text-sm text-ink hover:bg-copper-bright"
      >
        Back to Afterline
      </Link>
    </section>
  );
}
