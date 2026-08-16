# Afterline

Marketing site for after-hours AI reception: forwarded calls, booked appointments.

```bash
pnpm install   # npm cache is unreliable on this phone; pnpm works
cp .env.example .env.local
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). Production check: `pnpm build && pnpm start`.

On this phone, install `@tailwindcss/oxide-linux-arm64-gnu` if `next build` complains about a missing native binding. Azure’s x64 runners do not need that package.

## Lead form

Set in `.env.local` (and later in Azure Static Web Apps application settings / GitHub secrets):

- `RESEND_API_KEY`
- `LEAD_TO_EMAIL`
- `LEAD_FROM_EMAIL` (optional; Resend test sender works until a domain is verified)

Without a key, local `next dev` logs the lead and still returns success.

## Azure Static Web Apps

GitHub Actions exports a static site (`out/`) and deploys a small `/api/contact` function. Hybrid Next.js SSR was timing out on the Free SKU.

Add `AZURE_STATIC_WEB_APPS_API_TOKEN` plus the Resend secrets on the SWA and as GitHub Actions secrets, then push `main`.

Rename the brand in `app/lib/site.ts`.
