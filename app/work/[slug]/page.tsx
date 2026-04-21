import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowUpRight, ChevronLeft } from "lucide-react"

type Section = {
  heading: string
  body: string | string[]
}

type CaseStudy = {
  title: string
  tagline: string
  archetype: string
  status: string
  liveUrl: string
  role: string
  stack: string[]
  sections: Section[]
  interviewPrep?: { q: string; a: string }[]
}

const caseStudies: Record<string, CaseStudy> = {
  codehere: {
    title: "codehere",
    tagline:
      "An enterprise-safe AI coding agent. Every AI-generated write is audited against 60+ vulnerability patterns before execution.",
    archetype: "AI dev tools · safety",
    status: "v0.3 alpha · shipped to npm · landing live",
    liveUrl: "https://codehere.uk",
    role: "Solo PM + builder — product strategy, PRD, go-to-market",
    stack: [
      "Node/TS CLI",
      "OpenRouter multi-provider (Claude, OpenAI, Cohere, Ollama)",
      "Local SQLite embeddings (RAG)",
      "gRPC IPC",
      "Vercel (landing)",
      "npm distribution",
    ],
    sections: [
      {
        heading: "The bet",
        body: [
          "Enterprises are replacing junior engineers with AI coding agents, but nobody is shipping the apprenticeship-upgrade path. Meanwhile, DeepMind/MIT (2025) measured 17.2× error amplification in multi-agent systems, and 45% of AI-generated code contains vulnerabilities.",
          "codehere's wedge is not \"another coding agent.\" It's the pre-execution audit layer that every agent will need. We own the governance step — the scanner that runs before an AI write touches disk — and bundle it with a coding agent so developers get the value without an extra tool.",
        ],
      },
      {
        heading: "What it does",
        body: [
          "Multi-provider LLM orchestration via OpenRouter so the user picks Claude, OpenAI, or a local Ollama model. Cost and token usage are tracked per generation.",
          "A pre-execution security gate pattern-matches 60+ vulnerability classes (OWASP, SSRF, command injection, secret exfiltration) against every AI-authored diff before it runs.",
          "Local SQLite embeddings index the repo so retrieval is fast, free, and fully offline. No context is sent to third parties without explicit opt-in.",
        ],
      },
      {
        heading: "PM decisions I'm proud of",
        body: [
          "Scoped down hard. The original PRD was a full agentic IDE. I cut it to CLI + audit layer because owning one verifiable step beats a half-working competitor to GitHub Copilot.",
          "Wrote a 20-scenario futures analysis (World A–D) to pressure-test positioning: if hyperscalers ship first-party audit, where do we win? If they don't, where do we win? Answer: the \"bring-your-own-agent\" adapter surface where enterprises already have tool proliferation.",
          "Chose Ollama + local SQLite over managed vector DBs. Cost goes to zero on the user side, and enterprises get a story for their security team on day one.",
        ],
      },
      {
        heading: "Tradeoffs I'd revisit",
        body: [
          "Pattern-based scanning has a false-positive ceiling. Next iteration uses an LLM-judge over flagged diffs — but that re-introduces a dependency I initially wanted to avoid.",
          "Multi-provider is a feature for early users and a tax on me. Each provider has different streaming, tool-calling, and error shapes. A thin adapter abstraction paid for itself by v0.3 but slowed v0.1.",
        ],
      },
    ],
    interviewPrep: [
      {
        q: "Why a CLI instead of an IDE extension?",
        a: "Distribution cost is lower (npm install), the audit layer is the same code regardless of surface, and enterprise security teams can audit a CLI in one pass. Extensions are on the roadmap once the governance primitive is stable.",
      },
      {
        q: "How do you evaluate the audit layer?",
        a: "Golden-set of 250+ adversarial diffs (intentionally-vulnerable code) graded against CVE categories; precision/recall tracked per release. False-positive rate is the headline metric because it's what kills developer trust.",
      },
    ],
  },
  ravenote: {
    title: "ravenote",
    tagline:
      "A Chrome extension that auto-captures lectures from Udemy and YouTube, generates AI study notes, and quizzes you on them. Live on the Chrome Web Store with a Stripe-backed Pro tier.",
    archetype: "Consumer AI · monetization",
    status: "v1.0 live on Chrome Web Store · Stripe Pro tier active",
    liveUrl: "https://ravenote.xyz",
    role: "Solo PM + builder — product, pricing, backend, GTM",
    stack: [
      "Chrome extension (MV3)",
      "OpenRouter multi-model routing",
      "Stripe subscriptions",
      "Firebase Auth + Firestore",
      "Vercel Functions (backend proxy)",
      "Edge Config (cost tracking)",
    ],
    sections: [
      {
        heading: "The problem",
        body: "Self-learners on Udemy and YouTube spend hours in passive video playback. The comprehension wins they want — structured notes, spaced retrieval quizzes — require re-watching and manual effort. Generative models can do this in seconds; nobody had shipped a zero-friction capture loop inside the actual learning surface.",
      },
      {
        heading: "What it does",
        body: [
          "Content scripts on Udemy and YouTube silently capture the lecture transcript as you watch, then one-click generates structured notes (headings, key concepts, summary) and a short recall quiz.",
          "Free tier: 3 lectures/day, bring-your-own OpenRouter key — users own the cost.",
          "Pro tier (Stripe subscription): unlimited generation via our backend proxy that hides the key; we absorb the LLM cost and reconcile against subscription revenue.",
        ],
      },
      {
        heading: "PM decisions I'm proud of",
        body: [
          "Cost-aware routing as a product feature. The backend defaults to Sonnet 4.6 and falls back across Gemini / Qwen / OpenAI via OpenRouter if the primary errors. When Anthropic retires old 3.5 models, our router auto-remaps — zero user-facing break.",
          "Bring-your-own-key for free tier is the anti-VC-burn lever. Free users can't spike our costs; Pro users pay for abstraction (they don't want to manage keys). This kept COGS inside margin from day one.",
          "Webhook-based cost reconciliation. OpenRouter reports actual generation cost ~1s after the response; we store it and reconcile against the Stripe subscription. If a user is in deficit we know which model choices to rebalance.",
        ],
      },
      {
        heading: "Tradeoffs I'd revisit",
        body: [
          "I used Firebase Auth + Firestore because it's the fastest path to production. At scale the cold-start on Vercel Functions + Firestore is visible; a Cloudflare Workers + D1 migration is on the list.",
          "Model choice default is Sonnet 4.6. It's right for quality, but for bullet-style notes a cheaper model with a tighter prompt gets 90% of the win. A/B on the free tier is overdue.",
        ],
      },
    ],
    interviewPrep: [
      {
        q: "How do you evaluate note quality without a ground-truth dataset?",
        a: "Two loops: (1) a rubric-based LLM-judge with a fixed rubric (coverage, structure, no-hallucination) over a 30-lecture golden set; (2) qualitative — retention scores from the generated quizzes correlate with note coherence. Not perfect, but it catches regressions when I change prompts or models.",
      },
      {
        q: "Why didn't you build a web app instead of a Chrome extension?",
        a: "Distribution. Learners already live inside Udemy and YouTube. A web app means they paste a URL; an extension means I'm where they already are. Tradeoff: MV3 review cycles are slow and I can't trivially support Firefox/Edge yet.",
      },
      {
        q: "How do you keep margin on Rp-level pricing if you're thinking about emerging markets next?",
        a: "Route cheaper models for short-transcript lectures, cache common prompts via the Runtime Cache layer, and cap tokens aggressively (max 1600 out). The temperature-0.25 setting also keeps retries low.",
      },
    ],
  },
  beeready: {
    title: "beeready",
    tagline:
      "A voice-first AI interview coach for Indonesian scholarship (LPDP, Chevening) and civil-service (CPNS) candidates. GPT-4o + ElevenLabs, scoring against official rubrics.",
    archetype: "Vertical voice AI",
    status: "Live · IDR pricing tiers active · early traction",
    liveUrl: "https://beeready.dev",
    role: "Solo PM + builder — product, evals design, pricing",
    stack: [
      "GPT-4o (evaluation + coaching)",
      "ElevenLabs (realtime voice)",
      "Next.js + Vercel",
      "Rubric-based scoring engine",
      "Stripe / local payment rails",
    ],
    sections: [
      {
        heading: "The problem",
        body: "LPDP (Indonesia's largest scholarship), Chevening, IELTS/TOEFL, and CPNS (civil service) interviews are high-stakes moments for Indonesian applicants. Practice is expensive, inconsistent, and almost never benchmarked against the actual rubrics real evaluators use. Candidates rehearse with friends and hope.",
      },
      {
        heading: "What it does",
        body: [
          "A realtime voice interview with 4 distinct AI evaluator personas across interview phases (warm-up, behavioral, technical/situational, closing).",
          "Scoring happens against official rubrics: LPDP band descriptors, IELTS band descriptors, TOEFL speaking rubrics. Output dimensions: Communication, Problem-solving, Leadership — with specific evidence pulled from the session transcript.",
          "For professional interviews, a CV-to-JD gap analysis seeds the questions so practice matches the role, not a generic template.",
        ],
      },
      {
        heading: "PM decisions I'm proud of",
        body: [
          "Rubric-first, not LLM-first. The scoring module ingests the actual official rubric as context and has the model produce a score with citations from the transcript. This is the difference between \"fuzzy encouragement\" and \"actionable feedback\" — and it's what lets us charge.",
          "GPT-4o over Claude for evaluation. I chose GPT-4o specifically because structured-output reliability and instruction-following under rubric constraints tested better on our golden set. Claude 3.5/4 wins on open-ended writing; GPT-4o wins on \"follow this 40-row rubric without drifting.\"",
          "ElevenLabs over OpenAI realtime. Voice is the product. ElevenLabs' emotional range on Indonesian + English code-switching beats alternatives for the local market — and code-switching is the default in real LPDP interviews.",
          "Pricing in IDR with granularity. Rp 10K single session is lower than a coffee. Rp 28K pack nudges toward commitment. Rp 150K monthly locks in power users. The ladder is designed for the psychology of exam-prep spend, not SaaS.",
        ],
      },
      {
        heading: "Tradeoffs I'd revisit",
        body: [
          "Voice latency is the single biggest UX lever; turn-taking under 800ms is what makes it feel like a real interview. Getting there meant carefully sequencing TTS chunks and accepting slightly worse-quality prosody at the boundaries.",
          "Calibrating the rubric scoring against actual human graders is the next milestone. Right now I sanity-check against my own graded set; scaling this needs partnerships with LPDP-prep tutors.",
        ],
      },
    ],
    interviewPrep: [
      {
        q: "How do you know the scoring is actually accurate?",
        a: "Three signals: (1) rubric citations — the model must quote a transcript span for each score, so a human grader can audit in seconds; (2) a 50-session golden set I've hand-graded and calibrate against on every prompt or model change; (3) qualitative feedback from candidates who went on to pass the real interview.",
      },
      {
        q: "Why GPT-4o for evaluation and ElevenLabs for voice? Why not a single vendor?",
        a: "Best-of-breed. GPT-4o's structured output and instruction-following won on rubric compliance in the golden set. ElevenLabs' Indonesian voice quality is not close to anything else. Unified vendors optimize for integration simplicity; we optimized for outcome quality because the rubric is the product.",
      },
      {
        q: "What stops a student from screenshotting feedback and sharing it?",
        a: "Nothing — and that's fine. The defensibility is rubric coverage and voice realism; the content per-session is tailored enough that a screenshot doesn't replace the practice loop. Worrying about piracy at this stage is premature; worrying about sharing that drives WOM is correct.",
      },
    ],
  },
}

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const cs = caseStudies[params.slug]
  if (!cs) return {}
  return {
    title: `${cs.title} — Case study · Muhammad Ega`,
    description: cs.tagline,
  }
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const cs = caseStudies[params.slug]
  if (!cs) notFound()

  return (
    <article className="container mx-auto px-4 py-10 sm:py-16 max-w-3xl">
      <Link
        href="/work"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8"
      >
        <ChevronLeft className="h-4 w-4 mr-1" />
        Back to work
      </Link>

      <header className="mb-10 border-b pb-8">
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span className="text-xs uppercase tracking-wide text-muted-foreground">
            {cs.archetype}
          </span>
          <span className="text-xs text-muted-foreground">·</span>
          <span className="text-xs text-muted-foreground">{cs.status}</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{cs.title}</h1>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
          {cs.tagline}
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <a
            href={cs.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium hover:underline"
          >
            {cs.liveUrl.replace(/^https?:\/\//, "")}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <span className="text-muted-foreground">{cs.role}</span>
        </div>
      </header>

      <section className="mb-12">
        <h2 className="font-serif text-lg font-bold mb-3">Stack</h2>
        <div className="flex flex-wrap gap-1.5">
          {cs.stack.map((s) => (
            <span
              key={s}
              className="text-xs px-2.5 py-1 rounded bg-muted text-muted-foreground"
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      {cs.sections.map((section) => (
        <section key={section.heading} className="mb-10">
          <h2 className="font-serif text-xl sm:text-2xl font-bold mb-4">{section.heading}</h2>
          {Array.isArray(section.body) ? (
            <div className="space-y-4">
              {section.body.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-foreground/90">
                  {p}
                </p>
              ))}
            </div>
          ) : (
            <p className="text-base leading-relaxed text-foreground/90">{section.body}</p>
          )}
        </section>
      ))}

      {cs.interviewPrep && cs.interviewPrep.length > 0 && (
        <section className="mt-14 pt-10 border-t">
          <h2 className="font-serif text-xl sm:text-2xl font-bold mb-2">
            Interview questions I can answer about this
          </h2>
          <p className="text-sm text-muted-foreground mb-6">
            The questions AI PM interviewers actually ask — written out so you can see how I think,
            not just what I shipped.
          </p>
          <div className="space-y-6">
            {cs.interviewPrep.map((qa, i) => (
              <div key={i} className="rounded-lg border bg-muted/30 p-5">
                <p className="font-medium mb-2 text-foreground">Q. {qa.q}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{qa.a}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <footer className="mt-16 pt-8 border-t flex items-center justify-between text-sm">
        <Link
          href="/work"
          className="inline-flex items-center text-muted-foreground hover:text-foreground"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          All work
        </Link>
        <a
          href="mailto:simatupang.ega@gmail.com?subject=About%20your%20portfolio"
          className="font-medium underline underline-offset-4"
        >
          Talk to me about this →
        </a>
      </footer>
    </article>
  )
}
