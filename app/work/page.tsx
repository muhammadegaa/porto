import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export const metadata = {
  title: "Work — Muhammad Ega",
  description:
    "AI PM case studies (codehere, ravenote, beeready) and five years of corporate product management across Mekari, Shopee, IBM, and Jaguar Land Rover.",
}

type CaseStudy = {
  slug: string
  name: string
  subtitle: string
  archetype: string
  liveUrl: string
  highlights: string[]
}

const aiCaseStudies: CaseStudy[] = [
  {
    slug: "codehere",
    name: "codehere",
    subtitle: "Enterprise-safe AI coding agent with pre-execution audit layer.",
    archetype: "AI dev tools / safety",
    liveUrl: "https://codehere.uk",
    highlights: [
      "91-page PRD + 20-scenario competitive analysis (World A–D futures model)",
      "Pre-execution security gate: 60+ vulnerability patterns audited before every AI write",
      "Multi-provider LLM orchestration via OpenRouter (Claude, OpenAI, Cohere, local Ollama)",
      "Shipped v0.3 CLI to npm; 20+ test suites covering security, context-depth, and git workflows",
    ],
  },
  {
    slug: "ravenote",
    name: "ravenote",
    subtitle: "Turns Udemy & YouTube lectures into AI study notes + quizzes. Chrome MV3 + Stripe Pro tier.",
    archetype: "Consumer AI / monetization",
    liveUrl: "https://ravenote.xyz",
    highlights: [
      "Live on Chrome Web Store v1.0 with Stripe-backed Pro subscriptions",
      "OpenRouter fallback routing across 4 providers (Sonnet 4.6 default, Gemini / Qwen / OpenAI backup)",
      "Usage-based cost reconciliation: webhook ties OpenRouter generation costs to Stripe charges",
      "Free tier bring-your-own-key, Pro tier proxy — clean separation of cost economics",
    ],
  },
  {
    slug: "beeready",
    name: "beeready",
    subtitle: "AI voice interview coach scoring candidates against official LPDP / IELTS / TOEFL rubrics.",
    archetype: "Vertical voice AI",
    liveUrl: "https://beeready.dev",
    highlights: [
      "GPT-4o + ElevenLabs real-time voice, 4 evaluator personas across interview phases",
      "Rubric-based evals: scoring against LPDP band descriptors, IELTS / TOEFL criteria",
      "Sub-60-second scoring across Communication, Problem-solving, Leadership dimensions",
      "3-tier IDR pricing (Rp 10K single / Rp 28K pack / Rp 150K monthly) live",
    ],
  },
]

type Role = {
  role: string
  company: string
  location: string
  period: string
  summary: string
  wins: string[]
}

const corporate: Role[] = [
  {
    role: "Product Engineer",
    company: "Jaguar Land Rover",
    location: "Manchester, UK",
    period: "Sep 2024 — Present",
    summary:
      "Designing and shipping internal automation for connected-vehicle services, authoring technical user stories, and collaborating with engineering on platform reliability.",
    wins: [
      "Cut SMS verification configuration time by 80% via internal automation tooling",
      "Operational throughput up 15%; activation funnel conversion up 22% across 15+ user stories",
    ],
  },
  {
    role: "Senior Product Manager",
    company: "Mekari",
    location: "Jakarta",
    period: "Sep 2023 — Aug 2024",
    summary:
      "Owned the API-first product roadmap for 600+ enterprise customers at Indonesia's leading B2B SaaS. Led AI-driven compliance automation and developer integration launches.",
    wins: [
      "Enterprise onboarding cut from 45 → 14 days via AI-driven compliance automation (eKYC, certificate issuance, batch signing)",
      "78% adoption of developer integration suite (eSignature, AutoSign, Document Status); doubled contract value processed",
      "Translated regulatory constraints into prioritized requirements; facilitated weekly alignment across engineering, legal, and sales",
    ],
  },
  {
    role: "Product Manager",
    company: "Shopee",
    location: "Jakarta",
    period: "Feb 2022 — Jul 2022",
    summary:
      "Led seller onboarding and growth programs across Southeast Asia's largest e-commerce platform.",
    wins: [
      "Growth program adopted by 2.8M+ sellers; monthly signups up 20%",
      "Operationalized churn prediction with data science — 18% churn reduction, retained ~$1.2M GMV",
      "50+ seller interviews drove support-ticket reduction of 32% and CSAT improvement from 3.2 → 4.0",
    ],
  },
  {
    role: "Software Specialist",
    company: "IBM",
    location: "Jakarta",
    period: "May 2020 — Jan 2022",
    summary:
      "Led 4-person engineering team delivering AI and RPA automation for enterprise clients; shipped early conversational AI during COVID.",
    wins: [
      "Processed 10,000+ monthly transactions worth $2.5M with 15% throughput gain",
      "AI-powered COVID exposure-tracing chatbot: 5,000+ daily conversations across 2,000+ employees",
      "8 production RPA systems, 99.2% uptime, <0.5% error rate, automating 120+ workflows",
    ],
  },
]

export default function WorkPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:py-16 max-w-5xl">
      <header className="mb-10 sm:mb-14">
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Work</h1>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Two tracks. On the left, AI products I'm shipping independently right now. On the right,
          five years of corporate PM outcomes across fintech, marketplaces, and enterprise SaaS.
        </p>
      </header>

      {/* AI products */}
      <section className="mb-14 sm:mb-20">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="font-serif text-xl sm:text-2xl font-bold">Shipped AI products</h2>
          <span className="text-xs text-muted-foreground uppercase tracking-wide">
            building in public
          </span>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:gap-5">
          {aiCaseStudies.map((cs) => (
            <div
              key={cs.slug}
              className="rounded-lg border bg-background p-5 sm:p-6 hover:border-foreground/40 transition"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-2">
                <div className="flex items-baseline gap-3">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold">{cs.name}</h3>
                  <span className="text-xs text-muted-foreground uppercase tracking-wide">
                    {cs.archetype}
                  </span>
                </div>
                <a
                  href={cs.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1"
                >
                  {cs.liveUrl.replace(/^https?:\/\//, "")}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
              <p className="text-sm sm:text-base mb-4 leading-relaxed">{cs.subtitle}</p>
              <ul className="space-y-1.5 mb-4">
                {cs.highlights.map((h, i) => (
                  <li key={i} className="text-sm text-muted-foreground leading-relaxed pl-4 relative">
                    <span className="absolute left-0 top-2 w-1 h-1 rounded-full bg-muted-foreground/50" />
                    {h}
                  </li>
                ))}
              </ul>
              <Link
                href={`/work/${cs.slug}`}
                className="text-sm font-medium underline underline-offset-4 hover:text-foreground"
              >
                Full case study →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Corporate track record */}
      <section>
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="font-serif text-xl sm:text-2xl font-bold">Corporate PM track record</h2>
          <span className="text-xs text-muted-foreground uppercase tracking-wide">
            five years · four companies
          </span>
        </div>
        <div className="space-y-4 sm:space-y-5">
          {corporate.map((c) => (
            <div key={c.company + c.period} className="rounded-lg border bg-background p-5 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold">
                    {c.role}
                    <span className="font-normal text-muted-foreground"> · {c.company}</span>
                  </h3>
                  <p className="text-xs text-muted-foreground">{c.location}</p>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">{c.period}</p>
              </div>
              <p className="text-sm sm:text-base mb-3 leading-relaxed">{c.summary}</p>
              <ul className="space-y-1.5">
                {c.wins.map((w, i) => (
                  <li key={i} className="text-sm text-muted-foreground leading-relaxed pl-4 relative">
                    <span className="absolute left-0 top-2 w-1 h-1 rounded-full bg-muted-foreground/50" />
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
