# 04 — Pain Points (root-cause)

The reader of Brassmark's landing has been triaging public RFPs for years. They have used SAM.gov, GovWin, BloombergGov, GovTribe, BidPrime, Onvia, and TED. None of these tools are missing — they exist. But every one of them fails the same procurement professional in different specific ways. This doc names those failures.

## Alternative 1 — SAM.gov / FBO.gov direct (the official US federal portal)

**What it is:** The US federal government's official procurement portal. Free. Authoritative.

**What it does well:** Source-of-record. Every federal solicitation eventually flows through it.

**Where it fails the reader:**
1. **Saved-search false-positive rate is ~70%.** A "modernization" keyword search returns IDIQ administrative notices, sole-source justifications, IT-services lots that are actually janitorial, and amendments-only postings. The reader spends 30-50% of her morning *eliminating* hits, not evaluating them.
2. **No cross-walk between NAICS and the body.** A NAICS-541512 search will surface lots whose primary NAICS is actually 518210; the reader's saved search misses them because SAM.gov honours the contracting officer's primary NAICS, not the body's actual scope.
3. **No score, no priority.** The 8th lot in the list is treated identically to the 1st. Triage requires reading every one.
4. **No state coverage.** The reader who works state-level hits is on a separate site per state.
5. **No contracting-officer history surface.** The reader has to guess whether she has bid against this CO before.
6. **No deduplication.** SAM.gov shows amendment + base posting + cancellation as three separate rows.

**Root cause:** SAM.gov is a **legal-source-of-record** product. Triage is not its job. It refuses to be a triage product because providing a score would be politically uncomfortable.

## Alternative 2 — GovWin IQ (the incumbent intelligence vendor)

**What it is:** Deltek's GovWin IQ — the dominant federal/state intelligence subscription. ~$15-30k/yr per seat depending on package.

**What it does well:** Long-horizon pipeline view; pre-RFP intel from interviews with program offices; alumni-of-government analyst commentary.

**Where it fails the reader:**
1. **Pre-RFP intel is the product; daily triage is an afterthought.** GovWin's strength is the 18-month pipeline view. The reader needs the 14-day-window response. The product doesn't optimize for the inbox-zero use case.
2. **The seat-license model is hostile to small shops.** A $20k seat is a meaningful chunk of an $80-person SDVOSB's BD budget; analyst-only access (the cheaper SKU) doesn't cover the capture manager's actual workflow.
3. **No real-time push.** Daily summary emails; no instant Slack on `score ≥ 0.85`.
4. **No bid-readiness scoring** that ties to the *tenant's* shop, only to the lot's general competitive landscape.
5. **State coverage is patchy.** GovWin is federal-strong, state-mediocre.
6. **No EU coverage at all.** Dieter (persona 2) has no use for it.

**Root cause:** GovWin is an **enterprise BD-research** product. Capture managers pay for the pipeline view, not the morning triage. The product team prioritizes analyst commentary over a triage score because that's what enterprise BD teams renew on.

## Alternative 3 — BloombergGov

**What it is:** Bloomberg's federal-government intelligence product. Dashboard + research + policy news.

**What it does well:** Policy-context narrative; congressional intel; agency-budget tracking.

**Where it fails the reader:**
1. **News-first, lots-second.** The reader's daily problem is *which lot to chase*, not *what is happening in the agency budget cycle*.
2. **Latency.** BloombergGov reflects new postings in a UI cycle that lags SAM.gov by 30-90 minutes. For a 14-day-window lot that's the difference between bidding and not bidding.
3. **No bid-readiness model.** Every lot is presented neutrally.
4. **Cost.** $5-10k/yr per seat. Premium audience-fit, hostile to mid-market.

**Root cause:** Bloomberg's product DNA is news-and-analytics for policy professionals, not triage for capture managers. They optimise for the lobbyist and the policy analyst, not the BD shop.

## Alternative 4 — BidPrime / GovTribe / Onvia / Govology (the "clean SAM.gov" cohort)

**What they are:** Cleaner SAM.gov mirrors, sometimes with state coverage. ~$50-200/mo.

**What they do well:** Lower price than GovWin/BloombergGov; some have decent state coverage.

**Where they fail the reader:**
1. **No real scoring.** They re-skin SAM.gov, sometimes filter, sometimes tag. None implement a tenant-specific bid-readiness score.
2. **NAICS-only search.** No CPV cross-walk for international.
3. **No contracting-officer history graph.** "Have I bid against this CO before" is unanswerable inside the product.
4. **Inconsistent dedup.** Boamp and TED routinely list the same notice; these products show both.
5. **No EU coverage.** Almost universally.

**Root cause:** These products are price-competitive against GovWin but **functionally a re-skin of the source data**. They don't invest in cross-walks, scoring models, or notification architecture because that's expensive engineering for a $200/mo customer. The unit economics force a feature plateau.

## Alternative 5 — TED (Tenders Electronic Daily — the EU portal)

**What it is:** The EU's official public-procurement portal. Free.

**What it does well:** Source-of-record for EU public procurement. CPV taxonomy is precise.

**Where it fails the reader:**
1. **Volume.** 700+ notices/day across 27 member states. Most of them are mining permits, waste-incineration tenders, and public-works lots irrelevant to a software-services consultancy.
2. **CPV taxonomy is precise but rigid.** The reader's services cross 14 CPV codes; saved searches in TED don't compose well across them.
3. **Body language varies by member state.** A French Boamp notice posted in TED has 80% of the relevant scope in French; the English machine-translation is a one-paragraph stub.
4. **No relevance score, no readiness score.** Same fundamental gap as SAM.gov.
5. **Search interface is brittle.** Pagination resets on filter change, no API for saved searches at the granularity the reader needs.

**Root cause:** TED is EU's official portal — like SAM.gov, **legal source-of-record is its job**, triage is not. Triage is a third-party-product opportunity by design.

## Alternative 6 — Saved-search-on-LinkedIn / "I'll just network"

**What it is:** The reader's fallback — they ask a peer in the NCMA Slack, or they wait for a sub-prime opportunity to come through their network.

**What it does well:** Sometimes surfaces real opportunities; preserves relationship-density.

**Where it fails the reader:**
1. **Sample size.** Their network sees ~2% of the relevant lots in any given week.
2. **Latency.** A peer's "I saw this lot" message arrives 1-3 days after posting.
3. **Bias.** The lots that come through the network are the lots their network is already chasing.
4. **No daily rhythm.** A network-dependent BD function can't sustain a daily triage cadence.

**Root cause:** Networks are **lossy and selection-biased**. They are a complement to a triage system, not a substitute.

## Alternative 7 — Build it yourself

**What it is:** The reader's senior BD lead has, more than once, asked the analyst to write a Python script that polls SAM.gov and emails matches.

**What it does well:** Initial velocity. The first three weeks feel productive.

**Where it fails the reader:**
1. **Scope creep.** Adding TED, then state portals, then dedup, then a scoring model, then notification — three months in, they have built half a Brassmark with the duct-tape.
2. **Maintenance burden.** Every register changes its API or HTML structure 1-3 times a year. The analyst is now an unwilling SRE.
3. **No NAICS/CPV cross-walk.** They never get to it because the basic plumbing already eats the time.
4. **No contracting-officer history.** Same reason.
5. **Reads as a personal project on the analyst's GitHub.** Eventually they leave; the script dies.

**Root cause:** This is a **shared-infrastructure problem**, not a tenant-specific one. The economically rational move is to subscribe to someone who maintains the 80 source adapters and the cross-walk tables — and own the *profile* (NAICS, CPV, regions, set-asides, knock-out terms) which is the genuinely tenant-specific surface.

---

## What every alternative shares (the meta-failure)

Every alternative either:
- Owns the data but refuses to triage (SAM.gov, TED).
- Triages but for the wrong audience (GovWin for enterprise BD analysts, BloombergGov for policy folks).
- Triages cheaply by re-skinning the source data without scoring (BidPrime, GovTribe).
- Doesn't scale (network, DIY).

The unmet need is a **tenant-specific bid-readiness score** layered on **broad procurement-register coverage** with **real-time push** at a **price point that fits a $5-50M-ARR services firm**. That price band is structurally underserved because:
- Enterprise vendors price up.
- SaaS-mirrors price down without investing in the scoring engine.
- The official portals refuse to triage.

Brassmark sits in that price band by design.
