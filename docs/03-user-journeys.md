# 03 — User Journeys

Three journeys, each rooted in a specific persona and a specific pain. Time-stamps are in the persona's local timezone.

---

## Journey 1 — Marsha, the Capture Manager (federal SDVOSB)

**Persona:** Marsha Okafor — Capture Manager at a 80-person SDVOSB doing IT modernization on civilian-agency contracts.
**Mode:** Discovery → first value → sustained use.
**Outcome:** Marsha replaces her 6:30am SAM.gov ritual with a 6:30am Brassmark digest in 4 days.

### T-7 days — pain peaks

Tuesday morning: a Marines IT modernization lot drops on SAM.gov at 04:12 EDT. Marsha's saved search picks it up at 06:34 EDT when she logs in. The lot has a 14-day response window, FedRAMP-Moderate is required, and the contracting officer is one she has never bid against. Her analyst burns 3 hours building a capture file before the bid/no-bid call at 14:00 EDT — and they decide to no-bid because the FedRAMP requirement is a dealbreaker. The analyst's day is gone and the firm is no closer to a Q3 win.

Marsha posts in the NCMA Slack: *"Anyone else losing the morning to triage SAM hits we're going to no-bid anyway?"*

### T-0 — discovery

A reply links to an article on FedScoop about *"why most BD shops are losing their morning to false positives"* — and the article quotes the Brassmark **bid-readiness score** model. Marsha clicks through to `tender-sniper.prin7r.com`.

The landing page opens. She sees:
- A **live alert ticker** in the hero, monospace, scrolling new federal lots every 3-4s. The score column is the eye-catch — she sees `0.91 BID-READY` on a Veterans Affairs IT modernization lot with the right NAICS code (541512). She has been ignoring exactly that lot in her queue for two days because she didn't realize it scored that high against her profile.
- A **sample RFP card** below the ticker showing the dimensions she actually cares about: due-date, NAICS, CPV (she ignores the CPV — federal — but notes it's there for her EU peers), set-aside flags, contracting-officer history count, and a 7-signal bid-readiness breakdown.
- A pricing block with three tiers (Single-region $499/mo, Multi-region $1,490/mo, Federal-Plus $4,990/mo) — Federal-Plus matches her shop's footprint.
- A FAQ block answering the questions she'd ask her analyst: *"How fresh is the data?"* (90s federal poll cycle, 5min state, 15min international), *"How do you dedup?"* (notice_id + body hash), *"What about my saved searches?"* (we import SAM.gov saved searches as a starting profile).

She starts the Federal-Plus checkout, pays via NOWPayments USDT (her firm's card-on-file is ring-fenced for vendor purchases over $1k and this is faster than email-the-CFO), and lands in a "your tenant is being provisioned" hold-page. *(Wave 3: she lands in the Brassmark dashboard.)*

### T+1 day — first value

By 06:30 EDT the next morning, Marsha gets a Brassmark email digest with **27 federal hits, 4 state hits**, all scored `≥ 0.62`, sorted by readiness. The first item is the same VA IT lot from yesterday — but the digest also surfaces a **State of Texas DIR refresh** her shop has *never seen* because Texas SmartBuy isn't in her current toolset.

She forwards two of the lots to her analyst with *"score is already done, just build the capture file"* and reclaims 90 minutes of her morning.

### T+4 days — sustained use

Marsha replaces the 6:30am SAM.gov ritual entirely. Her analysts get the digest as a Slack push to `#bd-incoming`. Her bid/no-bid call at 14:00 EDT now starts with the readiness score on screen — ownership stops asking *"why this one"* and starts asking *"can we hit the deadline."*

She posts in the NCMA Slack: *"Brassmark — replaces my morning. Federal-Plus tier is worth the price."*

---

## Journey 2 — Dieter, the EU Tender Lead (mid-market consulting)

**Persona:** Dieter Ramani — EU Tender Lead at a 600-person consulting firm, Frankfurt.
**Mode:** Discovery → first value → sustained use.
**Outcome:** Dieter cuts his TED-and-portals scan from 95 min/day to 18 min/day in a week.

### T-7 days — pain peaks

Monday morning: TED has 712 new notices, Boamp has 184, AMEDA has 96, PLACE has 78, Contracts Finder has 41. Dieter starts at 07:00 CET and isn't done with the surface-scan until 08:36. He has to be in the Partner standup at 08:30 with a *"three to chase, three to consider"* list. He's late.

He drinks a third coffee and curses the CPV taxonomy.

### T-0 — discovery

A peer in the Frankfurt CEPS public-procurement working group mentions a tool that *"actually cross-walks CPV codes and reads the body in the original language."* Dieter pulls up `tender-sniper.prin7r.com` after the standup.

What sells him in the first 12 seconds:
- The **coverage list** under the hero — `EU TED, UK Contracts Finder, Find a Tender, Boamp, AMEDA, PLACE, PCS-Public, Doffin, Bund, vergabe.bayern, e-prior` — exactly the registers he runs.
- The **live alert ticker** scrolls a French-language Boamp notice with the relevance summary in English. He sees the line `Score 0.78 · CPV 72200000-7 · Relevance: data-modernization framework, ≥€2.4M, Île-de-France, due 28 days`.
- The **bid-readiness explainer** — he understands instantly that the 7 signals match how his firm's PMO already evaluates EU lots (days-to-due, set-aside fit, body keyword, attachment signal, dollar-band fit).

The Multi-region tier ($1,490/mo) is right-sized for his firm. He pays via NOWPayments stablecoin from a tenant wallet his firm uses for vendor-software in the €1k-3k band.

### T+1 day — first value

The next morning his Brassmark email lands at 06:00 CET. **42 EU hits, scored**, sorted by readiness. The top item is a Boamp notice his colleague had mentioned in passing on Friday — Brassmark scores it 0.84 because Dieter's firm has past performance under the matching CPV code and the contracting officer is one he has won against before.

His Partner asks for the *"three to chase"* list at the standup. He has it on screen in 4 minutes. He reclaims 75 minutes.

### T+1 week — sustained use

Dieter sets up a per-CPV Slack push (`#eu-pipeline-data-modernization`, `#eu-pipeline-strategy-advisory`) so his sector leads see relevant lots without him forwarding emails. Brassmark replaces 4 browser tabs and 1 spreadsheet.

He brings it up at the Partner offsite as a candidate for renewal.

---

## Journey 3 — A two-person consulting boutique that doesn't subscribe

**Persona (anti-target):** A one-FTE-plus-founder boutique that does 2-3 federal proposals a year.
**Mode:** Discovery → bounce.
**Outcome:** The pricing page makes the right call against itself.

### T-0 — discovery

The founder lands on the page from an HN thread. He sees the live alert ticker, finds it interesting, scrolls to pricing.

The Single-region tier is $499/mo. The boutique's revenue is $400k/yr; subscription tooling at $6k/yr is a hard sell.

Brassmark's anti-personas section in the FAQ explicitly says: *"If you bid two-three federal opportunities a year, our subscription does not pay back. We recommend a saved search on SAM.gov and a 30-minute weekly review. Come back when you're north of $2M ARR."*

The founder reads that, agrees, and bookmarks the page for later.

This is the right outcome — Brassmark refuses unit-economically-unfit users at the door, instead of dragging them through a free trial that won't convert. It also signals to the right audience that the company has a real ICP discipline.

---

## Recurring-use journey (after a tenant has been on the product 30+ days)

The post-onboarding loop:

1. **6:00am local** — Brassmark sends the daily digest. Avg 12-40 lots above threshold.
2. **6:30-7:00am** — Capture manager triages the top 3 directly from the email; forwards 1-2 to analysts.
3. **Through the day** — instant Slack pushes for `score ≥ 0.85` (target: 0-3 events/day).
4. **Weekly** — Brassmark sends a "you-might-have-missed" pass: lots where the relevance score drifted *up* over the week (e.g., an amendment narrowed scope to match the tenant). Designed to catch the lots that the first-pass score missed.
5. **Monthly** — usage report: how many lots scored, which were forwarded, which became bids, which became wins. Used by the capture manager to argue the renewal upward.

The recurring-use loop is designed so the **monthly report is the renewal artifact** — not the salesperson, not the marketing email, the report. This is by design.

---

## Source-of-truth alignment

- Hero copy supporting **Journey 1** lives in `08-marketing-strategy.md` §"Hero copy hierarchy."
- Pricing decisions supporting **Journey 1 and 2** live in `07-sales-strategy.md`.
- The anti-persona refusal supporting **Journey 3** lives in `07-sales-strategy.md` §"Audience refusal copy."
- The recurring-use loop is referenced in `09-go-to-market.md` §"Retention loop."
