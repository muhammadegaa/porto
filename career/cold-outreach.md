# Cold outreach: framework, targets, and a fully-drafted example

The research showed one pattern works: short, specific, opinion-first emails to people who actually build the product. Amol Avasare at Anthropic, Anjali Sharma at Mesha, Logan Kilpatrick at OpenAI all did variants of this. The common thread: *you already have opinions about their product because you ship; let the opinions + links do the work.*

---

## The framework (read once, then use for every company)

**Who to email.**
1. The CPO / Head of Product, best for smaller AI-native companies.
2. A specific PM on a team whose work you genuinely have an opinion on, best for mid-sized (hard to reach CPO).
3. A founder / EIR / DevRel lead, best for very early-stage.

Use [Apollo](https://apollo.io) or [Clearbit](https://clearbit.com) or just LinkedIn + [Hunter](https://hunter.io) to find the email. If no email, send via LinkedIn InMail (shorter, same structure).

**The shape of the email.**

```
Subject: [one specific thing about their product, not your name]

Hi [name],

One-sentence frame: a specific, non-obvious opinion about their product or
a real problem you've hit using it.

Three sentences that prove the opinion: concrete observation, why it
matters, what you'd do about it.

One sentence about you: the one thing that makes your opinion credible.
Link to the relevant shipped product (not your portfolio).

Closing ask: something small and specific. Not "can we chat?", give them
a reason.

[First name]
[One-line signature: portfolio URL + current role]
```

**Rules.**

- **Under 150 words.** Always. If it's longer, you haven't figured out what you're actually saying.
- **No attached resume.** Link to the portfolio at the bottom of your signature only. The email is the resume.
- **One specific opinion.** Not three. One sharp observation beats a survey of the product.
- **Not about you.** You are the proof, not the subject. The subject is their product.
- **No compliments.** *"I love your work"* is noise. Skip it.
- **Send on a Tuesday or Wednesday morning** in the recipient's timezone. Not Monday (inbox churn), not Friday (ignored).
- **One follow-up after 5 business days, max.** If no reply after that, move on.

---

## Three targets for you, in order

I picked these because they match your shipped work and because the research showed cold emails actually land at AI-native companies with engineering-led cultures.

### 1. Anthropic: highest prestige, exact template exists

**Why it fits you:**
- Codehere's pre-execution audit layer is *literally* the safety-before-execution pattern Anthropic has built its brand on. That's not a coincidence you have to manufacture.
- Anthropic's careers page explicitly says "put independent work at the top of your resume." You now have three items to put there.
- Amol Avasare's cold-email hire is the public precedent.

**Who to target:** Mike Krieger (CPO), or a PM on Claude Code / Claude Agent SDK / API product teams. Check [anthropic.com/team](https://www.anthropic.com/team) for current PMs.

### 2. Vercel: shipping culture, respects builders

**Why it fits you:**
- Vercel runs the same stack your portfolio runs on; they hire PMs who *actually ship.*
- They've built AI Gateway, AI SDK, AI-powered deployments, the v0 product, real AI PM roles, not generic cloud.
- Their public culture rewards people who can articulate deployed product tradeoffs, which is your whole profile.

**Who to target:** Guillermo Rauch (CEO, reads his inbox, famously), or a PM working on AI SDK / v0 / Workflows. LinkedIn is fine.

### 3. Linear: smaller pool, craft-respecting

**Why it fits you:**
- Linear hires for craft and opinion over pedigree.
- They're actively building AI features (Linear Asks, smart triage, etc.) but are not yet overwhelmed with AI PM candidates.
- Their hiring bar on writing is high, your short, specific emails will stand out.

**Who to target:** Karri Saarinen (CEO), or a product lead on their AI features. LinkedIn works.

---

## Fully-drafted example: Anthropic (Claude Code product team)

You can send a variant of this tonight. Pick a specific PM or eng lead working on Claude Code; I've written it as if addressed to them, with placeholders for the name.

---

**Subject:** Codehere: an audit-layer pattern I'd add before Claude Code writes to disk

Hi [first name],

Claude Code is the only coding agent I run in my real projects, and there's a gap I keep feeling: the write path from Claude's plan to my disk has no in-line verification step. For my own codebases I solved this by building [codehere](https://codehere.uk), a CLI audit layer that pattern-matches 60+ vulnerability classes against every AI-authored diff *before* execution. In production usage, ~12% of generations catch at least one flag; precision is a harder problem and where I'd want an LLM-judge next.

I think a first-party "pre-write verification" surface inside Claude Code, even as an opt-in gate, would be a moat, not a tax. Happy to share the ruleset, the false-positive cases I've logged, and the tradeoffs I parked.

I'm a product manager, five years, most recently Senior PM at Mekari shipping AI compliance automation (onboarding 45 → 14 days for 600+ customers). Outside the day job I'm shipping three AI products right now, linked from [muhammadegaa.vercel.app](https://muhammadegaa.vercel.app).

If a 20-minute call to walk you through the audit-layer ruleset would be useful, I'll come with a one-pager. Otherwise I'll keep shipping and send you the v0.4 release notes when the LLM-judge lands.

Ega
Muhammad Ega · [muhammadegaa.vercel.app](https://muhammadegaa.vercel.app)

---

## Worked notes on why that email works

- **Subject is an opinion, not a name.** The reader's inbox has 200 emails. "Codehere: an audit-layer pattern I'd add..." tells them in 1 second what's inside.
- **Opens with a concrete frustration, not a compliment.** *"There's a gap I keep feeling"* positions you as a user with depth, not a fan.
- **Proof link is a shipped product, not a portfolio.** The URL must resolve to something working.
- **One real number (~12%).** Makes you sound like a product person, not a poser. If you don't have a number, skip it, don't invent.
- **Credibility paragraph is short and links to the portfolio once, at the bottom.** Reversed-pyramid: the news is the opinion, the source is you.
- **Ask is specific AND optional.** *"If not, I'll send you the v0.4 release notes"* removes social pressure and also communicates: *I'm going to keep building regardless of whether you reply.* That energy is the product-maker energy hiring managers respond to.

---

## Fully-drafted example: Vercel (AI SDK / AI Gateway team)

Pick a PM on AI SDK, AI Gateway, or v0. If in doubt, send to Guillermo Rauch (CEO, reads his inbox) and it'll be routed.

---

**Subject:** A cost-reconciliation gap between AI Gateway and Functions (observed in prod)

Hi [first name],

I run [ravenote](https://ravenote.xyz), a Chrome extension with a Vercel Functions backend that proxies LLM generation for paid users. The production pattern I've had to hand-roll: OpenRouter reports generation cost ~1s *after* the stream completes, so I store the response, then listen for the cost webhook, then reconcile against the Stripe subscription tier. This works but the bookkeeping lives entirely in my code, there's no first-class way in AI Gateway to tie a generation back to a billing entity.

I think a "billing-key" handle that persists across a stream → cost → usage-ledger chain would turn AI Gateway from an observability tool into a unit-economics tool, and unlock every serious consumer-AI builder on Vercel who's trying to figure out margin.

Happy to share the webhook code, the retry logic, and the false-charge cases I've logged. Background: 5 years as a product manager, Senior PM at Mekari launching AI-driven compliance automation (onboarding 45 → 14 days for 600+ enterprise customers); portfolio at [muhammadegaa.vercel.app](https://muhammadegaa.vercel.app).

If 20 minutes would be useful I'll bring a one-pager. Otherwise I'll send the v1.1 release notes when the reconciliation layer is refactored.

Ega
Muhammad Ega · [muhammadegaa.vercel.app](https://muhammadegaa.vercel.app)

---

## Fully-drafted example: Linear (product team working on AI features)

Target Karri Saarinen (CEO) or a PM working on Asks, smart triage, or AI-drafted descriptions.

---

**Subject:** A rubric-eval lens for Linear's AI-drafted issue descriptions

Hi [first name],

Linear's AI-drafted descriptions are good for engineers, but they consistently miss the mark for cross-functional writers, legal, sales, compliance, who speak in different vocabularies than the eng team reading the ticket. I've watched this break in practice at Mekari, where I was Senior PM owning the API-first roadmap across 600+ enterprise customers and translating regulatory constraints into product requirements. Legal would draft an "issue" that made no sense to the eng team; AI that paraphrases without a rubric doesn't fix this, it polishes it.

I've been sketching a rubric-based eval approach from [beeready](https://beeready.dev), a voice-AI interview coach I'm shipping that scores candidates against official LPDP and IELTS rubrics. The pattern ports: score an AI-drafted description against a per-audience rubric (actionability, specificity, acceptance-criteria completeness) and surface the gaps before the issue lands. Basically, evals for internal prose quality.

Short PM background: 5 years, Senior PM at Mekari, now Product Engineer at Jaguar Land Rover. Three AI products live, linked from [muhammadegaa.vercel.app](https://muhammadegaa.vercel.app).

Not pitching a feature, sharing an angle. If useful, happy to send a worked rubric for the eng-vs-legal audience split.

Ega
Muhammad Ega · [muhammadegaa.vercel.app](https://muhammadegaa.vercel.app)

---

## Send order

Don't spray all three in one day. Send in this order, one per week:

1. **Wednesday this week, Anthropic.** Strongest fit (codehere = audit layer = their brand).
2. **Next Wednesday, Vercel.** Ravenote runs on their stack; the opinion is grounded in production pain.
3. **Wednesday after, Linear.** Your Mekari enterprise background + beeready evals thesis.

If any of them replies, *that* becomes the priority. Drop the others temporarily and engage deeply with the one who's engaging with you.

---

## What to do if they don't reply

Move on. It's not personal, CPOs get 100+ cold emails a week. The signal is: did they reply to *anyone* ever from cold email? Amol at Anthropic is public evidence they do. Keep sending one email per week to one target. Stop when you have five in flight. Don't burn your best three emails in the first week.
