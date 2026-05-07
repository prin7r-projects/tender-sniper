# 05 — Audience Profile

## ICP — Ideal Customer Profile

A services or product firm that meets all of:

- **Annual revenue band**: $5M-$50M ARR.
- **Industry**: NAICS 5415 (Computer Systems Design), NAICS 5416 (Management Consulting), NAICS 5417 (Scientific R&D), NAICS 5418 (Advertising), NAICS 6113 (Higher-Ed services), NAICS 5612 (Facilities support), NAICS 5414 (Specialized design — selectively), and the corresponding EU CPV chapters 72/73/79.
- **Public-sector revenue mix**: 25-100% of pipeline is public-sector.
- **Active capture function**: there is at least one full-time **Capture Manager** or BD lead whose job it is to triage RFPs.
- **Geography**: HQ'd in the US, EU, UK, or Canada. (We support the registers in those geographies.)
- **Existing pain**: today they pay between $0 (DIY scripts) and $30k/yr (GovWin or BloombergGov) for triage; in either case they're frustrated.

---

## Persona 1 — Marsha Okafor, Capture Manager (federal SDVOSB, US)

| Attribute | Value |
|-----------|-------|
| **Role** | Capture Manager |
| **Firm** | 80-person SDVOSB doing IT modernization on civilian federal contracts |
| **Reports to** | COO |
| **Tenure** | 6 years in capture, 11 years in GovCon overall |
| **Background** | Ex-Defense contractor BDM; now managing a federal-civilian pipeline |
| **Primary tools** | SAM.gov, GovWin (single seat), Salesforce (capture stage tracking), Slack (`#bd-incoming`) |
| **Daily rhythm** | 06:30 SAM.gov ritual → 07:30 GovWin pull → 08:00 stand-up with analysts → 14:00 bid/no-bid call → 17:00 next-day prep |
| **Goals** | (1) Hit ownership's target of 4 federal proposal submissions/quarter; (2) Stop wasting analyst hours on no-bid lots; (3) Build a defensible bid/no-bid rationale she can show ownership |
| **Frustrations** | False positives on SAM, GovWin's high price-per-seat, no real-time push, no readiness scoring |
| **Watering holes** | NCMA Slack, FedScoop daily newsletter, BD Squared blog, `r/govcon`, GovEvents conferences (one per year) |
| **Buying power** | Direct: $1k/mo discretionary. Above that: 24-hour CFO sign-off. Annual subscription decisions: needs ownership signoff at >$10k/yr |
| **Trigger to switch** | Lost a winnable lot because triage was too slow; or a peer in NCMA Slack mentions a tool that worked |

**Key quote (composite from procurement-pro forum reads):**
> *"My morning is 70% SAM.gov triage and 30% deciding which of those lots my analyst spends the day building a capture file for. I want that ratio inverted."*

**What she pays for:**
- A score she can defend upward.
- State coverage (her firm bids 30% state-DOT-style civilian work).
- Slack push for `score ≥ 0.85`.
- A Salesforce export of the matched lots (Wave 3).

---

## Persona 2 — Dieter Ramani, EU Tender Lead (mid-market consulting, EU)

| Attribute | Value |
|-----------|-------|
| **Role** | EU Tender Lead |
| **Firm** | 600-person consulting firm with offices in Frankfurt and Madrid |
| **Reports to** | Public-Sector Practice Partner |
| **Tenure** | 3 years in this role; 6 years in EU public-procurement consulting overall |
| **Background** | EU-citizen, German-native, English-proficient, decent Spanish |
| **Primary tools** | TED (EU), Boamp (FR), AMEDA (IT), PLACE (ES), Contracts Finder (UK), Doffin (NO), Bund DE, vergabe.bayern, e-prior |
| **Daily rhythm** | 07:00 EU portal scan → 08:30 partner stand-up with "3 to chase, 3 to consider" list → afternoon: capture file work on the chosen 3 |
| **Goals** | (1) Deliver 8 qualified RFP responses/quarter from the EU pipeline; (2) Build a CPV-code-to-firm-offering cross-walk Partner-meeting-ready; (3) Surface lots in registers his peers don't watch (Doffin, Bund DE, vergabe.bayern) so the firm wins where competitors don't look |
| **Frustrations** | TED noise, CPV taxonomy rigidity, multilingual body text, no daily readiness score |
| **Watering holes** | LinkedIn EU public-procurement tag, CEPS Frankfurt working group, `procurement.de` newsletter, EU public-procurement conferences (Brussels, twice/yr) |
| **Buying power** | Direct: €1.5k/mo. Above: Partner sign-off in 48h |
| **Trigger to switch** | Partner asks for the "3 to chase" list at standup and Dieter is late |

**Key quote (composite):**
> *"TED is a graveyard of waste-incineration notices. I need someone to read it for me, in the body's actual language, and tell me which 30 are worth my morning."*

**What he pays for:**
- EU TED + 8 member portals + UK coverage in one place.
- Multilingual body summarization in English.
- CPV-cross-walk so a search composes across his firm's 14-CPV-code offering.
- A daily 06:00 CET digest his Partner can quote at standup.

---

## Anti-personas (we do NOT build for these)

### Anti-persona A — Two-person consulting boutique
- $400k revenue, founder + 1 FTE.
- Bids 2-3 federal proposals/year.
- A $499/mo subscription doesn't pay back at that bid frequency.
- **We refuse them at pricing.** The FAQ on the landing tells them this verbatim. They come back when revenue crosses $2M.

### Anti-persona B — Lobbying / advocacy firm
- Wants "who is buying / who is the contracting officer / what is the agency's budget cycle."
- This is a BloombergGov / Politico Pro / E&E News value prop, not ours.
- **We do not surface lobbying intel.** The product surfaces *which lots are open*, not *who to call*.

### Anti-persona C — Construction-only firm (NAICS 23-something)
- Construction tenders (state-DOT, federal-buildings) are a different ecosystem with prevailing-wage attachments and DBE certifications we do not parse.
- **We explicitly defer this vertical.** A Construction-Plus tier would require its own engineering investment and we are not making that bet in Wave 2-3.

### Anti-persona D — One-FTE military-benefits-veteran firm
- Often subscribes to BD tools optimistically because of veteran-discount pricing.
- The firm bids on a `set_aside=SDVOSB` filter only, has no in-house capture function, and treats the tool as a CRM substitute.
- **We do not solve their problem** — they need a capture-as-a-service, not a triage subscription. Routed politely to a partner directory in Wave 3.

---

## ICP sizing (back-of-envelope)

- US GovCon firms in the $5-50M ARR band, public-sector mix ≥25%, NAICS in our supported set: ~3,400 firms (cross-referenced against SBA size-standard reporting + USASpending top-vendor cohort).
- EU consulting firms in the equivalent band, public-sector mix ≥25%, geographies we cover: ~2,100 firms.
- UK firms, similar bands: ~700 firms.
- **TAM (top-of-funnel):** ~6,200 firms.
- **Realistic SAM** (excluding firms already on a 3-year GovWin contract or on a custom build): ~3,800 firms.
- **Year-1 SOM** at the playbook-aligned 90-day GTM: ~280 paid logos blended across tiers. Detailed unit-econ math lives in `07-sales-strategy.md`.

---

## Profile data sources

The persona definitions above were composited (in order of weight):
1. Direct procurement-professional forum reads (NCMA Slack archives, `r/govcon` threads from the last 18 months) — primary frustration vocabulary.
2. The `04-pain-points.md` root-cause-style breakdown — primary failure modes.
3. The Notion opportunity body's pinned `04-evaluation.md` link — Stage-4 score rationale (`demand 19 + speed-to-cash 12 + Prin7r fit 15 + repeatability 11`).
4. Public commentary on FedScoop and Federal News Network re: how mid-market BD shops are losing the morning to false positives.

No persona was generated from a vacuum. Where a quote is given, it is labelled "composite" — neither persona is a real person.
