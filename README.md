# tender-sniper · Brassmark

**The tender desk a senior bidder keeps open in the second monitor.**

Real-time alerts on government RFPs matching your NAICS + keyword + region profile. Scored on a 7-signal bid-readiness model. SAM.gov + 50 US state portals + EU TED + UK Contracts Finder + 8 EU member portals — 80 procurement registers, deduped.

> **Live deploy**: <https://tender-sniper.prin7r.com>
> **Notion opportunity**: <https://www.notion.so/Tender-sniper-government-procurement-3543ceec261981b38415f04006fa88e8>
> **Pitch deck**: [`docs/pitch-deck.html`](docs/pitch-deck.html) (open directly in a browser, no build step)

## Screenshots

| Desktop (1440 × 900) | Mobile (390 × 844) |
|----------------------|--------------------|
| ![Brassmark landing — desktop](docs/screenshots/landing-desktop.png) | ![Brassmark landing — mobile](docs/screenshots/landing-mobile.png) |

## Repo structure

```
tender-sniper/
├── DESIGN.md                  # Canonical design + style guide (15 sections)
├── README.md                  # This file
├── LICENSE                    # MIT
├── Dockerfile.landing         # Multistage Next.js standalone build
├── docker-compose.yml         # Single landing service + Traefik labels
├── .env.example               # NOWPayments env vars (NO secrets committed)
│
├── apps/
│   ├── landing/               # Next.js 15 + Tailwind. The marketing site.
│   │   ├── app/               # App-router pages, API routes, components
│   │   │   ├── api/checkout/nowpayments/route.ts   # POST /api/checkout/nowpayments
│   │   │   ├── api/webhooks/nowpayments/route.ts   # POST /api/webhooks/nowpayments
│   │   │   ├── alert-ticker.tsx                    # Live ticker (client component)
│   │   │   ├── pricing-cta.tsx                     # NOWPayments invoice CTA
│   │   │   ├── globals.css
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── lib/
│   │   │   ├── env.ts                              # MissingEnvError + optionalEnv
│   │   │   └── nowpayments.ts                      # Invoice creation + IPN HMAC-SHA512
│   │   ├── public/
│   │   │   ├── icon.svg                            # Favicon ▣ signet
│   │   │   └── og-image.svg                        # OG share card
│   │   ├── package.json
│   │   ├── tailwind.config.ts
│   │   ├── tsconfig.json
│   │   └── next.config.mjs
│   └── app/                                        # Wave 3 — open-saas dashboard target
│       ├── .gitkeep
│       └── README.md                               # Wave 3 fork plan
│
├── docs/
│   ├── 01-brand-identity.md
│   ├── 02-architecture.md
│   ├── 03-user-journeys.md
│   ├── 04-pain-points.md
│   ├── 05-audience-profile.md
│   ├── 06-sales-channels.md
│   ├── 07-sales-strategy.md
│   ├── 08-marketing-strategy.md
│   ├── 09-go-to-market.md
│   ├── 10-pitch-deck.md
│   ├── pitch-deck.html                             # 10-slide self-contained deck
│   └── screenshots/
│       ├── landing-desktop.png
│       └── landing-mobile.png
│
├── scripts/
│   └── capture-landing-screenshots.mjs             # Playwright capture script
│
└── .github/
    └── workflows/
        └── landing-build.yml                       # Typecheck + next build on PR
```

## Dev quickstart

```bash
cd apps/landing
pnpm install
pnpm dev
# → http://localhost:3000
```

## Build (production)

```bash
cd apps/landing
pnpm build
# → .next/standalone/server.js
```

## Deploy (storage-contabo)

```bash
ssh storage-contabo
mkdir -p /opt/prin7r-deploys/tender-sniper
cd /opt/prin7r-deploys/tender-sniper
git clone https://github.com/prin7r-projects/tender-sniper.git .
cp .env.example .env   # then populate NOWPAYMENTS_API_KEY etc.
docker compose build
docker compose up -d
```

DNS is already covered by the `*.prin7r.com → 161.97.99.120` wildcard. Traefik (host-network mode, with `letsencrypt` HTTP-01 resolver) issues the cert automatically.

## NOWPayments integration

The pricing page wires three tiers (Single $499 / Multi $1,490 / Federal-Plus $4,990) through `POST /api/checkout/nowpayments`, which calls `https://api.nowpayments.io/v1/invoice` and redirects the user to the returned `invoice_url`.

The IPN webhook lives at `POST /api/webhooks/nowpayments` and verifies the `x-nowpayments-sig` header against the alphabetically-sorted JSON body using HMAC-SHA512 (algorithm copied verbatim from `payments-prototypes/src/lib/signatures.ts:25-30`).

Required env vars (set in `/opt/prin7r-deploys/tender-sniper/.env` on the deploy host):

```
NOWPAYMENTS_API_KEY=<from nowpayments.io dashboard>
NOWPAYMENTS_IPN_SECRET=<from nowpayments.io dashboard, IPN tab>
NOWPAYMENTS_SANDBOX=false
NEXT_PUBLIC_SITE_URL=https://tender-sniper.prin7r.com
```

Behaviour without env:
- `POST /api/checkout/nowpayments` → 503 `{"error":"missing_env","missing":"NOWPAYMENTS_API_KEY", ...}`. The pricing-card UI surfaces this gracefully and falls back to a `mailto:desk@prin7r.com` link.
- `POST /api/webhooks/nowpayments` → 503 `{"error":"missing_env","missing":"NOWPAYMENTS_IPN_SECRET", ...}`.

This is intentional — the playbook v2 §C says the deployment must run with a clean missing-env state until live keys are provisioned, never crash the page.

## Quality gates

See `DESIGN.md` §12 for the full §D quality-gate table. Summary:

- ✅ DESIGN.md with all 15 sections.
- ✅ ShadCN exception documented (hand-rolled marketing surface).
- ✅ Desktop + mobile screenshots in `docs/screenshots/`.
- ✅ Real copy throughout — no Lorem ipsum, no shipped TODOs.
- ✅ Keyboard focus visible on all interactive elements.
- ✅ HTTP/2 200 on the deployed URL with valid LE cert.
- ⏸ NOWPayments live unpaid-invoice creation: route wired + fixture-tested. Live keys provisioning is the open follow-up (see §G report).

## License

[MIT](LICENSE)

## Links

- **Notion opportunity**: <https://www.notion.so/Tender-sniper-government-procurement-3543ceec261981b38415f04006fa88e8>
- **Build report**: `/Users/keer/projects/prin7r/wave2-reports/tender-sniper.md`
- **Playbook v2**: `/Users/keer/projects/prin7r/wave2-playbook.md`
- **Payment integration reference**: `/Users/keer/projects/prin7r/payments-prototypes/`
