# 11 — User Stories and Scenarios

> Implementation contract for engineers building Brassmark beyond the Wave 2 landing. Every feature in [`12-technical-specification.md`](12-technical-specification.md) traces back to one or more stories below; every API endpoint serves one or more scenarios. If you are about to write a route, screen, or worker that does not appear here, talk to product before you code.

---

## 1. Personas summary

Full deep-dive in [`05-audience-profile.md`](05-audience-profile.md). One-paragraph each, here so a reader of this doc does not have to round-trip.

- **Marsha Okafor — Capture Manager (US federal SDVOSB).** 38, six years in capture, runs the federal-civilian pipeline at an 80-person SDVOSB doing IT modernization. Her morning is 70% SAM.gov triage; she wants it inverted. Buys Federal-Plus on her own discretionary budget when the math checks out. Reads NCMA Slack, FedScoop, BD Squared. Trigger to switch: lost a winnable lot to slow triage, or a peer praised a tool in NCMA Slack.

- **Dieter Ramani — EU Tender Lead (mid-market consulting, Frankfurt).** 31, three years in role, runs the public-sector pipeline at a 600-person consulting firm. Daily TED + Boamp + AMEDA + PLACE + Contracts Finder + Doffin + Bund DE + vergabe.bayern + e-prior surface-scan; currently 95 minutes a morning. Buys Multi-region on Partner sign-off (≤€3k/mo discretionary). Reads CEPS Frankfurt working group, LinkedIn EU public-procurement tag. Trigger to switch: late to the partner standup with the *"three to chase"* list.

- **Anti-personas (we refuse them at the door).** Two-person consulting boutiques bidding 2-3 federal RFPs/yr, lobbying / advocacy firms, construction-only firms, one-FTE veteran shops without a real capture function. The FAQ refuses them in plain English; the pricing has no tier under $499 to keep them out.

The personas are real tenants, not founder-LP slides. Every story below names the persona and survives the question *"would Marsha or Dieter actually do this?"*.

---

## 2. Primary user stories

10 stories, in priority order. Format: `As a <persona>, I want to <action>, so that <outcome>`. Each story carries the API surfaces and screens that satisfy it (full schema in doc 12).

### S-01 — Self-serve checkout from the landing
**As** an unsigned-in capture manager (Marsha) who just read the FAQ,
**I want to** click `See pricing → Subscribe` on the Single / Multi / Federal-Plus tier and complete the NOWPayments hosted invoice,
**so that** my tenant is provisioned before I close the tab.

- Touches: landing `/`, `POST /api/checkout/nowpayments`, NOWPayments hosted invoice, `POST /api/webhooks/nowpayments` (IPN).
- Already shipped in Wave 2: checkout route, invoice creation, IPN signature verification.
- Wave 3 gap: tenant-creation handler on a verified `paid=true` IPN.

### S-02 — Build my profile (NAICS / CPV / region / set-asides / keywords / dollar bands)
**As** a newly-paid tenant,
**I want to** enter my NAICS codes (multi-select), CPV codes (multi-select), regions (federal, state-by-state, EU member-by-member), set-aside flags (SDVOSB / WOSB / 8(a) / HUBZone), keyword set, dollar-band floor + ceiling, and "knock-out" terms (FedRAMP, IL5, ITAR, TS/SCI),
**so that** the scoring engine has the inputs it needs to filter the global feed down to my shop's lots.

- Touches: `apps/app` `/profile` route (Wave 3), `POST /v1/profiles`, `PATCH /v1/profiles/:id`, the NAICS / CPV reference tables.
- Edge case: a tenant uploads a CSV of past-performance contracts (Multi+ tiers) which seed signal #3 of the readiness model.

### S-03 — Receive a daily digest at 6:00 local
**As** Marsha,
**I want to** receive a single email at 06:00 ET each morning with every lot above my score threshold (default 0.62), grouped by federal / state / international, sorted by readiness,
**so that** I open one email instead of opening SAM.gov.

- Touches: `digest_worker`, Resend transactional API, per-tenant `local_timezone` setting, `GET /v1/digests/preview` (in-app preview).
- Maximum body: top 50 lots per tenant per digest. Overflow surfaced with a "+N more in queue" footer.

### S-04 — Receive an instant Slack push for high-priority lots
**As** Marsha,
**I want to** get a Slack message in `#bd-incoming` within 60 seconds of any lot scoring `relevance × readiness ≥ 0.85` against my profile,
**so that** my analysts see the highest-priority lots without me forwarding the digest.

- Touches: `notify_worker`, Slack incoming webhook (per-tenant), `POST /v1/integrations/slack`, the priority-pill rendering on the alert payload.
- Target latency: p95 < 60s from source-poll completion to Slack delivery.

### S-05 — Triage the queue from a single dashboard
**As** Marsha mid-morning,
**I want to** open the Brassmark queue, see every above-threshold lot with the 7-signal readiness breakdown visible, and mark each `bid` / `no-bid` / `analyst-review`,
**so that** I have an auditable bid/no-bid trail to defend upward at the 14:00 review.

- Touches: `apps/app` `/queue` route (Wave 3), `GET /v1/lots`, `PATCH /v1/lots/:id` (decision field), `GET /v1/lots/:id` (full body + attachments + score breakdown).

### S-06 — Override a score and refine the model
**As** Marsha when she disagrees with a score,
**I want to** click "override → too low" or "override → too high" with a one-line reason,
**so that** the model treats the override as ground truth and re-weights similar future lots for my tenant.

- Touches: `POST /v1/lots/:id/score-override`, `tenant_score_calibration` table, the per-tenant scoring offset that ships in the Wave 3 scorer.

### S-07 — Forward a lot to my analyst, in one click
**As** Marsha at 06:35 ET,
**I want to** click "Forward → analyst@firm.com → with note" on a lot, and have the analyst receive a Brassmark email with the full body, attachments, and score breakdown,
**so that** the analyst can build the capture file before the bid/no-bid call without me copy-pasting.

- Touches: `POST /v1/lots/:id/forward`, Resend transactional, the `forwards` table.

### S-08 — Push lots to my custom capture tool via webhook
**As** Dieter (Multi tier) running an internal capture queue in Notion,
**I want to** configure `https://my-firm.com/brassmark-webhook` as my outbound webhook, with HMAC signing,
**so that** every above-threshold lot lands in my own system without me writing the integration myself.

- Touches: `POST /v1/integrations/webhook`, `notify_worker` (webhook channel), HMAC-SHA256 signing of the outbound JSON.
- Webhook payload contract is canonical (versioned `v1`); breaking changes require `v2` namespace.

### S-09 — Import my SAM.gov saved searches as a starting profile
**As** Marsha on day-one of using Brassmark,
**I want to** paste my SAM.gov saved-search URL or upload the export,
**so that** my profile is 80% pre-filled and I don't re-enter NAICS codes I already have.

- Touches: `POST /v1/profiles/import-sam`, the SAM.gov saved-search parser (uses SAM.gov's public Opportunities API).

### S-10 — Quarterly business review (Federal-Plus only)
**As** a Federal-Plus tenant,
**I want to** receive a quarterly usage summary (lots scored, lots forwarded, decisions made, win-rate where the tenant labels wins) and a 60-min QBR call with Brassmark's Capture Lead,
**so that** I have a renewal artifact I can show ownership.

- Touches: `qbr_worker` (cron, monthly aggregation), `GET /v1/reports/quarterly`, the manual call scheduling (Wave 3 — Cal.com link emailed monthly).

---

## 3. Main scenarios (happy paths)

Five narratives covering the core product loop. Each has a trigger, numbered steps, success criteria, frontend touch-points, backend touch-points.

### Scenario A — First-time tenant onboarding (Marsha, Federal-Plus)

**Trigger.** Marsha clicked through from a FedScoop article quoting Brassmark's bid-readiness model. She has read the landing, opened the FAQ, and is now on the pricing card.

**Steps.**
1. **Marsha clicks `Subscribe to Federal-Plus`** on the pricing card.
2. The browser POSTs `{plan: "federal"}` to `/api/checkout/nowpayments`.
3. Server hits NOWPayments `/v1/invoice` with a `$4990` order, NAICS-aware order description, IPN callback set to `https://tender-sniper.prin7r.com/api/webhooks/nowpayments`.
4. NOWPayments returns `{ id, invoice_url }`. Server returns `{ invoice_url, mode: "live" }`.
5. Browser redirects to NOWPayments hosted invoice. Marsha pays USDT $4,990 from her firm's vendor wallet.
6. NOWPayments delivers an IPN POST to `/api/webhooks/nowpayments` with `payment_status: "finished"` and an HMAC-SHA512 signature.
7. The webhook handler verifies the signature against `NOWPAYMENTS_IPN_SECRET`, confirms `paid=true`, looks up the order_id, **creates the tenant** with the inferred plan = `federal`, and emits `tenant.provisioned` to the magic-link mailer.
8. Resend sends Marsha a magic-link to `desk+marsha@firm.com`. She clicks → `/auth/callback?token=...` → session is set → she lands on `/profile`.
9. Marsha walks the profile builder: NAICS (541512, 541511, 541519), CPV (none — federal), regions (`federal:all`, `state:VA`, `state:DC`, `state:MD`), set-asides (SDVOSB), keyword set (`modernization, FedRAMP-Moderate, civilian, IT services`), dollar-band floor `$100k`, ceiling `$25M`, knock-outs (`TS/SCI`).
10. Profile saved. Server enqueues `backfill_match` job — replays the last 14 days of TenderRecord against her profile so she sees a populated queue immediately.

**Success criteria.**
- Tenant row exists in DB with `plan=federal`, `created_at` set, `magic_link_sent_at` set.
- Profile row exists with all 8 fields populated and validated.
- Queue page renders ≥1 above-threshold lot inside 90s of profile save (backfill complete).
- Marsha gets a "welcome — you're scheduled for white-glove onboarding next Tuesday" email automatically.

**Frontend touch-points.** Landing `/`, NOWPayments hosted invoice (off-domain), `/auth/callback`, `/profile` (multi-step form), `/queue` (empty → populated).

**Backend touch-points.** `POST /api/checkout/nowpayments`, NOWPayments REST, `POST /api/webhooks/nowpayments`, magic-link mailer (Resend), `POST /v1/profiles`, `backfill_match` worker, scoring engine, queue API.

---

### Scenario B — Daily digest delivery (Dieter, Multi-region, EU)

**Trigger.** Cron tick at 05:55 CET. Dieter's `local_timezone = Europe/Berlin`, `digest_send_at = "06:00"`.

**Steps.**
1. `digest_worker` wakes up, scans tenants whose `local_now ∈ [05:55, 06:00]` window AND who have not yet been sent today's digest.
2. For each tenant, query `GET /v1/lots?since=24h&min_score=tenant.threshold&decided=false` ordered by readiness desc, capped at 50.
3. Group by region tier (federal / state / EU / UK / multilateral), sort within each group by readiness desc.
4. Render the email template (Source Serif 4 display headline, Geist body, Geist Mono for codes — same DNA as the landing).
5. POST to Resend `/emails` with the rendered HTML + plaintext fallback. Attach a `List-Unsubscribe` header.
6. On success, write `digests` row: `tenant_id, sent_at, lots_count, top_score, message_id`.

**Success criteria.**
- Email lands in Dieter's inbox within 5 minutes of cron tick.
- Subject line: `[Brassmark] 42 EU hits · top score 0.84 · 06 May 2026`.
- Body header shows tenant name, score threshold, and a "view in Brassmark" deep-link.
- Plaintext fallback is readable on a terminal mail client (Dieter checks on his phone first).
- `digests` row written; idempotent on a re-tick (we don't double-send).

**Frontend touch-points.** Email render template (`apps/app/emails/digest.tsx`), the Brassmark deep-link → `/queue?digest=<id>`.

**Backend touch-points.** `digest_worker` (cron), `lots` query (read), Resend API, `digests` table, `tenant.local_timezone` field.

---

### Scenario C — High-priority lot triggers an instant Slack push (Marsha, mid-morning)

**Trigger.** Source adapter `sam_gov.ts` polls SAM.gov at 11:32 ET, finds a new VA modernization lot, normalizes it, scores it. For Marsha's tenant: `relevance = 0.93, readiness = 0.92, composite = 0.86`. Marsha's threshold is `0.55`; her instant-push threshold is `0.85`.

**Steps.**
1. Source adapter writes a TenderRecord row.
2. Score engine computes `(0.93, 0.92)` against Marsha's profile.
3. Composite score `0.86 ≥ 0.85` → enqueue to `notify_worker` with channel `slack`.
4. `notify_worker` reads Marsha's `tenant_integrations` row → finds `slack_webhook_url = https://hooks.slack.com/services/...`.
5. POST to Slack incoming webhook with a Block-Kit message: `:rotating_light: PRIORITY 0.86 — VA · COTR Pool 2 · IT Modernization · NAICS 541512 · due in 17 days · brass-mark.io/lots/<id>`.
6. Slack responds 200. `notify_worker` writes `notifications` row: `tenant_id, lot_id, channel=slack, sent_at, status=delivered`.

**Success criteria.**
- Slack message visible in `#bd-incoming` within 60s p95 of source-poll completion.
- Block-Kit attachment renders the priority-pill (red), the readiness score, the 7 signal mini-bars (or a one-line summary on mobile Slack), and the deep-link.
- `notifications` row idempotent: a re-tick doesn't re-send. The de-dup key is `(tenant_id, lot_id, channel)`.

**Frontend touch-points.** Slack message render (in `apps/api/notify/slack.ts`).

**Backend touch-points.** Source adapter, score engine, `notify_worker`, Slack API, `notifications` table.

---

### Scenario D — Capture manager triages the morning queue and forwards two lots

**Trigger.** Marsha has read her digest. She clicks the "View in Brassmark" deep-link. It's 06:42 ET.

**Steps.**
1. Browser navigates to `/queue?digest=<id>`. Session-cookie is present → `GET /v1/lots?digest=<id>` returns the same 50 lots in the digest.
2. The queue UI renders a tabular dossier: each row shows `priority pill (if ≥0.85)`, NAICS, agency, region, due-in-N-days, dollar band, composite score, 7-signal mini-bars on hover.
3. Marsha clicks the top-scoring lot. The detail panel opens: full body (markdown rendered), attachments table, contracting officer history (if any), score breakdown with each of the 7 signals expanded with the calculation.
4. Marsha clicks `Forward → analyst@firm.com → "score is already done, just build capture"`. Browser POSTs `/v1/lots/:id/forward { to: "analyst@firm.com", note: "..." }`.
5. Backend writes `forwards` row, then enqueues `forward_mailer` which sends Resend transactional with the full lot dossier.
6. Marsha clicks `bid` decision on lots 1, 3, 7; `no-bid` on lots 2, 4, 5, 6, 8-12; `analyst-review` on lots 13-25.
7. Each click POSTs `/v1/lots/:id { decision: "bid" | "no-bid" | "analyst-review", reason: optional }`.
8. The decisions feed the QBR aggregation worker (Federal-Plus only).

**Success criteria.**
- Queue page paints in p95 < 800ms.
- The forward email lands in the analyst's inbox in under 30s, with the full body preserved (formatting intact, attachments inline).
- Decisions are persisted; reload of `/queue` shows the same decision states.
- The forwarded email subject starts with `[Brassmark · forwarded by Marsha] VA · COTR Pool 2 ...` so the analyst can filter.

**Frontend touch-points.** `/queue` route, lot detail panel, forward modal.

**Backend touch-points.** `GET /v1/lots`, `GET /v1/lots/:id`, `POST /v1/lots/:id/forward`, `PATCH /v1/lots/:id`, `forwards` table, Resend.

---

### Scenario E — Outbound webhook delivers a lot to a tenant's own capture tool

**Trigger.** Same as Scenario C — a high-priority lot scores against Dieter's tenant. Dieter has configured an outbound webhook (Multi tier) at `https://my-firm.com/brassmark-webhook`.

**Steps.**
1. Source-adapter → score → `notify_worker` (channel `webhook`).
2. `notify_worker` builds the canonical v1 payload: `{ event: "lot.match", lot: {...full TenderRecord + score breakdown...}, tenant_id, ts }`.
3. Sign the payload: `signature = hmac_sha256(payload_body, tenant.webhook_secret)`. Send `X-Brassmark-Signature: sha256=<hex>` header.
4. POST to `https://my-firm.com/brassmark-webhook` with a 10s timeout.
5. On 2xx → write `notifications` row, success.
6. On non-2xx or timeout → exponential backoff: 30s, 120s, 600s, 3600s. After 4 failed attempts, write `notifications` row with `status=permanent_failure`, email the tenant admin a "your webhook is down — fix it" notice, and stop trying for this lot.

**Success criteria.**
- Successful webhook delivery: p95 < 90s from source-poll completion.
- Tenant's receiver verifies the signature → 200 → notification persisted.
- Failed webhook: tenant admin is notified after the 4th retry; lot is still visible in-app even if the webhook never delivers.

**Frontend touch-points.** Settings → Integrations → Webhook URL + secret + test-fire button.

**Backend touch-points.** `notify_worker`, HMAC signer, retry queue, `notifications` table, admin-notice mailer.

---

## 4. Edge case scenarios

Six edge cases. Each names what fails, what the system does, and how the user experiences it.

### EC-01 — Source register schema change (SAM.gov adds a new field)

**Trigger.** SAM.gov changes the OpportunityV2 response shape on a Tuesday at 14:00 ET — a new optional field appears, an existing field becomes nullable.

**Behaviour.**
- The adapter's TS type assertion fails on parse → exception caught by the source-adapter wrapper → row is logged to `adapter_errors` table with the raw JSON, and the polling continues for the rest of the page.
- An on-call alert fires when `adapter_errors` count for a single source crosses 10 in 5 minutes.
- The TenderRecord for that opportunity is **not written** until the adapter is patched. Tenants who would have matched this opportunity see it appear retroactively after the patch deploys (a `replay` job covers the gap).

**User-visible.** A delayed alert (an extra 15-60 minutes), with a "data freshness lagged on `sam.gov` for 17 minutes" footnote on the next digest if the gap was material.

### EC-02 — NOWPayments hosted invoice expires before the customer pays

**Trigger.** Marsha clicks `Subscribe`, NOWPayments creates an invoice with a 1-hour expiry, she abandons the tab, returns 3 hours later, hits "pay" — NOWPayments rejects it.

**Behaviour.**
- NOWPayments shows an "invoice expired" page on its hosted UI, with a "create a new invoice" CTA back to `https://tender-sniper.prin7r.com/?expired=<order_id>`.
- The landing detects the `?expired=` param, shows a one-line yellow banner: *"Your previous invoice expired. Click any tier to start a fresh checkout."* — does not auto-create.
- No tenant is provisioned (no IPN was delivered, the webhook is never hit).

**User-visible.** Friendly recovery, no double-charge risk.

### EC-03 — Tenant configures conflicting NAICS / region (no possible matches)

**Trigger.** Marsha enters NAICS = `541512` but accidentally checks region = `EU only`. There is no SAM.gov source for EU; her queue stays empty.

**Behaviour.**
- The profile builder's "preview match volume" widget runs a dry-run against the last 7 days of TenderRecord and shows: *"Estimated 0 matches in the last 7 days. This profile is unlikely to surface lots. Suggested fixes: add `federal:all` to your region set, or remove `EU` if you don't bid EU."*
- Profile is allowed to save anyway (user might be intentionally testing).
- The first daily digest, if empty, includes a "you may want to widen your profile" line.

**User-visible.** Caught at the configuration step; if not, caught again in the empty digest.

### EC-04 — Slack workspace revokes the incoming webhook

**Trigger.** Marsha's IT admin rotates the Slack webhook URL without telling her. Brassmark's next push gets a 404 from `https://hooks.slack.com/services/...`.

**Behaviour.**
- Same retry policy as EC for outbound webhook (4 attempts, exp backoff).
- After permanent failure, the tenant admin gets a Resend email: *"Slack push failed for `#bd-incoming`. Reconfigure at brass-mark.io/settings/integrations."*
- The lot is still in the queue (loss of the push channel doesn't lose the data).

**User-visible.** Marsha sees the lot in her morning digest the next day even if the instant-push broke; she gets an admin email asking her to reconfigure.

### EC-05 — Score calibration drifts after a tenant overrides 50+ lots

**Trigger.** Dieter overrides 50 lots in 6 weeks — 80% of them as "score too low." His tenant's calibration offset has drifted to `+0.07`.

**Behaviour.**
- The score engine applies the per-tenant offset clamped to `[-0.15, +0.15]`.
- A monthly job audits drift: if the offset is at the cap, the QBR (Federal-Plus) or the next monthly summary email (Multi+) flags it: *"Your tenant calibration is at the +0.15 cap. Consider widening your profile keyword set."*
- Override audit log is preserved indefinitely so we can re-train offline.

**User-visible.** The model "feels" correct because Dieter's offset is included; he gets a flag if the offset is doing too much work.

### EC-06 — Concurrent profile edit (two seats edit at the same time)

**Trigger.** Marsha edits NAICS in tab A; her colleague Sam edits keyword set in tab B. Sam saves first; Marsha saves second.

**Behaviour.**
- The profile API takes an `If-Match: <profile.version>` header (optimistic concurrency). Marsha's request fails with 409 Conflict.
- The frontend shows a yellow toast: *"Sam updated the profile while you were editing. Reload to see the latest."* with a `Reload` button.
- No edit is silently overwritten.

**User-visible.** Marsha sees the conflict, reloads, re-applies her edit. No data loss.

---

## 5. Anti-scenarios (what the product explicitly does NOT do)

Five anti-scenarios. Each names the temptation and the reason we say no.

### AS-01 — *"Brassmark, write our proposal for me."*
We are a triage product. We do not generate proposal language, do not help with capture-file authoring, and do not host SOWs. Tenants forward lots to their own analysts; the analyst's tools (Word, Sharepoint, GovWin's authoring add-on, Salesforce) live entirely outside Brassmark.

### AS-02 — *"Brassmark, tell me the contracting officer's phone number / lobbying intel / agency budget cycle."*
That is BloombergGov / Politico Pro / E&E News territory. We surface *which lots are open* and *how ready you are for them*, not *who to call to influence the program office*. Crossing into lobbying intel is a category mistake and a procurement-ethics red flag.

### AS-03 — *"Brassmark, run a free trial for me."*
We do not run free trials (sales-strategy decision in doc 07). We run a 90-day prorated money-back guarantee on every paid tier. The temptation in the dashboard would be a "trial mode" that gates features — we do not build that gate. Either you're paying or you're on the landing.

### AS-04 — *"Brassmark, let me search SAM.gov from inside your dashboard."*
We are not a SAM.gov skin. The dashboard surfaces *only above-threshold lots scored against your profile* — we do not expose a generic "search the world" UI. If you want to browse SAM, go to SAM. If you want to triage, you stay in Brassmark.

### AS-05 — *"Brassmark, support Construction tenders too."*
NAICS 23-something is a different ecosystem (prevailing-wage attachments, DBE certifications, state-DOT idiosyncrasies). Building a Construction-Plus tier is a separate engineering bet we are not making in Wave 2-3. Construction-only firms see the FAQ refusal on the landing; we don't show construction lots to existing tenants either.

---

## 6. Story-to-spec traceability

Every story above has at least one API endpoint in [`12-technical-specification.md`](12-technical-specification.md) and at least one phase task in [`13-implementation-plan.md`](13-implementation-plan.md). Reviewers should fail any PR that introduces a new route or worker that does not trace back to a story here. New stories require a doc 11 amendment first.

| Story | Primary API | Implementation phase |
|-------|-------------|----------------------|
| S-01 | `POST /api/checkout/nowpayments`, `POST /api/webhooks/nowpayments` | Wave 2 (shipped) + Phase 1 |
| S-02 | `POST /v1/profiles` | Phase 2 |
| S-03 | `digest_worker` cron + `GET /v1/digests/preview` | Phase 4 |
| S-04 | `notify_worker` (slack channel) | Phase 4 |
| S-05 | `GET /v1/lots`, `PATCH /v1/lots/:id` | Phase 3 |
| S-06 | `POST /v1/lots/:id/score-override` | Phase 5 |
| S-07 | `POST /v1/lots/:id/forward` | Phase 4 |
| S-08 | `POST /v1/integrations/webhook` | Phase 4 |
| S-09 | `POST /v1/profiles/import-sam` | Phase 2 |
| S-10 | `qbr_worker` + `GET /v1/reports/quarterly` | Phase 6 |
