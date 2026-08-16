import Link from "next/link";
import { site } from "@/app/lib/site";
import { Waveform } from "@/app/components/Waveform";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 70% 20%, rgba(196,132,74,0.16), transparent 55%), radial-gradient(ellipse 50% 40% at 10% 80%, rgba(244,239,230,0.04), transparent 50%)",
        }}
      />
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-12 md:px-8 md:py-28">
        <div className="md:col-span-7">
          <p className="text-xs uppercase tracking-[0.28em] text-copper">
            After-hours AI reception
          </p>
          <h1 className="mt-5 font-display text-4xl leading-[1.05] tracking-tight text-paper sm:text-5xl md:text-6xl">
            Your calendar should not close at 5.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper-dim">
            {site.description}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="focus-ring inline-flex items-center justify-center rounded-full bg-copper px-6 py-3 text-sm font-medium text-ink hover:bg-copper-bright"
            >
              Request a demo
            </Link>
            <Link
              href="/how-it-works"
              className="focus-ring inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm text-paper hover:border-copper/60"
            >
              See how forwarding works
            </Link>
          </div>
        </div>
        <div className="md:col-span-5">
          <div className="relative rounded-2xl border border-white/10 bg-ink-soft/80 p-6 shadow-[0_40px_80px_rgba(0,0,0,0.45)]">
            <p className="text-xs uppercase tracking-[0.22em] text-paper-dim">
              Line open · 21:14
            </p>
            <p className="mt-6 font-display text-2xl text-paper">
              Incoming · your number
            </p>
            <p className="mt-2 text-sm text-paper-dim">
              Forwarded after close. Afterline is answering.
            </p>
            <div className="mt-8">
              <Waveform />
            </div>
            <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-6 text-sm">
              <div>
                <dt className="text-paper-dim">Caller</dt>
                <dd className="mt-1 text-paper">New patient</dd>
              </div>
              <div>
                <dt className="text-paper-dim">Next open</dt>
                <dd className="mt-1 text-paper">Tue 9:15</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
