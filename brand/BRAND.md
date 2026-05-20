# Oji Systems LLC Brand Guidelines (v2)

## Identity

- **Legal name**: Oji Systems LLC
- **Public name**: Oji Systems
- **Principal**: Ayo Oji
- **Location**: Austin, TX
- **What we are**: A small venture studio. We design and build our own products, and we partner with serious teams on the infrastructure underneath theirs.

## Voice

- Plain English, direct, confident without arrogance
- Technical but approachable, editorial in tone
- No emojis in professional content
- No em dashes (use commas, periods, or hyphens)
- No buzzwords. Forbidden on the site: transform, leverage, synergy, empower, unlock, revolutionize, AI-powered, cutting-edge, world-class, chatbot, agentic (unless naming a product), Nigerian as a category label
- We build infrastructure and software systems, not chatbots

## Public content rules

- Do not name unreleased products. Use "in private development" instead.
- Do not name clients or engagements until written approval.
- Nigeria stays personal motivation, not a marketing pillar. At most, one sentence in Ayo's bio.
- No lorem ipsum. Omit sections without real content.
- All public work credited to Ayo Oji / Oji Systems LLC only. Never attribute work to AI assistants.

## Color palette

| Token | Hex | Usage |
|-------|-----|--------|
| Bone | `#F4EFE6` | Page background |
| Paper | `#FBF8F1` | Elevated cards |
| Paper elevated | `#F7F2E9` | Hover state for paper |
| Ink | `#0E0E10` | Body text, headings |
| Stone | `#6B675F` | Secondary text |
| Stone muted | `#9A958B` | Tertiary, mono captions |
| Sienna | `#C2410C` | Accent: section indices, links on hover, key CTAs |
| Sienna deep | `#9A3309` | Pressed/active accent |
| Hairline | `rgba(14,14,16,0.08)` | Dividers, card borders |

A dark variant (true black background with sienna) is available later as an optional theme. Default is light.

## Typography

- **Display**: Fraunces (Google Fonts, variable). Used for H1, large pull quotes, the wordmark. Optical sizing enabled. Use italic sparingly for one keyword when it earns the emphasis.
- **Body / UI**: General Sans (Fontshare, free). Distinctive neo-grotesque. Replaces the overused Inter/Geist family.
- **Mono**: JetBrains Mono (Google Fonts). Section indices, micro labels, footnotes. Never paragraphs.

Type rules:

- H1 in Fraunces with `font-optical-sizing: auto`.
- Body in General Sans at ~17px, line-height 1.55.
- Mono uppercase for labels with letter-spacing.

## Logo

- **Wordmark**: "Oji Systems" set in Fraunces SemiBold, optical size for display. The only primary mark.
- **Avatar / favicon**: a single filled ink circle. Solid `#0E0E10` on bone backgrounds; sienna on ink for dark variants.
- Files: [`public/logo.svg`](../public/logo.svg) (wordmark), [`public/logo-mark.svg`](../public/logo-mark.svg) (filled dot), [`src/app/icon.svg`](../src/app/icon.svg) (favicon).

Don't recolor the wordmark outside the palette. Don't add taglines beneath the logo.

## Type scale (web)

| Role | Size | Tracking | Notes |
|------|------|----------|-------|
| Display H1 | 3.5rem - 5rem | -0.02em | Fraunces, optical 96 |
| H2 | 2rem - 2.5rem | -0.01em | Fraunces |
| H3 | 1.25rem | 0 | General Sans 600 |
| Body | 1.0625rem | 0 | General Sans 400, line-height 1.6 |
| Mono caption | 0.75rem | 0.14em uppercase | JetBrains Mono 500 |

## Texture

- Hero only: a fine SVG noise overlay at ~3% opacity. Adds atelier feel.
- Section headers: one mono caption above (e.g. "01 / Work") with a hairline beneath.

## Motion

- Hero load: a single staggered fade-and-lift (200ms step, max 600ms total).
- Card hover: 1px lift, hairline shifts to sienna.
- Respect `prefers-reduced-motion`.
- Nothing else animates.
