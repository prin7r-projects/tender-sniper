# 08 — Marketing Strategy

## Positioning

> **Brassmark is the tender desk a senior bidder keeps open in the second monitor.**
>
> A tender intelligence terminal that scores every public RFP against your NAICS + keyword + region profile and pushes a bid-readiness signal before your competitors finish their morning coffee.

Three properties of this positioning that are non-negotiable in the marketing voice:

1. **Tender desk**, not "platform" or "tool." The audience hears "platform" and disengages — they have used too many "platforms."
2. **Senior bidder** signals seniority of audience. We are not selling to interns or to one-FTE shops.
3. **Second monitor** signals daily-use product. We are not a quarterly-pipeline view.

## Messaging hierarchy

### Top-level claim (the one sentence that goes on everything)

> *"Real-time alerts on government RFPs that match your shop. Scored, deduped, and pushed to your inbox before your competitors notice them."*

### Supporting claims (in priority order)

1. **Coverage:** SAM.gov + 50 US state portals + EU TED + UK Contracts Finder + 8 EU member portals — 80 sources total.
2. **Score:** every lot gets a bid-readiness score on a published 7-signal model.
3. **Speed:** federal poll every 90s; daily 6am-local digest; instant push for `score ≥ 0.85`.
4. **Audience-fit:** built for capture managers and EU tender leads, not for lobbyists or freelancers.
5. **Honest pricing:** $499/$1,490/$4,990 — well below GovWin.

### Tertiary claims (FAQ-grade, not in hero)

- We dedup TED ↔ Boamp ↔ AMEDA. You see one record per notice, not three.
- We import your existing SAM.gov saved searches as a starting profile.
- We never see your capture files. We see public posting → public posting + your profile → score.
- 90-day money-back. We do not run free trials.

## Hero copy (locked — appears verbatim on the landing)

```
H1: The tender desk a senior bidder keeps open in the second monitor.

Deck: Real-time alerts on government RFPs matching your NAICS + keyword + region profile.
Scored on a 7-signal bid-readiness model. Federal-poll cycle: 90 seconds.
80 procurement registers, deduped.

Eyebrow (mono):  LIVE FEED · SAM.gov · TED · 50 STATES · UK · 8 EU MEMBER PORTALS

CTA primary:    See pricing →
CTA secondary:  How the score works →
```

## Section copy (page-section by page-section, the prose lives in `apps/landing/app/page.tsx`)

### Hero (above the fold)
- Headline + deck above.
- **Live alert ticker** on the right column at desktop, below the deck on mobile. The ticker is the eye-catch — it scrolls a believable, deterministic stream of alert rows on a 3.6s tick. Each row is `[brass mark] · [HH:MM:SS UTC] · [agency] · [NAICS or CPV] · [score] · [due in N days]`.
- One real-looking RFP card, expanded, sits below the ticker as proof-block: due-date, NAICS, CPV, set-aside flags, contracting-officer history count, and a 7-signal bid-readiness breakdown (4 signals visible, 3 collapsed).

### Coverage map
- A single-band, two-column layout listing the 80+ source registers, grouped: **US Federal** (1), **US State** (50, by abbreviation grid), **EU + UK + International** (TED, Contracts Finder, Find a Tender, Boamp, AMEDA, PLACE, PCS-Public, Doffin, Bund DE, vergabe.bayern, e-prior, World Bank, ADB, IDB).
- A small mono caption: *"Federal poll every 90 seconds. State every 5 minutes. International every 15 minutes."*

### Bid-readiness score explainer
- A static breakdown of the 7 signals (per `02-architecture.md` §Scoring), each with a one-sentence rationale.
- Below: a worked example. *"This SAM.gov VA lot, posted 2026-04-29: relevance 0.82 (NAICS 541512 primary, secondary CPV 72200000-7), readiness 0.74 (28 days to due-date, no FedRAMP knock-out, dollar band fit, contracting officer with 14 prior similar awards). Composite: 0.61 → above the Multi-region threshold (0.58), routed to subscriber's `#bd-incoming` Slack channel."*

### Pricing
- Three tiers (Single $499 / Multi $1,490 / Federal-Plus $4,990), as specified in `07-sales-strategy.md`. The Multi tier is highlighted with a brass under-rule and a `MOST POPULAR` mono pill.
- Each tier has a NOWPayments crypto-checkout CTA per the playbook v2 §C.
- A small editorial caption below the tier grid: *"Paid via NOWPayments hosted invoice. USDT/USDC, with card on-ramp where the NOWPayments account supports it. No saved card. No credit-bureau hit."*

### FAQ (data freshness + dedup)
- *How fresh is the data?* — Federal: 90s poll. State: 5min. International: 15min. Latency from posting to your digest: under 4min for federal lots, under 18min for international.
- *How do you dedup?* — Notice ID per source + body hash across sources. TED, Boamp, AMEDA double-list ~12% of EU notices; we collapse them.
- *What if I already have GovWin?* — Keep it. We replace your morning triage; GovWin is your pre-RFP-pipeline view.
- *Free trial?* — No. We offer a 90-day money-back guarantee on every tier instead.
- *Will you sell our profile data?* — Never. The profile is NAICS, CPV, region, keyword set, set-asides, dollar band. We treat it as customer-confidential.
- *FedRAMP / IL5?* — Wave 4+. Today we are a marketing-intelligence layer over publicly-posted procurement data — not a procurement-of-record system.

### Footer
- Brassmark wordmark + brass underbar + mono kicker.
- Six links: pricing, how-the-score-works, FAQ, terms, privacy, source registers (the canonical list of 80+ registers).
- Repo link.
- Copyright + region-eligibility statement: *"Brassmark serves the US, EU, UK, and Canada. We do not serve regions where the underlying public-procurement registers are not freely accessible."*

## Voice samples (real sentences that should appear verbatim in product copy)

- *"You spent 90 minutes on SAM.gov this morning. We can hand back 75 of them."*
- *"The score is auditable. Click any number to see the seven signals it summed."*
- *"We don't run free trials. We offer 90-day money-back. The audience for free trials isn't ours."*
- *"GovWin tells you what your competitors are chasing 18 months from now. Brassmark tells you which lot dropped 90 seconds ago."*
- *"BidPrime is a re-skinned SAM.gov. We are not."*

## Voice samples we will not use (anti-voice)

- "Powered by AI."
- "Revolutionizing government contracting."
- "Make government easier."
- "Bidding made simple."
- "Don't miss another opportunity."
- "We use cutting-edge ML."
- Any reference to "the future of work."

## Content pillars (12-month)

1. **Bid-readiness score deep-dives.** Each of the 7 signals as a 1,200-word post; release one per month. Internal-link target: the pricing page and the FAQ.
2. **NAICS / CPV cross-walk taxonomy.** Practical posts on how to translate a 6-digit NAICS into the closest 8-digit CPV codes, and vice-versa. Useful in the EU consulting market.
3. **Source-register profiles.** One-per-month deep dive on a state portal (TX SmartBuy, Cal eProcure, NY OGS, VA-DGS) or an EU member portal (Boamp, AMEDA). What it covers, what it misses, when it lags TED.
4. **Capture-manager rituals.** Op-eds on how the morning ritual changes when you replace SAM.gov triage with a scored digest. Aimed at the NCMA and FedScoop audience.
5. **The 11.4% problem** (the false-citations rate) — earned-PR-grade content.

## Distribution principles

- **Owned**: blog at `tender-sniper.prin7r.com/journal`, RSS feed for the audience that prefers it.
- **Earned**: FedScoop, Federal News Network, FCW, GovEvents, NCMA, BD Squared.
- **Paid**: small experiments only — sponsored-newsletter slot in FedScoop daily for week 6-8; LinkedIn Sales Navigator outbound for the Federal-Plus named-account list.
- **Never paid**: Twitter/X ads, HN front-page promotion, Product Hunt, generic "AI for government" trade shows.

## Rituals (the cadence we keep)

- **Daily**: 1 reply per day in NCMA, GovCon, or `r/govcon`.
- **Weekly**: 1 long-form post on `tender-sniper.prin7r.com/journal`.
- **Monthly**: 1 op-ed pitch to FedScoop / FCW / Federal News Network.
- **Quarterly**: 1 conference (GovEvents / FSP Acquisition Excellence / SubcontractingDirectConnect) booth presence.
- **Yearly**: One CEPS Frankfurt working-group session.

## Brand-voice gates (before any external copy ships)

- [ ] Does it use "AI" without a proximate "rules-based" or "auditable" qualifier? **Reject.**
- [ ] Does it imply Brassmark replaces a person? **Reject.** It accelerates the capture manager's morning, full stop.
- [ ] Does it mention "platform"? **Reject.** Use "tender desk" or "terminal."
- [ ] Does it use lobbying / capitol-imagery? **Reject.**
- [ ] Does it have an em-dash? **Allowed but rare** — em-dashes are an editorial signal; we do use them, sparingly.
- [ ] Does it cite a specific NAICS / CPV / source / register? **Strongly preferred.** Specificity is the voice.
