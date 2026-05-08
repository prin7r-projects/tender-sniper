import Link from "next/link";
import { AlertTicker } from "./alert-ticker";
import { PricingCta } from "./pricing-cta";

/**
 * [BRASSMARK_LANDING_V2] Wave 2 redesign — dark canvas, Geist, refined ticker.
 * Sources: docs/01-brand-identity.md, docs/08-marketing-strategy.md.
 */

export default function HomePage() {
  return (
    <main className="min-h-[100dvh] text-ink antialiased">
      <Masthead />
      <Hero />
      <Coverage />
      <ScoreExplainer />
      <Pricing />
      <Faq />
      <Footer />
    </main>
  );
}

/* ---------------- Masthead ---------------- */

function Masthead() {
  return (
    <header className="border-b border-[var(--ink-rule)]">
      <div className="mx-auto max-w-prose px-6 md:px-10 py-5 flex items-end justify-between">
        <div className="flex items-baseline gap-4">
          <Logo />
          <span className="hidden md:inline label">Tender Desk · Vol. 01 · 2026</span>
        </div>
        <nav className="flex items-center gap-5 md:gap-9 text-[14px]">
          <Link href="#coverage" className="hidden md:inline text-[var(--ink-2)] hover:text-ink transition-colors">Coverage</Link>
          <Link href="#score" className="hidden sm:inline text-[var(--ink-2)] hover:text-ink transition-colors">The score</Link>
          <Link href="#pricing" className="text-[var(--ink-2)] hover:text-ink transition-colors">Pricing</Link>
          <Link href="#pricing" className="btn">See pricing</Link>
        </nav>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <span className="inline-flex items-center gap-3" aria-label="Brassmark">
      <span aria-hidden className="relative inline-block w-7 h-7 border-[1.5px] border-ink">
        <span className="absolute inset-[6px] bg-brass" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display font-extrabold text-[22px] tracking-tight">Brassmark</span>
        <span className="block w-[100px] h-[1.5px] bg-brass mt-[3px]" />
        <span className="font-mono text-[8.5px] text-[var(--ink-3)] tracking-[0.24em] mt-[3px] uppercase">tender desk</span>
      </span>
    </span>
  );
}

/* ---------------- Hero ---------------- */

function Hero() {
  return (
    <section className="border-b border-[var(--ink-rule)]">
      <div className="mx-auto max-w-prose px-6 md:px-10 pt-20 pb-24 md:pt-24 md:pb-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 reveal-1">
              <span className="pulse-dot" aria-hidden />
              <span className="label">Live feed · SAM.gov · TED · 50 states · UK · 8 EU portals</span>
            </div>

            <h1
              className="reveal-1 mt-7 font-display font-extrabold leading-[0.96] tracking-[-0.022em] text-[44px] md:text-[64px] lg:text-[74px]"
              style={{ textWrap: "balance" }}
            >
              The tender desk a senior bidder keeps open
              <span className="text-brass"> on the second monitor.</span>
            </h1>

            <span className="brass-rule mt-6 block" style={{ width: 140 }} />

            <p
              className="reveal-2 mt-7 max-w-[58ch] text-[17px] md:text-[18.5px] leading-[1.55] text-[var(--ink-2)]"
              style={{ textWrap: "pretty" }}
            >
              Real-time alerts on government RFPs matching your <span className="text-ink font-medium">NAICS + keyword + region</span> profile.
              Scored on a seven-signal bid-readiness model. Federal-poll cycle: 90 seconds.
              <span className="text-ink font-medium"> 80 procurement registers, deduped.</span>
            </p>

            <div className="reveal-3 mt-9 flex flex-wrap gap-3">
              <Link href="#pricing" className="btn">
                See pricing
                <Arrow />
              </Link>
              <Link href="#score" className="btn-ghost">
                How the score works
                <Arrow />
              </Link>
            </div>

            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8 max-w-2xl">
              <Stat n="90s" t="Federal poll cycle" />
              <Stat n="80+" t="Procurement registers" />
              <Stat n="7" t="Signals scored, audited" />
              <Stat n="0.62" t="Default match threshold" sub="Tunable per tier" />
            </div>
          </div>

          <div className="lg:col-span-5 lg:pt-1 space-y-6">
            <AlertTicker />
            <SampleRfpCard />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, t, sub }: { n: string; t: string; sub?: string }) {
  return (
    <div>
      <div className="font-display font-extrabold text-[34px] md:text-[40px] leading-none tabular tracking-[-0.02em]">{n}</div>
      <div className="label mt-2">{t}</div>
      {sub && <div className="text-[var(--ink-3)] text-[12px] mt-1 italic font-display">{sub}</div>}
    </div>
  );
}

function Arrow() {
  return <span aria-hidden className="font-mono text-[14px]">→</span>;
}

/* ---------------- Sample RFP card ---------------- */

function SampleRfpCard() {
  return (
    <article className="rfp-card" aria-labelledby="rfp-sample-heading">
      <span className="corner-mark" aria-hidden />
      <div className="flex items-center justify-between">
        <span className="label">Sample RFP · above threshold</span>
        <span className="priority-pill">Priority 0.91</span>
      </div>

      <h3 id="rfp-sample-heading" className="font-display font-extrabold text-[20px] md:text-[22px] mt-3.5 leading-[1.18] tracking-[-0.012em]">
        Veterans Affairs — IT modernization, COTR Pool 2
      </h3>
      <p className="font-mono text-[11px] text-[var(--ink-3)] mt-1.5 tabular tracking-[0.02em]">
        SAM.gov · 36C10B26R0117 · posted 2026-04-29 06:42:18Z
      </p>

      <dl className="rfp-meta-row mt-5">
        <dt>Agency</dt>
        <dd>Department of Veterans Affairs · Office of Information &amp; Technology</dd>
        <dt>Due</dt>
        <dd>2026-05-27 · 19 days · response window 28d</dd>
        <dt>NAICS</dt>
        <dd>541512 primary · 541519 secondary</dd>
        <dt>CPV</dt>
        <dd>72200000-7 · Software programming and consultancy services</dd>
        <dt>Set-aside</dt>
        <dd>SDVOSB-eligible · 8(a)-eligible</dd>
        <dt>Ceiling</dt>
        <dd><strong>$2.4M – $24.7M</strong> · multiple awards expected</dd>
        <dt>CO</dt>
        <dd>Reginald F. Mendez · 14 prior awards · 4 to SDVOSB primes</dd>
      </dl>

      <p className="label mt-6">Bid-readiness · 4 of 7 signals shown</p>
      <div className="mt-2.5">
        <SignalBar name="Days-to-due fit (14-28d)" pct={94} value={0.18} />
        <SignalBar name="Set-aside compatibility" pct={100} value={0.16} />
        <SignalBar name="Past-performance similarity" pct={86} value={0.14} />
        <SignalBar name="CO history match" pct={78} value={0.11} />
      </div>
      <p className="font-mono text-[11px] text-[var(--ink-3)] mt-4 leading-[1.5]">
        + 3 more (Attachment · Knock-out terms · Dollar-band) → composite <strong className="text-brass">0.91</strong>
      </p>
    </article>
  );
}

function SignalBar({ name, pct, value }: { name: string; pct: number; value: number }) {
  return (
    <div className="signal-bar">
      <span className="name">{name}</span>
      <span className="bar-track">
        <span className="bar-fill" style={{ width: `${pct}%` }} />
      </span>
      <span className="value">{value.toFixed(2)}</span>
    </div>
  );
}

/* ---------------- Coverage (bento taxonomy) ---------------- */

function Coverage() {
  return (
    <section id="coverage" className="border-b border-[var(--ink-rule)] bg-[var(--canvas-2)]/60">
      <div className="mx-auto max-w-prose px-6 md:px-10 py-24 md:py-28">
        <SectionHeader
          kicker="The coverage"
          title="80 procurement registers, in one place."
          subtitle="Federal poll: 90 seconds. State: 5 minutes. International: 15 minutes. Latency from posting to your digest stays under 4min federal, under 18min international."
        />

        <div className="mt-12 coverage-bento">
          <div className="coverage-pane">
            <div className="coverage-pane-head">
              <h3>US Federal</h3>
              <span className="count">1 source</span>
            </div>
            <ul className="coverage-list">
              <li className="coverage-list-item">
                <span className="src">SAM.gov</span>
                <span className="desc">Authoritative federal portal · System for Award Management</span>
              </li>
            </ul>
            <p className="font-mono text-[10.5px] text-[var(--ink-3)] mt-5 leading-[1.55]">
              90s poll · digest latency &lt; 4min from post.
            </p>
          </div>

          <div className="coverage-pane">
            <div className="coverage-pane-head">
              <h3>US State</h3>
              <span className="count">50 sources</span>
            </div>
            <div className="coverage-grid">
              {US_STATES.map((s) => (
                <div className="coverage-cell" key={s.code}>
                  <span className="code">{s.code}</span>
                  <span className="name">{s.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="coverage-pane">
            <div className="coverage-pane-head">
              <h3>International</h3>
              <span className="count">29 sources</span>
            </div>
            <ul className="coverage-list">
              {INTERNATIONAL.map((src) => (
                <li className="coverage-list-item" key={src.code}>
                  <span className="src">{src.code}</span>
                  <span className="desc">{src.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="font-mono text-[11.5px] text-[var(--ink-3)] mt-10 max-w-[68ch] leading-[1.6]">
          Dedup is notice-id-per-source <em>plus</em> body-hash across sources. TED ↔ Boamp ↔ AMEDA double-list ~12% of EU notices; we collapse them. You see one record per notice, not three.
        </p>
      </div>
    </section>
  );
}

const US_STATES: { code: string; name: string }[] = [
  { code: "AL", name: "ServiceAlabama" }, { code: "AK", name: "Online Public Notices" }, { code: "AZ", name: "ProcureAZ" }, { code: "AR", name: "AASIS Vendor" }, { code: "CA", name: "Cal eProcure" }, { code: "CO", name: "BIDS Online" }, { code: "CT", name: "DAS BizNet" }, { code: "DE", name: "MyMarketplace" }, { code: "FL", name: "MyFloridaMarketPlace" }, { code: "GA", name: "GA Procurement Reg." },
  { code: "HI", name: "HIePRO" }, { code: "ID", name: "IPRO eBids" }, { code: "IL", name: "IL Procurement Bull." }, { code: "IN", name: "IDOA Bidders" }, { code: "IA", name: "DAS Targeted Bids" }, { code: "KS", name: "ProcurementKS" }, { code: "KY", name: "eMARS" }, { code: "LA", name: "LaPAC" }, { code: "ME", name: "Maine PWS" }, { code: "MD", name: "eMM Marketplace" },
  { code: "MA", name: "COMMBUYS" }, { code: "MI", name: "SIGMA VSS" }, { code: "MN", name: "SWIFT eBids" }, { code: "MS", name: "MAGIC Vendor" }, { code: "MO", name: "MissouriBUYS" }, { code: "MT", name: "eMACS" }, { code: "NE", name: "NebraskAccess" }, { code: "NV", name: "NV Solicitations" }, { code: "NH", name: "NH Bid System" }, { code: "NJ", name: "NJStart" },
  { code: "NM", name: "NM SunBuy" }, { code: "NY", name: "NY OGS · NYSCR" }, { code: "NC", name: "Interactive Purch." }, { code: "ND", name: "ND PASSPort" }, { code: "OH", name: "OH BCC Buys" }, { code: "OK", name: "OK Solicitations" }, { code: "OR", name: "ORPIN" }, { code: "PA", name: "PA eMarketplace" }, { code: "RI", name: "Ocean State Procure" }, { code: "SC", name: "SCBO" },
  { code: "SD", name: "SD State Bid" }, { code: "TN", name: "Edison Solicit." }, { code: "TX", name: "TX SmartBuy · ESBD" }, { code: "UT", name: "U3P Solicit." }, { code: "VT", name: "VTBuys" }, { code: "VA", name: "eVA · VBO" }, { code: "WA", name: "WA WEBS" }, { code: "WV", name: "WV PURCHASE" }, { code: "WI", name: "VendorNet" }, { code: "WY", name: "WY State Bid Board" },
];

const INTERNATIONAL: { code: string; name: string }[] = [
  { code: "EU TED", name: "Tenders Electronic Daily — all 27 member states" },
  { code: "UK CF", name: "Contracts Finder — central + crown bodies" },
  { code: "UK FTS", name: "Find a Tender — high-value UK procurement" },
  { code: "Boamp (FR)", name: "Bulletin officiel des annonces des marchés publics" },
  { code: "AMEDA (IT)", name: "Bandi e Avvisi — central + regional" },
  { code: "PLACE (ES)", name: "Plataforma de Contratación del Sector Público" },
  { code: "PCS-Public (IE)", name: "eTenders.gov.ie" },
  { code: "Doffin (NO)", name: "Database for offentlige innkjøp" },
  { code: "Bund.de", name: "Bund.de Vergabe — federal Germany" },
  { code: "vergabe.bayern", name: "Bavarian state procurement" },
  { code: "e-prior (BE)", name: "Belgian federal e-procurement" },
  { code: "MERX (CA)", name: "Federal + provincial Canadian procurement" },
  { code: "World Bank", name: "Global Procurement Notices" },
  { code: "ADB", name: "Asian Development Bank · Consulting Services" },
  { code: "IDB", name: "Inter-American Development Bank" },
];

/* ---------------- Score explainer ---------------- */

function ScoreExplainer() {
  return (
    <section id="score" className="border-b border-[var(--ink-rule)]">
      <div className="mx-auto max-w-prose px-6 md:px-10 py-24 md:py-28">
        <SectionHeader
          kicker="The score"
          title="Seven signals. Every score is auditable."
          subtitle="Rules-based, not a black-box ML pipeline. Click any score in your dashboard to see the seven signals it summed. Override any one; the override refines the model for your tenant only."
        />

        <div className="mt-12 grid lg:grid-cols-12 gap-12 lg:gap-14">
          <div className="lg:col-span-7">
            <ol className="space-y-6">
              {SIGNALS.map((s, i) => (
                <li key={s.name} className="grid grid-cols-[44px_1fr_64px] gap-5 items-baseline pb-6 border-b border-[var(--ink-rule)] last:border-b-0">
                  <span className="font-mono text-[12px] text-brass tabular tracking-[0.06em]">{`0.${(i + 1).toString().padStart(2, "0")}`}</span>
                  <div>
                    <h4 className="font-display font-bold text-[18px] leading-tight tracking-[-0.012em]">{s.name}</h4>
                    <p className="text-[14.5px] text-[var(--ink-2)] mt-2 leading-[1.6] max-w-[58ch]">{s.detail}</p>
                  </div>
                  <span className="font-mono text-[12px] text-[var(--ink-3)] tabular text-right">w {s.weight.toFixed(2)}</span>
                </li>
              ))}
            </ol>
          </div>

          <aside className="lg:col-span-5">
            <div className="border border-[var(--ink-rule-2)] bg-[var(--canvas-3)] p-7 md:p-8">
              <h3 className="label">A worked example</h3>
              <p className="font-display text-[18px] leading-[1.45] mt-4 tracking-[-0.01em]">
                <strong>VA · IT modernization, COTR Pool 2.</strong> <span className="text-[var(--ink-3)]">Posted 2026-04-29.</span>
              </p>
              <p className="text-[14.5px] mt-4 text-[var(--ink-2)] leading-[1.6]">
                Relevance: <span className="font-mono tabular text-ink">0.82</span>. NAICS 541512 primary, secondary CPV 72200000-7.
                Set-aside-eligible matches tenant flags. Dollar band $2.4M–$24.7M
                fits tenant ceiling.
              </p>
              <p className="text-[14.5px] mt-3 text-[var(--ink-2)] leading-[1.6]">
                Readiness: <span className="font-mono tabular text-ink">0.74</span>. 28 days to due-date. No FedRAMP knock-out term.
                Contracting officer <em>Reginald F. Mendez</em> with 14 prior awards in
                this NAICS, 4 to SDVOSB primes.
              </p>
              <div className="mt-6 pt-5 border-t border-[var(--ink-rule)]">
                <p className="font-display text-[20px] leading-tight tracking-[-0.012em]">
                  Composite: <strong className="text-brass">0.91</strong>
                </p>
                <p className="text-[13.5px] text-[var(--ink-3)] mt-2 leading-[1.55]">
                  Above tenant&apos;s 0.62 threshold → routed to <span className="font-mono text-[var(--ink-2)]">#bd-incoming</span> Slack channel and the 06:42:18Z digest.
                </p>
              </div>
            </div>

            <p className="font-mono text-[11px] text-[var(--ink-3)] mt-6 max-w-[44ch] leading-[1.6]">
              Every routed alert carries the seven signals as line items. Disagree with one? Click it — the override refines the model for your tenant only.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}

const SIGNALS: { name: string; detail: string; weight: number }[] = [
  { name: "Days-to-due-date", detail: "Sweet spot 14–28d → 1.0. Under 7d → 0.4 (panic-bid territory). Over 60d → 0.7 (relevance may drift before submission).", weight: 0.18 },
  { name: "Set-aside compatibility", detail: "Boolean against tenant flags (SDVOSB / 8(a) / WOSB / HUBZone). Hard mismatch zeroes the row — we don't route lots you can't legally bid on.", weight: 0.16 },
  { name: "Past-performance similarity", detail: "Does the tenant have a winning past contract under matching NAICS in the last 36 months? Boosts the score; the absence is neutral, not penalising.", weight: 0.16 },
  { name: "Contracting officer history", detail: "How often has this CO awarded to firms in your tenant cohort? Pulled from the public award history graph.", weight: 0.14 },
  { name: "Attachment signal", detail: "Is there a parsable SOW/PWS attachment, or is this an amendment-only posting? Amendments without a base scope are deprioritised.", weight: 0.12 },
  { name: "Knock-out terms", detail: "FedRAMP / IL5 / ITAR / TS-SCI clearance. If the tenant lacks any term flagged in the body, the row is held below threshold.", weight: 0.12 },
  { name: "Dollar-band fit", detail: "Against tenant minimum and ceiling. Lots an order of magnitude outside the tenant's bid history are deprioritised.", weight: 0.12 },
];

/* ---------------- Pricing ---------------- */

function Pricing() {
  return (
    <section id="pricing" className="border-b border-[var(--ink-rule)] bg-[var(--canvas-2)]/60">
      <div className="mx-auto max-w-prose px-6 md:px-10 py-24 md:py-28">
        <SectionHeader
          kicker="The pricing"
          title="Three tiers. Well below GovWin."
          subtitle="Paid via NOWPayments hosted invoice. USDT/USDC, with card on-ramp where the NOWPayments account supports it. No saved card. No credit-bureau hit. 90-day money-back on every tier — and we don't run free trials."
        />

        <div className="mt-12 grid md:grid-cols-3 gap-6 md:gap-7 items-stretch">
          <Tier
            title="Single-region"
            plan="single"
            price="$499"
            period="/ mo"
            description="The capture manager working a single procurement geography (US-Federal, one US state, EU only, UK only)."
            bullets={[
              "1 region · 1 NAICS/CPV profile · 1 user seat",
              "Email digest + Slack push",
              "Default match threshold 0.62",
              "90-day money-back guarantee",
            ]}
            ctaLabel="Pay $499 in crypto"
          />
          <Tier
            title="Multi-region"
            plan="multi"
            price="$1,490"
            period="/ mo"
            description="The capture manager working a federal-plus-state mix, or the EU Tender Lead working three member portals."
            bullets={[
              "Up to 3 regions across federal/state/EU/UK",
              "Up to 3 named profiles · 3 user seats",
              "Email + Slack + custom JSON webhook",
              "Past-performance import (CSV)",
              "Default threshold 0.58",
            ]}
            ctaLabel="Pay $1,490 in crypto"
            highlight
          />
          <Tier
            title="Federal-Plus"
            plan="federal"
            price="$4,990"
            period="/ mo"
            description="The mid-market firm running an active multi-region capture function. White-glove onboarding included."
            bullets={[
              "All US federal + 50 states + EU + UK + 8 EU member portals",
              "Unlimited profiles · 10 user seats",
              "Contracting-officer history graph",
              "Salesforce export · custom webhook",
              "90-min profile-build call · quarterly QBR",
            ]}
            ctaLabel="Pay $4,990 in crypto"
          />
        </div>

        <p className="font-mono text-[11.5px] text-[var(--ink-3)] mt-10 max-w-[78ch] leading-[1.65]">
          If you bid two or three federal opportunities a year, our subscription does not pay back.
          We recommend a saved search on SAM.gov and a 30-minute weekly review. Come back when you&apos;re north of $2M ARR and have a real capture function.
        </p>
      </div>
    </section>
  );
}

function Tier({ title, plan, price, period, description, bullets, ctaLabel, highlight }: {
  title: string;
  plan: "single" | "multi" | "federal";
  price: string;
  period: string;
  description: string;
  bullets: string[];
  ctaLabel: string;
  highlight?: boolean;
}) {
  return (
    <div className={`tier-card ${highlight ? "highlight" : ""}`}>
      <h3 className="font-display font-extrabold text-[22px] leading-tight tracking-[-0.014em]">{title}</h3>
      <p className="tier-price">
        {price}<small className="ml-1">{period}</small>
      </p>
      <p className="text-[14px] text-[var(--ink-2)] leading-[1.55]">{description}</p>
      <ul className="space-y-2 text-[13.5px] mt-1">
        {bullets.map((b, i) => (
          <li key={i} className="grid grid-cols-[14px_1fr] gap-2.5 items-baseline leading-[1.5]">
            <span aria-hidden className="text-brass font-mono text-[11px]">▣</span>
            <span className="text-[var(--ink-2)]">{b}</span>
          </li>
        ))}
      </ul>
      <PricingCta plan={plan} label={ctaLabel} />
    </div>
  );
}

/* ---------------- FAQ ---------------- */

function Faq() {
  return (
    <section id="faq" className="border-b border-[var(--ink-rule)]">
      <div className="mx-auto max-w-prose px-6 md:px-10 py-24 md:py-28">
        <SectionHeader kicker="The FAQ" title="Data freshness, dedup, and refusal." />

        <dl className="mt-12">
          {FAQ.map((q) => (
            <div className="faq-row" key={q.q}>
              <dt>{q.q}</dt>
              <dd>{q.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

const FAQ: { q: string; a: React.ReactNode }[] = [
  {
    q: "How fresh is the data?",
    a: (<>Federal: <span className="font-mono text-ink">90s</span> poll. State: <span className="font-mono text-ink">5min</span>. International: <span className="font-mono text-ink">15min</span>. Latency from posting to your digest is under 4 minutes for federal lots, under 18 minutes for international.</>),
  },
  {
    q: "How do you dedup notices?",
    a: <>Notice ID per source <em>plus</em> body hash across sources. TED, Boamp, AMEDA routinely double-list the same notice — we collapse them. Amendments are linked to the base posting, not shown as new alerts.</>,
  },
  {
    q: "What if I already have GovWin?",
    a: <>Keep it. GovWin is your <em>pre-RFP-pipeline</em> view. Brassmark replaces your <em>morning triage</em>. Federal-Plus + GovWin together is what most of our $20-50M-ARR buyers run, and the two products combined still cost less than two GovWin seats.</>,
  },
  {
    q: "Free trial?",
    a: <>No. We offer a <strong>90-day money-back guarantee</strong> on every tier instead. A free-trial signup at our audience size doesn&apos;t see value in a 14-day window, and that creates churn-reflex on the renewal. The 90-day guarantee gives you real time to evaluate without us pretending it&apos;s free.</>,
  },
  {
    q: "Will you sell our profile data?",
    a: <>No. Your profile is NAICS, CPV, regions, set-asides, keyword set, and dollar bands. We treat it as customer-confidential. The capture files you build off a Brassmark match never enter our system — they live in your Salesforce / Sharepoint / on your laptop.</>,
  },
  {
    q: "FedRAMP / IL5 / FISMA-Moderate?",
    a: <>Brassmark is a marketing-intelligence layer over <em>publicly-posted</em> procurement data — not a procurement-system-of-record. We have no current FedRAMP authorization. If your shop requires a FedRAMP-Moderate vendor for any procurement-relevant SaaS, talk to us about an isolated single-tenant deployment at $9,990/mo.</>,
  },
  {
    q: "What about EU GDPR?",
    a: <>The data we ingest from public procurement registers is publicly-posted; processing it for matching against your firm&apos;s profile sits within the legitimate-interest basis under Art. 6(1)(f) GDPR. Tenant profiles are stored encrypted-at-rest. EU customers can request a DPA.</>,
  },
  {
    q: "Can I import my SAM.gov saved searches?",
    a: <>Yes — the onboarding step accepts your SAM.gov saved-search export as a starting profile, then refines it against your past-performance CSV. Multi-region and Federal-Plus include this; Single-region requires a manual NAICS list.</>,
  },
];

/* ---------------- Footer ---------------- */

function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-prose px-6 md:px-10 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <Logo />
            <p className="font-display text-[16px] leading-[1.55] mt-6 max-w-[44ch] text-[var(--ink-2)]">
              Real-time alerts on government RFPs matching your NAICS + keyword + region profile.
              Scored. Deduped. Pushed before your competitors notice.
            </p>
            <p className="font-mono text-[10px] text-[var(--ink-3)] tracking-[0.18em] uppercase mt-6 max-w-[60ch] leading-[1.7]">
              Brassmark serves the US, EU, UK, and Canada. We do not serve regions where the underlying public-procurement registers are not freely accessible.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="label">Product</h4>
              <ul className="mt-4 space-y-2.5 text-[14px]">
                <li><Link href="#coverage" className="text-[var(--ink-2)] hover:text-brass transition-colors">Coverage</Link></li>
                <li><Link href="#score" className="text-[var(--ink-2)] hover:text-brass transition-colors">The score</Link></li>
                <li><Link href="#pricing" className="text-[var(--ink-2)] hover:text-brass transition-colors">Pricing</Link></li>
                <li><Link href="#faq" className="text-[var(--ink-2)] hover:text-brass transition-colors">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="label">Contact</h4>
              <ul className="mt-4 space-y-2.5 text-[14px]">
                <li><a href="mailto:desk@prin7r.com" className="text-[var(--ink-2)] hover:text-brass transition-colors font-mono text-[13px]">desk@prin7r.com</a></li>
                <li><a href="https://github.com/prin7r-projects/tender-sniper" className="text-[var(--ink-2)] hover:text-brass transition-colors">Source repo</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="thin-rule mt-12" />

        <div className="mt-6 flex flex-col md:flex-row justify-between gap-3 font-mono text-[10px] text-[var(--ink-3)] tracking-[0.18em] uppercase">
          <span>© 2026 Brassmark · A Prin7r edition · MIT-licensed</span>
          <span>tender-sniper · built 2026-05-08</span>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- SectionHeader ---------------- */

function SectionHeader({ kicker, title, subtitle }: { kicker: string; title: string; subtitle?: string }) {
  return (
    <div className="max-w-[760px]">
      <span className="label">{kicker}</span>
      <h2
        className="mt-3 font-display font-extrabold text-[34px] md:text-[44px] leading-[1.05] tracking-[-0.018em]"
        style={{ textWrap: "balance" }}
      >
        {title}
      </h2>
      <span className="brass-rule mt-5 block" style={{ width: 100 }} />
      {subtitle && <p className="mt-6 font-display text-[18px] md:text-[19px] leading-[1.55] text-[var(--ink-2)] max-w-[68ch]" style={{ textWrap: "pretty" }}>{subtitle}</p>}
    </div>
  );
}
