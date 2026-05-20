export const siteConfig = {
  name: "Oji Systems LLC",
  shortName: "Oji Systems",
  description:
    "A small venture studio in Austin. We design and build our own software, and we partner with serious teams on the infrastructure underneath theirs.",
  url: "https://ojisystems.com",
  location: "Austin, TX",
  emails: {
    ayo: "ayo@ojisystems.com",
    info: "info@ojisystems.com",
  },
} as const;

/** Work entries shown on the home page teaser (full list on /work). */
export const homeWorkPreviewCount = 2;

export const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/studio", label: "Studio" },
  { href: "/contact", label: "Contact" },
] as const;

/**
 * Selected work. Keep entries unnamed until the project is publicly launched or
 * the client has approved a write-up. To reveal an internal product later,
 * replace the matching entry with a named version like:
 *
 *   {
 *     id: "01",
 *     year: "2026",
 *     kind: "Product",
 *     title: "Enterball",
 *     description: "Location-based games with on-site check-ins and sponsor payouts.",
 *     status: "Live",
 *     href: "https://enterball.com",
 *   }
 */
export const work = [
  {
    id: "01",
    year: "2026",
    kind: "Product",
    title: "A new consumer product",
    description:
      "In private development. Designed and built in Austin. More when it ships.",
    status: "Private",
  },
  {
    id: "02",
    year: "2026",
    kind: "Infrastructure",
    title: "Salience and ranking systems",
    description:
      "Production work for a partner team. Details on request, under NDA.",
    status: "Active",
  },
  {
    id: "03",
    year: "Ongoing",
    kind: "Lab",
    title: "Additional concepts in development",
    description:
      "Quiet experiments at the intersection of AI, infrastructure, and consumer software. We share when they earn it.",
    status: "Lab",
  },
] as const;

export const capabilities = [
  {
    id: "01",
    title: "Product engineering",
    body: "Designing, shipping, and operating software that we own end-to-end.",
  },
  {
    id: "02",
    title: "AI systems",
    body: "Retrieval, ranking, evaluation, and the plumbing around models that makes them useful in production.",
  },
  {
    id: "03",
    title: "Infrastructure",
    body: "Storage, orchestration, and the unglamorous layers that decide whether a system survives real workloads.",
  },
  {
    id: "04",
    title: "Technical strategy",
    body: "Principal-level reviews and roadmaps when a team needs an honest second pair of eyes.",
  },
] as const;

export const principles = [
  {
    title: "Studio speed, not startup theater",
    body: "Small team, principal-led, measurable artifacts. We move fast where speed creates leverage and slow down where care does.",
  },
  {
    title: "Infrastructure first",
    body: "Models are one layer. Storage, orchestration, and failure modes determine whether a system survives contact with production.",
  },
  {
    title: "Scope discipline",
    body: "Engagements have clear deliverables and success criteria. No open-ended retainers.",
  },
  {
    title: "Direct ownership",
    body: "You work with the people responsible for the outcome. No account managers in the middle.",
  },
] as const;
