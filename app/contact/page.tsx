import type { Metadata } from "next";
import { LeadForm } from "@/app/components/LeadForm";
import { PageHero } from "@/app/components/PageHero";
import { site } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "Request a demo",
  description:
    "Tell Afterline which number to forward. We will walk after-hours booking with you.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Request a demo"
        lede="A short note is enough. We will reply with a time to map your forward and visit types."
      />
      <section className="mx-auto grid max-w-6xl gap-12 px-5 pb-24 md:grid-cols-12 md:px-8">
        <div className="md:col-span-6">
          <LeadForm />
        </div>
        <aside className="md:col-span-5 md:col-start-8">
          <p className="text-sm text-paper-dim">
            Prefer email?{" "}
            <a
              className="focus-ring text-copper hover:text-copper-bright"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
          </p>
          <p className="mt-6 text-sm leading-relaxed text-paper-dim">
            We will not add you to a newsletter. The form is for a first
            conversation about forwarding and booking.
          </p>
        </aside>
      </section>
    </>
  );
}
