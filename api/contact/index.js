const { Resend } = require("resend");

function asString(value) {
  return typeof value === "string" ? value.trim() : "";
}

module.exports = async function (context, req) {
  if (req.method === "OPTIONS") {
    context.res = { status: 204 };
    return;
  }

  const body = req.body && typeof req.body === "object" ? req.body : {};
  const name = asString(body.name);
  const business = asString(body.business);
  const phone = asString(body.phone);
  const vertical = asString(body.vertical);
  const forwardNumber = asString(body.forwardNumber);
  const note = asString(body.note);

  if (!name || !business || !phone || !vertical) {
    context.res = {
      status: 400,
      headers: { "Content-Type": "application/json" },
      body: { error: "Name, business, phone, and vertical are required." },
    };
    return;
  }

  if (name.length > 120 || business.length > 160 || note.length > 4000) {
    context.res = {
      status: 400,
      headers: { "Content-Type": "application/json" },
      body: { error: "A field is too long." },
    };
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_TO_EMAIL || "hello@afterline.ai";

  if (!apiKey) {
    context.res = {
      status: 503,
      headers: { "Content-Type": "application/json" },
      body: { error: "Lead inbox is not configured yet. Email us directly." },
    };
    return;
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
    context.res = {
      status: 502,
      headers: { "Content-Type": "application/json" },
      body: { error: "Could not send just now. Email us directly." },
    };
    return;
  }

  context.res = {
    status: 200,
    headers: { "Content-Type": "application/json" },
    body: { ok: true },
  };
};
