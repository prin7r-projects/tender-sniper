# 13 · Implementation plan

> **Hand-off ready.** Read `01`, `02`, `11`, `12` first. Phase 0 (landing + checkout) is COMPLETE.
> Phases 1–6 ship the ingest + scoring + delivery pipeline.
>
> **Repo:** https://github.com/prin7r-projects/tender-sniper
> **Live:** https://tender-sniper.prin7r.com (landing live as Brassmark, dark canvas)
> **Deploy:** storage-contabo `/opt/prin7r-deploys/tender-sniper`
> **Secrets:** NOWPAYMENTS_API_KEY, NOWPAYMENTS_IPN_SECRET, POSTMARK_SERVER_TOKEN,
> SAM_API_KEY, TED_API_KEY, UK_CONTRACTS_API_KEY, per-state and per-EU credentials, DATABASE_URL,
> REDIS_URL.
> **Tone:** Brassmark. Institutional. Vigilant. Senior. Brass-and-graphite. Dark canvas
> #0E1116. See `01-brand-identity.md` §Voice.

## Phase 0 — Wave 2 landing + checkout (DONE)

- ✅ Brassmark brand; dark canvas; Linear-ref styling; NOWPayments invoice flow;
  pre-existing doc 11 (24KB); screenshots in `/docs/screenshots/`.

## Phase 1 — Wasp scaffold + capture profile + Postgres schema

- **Goal.** Subscriber sets a capture profile (NAICS + CPV + keywords + regions + dollar bands).
- **Tasks.**
  1. Wasp scaffold; magic-link auth.
  2. Drizzle migration per `12 §2`.
  3. Profile setup form with NAICS picker (preloaded list of NAICS codes), CPV picker, keyword
     editor with positive/negative buckets.
- **Deps.** Phase 0.
- **Effort.** 150 tool-uses, 7h.
- **DoD.**
  - Marsha can sign up + create a profile in <3 min.

## Phase 2 — SAM.gov + 5 US state portals + EU TED ingestion

- **Goal.** First 7 sources running with 90s poll; deduper; normalizer.
- **Tasks.**
  1. Bun + Hono `apps/api`. Per-source poller scheduled with priority queue.
  2. Normalizer: each source's idiosyncratic schema → `TenderRecord`.
  3. Deduper: `(notice_id, body_hash)` UNIQUE.
  4. Operator console: source health table.
- **Deps.** Phase 1; SAM API key; per-portal credentials.
- **Effort.** 250 tool-uses, 12h.
- **DoD.**
  - 7 sources live; freshness < 5 min p95.
  - Dedup rate < 5%.

## Phase 3 — Scoring engine: NAICS/CPV crosswalk + keyword + 7-signal bid-readiness

- **Goal.** Every tender scored against each profile.
- **Tasks.**
  1. Static NAICS↔CPV crosswalk table.
  2. Keyword matcher with positive/negative weighting.
  3. 7-signal bid-readiness: NAICS match, keyword positive, keyword negative, dollar fit, days
     to due fit, set-aside fit, source quality.
  4. Threshold per profile; only matches above threshold deliver.
- **Deps.** Phase 2.
- **Effort.** 200 tool-uses, 10h.
- **DoD.**
  - Marsha receives only the ~12 fits per week (vs the 1,800 raw hits).
  - Score is deterministic + reproducible.

## Phase 4 — Email + Slack + webhook delivery

- **Goal.** Match queue → 3 channels.
- **Tasks.**
  1. Email worker (Postmark) with bid-readiness summary.
  2. Slack worker (incoming webhook).
  3. Webhook dispatcher with HMAC + retry.
- **Deps.** Phase 3.
- **Effort.** 130 tool-uses, 6h.
- **DoD.**
  - All three channels deliver match within 90s of publish.

## Phase 5 — Coverage expansion (50 states + 8 EU + multilateral)

- **Goal.** Reach 80+ sources with consistent freshness.
- **Tasks.**
  1. Per-source ingestion adapters following Phase 2 pattern.
  2. EU TED structured data adapter; UK Contracts Finder.
  3. World Bank + ADB + IDB.
- **Deps.** Phase 2.
- **Effort.** 300 tool-uses, 14h.
- **DoD.**
  - 80+ sources live.
  - Coverage map page on landing reflects live sources.

## Phase 6 — Production polish + tier billing + ops

- **Goal.** Hit perf budgets; tier billing; ops dashboard.
- **Tasks.**
  1. Tier billing via NOWPayments rebill: Starter / Pro / Enterprise.
  2. Lighthouse pass.
  3. Loki + Grafana + alerts.
  4. Backups + restore drill.
- **Effort.** 150 tool-uses, 7h.
- **DoD.**
  - p95 budgets in `12 §9` met.
  - Restore drill passes.

## Cross-cutting concerns

- **Accessibility:** WCAG AA on dashboard.
- **i18n:** EN-only Wave 2/3.
- **Mobile:** dashboard mobile-readable.
- **Telemetry:** Phase 1 logs; Phase 6 metrics + alerts.

## Risk register

| Risk | Owner | Mitigation |
|---|---|---|
| Source TOS / rate-limit shifts | Eng + Ops | Polite headers + back-off; communicate degraded coverage. |
| NAICS/CPV crosswalk staleness | Eng | Annual refresh; subscriber feedback button on each match. |
| Score drift across markets | Eng | Per-region thresholds; quarterly score audit. |
| Webhook delivery flakes | Eng | HMAC + retry envelope + dashboard. |
| Volume spike on a Monday morning | Ops | Backpressure on match queue; per-tier rate limits. |

## Resume instructions

1. `git clone https://github.com/prin7r-projects/tender-sniper && cd tender-sniper`
2. Read `01`, `02`, `11`, `12`.
3. Pick the next phase.
