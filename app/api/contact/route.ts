import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/app/lib/site";

export const runtime = "nodejs";

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = asString(body.name);
  const business = asString(body.business);
  const phone = asString(body.phone);
  const vertical = asString(body.vertical);
  const forwardNumber = asString(body.forwardNumber);
  const note = asString(body.note);

  if (!name || !business || !phone || !vertical) {
    return NextResponse.json(
      { error: "Name, business, phone, and vertical are required." },
      { status: 400 },
    );
  }

  if (name.length > 120 || business.length > 160 || note.length > 4000) {
    return NextResponse.json({ error: "A field is too long." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_TO_EMAIL || site.email;

  if (!apiKey) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[contact] lead (no RESEND_API_KEY)", {
        name,
        business,
        phone,
        vertical,
        forwardNumber,
        note,
      });
      return NextResponse.json({ ok: true, dev: true });
    }
    return NextResponse.json(
      { error: "Lead inbox is not configured yet. Email us directly." },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: process.env.LEAD_FROM_EMAIL || "Afterline <onboarding@resend.dev>",
    to,
    subject: `Demo request — ${business}`,
    text: [
      `Name: ${name}`,
      `Business: ${business}`,
      `Phone: ${phone}`,
      `Vertical: ${vertical}`,
      `Forward: ${forwardNumber || "(not given)"}`,
      "",
      note || "(no note)",
    ].join("\n"),
  });

  if (error) {
    return NextResponse.json(
      { error: "Could not send just now. Email us directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
