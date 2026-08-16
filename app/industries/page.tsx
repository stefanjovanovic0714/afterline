import type { Metadata } from "next";
import { PageHero } from "@/app/components/PageHero";
import { industries } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Afterline for dental, clinics, legal, home services, and auto — after-hours calls that become bookings.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        kicker="Industries"
        title="If the phone is the front door, keep it open."
        lede="The product is the same. The visit types, scripts, and calendars are yours."
      />
      <section className="mx-auto max-w-6xl px-5 pb-24 md:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {industries.map((item) => (
            <article key={item.slug} className="border border-white/10 p-8">
              <h2 className="font-display text-2xl">{item.name}</h2>
              <p className="mt-4 text-sm leading-relaxed text-paper-dim">
                {item.example}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
