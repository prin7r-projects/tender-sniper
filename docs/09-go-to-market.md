# 09 — Go-to-Market — 90-day plan

A 13-week plan from launch (T-0 = the day `tender-sniper.prin7r.com` returns HTTP/2 200) through the first paid logos and the first renewal cycle.

The plan is calibrated to a 1-FTE founder + a 0.5-FTE engineer + a 0.25-FTE designer. If headcount changes, the cadence below scales but the sequencing does not.

---

## Phase 1 — Launch + early-signal (Week 1-4)

### Week 1 — Soft launch + audience seeding
- **Day 1**: Landing live, Notion opportunity updated, this repo public.
- **Day 2**: Pin the Brassmark Single-region tier as a self-serve checkout. Run one fixture invoice through NOWPayments to verify end-to-end. **Non-negotiable**: do not ship until the unpaid-invoice test passes.
- **Day 3**: Soft-share in 3 communities — NCMA Slack, BD Squared Slack, `r/govcon`. **No** website link in the first share. Lead with the bid-readiness scoring model PDF.
- **Day 4**: Direct email to a hand-picked list of 12 capture managers in our personal networks. Subject line: *"Replaced my SAM.gov ritual — would love your read."*
- **Day 5**: First op-ed draft — *"The 11.4% problem with auto-triage."* Submit to FedScoop.
- **Day 7**: Internal review: any signups? feedback? bug-report? Triage and patch.

### Week 2 — Content + outbound rhythm
- 1 long-form post on `tender-sniper.prin7r.com/journal`: *"How the readiness score's 7 signals are weighted, and why."*
- 30 LinkedIn Sales Navigator direct messages to capture managers in the ICP NAICS bands.
- 5 NCMA Slack helpful replies, 0 product pitches.
- **Goal**: 1 paid logo at Single tier or 1 demo call booked.

### Week 3 — Federal-Plus named-account outreach
- Compile the named-account list (~80 mid-market US federal SDVOSB / 8(a) / WOSB / HUBZone with $5-50M revenue + active capture function).
- Outbound sequence v1: LinkedIn DM (week 3) → personalized email (week 3) → second email with the readiness-score PDF (week 4).
- 1 long-form post: *"Source-register profile: Texas SmartBuy — what it covers, what it lags, when it disagrees with SAM.gov."*

### Week 4 — Evaluate Phase-1 signal
- Did we get 2-5 paid Single-region logos? (Target: 3.)
- Did we get 3-7 demo calls booked for Multi or Federal-Plus? (Target: 5.)
- Did the FedScoop op-ed land? (Target: yes — it's the earned-mention turnstile.)
- If all three are below target, **diagnose channel** before scaling spend. If two of three are at target, proceed to Phase 2.

---

## Phase 2 — Scale outbound + earn first earned-PR mention (Week 5-9)

### Week 5 — Outbound at scale
- Sales Navigator outbound expands to 100 contacts/wk.
- 1 long-form post per week.
- 1 sponsored placement in FedScoop daily (week 6 specifically, to coincide with the op-ed running).
- 1 NCMA Slack ask-me-anything (asynchronous; founder posts a long answer to a recent procurement-pro pain in `#bd-tools-discussion`).

### Week 6 — Op-ed lands; watch CAC
- The FedScoop op-ed runs week 6. Watch CAC drop 30-40% during the 2-week earned-attention window.
- Follow up directly with every high-fit prospect who clicked through from FedScoop.

### Week 7 — First conference booth
- GovEvents booth at a regional Federal Acquisition / IT-modernization summit. Hand out the readiness-score PDF and the source-registers profile zine.
- Goal: 30 in-booth conversations, 5 demo calls booked at the booth.

### Week 8 — EU expansion content
- 1 long-form post: *"CPV semantics fail mid-market consulting firms — a cross-walk and how to use it."*
- 5 LinkedIn DMs to CEPS Frankfurt working-group members.
- Pitch a CEPS speakership for Q4.

### Week 9 — Evaluate Phase-2 signal
- Target: 8-12 paid logos cumulative across tiers.
- Target: $25-40k MRR.
- Target: 1 named-account Federal-Plus demo with verbal commitment.

---

## Phase 3 — Renewals + double-down (Week 10-13)

### Week 10 — First Single-region renewal cycle
- The week-1 paid Single-region logos hit their first renewal decision. Send the usage-summary email — the renewal artifact.
- Goal: 100% retention of the first cohort. (Realistic floor: 80%.)

### Week 11 — Federal-Plus contract closing
- The named-account Federal-Plus prospect from Phase 2 closes. Annual prepay, $59,880.
- Onboarding call (90 min, profile-build, in-house engineer + Brassmark engineer).

### Week 12 — Channel saturation review
- Run the Phase 1+2 CAC numbers per channel. Where is CAC rising 30%+ above its phase-1 baseline? Ratchet that channel down.
- Where is CAC stable and LTV:CAC > 4:1? Double down.

### Week 13 — 90-day retro + Phase 4 plan
- Document the 90-day retro in a public post on `journal/`. (The post itself is GTM.)
- Plan Phase 4 (Wave 3 build kickoff, EU push, FedRAMP discovery).

---

## Launch sequence (the first 72 hours, hour by hour)

**Day 1, T-0 (Wednesday morning, US Eastern):**
- 06:00 — Confirm `curl -sI https://tender-sniper.prin7r.com` returns 200.
- 06:15 — Confirm one fixture NOWPayments unpaid invoice creation works (with `NOWPAYMENTS_API_KEY` provisioned in `/opt/prin7r-deploys/tender-sniper/.env`).
- 07:00 — Update Notion opportunity (already done by build agent; verify Source URL + Status Notes).
- 07:30 — Post in NCMA Slack `#tools-discussion`: a single, useful share of the readiness-score PDF.
- 08:00 — Email the 12-person personal-network list.
- 09:00 — LinkedIn post (founder-owned account): the headline + the live-alert-ticker static screenshot. *No* paid promotion of the post.
- 11:00 — Submit FedScoop op-ed.
- 14:00 — Reply to inbound. Triage and respond within 90 min on the first day; fall back to 4 hours after.

**Day 2:**
- 07:00 — Reply to anyone who pinged from yesterday.
- 09:00 — First weekly long-form post on `journal/`.
- 14:00 — First batch of 30 Sales Navigator DMs.

**Day 3:**
- 07:00 — Triage the inbound.
- 10:00 — Send the second email of the personal-network list (the *"thoughts so far?"* follow-up to anyone who didn't reply on Day 1).
- 14:00 — Schedule a 30-min discovery call with anyone who pinged but isn't ready to subscribe.

**Days 4-7:**
- Sustain the rhythm. Patch any bugs surfaced by the early inbound.

---

## Risk register

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| FedScoop op-ed doesn't land | Medium | High | Have backup placements: FCW (Federal Computer Week), Federal News Network. The op-ed is the earned-attention turnstile; have 3 publishers in queue. |
| NOWPayments fails on first paid attempt | Low | High | Verified end-to-end before launch. Fallback CTA on the page is `mailto:desk@prin7r.com` for the customer to start a manual invoice. |
| Direct outbound burns the sender domain | Medium | Medium | Subdomain-isolate the outbound rail (use `desk@send.prin7r.com`); cap volume at 30/wk per sender; never use templates without per-prospect personalization. |
| The score is wrong on a high-profile lot, customer notices | Medium | High | Score is auditable in product. Publish the 7-signal model. Treat any *"this score is wrong"* feedback as a bug, refund prorated, refine the model. |
| Federal-Plus named-account close cycle is 6+ months instead of 8-12 weeks | Medium | Medium | Don't pin Phase 3 revenue on the Federal-Plus close. The Phase 3 floor is Single + Multi only. |
| GovWin or BloombergGov launches a competitor "morning triage" feature in Q3 | Low | High | We have the price-and-audience advantage; their existing customers' renewals are 12-month. Stay focused on the $5-50M ARR mid-market they don't optimize for. |
| EU coverage requires more localization than the Wave-2 design assumes | Medium | Medium | Defer real EU GTM to Phase 4 if the Wave 3 build's localization isn't ready. Marsha (US persona) carries Phase 1-3 alone. |

---

## Retention loop (post-90-day)

The retention machine is the **monthly usage-summary email**:

> *"In the last 30 days, Brassmark scored **142 lots** above your threshold. You forwarded **28** to your capture team. Your firm submitted **6 proposals** out of those forwarded. **3 are pending award decision**, **1 was won** (CMS-2024-OASIS-RFP-7831, $1.34M ceiling). The win:bid:forward ratio at 1:6:28 is in line with your sector benchmark of 1:5-1:8."*

The email is the renewal artifact. The capture manager forwards it to ownership; ownership signs off on the renewal without a sales conversation.

---

## Phase 4+ (post-90-day teaser)

These belong in a future doc but are mentioned for orientation:
- **Wave 3** (months 4-6): the `apps/app/` open-saas fork. Real auth, real profile builder, real queue dashboard.
- **EU localization** (months 4-9): real CEPS speakership, real Boamp/AMEDA/PLACE adapter battle-test.
- **FedRAMP discovery** (months 7-12): only if 2+ Federal-Plus customers ask for it explicitly.
- **Channel partnerships**: SDVOSB associations, NCMA, FSP Acquisition Excellence — co-marketed bundles.
