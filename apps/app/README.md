# apps/app — Brassmark dashboard (deferred to Wave 3)

This directory is the planned home of the **Brassmark dashboard** — the SaaS surface where a tenant builds their NAICS / CPV / region / keyword profile, reviews their match queue, and manages billing.

## Wave 2 status — empty by design

The Wave 2 deliverable in this repo is the marketing landing at [`/apps/landing`](../landing) plus the NOWPayments-wired pricing page. The dashboard is **deferred to Wave 3+**.

This is intentional and was approved at the Wave 2 batch dispatch. Shipping a half-done dashboard would have been worse than shipping no dashboard.

## Wave 3 plan — fork wasp-lang/open-saas

When Wave 3 starts, this directory is the target for a fork of the [wasp-lang/open-saas](https://github.com/wasp-lang/open-saas) template. The plan:

1. `cd apps/app` and run the open-saas template generator.
2. Strip out the marketing landing that ships with the open-saas template (we already have one one directory up).
3. Replace the open-saas demo app's domain model with the Brassmark domain:
   - **`Tenant`** — id, name, primary contact, plan tier, region, status, created_at.
   - **`Profile`** — id, tenant_id, NAICS[], CPV[], regions[], set_aside_flags[], keyword_set, dollar_band_min, dollar_band_max, score_threshold.
   - **`TenderRecord`** — id, source, notice_id, agency, region, due_date, posted_at, NAICS[], CPV[], set_aside[], dollar_band, body, attachments[], contracting_officer.
   - **`Match`** — id, tenant_id, profile_id, tender_record_id, relevance_score, readiness_score, composite_score, signals[], routed_to[], routed_at.
   - **`User`** — open-saas baseline (email, oauth, password reset).
4. Wire **auth**: open-saas defaults to email magic link + Google SSO; we keep both. Federal customers may need SAML — defer.
5. Wire **billing**: keep the existing landing-side NOWPayments hosted invoice flow as the upgrade rail; the dashboard surfaces the tenant's current plan, next renewal date, and a `Manage subscription` button that opens the NOWPayments customer portal (when the customer-portal feature is enabled on the NOWPayments account).
6. Wire **routes**: `/queue` (match queue, default landing after login), `/profile` (NAICS/CPV/region builder), `/billing`, `/settings`.

Why open-saas:
- Wasp's auth + email magic-link is exactly what we need for federal-cleared customers.
- Prisma owns the `TenderRecord` table cleanly.
- The Wasp router maps directly to the four routes we need.

## What this directory does NOT contain in Wave 2

- No source files (the Wasp template will create them in Wave 3).
- No `package.json` (Wasp manages its own).
- No `prisma/` schema (Wave 3 introduces it).
- No demo deployment.

The presence of this README + the `.gitkeep` is intentional — it preserves the directory in `git` and documents the plan for the reviewer.

## Reading order

1. `/DESIGN.md` at the repo root — canonical design + style guide.
2. `/docs/02-architecture.md` — the full system design including the ingestion / scoring / notification pipeline that lives in `apps/api/` (also Wave 3+).
3. `/docs/07-sales-strategy.md` — pricing tiers (Single $499 / Multi $1,490 / Federal-Plus $4,990) which the dashboard's billing surface will honour.
4. `https://github.com/wasp-lang/open-saas` — the template to fork.
