import type { Metadata } from "next";
import { PageHero } from "@/app/components/PageHero";
import { PricingTable } from "@/app/components/PricingTable";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Placeholder Afterline plans for a single line, a full practice, or many locations. Talk to us — no checkout yet.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        kicker="Pricing"
        title="Pay for coverage. Not a new phone system."
        lede="Figures below are starting points for a conversation. We do not take a card on this site."
      />
      <section className="mx-auto max-w-6xl px-5 pb-24 md:px-8">
        <PricingTable />
      </section>
    </>
  );
}
