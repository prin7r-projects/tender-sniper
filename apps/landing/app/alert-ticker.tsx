"use client";
/**
 * [BRASSMARK_ALERT_TICKER] Faked-but-realistic live alert feed.
 *
 * The hero shows a streaming ticker of (deterministic, content-stable)
 * RFP alerts. New rows roll in every 3.6s.
 *
 * The data is hand-written to look like a credible morning at a real
 * capture desk — federal, state, EU, UK — and is explicitly labelled
 * "SAMPLE FEED" in the ticker head so a reader cannot mistake this for
 * a customer dashboard.
 *
 * Reduced-motion: holds the most-recent feed visible and disables the
 * roll. The CSS @media (prefers-reduced-motion: reduce) handles that.
 */

import { useEffect, useState } from "react";

type Alert = {
  time: string;
  source: string;
  noticeId: string;
  score: number;
  due: string;
  agency: string;
};

const FEED: Alert[] = [
  { time: "06:42:18", source: "SAM.gov", noticeId: "VA-COTR-25-7", score: 0.91, due: "due in 19d", agency: "Veterans Affairs · IT modernization" },
  { time: "06:42:11", source: "TX SmartBuy", noticeId: "DIR-TSO-4392", score: 0.74, due: "due in 14d", agency: "TX Department of Information Resources" },
  { time: "06:41:54", source: "EU TED", noticeId: "2026/S 086-CPV-72200", score: 0.68, due: "due in 28d", agency: "DG Connect · Brussels · data-modernization" },
  { time: "06:41:33", source: "UK CF", noticeId: "CCM-RM6263", score: 0.71, due: "due in 21d", agency: "Crown Commercial Service · Cyber Security DPS" },
  { time: "06:41:08", source: "SAM.gov", noticeId: "GSA-OASIS-RFP-7831", score: 0.84, due: "due in 24d", agency: "GSA · OASIS+ Pool 2 IT services" },
  { time: "06:40:51", source: "Boamp", noticeId: "FR-26-0814192", score: 0.62, due: "due in 32d", agency: "Ministère de la Transformation · Paris" },
  { time: "06:40:32", source: "CA eProcure", noticeId: "DGS-9402-IT-CYS", score: 0.69, due: "due in 17d", agency: "California Dept of General Services · cybersecurity" },
  { time: "06:40:09", source: "AMEDA", noticeId: "IT-2026-104482", score: 0.58, due: "due in 35d", agency: "Roma Capitale · digital transformation" },
  { time: "06:39:47", source: "SAM.gov", noticeId: "DLA-J6-IT-2026-218", score: 0.78, due: "due in 14d", agency: "Defense Logistics Agency · J6 IT services" },
  { time: "06:39:21", source: "PLACE", noticeId: "ES-2026-091233", score: 0.66, due: "due in 26d", agency: "Junta de Andalucía · cloud migration" },
  { time: "06:39:02", source: "NY OGS", noticeId: "OGS-PT-79612", score: 0.71, due: "due in 21d", agency: "NY Office of General Services · IT consulting" },
  { time: "06:38:38", source: "SAM.gov", noticeId: "USAID-IDIQ-7741", score: 0.86, due: "due in 18d", agency: "USAID · multi-award IDIQ extension" },
  { time: "06:38:11", source: "Doffin", noticeId: "NO-2026-061177", score: 0.59, due: "due in 30d", agency: "Statens vegvesen · IT systems support" },
  { time: "06:37:54", source: "UK FTS", noticeId: "FTS-2026-0817-DSP", score: 0.73, due: "due in 22d", agency: "UK NHS Digital · digital service partner" },
  { time: "06:37:29", source: "vergabe.bayern", noticeId: "DE-BY-26-091", score: 0.67, due: "due in 27d", agency: "Bayerisches Staatsministerium · IT-Modernisierung" },
];

const TICK_MS = 3600;

export function AlertTicker() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setOffset((o) => (o + 1) % FEED.length);
    }, TICK_MS);
    return () => clearInterval(id);
  }, []);

  // show 5 rows, rotate the visible window through FEED
  const visible: Alert[] = [];
  for (let i = 0; i < 5; i++) {
    visible.push(FEED[(offset + i) % FEED.length]);
  }

  return (
    <div className="ticker" aria-label="Brassmark sample alert feed">
      <div className="ticker-head">
        <div className="flex items-center gap-2">
          <span className="pulse-dot" aria-hidden />
          <span className="label">SAMPLE FEED · LIVE · 90s POLL</span>
        </div>
        <span className="label">{new Date().toISOString().slice(0, 10)} · UTC</span>
      </div>
      <div className="ticker-body">
        {visible.map((row, i) => (
          <div className="row ticker-row-incoming" key={`${offset}-${i}-${row.noticeId}`}>
            <span className="col-time">{row.time}</span>
            <span className="col-src">{row.source}</span>
            <span className="col-id" title={row.agency}>{row.noticeId}</span>
            <span className={row.score >= 0.85 ? "score-priority" : row.score >= 0.7 ? "score-high" : "score"}>
              {row.score.toFixed(2)}
            </span>
            <span className="col-due">{row.due} · {row.agency}</span>
          </div>
        ))}
      </div>
      <p className="label mt-3" style={{ color: "rgba(242,238,229,0.45)" }}>
        SAMPLE FEED · NOT YOUR PROFILE. SUBSCRIBE TO BUILD YOUR OWN.
      </p>
    </div>
  );
}
