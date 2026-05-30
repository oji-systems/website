# Oji Systems LLC — Website

Marketing site for [ojisystems.com](https://ojisystems.com). Built with Next.js, Tailwind CSS v4, shadcn/ui, and zod.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

Copy `.env.example` to `.env.local` and set:

| Variable | Description |
|----------|-------------|
| `RESEND_API_KEY` | Resend API key for the contact form |
| `CONTACT_TO` | Inbox that receives form submissions (default: `info@ojisystems.com`) |
| `CONTACT_FROM` | Verified sender for internal notification emails (e.g. `contact@ojisystems.com`) |
| `AUTO_REPLY_FROM` | Verified sender for submitter auto-reply (default: `info@ojisystems.com`) |

Without `RESEND_API_KEY`, the contact form returns a friendly error and `mailto:` links still work.

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import the project in [Vercel](https://vercel.com).
3. Add environment variables from `.env.example`.
4. Add domains `ojisystems.com` and `www.ojisystems.com`.
5. Apply the DNS records Vercel shows in **Cloudflare** (see below).

## DNS and email (Cloudflare)

Domain registration can stay at GoDaddy. Point nameservers to Cloudflare for DNS and Email Routing.

### 1. Move DNS to Cloudflare

1. Add `ojisystems.com` to Cloudflare (free plan).
2. At GoDaddy, replace nameservers with the two Cloudflare nameservers.
3. Wait for propagation (often 15–60 minutes).

### 2. Website records (Vercel)

In Cloudflare DNS, add the records Vercel provides when you attach the domain (typically `A`/`CNAME` for `@` and `www`).

**Important:** If you have an existing **A record for a client subdomain** pointing at your DigitalOcean droplet, **do not change or delete it**. Only add or update records for `@` and `www` per Vercel’s instructions.

Recommended proxy: orange cloud (proxied) for `@` and `www` with SSL mode **Full (strict)** once Vercel certificates are active.

### 3. Inbound email — Cloudflare Email Routing (free)

1. In Cloudflare → **Email** → **Email Routing** → enable.
2. Create routes:
   - `ayo@ojisystems.com` → your personal inbox
   - `info@ojisystems.com` → your personal inbox (or a label/filter)
3. Cloudflare adds MX and related records automatically.
4. Complete SPF/DMARC steps in the Cloudflare wizard.

**Sending as `@ojisystems.com`:** Routing is primarily receive/forward. For outbound:

- Reply from the inbox that receives forwards, or
- Configure Gmail **Send mail as** for your domain, or
- Send invoices from **Mercury Bank** (recommended for billing).

### 4. Mercury Bank (invoices)

Client invoices are sent from Mercury directly. No website integration is required for v1.

## Brand assets

- Guidelines: [`brand/BRAND.md`](brand/BRAND.md)
- Tokens: [`brand/tokens.css`](brand/tokens.css)
- Logos: [`public/logo.svg`](public/logo.svg), [`public/logo-mark.svg`](public/logo-mark.svg)

## Scripts

```bash
npm run build   # production build
npm run start   # serve production build
npm run lint    # ESLint
```

## Pre-launch checklist

- [ ] `https://ojisystems.com` loads the site
- [ ] Client subdomain on the droplet still works (unchanged DNS record)
- [ ] No client or project names on the public site without approval
- [ ] Test `info@ojisystems.com` inbound routing
- [ ] Contact form delivers with Resend (or mailto fallback confirmed)
- [ ] Mobile navigation and form validation work
