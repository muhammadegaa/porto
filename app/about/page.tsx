import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export const metadata = {
  title: "About · Muhammad Ega",
  description:
    "Product manager in Manchester. MSc Human-Computer Interaction, University of Birmingham (Distinction). Interested in AI product work that ships.",
}

const skills = [
  "LLM applications",
  "Evals & rubric-based scoring",
  "Model routing & fallback",
  "RAG & embeddings",
  "Voice AI (ElevenLabs)",
  "Cost-aware model selection",
  "Conversational AI",
  "Product discovery",
  "0→1 product development",
  "API-first platforms",
  "Stakeholder management",
  "Roadmap ownership",
  "Prompt engineering",
  "Stripe / usage-based billing",
  "Chrome extensions (MV3)",
  "Product analytics (Amplitude, Mixpanel)",
  "SQL & Python",
  "Figma",
  "Jira / Confluence",
]

const education = [
  {
    school: "University of Birmingham",
    program: "MSc Human-Computer Interaction, Distinction",
    period: "Sep 2022 to Sep 2023",
    location: "Birmingham, UK",
  },
  {
    school: "Padjadjaran University",
    program: "BSc Electrical Engineering (3.42 / 4.00)",
    period: "Aug 2015 to Feb 2019",
    location: "Bandung, Indonesia",
  },
]

const honors = [
  {
    title: "2nd Place at Grab Hackathon",
    org: "HackerEarth",
    summary:
      "AI-driven solution for large-scale mobility optimization using predictive modeling and real-time operational data.",
  },
  {
    title: "Top 10 at CultivHacktion",
    org: "World Bank × TaniHub",
    summary:
      "Patani, a machine learning recommendation system that analyses soil conditions and recommends crop strategies for unused agricultural land.",
  },
]

const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com/in/mesimatupang", icon: Linkedin },
  { name: "GitHub", href: "https://github.com/muhammadegaa", icon: Github },
  {
    name: "Email",
    href: "mailto:simatupang.ega@gmail.com?subject=Hello%20Ega",
    icon: Mail,
  },
]

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:py-16 max-w-3xl">
      <header className="mb-12">
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-6">About</h1>
        <div className="space-y-4 text-base sm:text-lg leading-relaxed text-foreground/90">
          <p>
            Hi, I'm Ega. I'm a product manager based in Manchester, building AI products in public
            and working at Jaguar Land Rover on connected-vehicle services.
          </p>
          <p>
            My path has run through AI automation (IBM, 2020), marketplace growth (Shopee, 2022),
            API-first enterprise SaaS (Mekari, 2023–2024), and now automotive platform work. In
            parallel, I've been shipping small AI products end-to-end:{" "}
            <Link href="/work/codehere" className="underline underline-offset-4 font-medium">
              codehere
            </Link>
            ,{" "}
            <Link href="/work/ravenote" className="underline underline-offset-4 font-medium">
              ravenote
            </Link>
            ,{" "}
            <Link href="/work/beeready" className="underline underline-offset-4 font-medium">
              beeready
            </Link>
            , and{" "}
            <Link href="/work/nectic" className="underline underline-offset-4 font-medium">
              nectic
            </Link>
            {" "}to stay close to the actual tradeoffs that matter in LLM products: evals, cost, latency,
            and where to route which model.
          </p>
          <p>
            I&apos;m most interested in AI PM roles where the bar is not &ldquo;ship a feature with an
            LLM in it&rdquo; but &ldquo;build a product where the evals, the routing, and the cost model
            are the product.&rdquo; That&apos;s the work I care about.
          </p>
        </div>
      </header>

      <section className="mb-12">
        <h2 className="font-serif text-xl sm:text-2xl font-bold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <span
              key={s}
              className="text-sm px-3 py-1 rounded-full border text-foreground/80 bg-background"
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="font-serif text-xl sm:text-2xl font-bold mb-4">Education</h2>
        <div className="space-y-4">
          {education.map((e) => (
            <div key={e.school} className="rounded-lg border p-4 sm:p-5">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                <p className="font-medium">{e.school}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">{e.period}</p>
              </div>
              <p className="text-sm text-muted-foreground">{e.program}</p>
              <p className="text-xs text-muted-foreground">{e.location}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="font-serif text-xl sm:text-2xl font-bold mb-4">Honors</h2>
        <div className="space-y-4">
          {honors.map((h) => (
            <div key={h.title} className="rounded-lg border p-4 sm:p-5">
              <p className="font-medium">{h.title}</p>
              <p className="text-sm text-muted-foreground mb-2">{h.org}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{h.summary}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-serif text-xl sm:text-2xl font-bold mb-4">Let's connect</h2>
        <div className="flex flex-wrap gap-4">
          {socialLinks.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.name}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
              >
                <Icon className="h-4 w-4" />
                {link.name}
              </a>
            )
          })}
        </div>
      </section>
    </div>
  )
}
