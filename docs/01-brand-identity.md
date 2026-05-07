# 01 — Brand Identity

> Brand: **Brassmark**. The slug `tender-sniper` is the project codename; **Brassmark** is the public-facing wordmark.
>
> Anchor sentence: *"The tender desk a senior bidder keeps open in the second monitor."*

## Brand pyramid

| Layer | Value |
|-------|-------|
| **Essence** (1 word) | *Vigil.* |
| **Personality** (3 traits) | Institutional. Vigilant. Senior. |
| **Values** (3) | Source-of-record discipline. Time-to-bid honesty. No regulatory theatre. |
| **Attributes** (5) | Lateen-rigged for procurement registers, brass-and-graphite, monospace alert ticker, federal-and-EU coverage, bid-readiness as a number you can defend. |

The brand stance is **counter-vendor**: most government-tech vendors paint themselves in optimistic SaaS gradient and stock photography of city skylines. Brassmark refuses both. The page reads like the back office of a competent bid shop — not a pitch deck for one.

## Positioning statement

> For **GovCon SMBs and consulting firms with a public-sector practice** who **need to know about a relevant federal/state/EU tender within minutes of its posting**, **Brassmark** is a **tender intelligence terminal** that **scores every public RFP against your NAICS + keyword + region profile and pushes a bid-readiness signal before your competitors finish their morning coffee** — unlike **FBO.gov / SAM.gov / GovWin / EU TED manual checks** because **we ingest 80+ procurement registers in parallel, dedupe across sources, and tell you which lots actually fit your shop instead of returning 2,400 unfiltered hits.**

## Audience persona — primary

**Marsha Okafor — Capture Manager, GovCon SMB.**
- 38, ex-Defense contractor BDM, now runs capture for an 80-person SDVOSB doing IT modernization on civilian-agency contracts.
- Reports to the COO. Owns the bid/no-bid decision. Sells the readiness score upward to convince ownership which lots to pursue.
- Wakes up to 1,800 SAM.gov hits a week, of which maybe 12 are actually fits. Her current life: a 6:30am coffee, a 45-minute keyword-saved-search ritual on SAM.gov, a 30-minute pull from GovWin, and a Slack channel where her two analysts dump links.
- Frustrations:
  - **False positives.** Her saved search returns IT lots that say "modernization" but are really IDIQ wraparounds with no real scope.
  - **Source fragmentation.** She runs three accounts: SAM.gov, beta.SAM, GovWin. Each has its own quirks.
  - **Time-to-bid.** Some federal lots have a 21-day response window. Some state lots have 7. By the time her analyst flags it, the readiness check is already a panic.
  - **No score she can defend upward.** "Why this lot, why not that one" is currently a vibe.
- Channels she lives in: SAM.gov, GovWin, BD Squared, `r/govcon`, the NCMA Slack, the Federal News Network newsletter, FedScoop.
- Decision driver: *"How fast can I show my ownership a bid-readiness number that won't embarrass me on the bid review call?"*

## Audience persona — secondary

**Dieter Ramani — EU Tender Lead, Mid-Market Consulting Firm.**
- 31, EU-citizen, runs the public-sector pipeline for a 600-person consulting firm with offices in Frankfurt and Madrid. Speaks German, English, decent Spanish.
- Watches **EU TED** (Tenders Electronic Daily), **Boamp** (France), **AMEDA** (Italy), **PLACE** (Spain), **PCS-Public** (Ireland), **Contracts Finder** (UK), and **Doffin** (Norway) every morning. Plus the German VgV state portals.
- Reports to a Partner who wants 8 qualified RFP responses per quarter from the EU pipeline alone.
- Frustrations:
  - **TED is a graveyard.** 700 notices/day, half are mining permits and waste-incineration tenders he doesn't want.
  - **No single CPV-code-to-relevance translator.** CPV (Common Procurement Vocabulary) is precise but his firm's offerings cross 14 of them.
  - **Regional language barrier.** A French Boamp notice often has the relevance in only 3 lines; the rest is boilerplate.
- Channel: TED, Boamp, AMEDA, PLACE; `procurement.de` newsletter; LinkedIn EU public-sector tag.
- Decision driver: *"Filter EU procurement noise to a 30-tender shortlist by CPV + region + keyword, in English, daily, before my Partner's 8:30 standup."*

## Anti-personas (we do not build for these)

1. **Lobbyists.** Brassmark has zero lobbying value-prop. We do not surface "who to call" — we surface "who is buying."
2. **Construction-only firms.** Construction tenders are a different world (NAICS 23, lots of state DOT solicitations with prevailing-wage attachments). A vertical we explicitly defer.
3. **One-off opportunists.** People hunting for *one* contract aren't subscription-fit; the unit economics don't carry.
4. **Sub-$2M-revenue micro-firms.** Cannot maintain pre-built bid packages, and our bid-readiness scoring presumes a real capture function exists.

## Voice & tone

**Voice — three Do's:**
1. **Specific over hype.** Say "SAM.gov + 50 state portals + EU TED + UK Contracts Finder + 8 EU member portals — 80 sources total" not "all government tenders, everywhere."
2. **Procurement-vocabulary native.** Use **NAICS, CPV, RFI, RFP, RFQ, IDIQ, BPA, GWAC, set-aside, capture manager** without translating. The reader is a professional.
3. **Pessimistic about competitors.** Name FBO.gov, SAM.gov, GovWin, BloombergGov, BidPrime, GovTribe directly, with their specific failure modes. The reader has used them.

**Voice — three Don'ts:**
1. No founder photos. No team-pointing-at-screen photography. No "founded in a garage" backstories.
2. No "AI-powered" hype. Say what we actually score against (our NAICS-to-keyword model, the CPV cross-walk, the contracting officer history graph).
3. No optimism about regulatory gravity. We do not "make government easier"; we tell you which lots are real before your competitors do.

**Sample sentence:**

> *"Brassmark watches every SAM.gov posting, every TED notice, and every state procurement register on a 90-second poll cycle, scores each against your NAICS + CPV + keyword profile, and routes the ones above 0.62 readiness directly into your capture queue — before BloombergGov has reflected the change in its UI."*

## Visual system — palette

Five-color institutional palette. Brass for accent (the hue of a federal seal embossment), navy for trust-anchor, off-white paper for body, graphite for text, signal-red for the only place we want the reader's pulse to spike (high-priority alerts).

| Role | Token | Hex | Use |
|------|-------|-----|-----|
| Surface (primary) | `paper` | `#F2EEE5` | Page background, card surfaces |
| Surface (secondary) | `paper-2` | `#E7E1D2` | Section bands, ticker inset |
| Ink | `ink` | `#13171F` | Body copy, masthead, primary buttons |
| Brass | `brass` | `#A87E2C` | Accent rules, monogram, tier-priced borders, score arcs |
| Signal red | `signal` | `#B0241F` | Priority-tag (alert ≥0.85), error state, CTA hover |
| Graphite | `graphite` | `#5C5A55` | Captions, mono labels, secondary metadata |

Contrast verified WCAG AA: ink-on-paper ≥ 14:1, brass-on-paper 4.6:1 (large display only), signal-on-paper 5.9:1, graphite-on-paper 4.7:1.

**Forbidden combinations:** brass on signal (war-paint), brass on graphite (illegible), small (<14px) brass body copy.

## Visual system — typography

Three families. No fourth font.

| Role | Family | Used at | Reason |
|------|--------|---------|--------|
| Display | **GT Sectra** *(fallback: Source Serif 4)* | Hero 56-104px, sections 32-48px, tier prices | Strong institutional serif — used by FT and the Economist's data labels. Available via Google Fonts as `Source Serif 4` (we ship Source Serif 4; GT Sectra is the inspiration but not a redistributable font). |
| Body | **Inter** | Body 15-17px, UI 14px | Neutral, high-legibility sans; cleanly pairs with the serif. |
| Mono (the alert ticker) | **JetBrains Mono** | Ticker 12-13px, code blocks, CPV codes, NAICS codes, mono labels | The alert feed *is* monospace. Reads as machine output, exactly as it should — this is a procurement terminal. |

Type scale (display): 17 / 22 / 28 / 32 / 40 / 48 / 64 / 84 / 104. Body: 11 / 12 / 13 / 14 / 15 / 17 / 19 / 22.

Letter-spacing: display tightens by `-0.012em`; mono labels open to `2.4px` for caps.

## Visual system — logo concept

A signet-style monogram. The mark is a **brass-toned ▣** (small filled square inside a hairline outer square) followed by a serif wordmark `Brassmark` and, set in JetBrains Mono small-caps with `letter-spacing: 2.4px`, the kicker `tender desk`.

The ▣ is read as a "marked square on a tender register." It does double duty as the favicon (`apps/landing/public/icon.svg`).

Inline SVG sketch of the wordmark:

```svg
<svg viewBox="0 0 220 40" xmlns="http://www.w3.org/2000/svg" aria-label="Brassmark">
  <!-- mark -->
  <rect x="2" y="6" width="28" height="28" fill="none" stroke="#13171F" stroke-width="1.5"/>
  <rect x="9" y="13" width="14" height="14" fill="#A87E2C"/>
  <!-- wordmark -->
  <text x="40" y="28" font-family="'Source Serif 4', Georgia, serif" font-size="22" font-weight="900" fill="#13171F" letter-spacing="-0.4">Brassmark</text>
  <!-- brass underbar -->
  <rect x="40" y="33" width="80" height="1.5" fill="#A87E2C"/>
  <!-- mono kicker -->
  <text x="40" y="46" font-family="'JetBrains Mono', monospace" font-size="9" fill="#5C5A55" letter-spacing="2.4">TENDER DESK</text>
</svg>
```

Favicon (the ▣ alone) is shipped at `apps/landing/public/icon.svg`.

## Spacing & radius scale

- **Spacing scale** — 4 / 8 / 12 / 16 / 24 / 40 / 64 / 96 px. Tighter than Tailwind defaults so the page reads like a print register, not a SaaS dashboard.
- **Radius** — `0` for cards, alert-ticker rows, and buttons. `2px` for inputs only. `999px` only for priority pills (`PRIORITY 0.91` etc.).
- **Borders** — 1px hairlines at `rgba(19,23,31,.15)`. The brass accent appears as a 1.5-2px under-rule on section headers and pricing-tier headlines. Never as a fill.
- **Shadows** — exactly one allowed: `0 1px 0 0 rgba(0,0,0,.05)`. No glassmorphism, no glow, no neumorphism.

## Motion principles

- **Principle**: a procurement terminal, not a dashboard. The alert ticker streams. Everything else is still.
- The hero ticker rolls a new alert every **3.6s** in a `cubic-bezier(.2,.6,.2,1) 380ms` slide-up. **Reduced motion**: we hold the most recent alert visible and disable the slide.
- Pulse dot on the masthead live indicator: 1.6s ease-in-out opacity 1↔.45.
- Hover on `<a>` and `.btn` swaps fill in 200ms; no fade transitions on text color.
- No parallax. No scroll-jacking. No spring. No bounce.

## Forbidden visual moves

- "AI gov-tech blue" gradients (the `#4F46E5 → #7C3AED` mesh that GovTech / Tradewind / Granicus all default to).
- Lobbying imagery: capitol domes, suited handshakes, eagle-wing iconography.
- Founder photos. Team-pointing-at-screen photography. Stock dashboard mockups.
- Optimistic SaaS gradients of any kind.
- Drop shadows beyond `0 1px 0 0 rgba(0,0,0,.05)`.

---

The visual identity above feeds directly into [`DESIGN.md`](../DESIGN.md) §4 (color tokens), §5 (typography), §6 (spacing/radius/borders), and §11 (motion). Anything that diverges in implementation gets a §15 changelog entry there with the rationale.
