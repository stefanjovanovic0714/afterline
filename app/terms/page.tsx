import type { Metadata } from "next";
import { PageHero } from "@/app/components/PageHero";
import { site } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "Terms",
  description: `Terms of use for the ${site.name} marketing site and demo requests.`,
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        kicker="Legal"
        title="Terms"
        lede="The site is an invitation to talk. It is not a medical, legal, or emergency service."
      />
      <article className="mx-auto max-w-3xl space-y-6 px-5 pb-24 text-sm leading-relaxed text-paper-dim md:px-8">
        <p>
          By using this website you agree that content is informational.
          Pricing shown is illustrative until we send a written order.
        </p>
        <p>
          Afterline does not replace emergency services. Callers with an
          emergency should dial the local emergency number. Practices must not
          present Afterline as a clinical or legal advice line.
        </p>
        <p>
          AI can be wrong. Bookings should be reviewed against the practice
          calendar. We are not liable for missed revenue or for a caller’s
          decision to use or not use a forwarded line.
        </p>
        <p>
          Demo requests may be declined. We may update these terms; the date of
          the site build is the current version until a later notice is posted.
        </p>
        <p>
          Contact:{" "}
          <a className="text-copper" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
        </p>
      </article>
    </>
  );
}
