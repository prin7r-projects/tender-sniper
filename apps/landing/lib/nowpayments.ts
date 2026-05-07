/**
 * [BRASSMARK_NOWPAYMENTS] Server-side helpers for the NOWPayments hosted invoice.
 *
 * Three pricing tiers map to three NOWPayments hosted invoices:
 *   single    → $499/mo  · Single-region
 *   multi     → $1,490/mo · Multi-region (highlighted)
 *   federal   → $4,990/mo · Federal-Plus
 *
 * `verifyNowpaymentsIpn` is the canonical HMAC-SHA512 verifier copied verbatim
 * from /Users/keer/projects/prin7r/payments-prototypes/src/lib/signatures.ts.
 * The provider posts a JSON body and signs the alphabetically-sorted JSON
 * with the IPN secret. We never trust an unverified IPN.
 */

import crypto from "node:crypto";
import { MissingEnvError, optionalEnv } from "@/lib/env";

export type PlanId = "single" | "multi" | "federal";

export type Plan = {
  id: PlanId;
  name: string;
  priceUsd: number;
  description: string;
};

export const PLANS: Record<PlanId, Plan> = {
  single: {
    id: "single",
    name: "Brassmark — Single-region",
    priceUsd: 499,
    description:
      "1 region, 1 NAICS/CPV profile, 1 seat. Email digest + Slack push. Score threshold 0.62 default. Monthly subscription, 90-day money-back."
  },
  multi: {
    id: "multi",
    name: "Brassmark — Multi-region",
    priceUsd: 1490,
    description:
      "Up to 3 regions across federal/state/EU/UK. 3 profiles, 3 seats. Email + Slack + custom webhook. Past-performance import. Default threshold 0.58. Monthly subscription, 90-day money-back."
  },
  federal: {
    id: "federal",
    name: "Brassmark — Federal-Plus",
    priceUsd: 4990,
    description:
      "All US federal + 50 state portals + EU TED + UK Contracts Finder + 8 EU member portals. Unlimited profiles, 10 seats. Contracting officer history graph. White-glove onboarding + QBR. Monthly subscription, 90-day money-back."
  }
};

export function isPlanId(value: unknown): value is PlanId {
  return typeof value === "string" && value in PLANS;
}

export type CreateInvoiceInput = {
  plan: Plan;
  baseUrl: string;
};

export type NowpaymentsInvoice = {
  id: string;
  invoice_url: string;
  raw: Record<string, unknown>;
};

/**
 * POST https://api.nowpayments.io/v1/invoice
 * Returns the invoice id + redirect URL. Never logs the API key.
 *
 * Request body shape (per NOWPayments docs):
 *   price_amount, price_currency, order_id, order_description,
 *   ipn_callback_url, success_url, cancel_url,
 *   is_fee_paid_by_user, is_fixed_rate
 */
export async function createNowpaymentsInvoice(input: CreateInvoiceInput): Promise<NowpaymentsInvoice> {
  const apiKey = optionalEnv("NOWPAYMENTS_API_KEY");
  if (!apiKey) throw new MissingEnvError("NOWPAYMENTS_API_KEY");

  const sandbox = (optionalEnv("NOWPAYMENTS_SANDBOX") ?? "false").toLowerCase() === "true";
  const apiBase = sandbox ? "https://api-sandbox.nowpayments.io" : "https://api.nowpayments.io";

  const orderId = `brassmark_${input.plan.id}_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;

  const body = {
    price_amount: input.plan.priceUsd,
    price_currency: "usd",
    order_id: orderId,
    order_description: input.plan.description,
    ipn_callback_url: `${input.baseUrl}/api/webhooks/nowpayments`,
    success_url: `${input.baseUrl}/?order=${orderId}&status=paid`,
    cancel_url: `${input.baseUrl}/?order=${orderId}&status=cancelled`,
    is_fee_paid_by_user: false,
    is_fixed_rate: false
  };

  const response = await fetch(`${apiBase}/v1/invoice`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": apiKey
    },
    body: JSON.stringify(body),
    cache: "no-store"
  });

  const text = await response.text();
  let parsed: Record<string, unknown>;
  try {
    parsed = JSON.parse(text) as Record<string, unknown>;
  } catch {
    parsed = { raw: text };
  }
  if (!response.ok) {
    throw new Error(`NOWPayments returned HTTP ${response.status}: ${text.slice(0, 500)}`);
  }

  const invoiceUrl = typeof parsed.invoice_url === "string" ? parsed.invoice_url : "";
  const invoiceId =
    typeof parsed.id === "string" || typeof parsed.id === "number" ? String(parsed.id) : orderId;

  if (!invoiceUrl) {
    throw new Error("NOWPayments response did not include invoice_url");
  }

  return { id: invoiceId, invoice_url: invoiceUrl, raw: parsed };
}

/* ------------------------------------------------------------------ */
/* HMAC-SHA512 IPN verification — copied from payments-prototypes.    */
/* ------------------------------------------------------------------ */

function timingSafeEqualHex(left: string, right: string): boolean {
  const a = left.trim().toLowerCase();
  const b = right.trim().toLowerCase();
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(Buffer.from(a, "hex"), Buffer.from(b, "hex"));
}

function sortObject(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(sortObject);
  if (value && typeof value === "object") {
    return Object.keys(value as Record<string, unknown>)
      .sort()
      .reduce<Record<string, unknown>>((result, key) => {
        result[key] = sortObject((value as Record<string, unknown>)[key]);
        return result;
      }, {});
  }
  return value;
}

export function verifyNowpaymentsIpn(payload: unknown, signature: string | null, secret: string): boolean {
  if (!signature) return false;
  const sorted = JSON.stringify(sortObject(payload));
  const expected = crypto.createHmac("sha512", secret.trim()).update(sorted).digest("hex");
  return timingSafeEqualHex(expected, signature);
}
