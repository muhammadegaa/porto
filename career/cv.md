# Muhammad Ega
**AI Product Manager**

simatupang.ega@gmail.com  ·  +44 7957 732 982  ·  muhammadegaa.vercel.app  ·  linkedin.com/in/mesimatupang  ·  Manchester, UK

## Summary

AI product manager shipping four live products across four archetypes: codehere (coding-agent audit layer on npm), ravenote (Chrome extension with paying Stripe subscribers), beeready (voice AI interview coach, live with IDR pricing), and nectic (WhatsApp sales-conversation intelligence for SE Asia PM teams). Before the independent work, five years of PM at Indonesia's largest B2B SaaS (Mekari, AI compliance across 600+ enterprise customers, onboarding 45 days to 14) and a 4-person AI team at IBM during COVID (exposure-tracing chatbot handling 5,000+ daily conversations). Currently at Jaguar Land Rover on a product-owning engineering role, closing the systems gap most AI PMs carry. MSc Human-Computer Interaction, University of Birmingham (Distinction).

## Shipped AI Products

### codehere  ·  [codehere.uk](https://codehere.uk)
Enterprise-safe AI coding agent. Before any AI-authored diff touches disk, a pattern-based audit runs 60+ security checks on it.
* Solo PM and builder. v0.3 CLI published to npm. 20+ test suites in CI covering security, context-depth, and git workflows.
* Multi-provider LLM orchestration via OpenRouter so users pick Claude, OpenAI, Cohere, or a local Ollama model. Cost and token usage tracked per generation.
* Wrote a 91-page PRD with a 20-scenario competitive futures analysis.
* **The call I'd own:** CLI over IDE extension. Owning the audit layer beats competing on raw coding quality, and a CLI is what an enterprise security review can read in one pass.

### ravenote  ·  [ravenote.xyz](https://ravenote.xyz)
Chrome extension that auto-captures Udemy and YouTube lecture transcripts, generates AI study notes, and quizzes the user.
* Solo PM and builder. Shipped v1.0 to the Chrome Web Store with a Stripe-backed Pro tier.
* Provider fallback routing across Sonnet 4.6, Gemini, Qwen, and OpenAI. When Anthropic retired the older 3.5 models, the router auto-remapped with zero user-facing break.
* Usage-based cost reconciliation: a webhook ties OpenRouter generation costs back to the Stripe subscription tier, so margin is visible per user not just in aggregate.
* **The call I'd own:** free tier is bring-your-own-OpenRouter-key. It caps viral growth but keeps COGS inside margin from day one, which matters before external funding.

### beeready  ·  [beeready.dev](https://beeready.dev)
Voice AI interview coach for Indonesian scholarship (LPDP, Chevening) and civil-service (CPNS) candidates. Scoring runs against official rubrics, not fuzzy encouragement.
* Solo PM and builder. Live with three pricing tiers: Rp 10K single session, Rp 28K three-session pack, Rp 150K monthly. Tiers shaped for exam-prep spend psychology, not SaaS convention.
* GPT-4o drives evaluation, ElevenLabs drives voice, four distinct evaluator personas across interview phases.
* Scoring engine produces evidence-cited feedback across Communication, Problem-solving, and Leadership, with transcript spans backing every score so a human grader can audit in seconds.
* **The call I'd own:** GPT-4o over Claude for evaluation. Claude 3.5/4 wins on open-ended writing; GPT-4o wins on following a 40-row rubric without drifting, which is what the product sells.

### nectic  ·  [nectic.xyz](https://nectic.xyz)
Reads WhatsApp sales conversations and delivers weekly product intelligence to PM teams in Southeast Asia.
* Solo PM and builder. Landing live, positioning validated, private-beta pilot work in progress.
* LLM summarization over sales conversation logs. Weekly digest carries direct customer-quote citations, not paraphrased summaries.
* Addresses a regional-specific gap: sales in SE Asia happens on WhatsApp, not CRM. PM teams have no qualitative signal from the channel their customers actually use.
* **The call I'd own:** weekly digest over real-time dashboard. PMs do not need another live feed. A once-a-week signal that changes prioritization beats a dashboard that gets ignored after week two.

## Employment

### Product Engineer  ·  Jaguar Land Rover  ·  Manchester, UK
Sep 2024 to Present. Product-owning engineering role on connected-vehicle services. Took the role on purpose to close the systems gap most AI PMs carry.

* Internal tooling moved SMS verification configuration from a manual workflow to under 60 seconds. Operational throughput up 15%.
* Authored 15+ technical user stories and acceptance criteria across sprints. Activation funnel conversion up 22% over the tracked quarter.
* Wrote customer-benefit cases and engineering trade-offs that fed prioritization reviews with the connected-services team.
* Prototyped telematics user flows with the eng team before any spec reached planning.

### Senior Product Manager  ·  Mekari  ·  Jakarta
Sep 2023 to Aug 2024. Owned the API-first roadmap for Mekari Sign across 600+ enterprise customers at Indonesia's largest B2B SaaS.

* Shipped the AI compliance track (eKYC, certificate issuance, batch signing). Median enterprise activation moved from 45 days to 14.
* Shipped the developer integration suite (eSignature, AutoSign, Document Status event streams). 78% adoption across enterprise customers. Contract value processed doubled over the year.
* Ran weekly regulatory triage with the eng lead on Sign and legal counsel. Every ask came out with a yes-or-no and a scoped PRD inside seven days, no under-review limbo.
* Extended the public API with modular hooks so partner integrations stopped requiring bespoke engineering per deal.
* Wrote acceptance criteria and test plans for every API release. No rollback-level regressions across the year.
* Mentored two junior PMs. The most useful thing I taught: how to kill a feature before the eng team writes code.
* **The call I'd own:** shipped eKYC against the older certificate spec rather than wait for the regulator's v2. Migration later was cheaper than missing the quarter.

### Product Manager  ·  Shopee  ·  Jakarta
Feb 2022 to Jul 2022. Left to pursue MSc at University of Birmingham.

* Seller onboarding programs adopted by 2.8M+ sellers. Monthly signups up 20%.
* Worked with the data science team to operationalize churn prediction. Churn down 18%. Roughly $1.2M GMV retained.
* User research with 50+ high-value sellers in the top GMV quartile. Support tickets down 32%. CSAT from 3.2 to 4.0.
* Cohort-segmented the onboarding funnel to target the biggest drop-off step. It turned out to be a documentation-upload flow that legal had over-specified.

### Software Specialist  ·  IBM  ·  Jakarta
May 2020 to Jan 2022. Led a 4-person team delivering AI and automation for enterprise clients. 10,000+ monthly transactions worth $2.5M processed.

* Designed and deployed an AI-powered COVID exposure-tracing chatbot. 5,000+ daily conversations across 2,000+ employees at an enterprise client during lockdown.
* Built and deployed 8 production RPA systems. 99.2% uptime. Under 0.5% error rate. 120+ workflows automated across finance and operations.
* Built the monitoring and alerting integration that cut mean incident-response time in half on the production estate.
* Standardized team coding and review practices. New-engineer onboarding roughly halved.

## Education

**MSc Human-Computer Interaction**  ·  University of Birmingham  ·  Sep 2022 to Sep 2023  ·  **Distinction**
**BSc Electrical Engineering**  ·  Padjadjaran University  ·  Aug 2015 to Feb 2019  ·  3.42 / 4.00

## Skills

**AI product craft.** LLM applications; evals and rubric-based scoring; model routing and provider fallback; RAG with local embeddings; voice AI (ElevenLabs); cost-aware model selection; prompt versioning; Chrome extension distribution; Stripe usage-based billing.

**Product.** Product discovery; 0-to-1 development; API platform ownership; roadmap ownership; stakeholder management across legal, sales, and engineering; experimentation; cohort analysis.

**Technical.** Python; SQL; OpenRouter; Firebase; Vercel Functions; Playwright; Chrome MV3.

**Tools.** Amplitude; Mixpanel; Figma; Jira; Confluence.

## Honors

**2nd Place at the Grab Hackathon (HackerEarth).** AI-driven mobility optimization with predictive modeling on real-time operational data.

**Top 10 at CultivHacktion (World Bank × TaniHub).** Patani, an ML recommendation system for soil analysis and crop strategy on unused agricultural land.
