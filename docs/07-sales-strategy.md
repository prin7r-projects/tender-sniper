# 07 — Sales Strategy

## Motion

**Hybrid PLG + sales-led — the named-account hybrid.**

- **Single-region $499/mo** is **PLG** (self-serve checkout via NOWPayments hosted invoice).
- **Multi-region $1,490/mo** is **PLG-led, sales-assisted** (self-serve, but a 30-min call is offered before checkout for buyers who want a profile-walkthrough).
- **Federal-Plus $4,990/mo** is **sales-led** with a named-account list of ~80 mid-market US federal firms (SDVOSB / 8(a) / WOSB / HUBZone with $5-50M revenue).

The motion mirrors the audience's procurement habits: small-shop capture managers self-serve; named-account federal directors expect a call first.

## Pricing tiers (as shipped on the landing)

### Tier 1 — Single-region — **$499/mo**
- 1 region (US-Federal, US-State-of-X, EU-X, UK).
- 1 NAICS / CPV profile (multi-code allowed, single-shape profile).
- 1 user seat.
- Email digest + Slack push.
- Score threshold: configurable, default 0.62.
- Custom webhook: not included.
- 90-day cancel: prorated refund.

### Tier 2 — Multi-region — **$1,490/mo** *(highlighted as "MOST POPULAR")*
- Up to 3 regions across federal/state/EU/UK.
- Up to 3 named profiles.
- 3 user seats.
- Email + Slack + custom webhook.
- Score threshold: configurable, default 0.58.
- Past-performance import (CSV upload) — feeds the readiness model's signal #3.
- 90-day cancel: prorated refund.

### Tier 3 — Federal-Plus — **$4,990/mo**
- All US federal + all 50 state portals + EU TED + UK Contracts Finder + 8 EU member portals.
- Unlimited profiles within the firm.
- 10 user seats.
- Email + Slack + custom webhook + Salesforce export (Wave 3).
- Score threshold: configurable, default 0.55.
- **Contracting officer history graph** — visibility into which COs the tenant has bid against and won/lost.
- **White-glove onboarding**: 90-min profile-build call with a Brassmark engineer.
- **Quarterly business review** with the Capture Lead — usage report + score-model updates.
- 90-day cancel: prorated refund.

> **Anti-tier (not on the landing, but stated in the FAQ):** if you bid two-three federal opportunities a year, our subscription does not pay back. We recommend a saved search on SAM.gov and a 30-minute weekly review. Come back when you're north of $2M ARR and have a real capture function.

## Why this pricing shape

- **The $499 floor** is set so that a *single won lot* covers ~12-24 months of subscription. The reader's bid-win cycle has plenty of $50k-2M lots — the math is obvious.
- **The $4,990 ceiling** is set well below GovWin's $15-30k/seat-yr. We are deliberately *not* an enterprise replacement; we are the *capture-side complement* — and we win on price relative to GovWin while delivering a triage product GovWin doesn't.
- **The 3:1 step** (Single → Multi → Federal-Plus) is wide enough to make the upgrade decision feel like a proper one, not a creep-tier.

## Objection handling

### "We already have GovWin."
> *"Good — keep it. GovWin is your pre-RFP-pipeline view; Brassmark is your morning triage. Federal-Plus + GovWin together is what most of our $20-50M-ARR buyers run. The two products cost less combined than two GovWin seats."*

### "We can build this ourselves."
> *"You can. Here's the headcount math: maintaining 28 source adapters at 1-3 changes/yr each is a 0.4-FTE-yr line item. Plus the NAICS/CPV cross-walk, plus dedup, plus scoring. That's $80-120k/yr loaded — and the analyst building it isn't doing capture work. Multi-region pays back in three months."*

### "Your pricing is high vs. BidPrime."
> *"Compared to BidPrime, we're 7x more expensive. Compared to BidPrime, we also have a tenant-specific bid-readiness score, an NAICS/CPV cross-walk, real-time push, and EU coverage. BidPrime is a re-skinned SAM.gov. We're not."*

### "We don't trust an SaaS to handle our procurement profile data."
> *"Your profile is NAICS, CPV, regions, set-aside flags, keyword set, and dollar bands. None of that is sensitive. The capture files you build *off* a Brassmark match stay in your Salesforce / Sharepoint / on your laptop — Brassmark never sees them."*

### "Can we trial it?"
> *"We don't run free trials. The reason: a free-trial signup that doesn't have a capture function won't see value in a 14-day window, and that creates churn-reflex on the renewal. What we do run: a **90-day money-back guarantee** on every tier. If your team's morning isn't faster, we refund prorated."*

### "What if your scoring model is wrong?"
> *"It's a rules-based model that we publish in plain English in our docs. Every score is auditable to its 7 signals. You can override it on a per-lot basis and we use the override to refine the model."*

### "What about FedRAMP / IL5 / FISMA-compliance?"
> *"Brassmark is a marketing-intelligence layer, not a procurement-system-of-record. The data we ingest is publicly posted. Customer profiles are stored encrypted-at-rest. We have no current FedRAMP authorization — that's a Wave 4+ decision based on customer demand. If you require a FedRAMP-Moderate vendor for any procurement-relevant SaaS, talk to us about an isolated single-tenant deployment at $9,990/mo."*

## Trial → paid funnel (post-Wave-3, the planned funnel)

We do **not** offer a free trial. We offer:
1. **Self-serve checkout** for Single-region and Multi-region, 90-day money-back.
2. **Named-account 30-min discovery call** for Federal-Plus, no commitment.
3. **A free PDF**: *"The 7-signal bid-readiness score model — full breakdown."* This is the lead magnet for direct outbound. Captures email; never auto-enrols a free trial.

The PDF is the *only* non-paid conversion artifact. We are deliberately conservative on free-trial funnels because the audience is small and email-fatigued.

## Customer segments and how they buy

| Segment | How they buy | Sales motion |
|---------|--------------|--------------|
| 80-200 person SDVOSB / 8(a) / WOSB / HUBZone | Capture Manager has $1k discretionary; uses NOWPayments USDT for vendor purchases under $5k | Self-serve checkout (Single or Multi) |
| 200-500 person federal IT services firm | BD Director has $2-5k discretionary; CFO sign-off on $50k+ | Self-serve Multi or sales-led Federal-Plus |
| 500-1,500 person mid-market federal firm | Capture VP has $10k discretionary; CFO sign-off above; legal sign-off on subscription terms | Sales-led Federal-Plus, 30-day legal review |
| 100-1,000 person EU consulting firm | Partner has €1-3k discretionary; Partner-board sign-off above €10k | Self-serve Multi-region (EU profile) |

## Sales-led contracts (Federal-Plus)

- **Annual contracts only** for the white-glove tier ($4,990 × 12 = $59,880/yr).
- **Optional discount**: 10% off for annual prepay.
- **Optional discount**: 15% off for SDVOSB / 8(a) / WOSB / HUBZone affinity-association members.
- **Procurement-friendly contract**: standard MSA + Brassmark-specific Order Form. Net-60 only on annual prepay over $20k.

## Cash collection

- **NOWPayments hosted invoice** (USDT/USDC + card on-ramp) is the primary rail for Single-region and Multi-region.
- For Federal-Plus / annual prepay, **invoice via NOWPayments** *or* **wire** to the Brassmark business bank (Wave 3 — bank not yet provisioned).
- We do not accept ACH directly today. We do not store card details.

## What we won't do (sales-strategy anti-features)

1. We will not run free trials.
2. We will not run "freemium with limits." The audience is not a freemium audience.
3. We will not run referral-rebate kickbacks to capture managers personally — bordering on procurement-ethics red flag.
4. We will not white-label for a reseller in Wave 2-3.
5. We will not bundle Brassmark with capture-as-a-service. Capture is not our line.

## Renewal motion

- **Single / Multi**: month-to-month default; we send a usage-summary email at month-2 of every quarter. The renewal artifact is the email itself ("you triaged 142 lots this quarter, forwarded 28 to capture, your team won 3"). No salesperson involved.
- **Federal-Plus**: quarterly business review with the Capture Lead, 60-min agenda: usage report → score-model updates → roadmap reveal. Renewal asks happen at the QBR.
