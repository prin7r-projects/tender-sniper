"use client";
/**
 * [BRASSMARK_PRICING_CTA] Client component that turns the three pricing tiers
 * into a NOWPayments hosted-invoice CTA.
 *
 * On click → POST /api/checkout/nowpayments → redirect to invoice_url.
 * On 503 (env not yet wired) or any other error → show a small editorial
 * line under the button + a desk@ mailto fallback so the customer never
 * hits a dead end.
 */

import { useState } from "react";
import Link from "next/link";

export type PricingPlanId = "single" | "multi" | "federal";

type Props = {
  plan: PricingPlanId;
  label: string;
  className?: string;
};

const FALLBACK_MAILTO =
  "mailto:desk@prin7r.com?subject=Brassmark%20subscription%20enquiry&body=Tier%3A%20%5BSingle-region%20%2F%20Multi-region%20%2F%20Federal-Plus%5D%0AICP%20NAICS%3A%0ARegions%3A%0AExpected%20start%20date%3A%0A";

export function PricingCta({ plan, label, className }: Props) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setError(null);
    setBusy(true);
    try {
      const response = await fetch("/api/checkout/nowpayments", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ plan })
      });
      const data = (await response.json().catch(() => null)) as
        | { invoice_url?: string; message?: string; error?: string }
        | null;

      if (response.ok && data?.invoice_url) {
        window.location.href = data.invoice_url;
        return;
      }

      const message =
        data?.message ??
        `Checkout unavailable (HTTP ${response.status}). Email the desk to start your subscription.`;
      setError(message);
    } catch {
      setError("Checkout unavailable. Email the desk to start your subscription.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="mt-auto pt-4 flex flex-col">
      <button
        type="button"
        onClick={onClick}
        disabled={busy}
        aria-busy={busy}
        className={
          (className ?? "btn justify-center w-full") +
          (busy ? " opacity-60 cursor-not-allowed" : "")
        }
      >
        {busy ? "Opening invoice…" : label}
        <span aria-hidden className="font-mono text-[14px]">→</span>
      </button>
      {error && (
        <p className="mt-3 text-[12px] text-graphite italic">
          {error}{" "}
          <Link href={FALLBACK_MAILTO} className="text-signal underline">
            Email the desk
          </Link>
          .
        </p>
      )}
    </div>
  );
}
