"use client";

import { FormEvent, useState } from "react";
import { verticals } from "@/app/lib/site";

type Status = "idle" | "sending" | "ok" | "err";

export function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (String(data.get("company_website") || "").trim()) {
      setStatus("ok");
      return;
    }
    setStatus("sending");
    setMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          business: data.get("business"),
          phone: data.get("phone"),
          vertical: data.get("vertical"),
          forwardNumber: data.get("forwardNumber"),
          note: data.get("note"),
        }),
      });
      const json = (await res.json()) as { error?: string };
      if (!res.ok) {
        setStatus("err");
        setMessage(json.error || "Could not send. Try again or email us.");
        return;
      }
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("err");
      setMessage("Network error. Try again in a moment.");
    }
  }

  if (status === "ok") {
    return (
      <p
        className="border border-copper/40 bg-ink-soft p-6 text-paper"
        role="status"
      >
        Received. We will reply to arrange a walkthrough of forwarding and
        booking.
      </p>
    );
  }

  const field =
    "focus-ring w-full border border-white/15 bg-ink px-3 py-2.5 text-sm text-paper placeholder:text-paper-dim/50";

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate>
      <div className="hidden" aria-hidden="true">
        <label>
          Company website
          <input type="text" name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <label className="grid gap-1.5 text-sm">
        <span>Your name</span>
        <input className={field} name="name" required autoComplete="name" />
      </label>
      <label className="grid gap-1.5 text-sm">
        <span>Business name</span>
        <input className={field} name="business" required autoComplete="organization" />
      </label>
      <label className="grid gap-1.5 text-sm">
        <span>Phone</span>
        <input className={field} name="phone" type="tel" required autoComplete="tel" />
      </label>
      <label className="grid gap-1.5 text-sm">
        <span>Vertical</span>
        <select className={field} name="vertical" required defaultValue="">
          <option value="" disabled>
            Select one
          </option>
          {verticals.map((v) => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-1.5 text-sm">
        <span>What number should we forward?</span>
        <input
          className={field}
          name="forwardNumber"
          type="tel"
          placeholder="The public line callers already use"
        />
      </label>
      <label className="grid gap-1.5 text-sm">
        <span>Anything we should know</span>
        <textarea className={`${field} min-h-28`} name="note" rows={4} />
      </label>
      {status === "err" ? (
        <p className="text-sm text-copper-bright" role="alert">
          {message}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={status === "sending"}
        className="focus-ring mt-2 rounded-full bg-copper px-6 py-3 text-sm font-medium text-ink hover:bg-copper-bright disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Request a demo"}
      </button>
    </form>
  );
}
