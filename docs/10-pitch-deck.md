# 10 — Pitch deck (Markdown source)

A 10-slide investor / customer-facing deck. Authored as Markdown headings + bullet content; rendered as a self-contained HTML file at `pitch-deck.html` (no build step — opens directly in a browser).

---

## Slide 1 — Title

**Brassmark**

*The tender desk a senior bidder keeps open in the second monitor.*

— A Prin7r build, May 2026

---

## Slide 2 — The 90-minute morning

A capture manager at an 80-person SDVOSB:
- 06:30 — opens SAM.gov saved searches.
- 06:35 — clicks through 28 noisy hits.
- 07:00 — pulls a GovWin pipeline view.
- 07:30 — copies-pastes the actually-relevant 6 lots into a Slack channel.
- 08:00 — stand-up.

90 minutes spent eliminating false positives. The job-of-real-value (deciding which 2-3 to actually pursue) hasn't started yet.

This is the morning of every public-sector capture lead in our ICP.

---

## Slide 3 — Why every alternative fails

| Tool | Fails because |
|------|---------------|
| SAM.gov / TED | Source-of-record by design; refuses to triage. |
| GovWin | $20-30k/seat enterprise pricing; pre-RFP-pipeline focus, not morning triage. |
| BloombergGov | News-and-policy product; lots are an afterthought. |
| BidPrime / GovTribe | Cheap re-skins of SAM.gov; no scoring, no EU. |
| Build-it-yourself | Maintenance burden eats the analyst; no NAICS/CPV cross-walk. |

The unmet need: tenant-specific bid-readiness scoring on broad coverage at $5-50M-ARR pricing.

---

## Slide 4 — The product (in one sentence)

> Watches every public RFP across **80+ procurement registers**.
> Scores each one against your **NAICS + CPV + region + keyword** profile.
> Pushes the matches above your threshold to your **inbox + Slack** in real-time.

Federal poll: **90 seconds.** State: **5 minutes.** International: **15 minutes.**

---

## Slide 5 — The bid-readiness score (7 signals)

1. Days-to-due-date (sweet spot: 14-28d).
2. Set-aside compatibility (boolean against tenant flags).
3. Past-performance similarity (matching NAICS).
4. Contracting officer history (with tenant or similar firms).
5. Attachment signal (SOW/PWS parsed vs amendment-only).
6. Knock-out terms (FedRAMP, IL5, ITAR, clearance).
7. Dollar-band fit (against tenant minimum/ceiling).

Every score is auditable to its inputs. Customers can override per-lot; the override refines the model.

---

## Slide 6 — The audience

**Primary**: Capture Managers at 80-500-person SDVOSB / 8(a) / WOSB / HUBZone / mid-market federal IT services firms (US).

**Secondary**: EU Tender Leads at 100-1,000-person consulting firms (DE / FR / ES / IT / UK).

**TAM**: ~6,200 firms. **SAM**: ~3,800 firms. **Year-1 SOM** (90-day-aligned): ~280 paid logos.

Anti-personas (we refuse them at the door): two-person boutiques, lobbyists, construction-only firms.

---

## Slide 7 — Pricing

| Tier | Price | What's included |
|------|-------|-----------------|
| **Single-region** | **$499/mo** | 1 region, 1 profile, 1 seat, email + Slack. |
| **Multi-region** | **$1,490/mo** | Up to 3 regions, 3 profiles, 3 seats, email + Slack + custom webhook. |
| **Federal-Plus** | **$4,990/mo** | Federal + 50 states + EU + UK, unlimited profiles, 10 seats, contracting-officer graph, white-glove onboarding, QBR. |

Paid via NOWPayments hosted invoice (USDT/USDC + card on-ramp). 90-day money-back. No free trial.

---

## Slide 8 — Distribution

- NCMA / GovCon Slack communities (peer-recommendation rail).
- Direct outbound to Capture-Manager titles via Sales Navigator (named-account list of ~80 firms for Federal-Plus).
- FedScoop / Federal News Network / FCW earned op-eds.
- GovEvents conferences (booth + dinners).
- Content-led SEO on the comparison queries (`SAM.gov saved search false positives`, `GovWin alternative for SDVOSB`, `EU TED filter by CPV`).

We do **not** do HN, Product Hunt, Twitter ads, or generic "AI for government" trade shows. The audience isn't there.

---

## Slide 9 — The 90-day plan

- **Weeks 1-4**: Soft launch. Audience-seed in NCMA + 12 personal-network emails. First op-ed in FedScoop. Target: 3 paid Single-region logos.
- **Weeks 5-9**: Outbound at scale. First conference booth. Op-ed runs. Target: 8-12 paid logos cumulative; $25-40k MRR.
- **Weeks 10-13**: First renewals. Federal-Plus close ($59,880 annual prepay). Channel-saturation review.

**Exit-of-phase-3 KPI**: $40-80k MRR; 12-20 paid logos; one named-account Federal-Plus.

---

## Slide 10 — Ask

We are building Brassmark inside Prin7r. The ask is not for capital — Prin7r runs on its own crypto rail.

The ask is **distribution**:
- 12 introductions to capture managers in the ICP NAICS bands.
- 1 introduction to a CEPS Frankfurt working-group convener.
- 1 placement opportunity at FedScoop / FCW / Federal News Network.

If you can help with any of these, the founder is at `desk@prin7r.com`.
