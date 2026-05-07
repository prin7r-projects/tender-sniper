// [BRASSMARK_SCREENSHOTS] Playwright capture script for the v2 quality gates.
//
// Captures /docs/screenshots/landing-desktop.png and landing-mobile.png from
// the LIVE production URL (not localhost). Re-run after any landing-affecting
// change; commit the resulting PNGs.
//
// Requires:
//   pnpm dlx playwright@1.48 install chromium
//
// Usage:
//   node scripts/capture-landing-screenshots.mjs

import { chromium } from "playwright";
import path from "node:path";
import url from "node:url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");

const URL_TARGET = process.env.BRASSMARK_URL || "https://tender-sniper.prin7r.com";

const shots = [
  {
    path: path.join(repoRoot, "docs/screenshots/landing-desktop.png"),
    viewport: { width: 1440, height: 900 },
    isMobile: false,
  },
  {
    path: path.join(repoRoot, "docs/screenshots/landing-mobile.png"),
    viewport: { width: 390, height: 844 },
    isMobile: true,
  },
];

console.log(`[BRASSMARK_SCREENSHOTS] Capturing ${URL_TARGET}`);
const browser = await chromium.launch();
for (const s of shots) {
  const context = await browser.newContext({
    viewport: s.viewport,
    deviceScaleFactor: 2,
    isMobile: s.isMobile,
    hasTouch: s.isMobile,
    userAgent: s.isMobile
      ? "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"
      : undefined,
    reducedMotion: "no-preference",
  });
  const page = await context.newPage();
  await page.goto(URL_TARGET, { waitUntil: "networkidle", timeout: 60000 });
  // Pause so the alert ticker has rendered an initial frame, but not so long
  // that we drift to a different feed offset on each capture.
  await page.waitForTimeout(2200);
  await page.screenshot({ path: s.path, fullPage: true });
  console.log(`  → wrote ${s.path}  (${s.viewport.width}×${s.viewport.height})`);
  await context.close();
}
await browser.close();
console.log("[BRASSMARK_SCREENSHOTS] done.");
