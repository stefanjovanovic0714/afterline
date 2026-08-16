export const site = {
  name: "Afterline",
  tagline: "When you close, the phone does not.",
  description:
    "After-hours and overflow calls forward to Afterline. The AI answers, books the appointment, and your calendar keeps filling after 5.",
  url: "https://afterline.ai",
  email: "hello@afterline.ai",
} as const;

export const nav = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/industries", label: "Industries" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
] as const;

export const industries = [
  {
    slug: "dental",
    name: "Dental",
    example:
      "A cracked molar at 8:40pm. Afterline books a same-week emergency slot and texts the confirmation.",
  },
  {
    slug: "medical",
    name: "Clinics",
    example:
      "A new patient calls Saturday morning. Afterline qualifies the visit type and holds Monday at 9:15.",
  },
  {
    slug: "legal",
    name: "Legal",
    example:
      "A consult request after the receptionist leaves. Afterline takes the matter type and books a callback window.",
  },
  {
    slug: "home-services",
    name: "Home services",
    example:
      "A leaking water heater on Sunday. Afterline books the first available truck and sends the address to the crew.",
  },
  {
    slug: "auto",
    name: "Auto",
    example:
      "A no-start after close. Afterline books a morning bay and captures the VIN and callback number.",
  },
] as const;

export const pricing = [
  {
    name: "Starter",
    price: "From $189",
    period: "/ month",
    blurb: "One location. After-hours coverage on a single forwarded line.",
    features: [
      "One business number",
      "After-hours and closed-day forwarding",
      "Appointment booking + SMS confirm",
      "Recording disclosure on every call",
      "Email transcript after each booking",
    ],
  },
  {
    name: "Practice",
    price: "From $349",
    period: "/ month",
    blurb: "Overflow during the day, full coverage at night. The line most practices run.",
    featured: true,
    features: [
      "After-hours plus daytime overflow",
      "Multiple calendars or providers",
      "Custom greeting and visit types",
      "Human handoff rules",
      "Weekly booking report",
    ],
  },
  {
    name: "Multi-location",
    price: "Talk to us",
    period: "",
    blurb: "Groups and franchises that need one voice across many numbers.",
    features: [
      "Many numbers, one playbook",
      "Per-location calendars",
      "Role-based routing",
      "Priority onboarding",
      "Dedicated success contact",
    ],
  },
] as const;

export const faq = [
  {
    q: "How does the call get to Afterline?",
    a: "You set a carrier forward for after hours, weekends, or when a line is unanswered — the same “forward when unavailable” most phones already support. No new hardware. Your public number does not change.",
  },
  {
    q: "What can the AI actually book?",
    a: "The visit types you allow: new patient, existing patient, estimate, consult, emergency hold. It will not invent slots. Your calendar is the source of truth.",
  },
  {
    q: "What if the caller needs a person?",
    a: "You set handoff rules. Afterline can take a message, offer the next open slot, or escalate to an on-call number you name.",
  },
  {
    q: "Do callers know they are speaking with AI?",
    a: "Yes. Every call opens with a clear disclosure, including that the call may be recorded. That is not optional.",
  },
  {
    q: "Which calendars do you support?",
    a: "Google Calendar and Outlook first. Practice software and other systems follow during onboarding. Until then, bookings can land as confirmed holds by email and SMS.",
  },
  {
    q: "What languages are available?",
    a: "English at launch. Additional languages are added per practice during onboarding — ask when you request a demo.",
  },
] as const;

export const steps = [
  {
    n: "01",
    title: "Forward the number",
    body: "Point after-hours, weekends, and unanswered calls to Afterline. Your listed number stays yours.",
  },
  {
    n: "02",
    title: "The AI answers and books",
    body: "It greets in your voice, asks what they need, and offers only the slots you published.",
  },
  {
    n: "03",
    title: "The calendar updates",
    body: "The appointment is written to your calendar. The caller gets an SMS. You see it in the morning.",
  },
] as const;

export const losses = [
  {
    title: "Voicemail",
    body: "Most after-hours callers will not leave a message. They will try the next practice on the list.",
  },
  {
    title: "The competitor",
    body: "Someone else is still answering. The job, the consult, the new patient goes there.",
  },
  {
    title: "Call back tomorrow",
    body: "Intent cools overnight. The booking you would have had at 8:12pm is gone by 9am.",
  },
] as const;

export const trust = [
  {
    title: "Recording disclosure",
    body: "Every call states that Afterline is AI and that the conversation may be recorded.",
  },
  {
    title: "Human handoff",
    body: "You decide when a person should take over. Afterline does not improvise clinical or legal advice.",
  },
  {
    title: "Calendar as source of truth",
    body: "No shadow book. If the slot is not on your calendar, it is not offered.",
  },
] as const;

export const quotes = [
  {
    quote:
      "We used to lose Sunday emergencies to the clinic down the road. Now those calls are on Monday’s board when we unlock.",
    name: "Practice owner",
    role: "Dental — placeholder",
  },
  {
    quote:
      "Overflow at lunch was the quiet leak. Afterline takes the ones we cannot reach and books them instead of parking them in voicemail.",
    name: "Office manager",
    role: "Home services — placeholder",
  },
] as const;

export const verticals = [
  "Dental",
  "Medical / clinic",
  "Legal",
  "Home services",
  "Auto",
  "Other",
] as const;

export const howDetailed = [
  {
    title: "Call is forwarded",
    body: "Your carrier sends the call when you are closed, on holiday, or the front desk does not pick up. The caller still dialed you.",
  },
  {
    title: "Afterline answers",
    body: "A short disclosure, then your greeting. The AI asks why they called and what kind of visit they need.",
  },
  {
    title: "Qualify against your rules",
    body: "Visit types, duration, providers, and blackout windows come from the playbook you approved. Out of scope goes to a message or on-call.",
  },
  {
    title: "Book the slot",
    body: "Only open times on your calendar are offered. The caller picks one. Name, number, and notes are captured.",
  },
  {
    title: "SMS and calendar write",
    body: "Confirmation goes to the caller. The appointment appears on the calendar you named. You get a transcript.",
  },
] as const;
