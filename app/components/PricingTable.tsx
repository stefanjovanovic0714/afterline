import Link from "next/link";
import { pricing } from "@/app/lib/site";

export function PricingTable() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {pricing.map((tier) => (
        <article
          key={tier.name}
          className={`flex flex-col border p-6 ${
            "featured" in tier && tier.featured
              ? "border-copper/50 bg-ink-soft"
              : "border-white/10"
          }`}
        >
          <h2 className="font-display text-2xl">{tier.name}</h2>
          <p className="mt-4 font-display text-3xl text-paper">
            {tier.price}
            {tier.period ? (
              <span className="text-base text-paper-dim">{tier.period}</span>
            ) : null}
          </p>
          <p className="mt-3 text-sm text-paper-dim">{tier.blurb}</p>
          <ul className="mt-6 flex-1 space-y-2 text-sm text-paper-dim">
            {tier.features.map((f) => (
              <li key={f}>— {f}</li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="focus-ring mt-8 inline-flex justify-center rounded-full bg-copper px-4 py-2.5 text-sm text-ink hover:bg-copper-bright"
          >
            Talk to us
          </Link>
        </article>
      ))}
    </div>
  );
}
