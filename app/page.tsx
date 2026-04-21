import Link from "next/link"
import { ArrowUpRight, Mail } from "lucide-react"

import { TextScramble } from "@/components/ui/text-scramble"

type Product = {
  slug: string
  name: string
  tagline: string
  url: string
  archetype: string
  stack: string[]
  signal: string
}

const products: Product[] = [
  {
    slug: "codehere",
    name: "codehere",
    tagline: "Enterprise-safe AI coding agent with a pre-execution audit layer.",
    url: "https://codehere.uk",
    archetype: "AI dev tools / safety",
    stack: ["Claude", "OpenAI", "Local SQLite RAG", "Multi-provider routing"],
    signal:
      "91-page PRD · 20-scenario competitive analysis · shipped v0.3 CLI to npm · 60+ pattern security scan before every AI write",
  },
  {
    slug: "ravenote",
    name: "ravenote",
    tagline: "Chrome extension that turns Udemy & YouTube lectures into AI study notes and quizzes.",
    url: "https://ravenote.xyz",
    archetype: "Consumer AI / monetization",
    stack: ["Chrome MV3", "OpenRouter", "Stripe", "Firebase Auth", "Vercel Functions"],
    signal:
      "Live on Chrome Web Store v1.0 · Stripe-backed Pro tier · OpenRouter fallback routing across 4 providers · usage-based cost reconciliation",
  },
  {
    slug: "beeready",
    name: "beeready",
    tagline: "AI voice interview coach scoring candidates against official LPDP / IELTS / TOEFL rubrics.",
    url: "https://beeready.dev",
    archetype: "Vertical voice AI",
    stack: ["GPT-4o", "ElevenLabs", "Realtime voice", "Rubric-based evals"],
    signal:
      "Live product · 3-tier pricing (Rp 10K to 150K) · 4 evaluator personas · instant scoring across Communication / Problem-solving / Leadership dimensions",
  },
  {
    slug: "nectic",
    name: "nectic",
    tagline: "Reads WhatsApp sales conversations and delivers weekly product intelligence to PM teams.",
    url: "https://nectic.xyz",
    archetype: "AI for emerging-market GTM",
    stack: ["WhatsApp Business API", "LLM summarization", "Weekly digest delivery"],
    signal:
      "Addresses a SE-Asia-specific gap: sales runs on WhatsApp, PM teams fly blind. Landing live, early-stage.",
  },
]

const corporate = [
  { role: "Product Engineer", company: "Jaguar Land Rover", period: "2024 to Present", location: "Manchester" },
  { role: "Senior Product Manager", company: "Mekari", period: "2023 to 2024", location: "Jakarta" },
  { role: "Product Manager", company: "Shopee", period: "2022", location: "Jakarta" },
  { role: "Software Specialist", company: "IBM", period: "2020 to 2022", location: "Jakarta" },
]

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="border-b bg-background">
        <div className="container mx-auto px-4 py-16 sm:py-24 max-w-5xl">
          <p className="text-sm font-medium text-muted-foreground mb-4 tracking-wide uppercase">
            Muhammad Ega · Product Manager · AI
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            I ship AI products end-to-end.
            <br className="hidden sm:block" />
            From PRD to production to pricing.
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed">
            5+ years in product. Currently at Jaguar Land Rover. Previously Senior PM at Mekari (launched
            AI compliance automation that cut enterprise onboarding from 45 to 14 days, 78% adoption),
            PM at Shopee (2.8M+ sellers), and Software Specialist at IBM (led 4-person AI automation
            team). MSc Human-Computer Interaction, University of Birmingham (Distinction).
          </p>
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            <Link
              href="/work"
              className="group inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-foreground text-background font-medium hover:opacity-90 transition"
            >
              <TextScramble text="SEE THE WORK" className="text-sm" />
              <ArrowUpRight className="ml-1.5 h-4 w-4" />
            </Link>
            <a
              href="mailto:simatupang.ega@gmail.com?subject=AI%20PM%20role"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-md border border-foreground/20 font-medium hover:bg-muted transition"
            >
              <Mail className="mr-2 h-4 w-4" />
              simatupang.ega@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Shipped AI products */}
      <section className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-14 sm:py-20 max-w-5xl">
          <div className="mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-2">Shipped AI products</h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Four live products across four AI product archetypes. Early-stage, building in public and validating PMF.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {products.map((p) => (
              <div
                key={p.slug}
                className="flex flex-col rounded-lg border bg-background p-5 sm:p-6 hover:border-foreground/40 transition"
              >
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-serif text-xl font-bold">{p.name}</h3>
                  <span className="text-xs text-muted-foreground uppercase tracking-wide">
                    {p.archetype}
                  </span>
                </div>
                <p className="text-sm sm:text-base mb-4 leading-relaxed">{p.tagline}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="text-[11px] px-2 py-0.5 rounded bg-muted text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mb-4 leading-relaxed">{p.signal}</p>
                <div className="mt-auto flex items-center justify-between pt-3 border-t text-sm">
                  <Link
                    href={`/work/${p.slug}`}
                    className="font-medium hover:underline"
                  >
                    Case study →
                  </Link>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1"
                  >
                    live site
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate track record */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-14 sm:py-20 max-w-5xl">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-2">Corporate PM track record</h2>
          <p className="text-muted-foreground text-sm sm:text-base mb-8">
            Business outcomes from five years in product across fintech, marketplaces, and enterprise SaaS.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {corporate.map((c) => (
              <div key={c.company} className="rounded-lg border bg-background p-4 sm:p-5">
                <div className="text-xs text-muted-foreground mb-1">{c.period}</div>
                <div className="font-medium">{c.role}</div>
                <div className="text-sm text-muted-foreground">
                  {c.company} · {c.location}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-sm">
            <Link href="/work" className="underline underline-offset-4 font-medium">
              Full case studies →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
