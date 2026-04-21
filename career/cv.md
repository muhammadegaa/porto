# Muhammad Ega
**AI Product Manager**

simatupang.ega@gmail.com  ·  +44 7957 732 982  ·  muhammadegaa.vercel.app  ·  linkedin.com/in/mesimatupang  ·  Manchester, UK

## Summary

Product manager with five years building AI products inside non-AI companies. At Mekari I shipped an AI compliance automation track that cut enterprise onboarding from 45 days to 14, with 78% adoption of the new developer integration suite and double the contract value processed. At IBM I led a four-person team running early conversational AI during COVID, including an exposure-tracing chatbot used by 2,000+ employees. I am currently at Jaguar Land Rover in a product-owning engineering role, while shipping four independent AI products in parallel: codehere (AI coding-agent audit layer on npm), ravenote (Chrome extension with paying Stripe subscribers), beeready (voice AI interview coach for Indonesian scholarship candidates, live with tiered IDR pricing), and nectic (WhatsApp sales conversation intelligence for SE Asia PM teams). MSc Human-Computer Interaction, University of Birmingham (Distinction).

## Shipped AI Products

### codehere  ·  [codehere.uk](https://codehere.uk)
Enterprise-safe AI coding agent. Before any AI-authored diff touches disk, a pattern-based audit runs 60+ security checks on it.
* v0.3 CLI published to npm. 20+ test suites in CI covering security, context-depth, and git workflows.
* Multi-provider LLM orchestration via OpenRouter so users pick Claude, OpenAI, Cohere, or a local Ollama model.
* 91-page PRD paired with a 20-scenario competitive futures analysis (World A through D model) that drove the decision to own the audit layer rather than compete on raw coding quality.

### ravenote  ·  [ravenote.xyz](https://ravenote.xyz)
Chrome extension that auto-captures Udemy and YouTube lecture transcripts, generates AI study notes, and quizzes the user.
* Shipped v1.0 to the Chrome Web Store with a Stripe-backed Pro tier. Free tier is bring-your-own-OpenRouter-key; Pro tier proxies through a Vercel Functions backend that hides the key and absorbs cost.
* Provider fallback routing across Sonnet 4.6, Gemini, Qwen, and OpenAI. When Anthropic retires older models the router auto-remaps with zero user-facing break.
* Usage-based cost reconciliation: a webhook ties OpenRouter generation costs (which lag the chat response by roughly one second) back to the Stripe subscription tier, so margin is visible per user not just in aggregate.

### beeready  ·  [beeready.dev](https://beeready.dev)
Voice AI interview coach for Indonesian scholarship (LPDP, Chevening) and civil-service (CPNS) candidates. Scoring runs against the actual official rubrics, not fuzzy encouragement.
* Live with three pricing tiers: Rp 10K single session, Rp 28K three-session pack, Rp 150K monthly. Tiers are shaped for exam-prep spend psychology rather than SaaS convention.
* GPT-4o drives evaluation, ElevenLabs drives voice, with four distinct evaluator personas across interview phases. GPT-4o was chosen specifically because rubric-constrained instruction-following tested better than Claude on the calibration set.
* Scoring engine produces evidence-cited feedback across Communication, Problem-solving, and Leadership, with transcript spans backing every score so a human grader can audit in seconds.

### nectic  ·  [nectic.xyz](https://nectic.xyz)
Reads WhatsApp sales conversations and delivers weekly product intelligence to PM teams in Southeast Asia.
* Addresses a regional-specific gap: sales in SE Asia happens on WhatsApp, not CRM. PM teams have no qualitative signal from the conversation channel their customers actually use.
* LLM summarization extracts recurring themes (feature requests, objections, competitor mentions, pricing friction) into a structured weekly digest with direct customer quote citations.
* Landing live, positioning validated. Early-stage with private-beta pilot work in progress.

## Employment

### Product Engineer (PM-track)  ·  Jaguar Land Rover  ·  Manchester, UK
Sep 2024 to Present. Product-owning engineering role on connected-vehicle services.

* Proposed roadmap enhancements for connected-vehicle services. Wrote up customer-benefit cases and engineering trade-offs that went into prioritization reviews.
* Authored 15+ technical user stories and acceptance criteria across sprints. Activation funnel conversion up 22% over the tracked window.
* Designed internal automation that cut SMS verification configuration time by 80%, with 15% throughput gain on the operational pipeline.
* Prototyped and validated telematics user flows with internal stakeholders to shorten feature-readiness cycles.

### Senior Product Manager  ·  Mekari  ·  Jakarta
Sep 2023 to Aug 2024. Owned the API-first roadmap for Mekari Sign across 600+ enterprise customers at Indonesia's largest B2B SaaS.

* Launched the AI compliance automation track. Three features ran in parallel: eKYC for enterprise onboarding, on-demand digital certificate issuance, and batch signing of bulk contracts. Median enterprise activation time moved from 45 days to 14.
* Shipped the developer integration suite covering eSignature, AutoSign, and Document Status event streams. 78% adoption across enterprise customers; contract value processed doubled over the year.
* Extended the public API with modular hooks so partner integrations could cover niche enterprise workflows without engineering building one-offs each time.
* Ran the weekly alignment rhythm across engineering, legal, and sales. Translated regulatory constraints into prioritized product requirements so downstream delivery did not block on interpretation.
* Defined acceptance criteria and end-to-end test plans for every API release. No rollback-level regressions across the year.
* Mentored two junior PMs on stakeholder mapping and metrics-led prioritization.

### Product Manager  ·  Shopee  ·  Jakarta
Feb 2022 to Jul 2022. Left to pursue MSc at University of Birmingham.

* Led seller onboarding and growth programs adopted by 2.8M+ sellers. Monthly signups up 20%.
* Operationalized churn prediction models with the data science team. 18% churn reduction, roughly $1.2M GMV retained.
* Ran user research with 50+ high-value sellers. Support tickets down 32%. CSAT moved from 3.2 to 4.0.
* Segmented the onboarding funnel via cohort analysis to target the highest-drop-off step first.

### Software Specialist  ·  IBM  ·  Jakarta
May 2020 to Jan 2022. Led a four-person team delivering AI and automation for enterprise clients processing 10,000+ monthly transactions worth $2.5M.

* Designed and deployed an AI-powered COVID exposure-tracing chatbot that handled 5,000+ daily conversations across 2,000+ employees at an enterprise client during lockdown.
* Built and deployed 8 production RPA systems with 99.2% uptime and under 0.5% error rate, automating 120+ workflows across finance and operations.
* Architected the monitoring and alerting integration that cut mean incident-response time across the production estate.
* Standardized the team's coding and review practices; onboarding time for new engineers roughly halved.

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
