import type { Metadata } from "next";
import { PageHero } from "@/app/components/PageHero";
import { site } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: `How ${site.name} handles demo requests and, later, call recordings.`,
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        kicker="Legal"
        title="Privacy"
        lede="This page covers the marketing site today and the product we are building."
      />
      <article className="mx-auto max-w-3xl space-y-6 px-5 pb-24 text-sm leading-relaxed text-paper-dim md:px-8">
        <p>
          The contact form collects your name, business, phone, vertical, and
          optional notes so we can reply about a demo. We use that information
          only to respond. We do not sell it.
        </p>
        <p>
          When Afterline answers a live call, callers are told they are speaking
          with AI and that the call may be recorded. Recordings and transcripts
          exist so the practice can see what was booked and so we can improve
          the service. They are not used for unrelated advertising.
        </p>
        <p>
          Appointment details are written to the calendar the practice names.
          We keep only what is needed to operate the line and to resolve
          disputes about a booking.
        </p>
        <p>
          Questions:{" "}
          <a className="text-copper" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
        </p>
      </article>
    </>
  );
}
