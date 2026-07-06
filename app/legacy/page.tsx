"use client";

import { ArrowRight, RefreshCw, Sparkles } from "lucide-react";

import { Footer } from "@/components/footer";
import { useApp } from "@/components/providers";
import { Reveal } from "@/components/reveal";

const METRICS = [
  {
    tag: "METRIC_01",
    label: "TECHNICAL DEBT RATIO",
    value: "42.8%",
    valueColor: "text-[var(--coral)]",
    target: "Target: < 12%",
    barPct: 43,
    barColor: "bg-[var(--coral)]",
  },
  {
    tag: "METRIC_02",
    label: "LEGACY STABILITY",
    value: "88.4",
    valueColor: "text-[var(--fg)]",
    target: "Target: 99.9",
    barPct: 88,
    barColor: "bg-[var(--mint)]",
  },
];

const PIPELINES = [
  {
    tag: "TRK_01",
    title: "Infrastructure Refactor",
    body: "Transitioning from legacy on-premise iron to immutable, code-defined environments. Zero-manual intervention policy.",
    cta: "INITIATE_SWAP",
    icon: ArrowRight,
    tone: "from-[#0b2a26] to-[#04100e]",
  },
  {
    tag: "TRK_02",
    title: "Monolith Decoupling",
    body: "Surgical extraction of domain logic into high-performance microservices. Eliminating single points of failure.",
    cta: "VIEW_MAP",
    icon: Sparkles,
    tone: "from-[#221333] to-[#0c0916]",
  },
  {
    tag: "TRK_03",
    title: "Security Hardening",
    body: "Integrating Zero-Trust protocols at the kernel level. Ensuring data sovereignty through post-quantum encryption.",
    cta: "ENFORCE_PROTO",
    icon: RefreshCw,
    tone: "from-[#0a1f2e] to-[#050d15]",
  },
];

const LOG_LINES = [
  { text: "[SYSTEM] INITIALIZING TRINITY_DEV LEGACY_MODERNIZATION_CORE...", tone: "text-[var(--muted)]" },
  { text: "[SUCCESS] AUTHENTICATED AS MASTER_DEV_01", tone: "text-[var(--mint)]" },
  { text: "[SCAN] DETECTING LEGACY_MONOLITH_V4.2.1... FOUND.", tone: "text-[var(--muted)]" },
  { text: "[ALERT] CIRCULAR DEPENDENCY DETECTED IN 'PAYMENT_GATEWAY'", tone: "text-[var(--coral)]" },
  { text: "[TASK] DECOUPLING 'AUTH_MODULE' → MIGRATING TO AUTH_SERVICE_V2", tone: "text-[var(--muted)]" },
  { text: "[PROGRESS] 45% COMPLETE. NO PACKET LOSS DETECTED.", tone: "text-[var(--mint)]" },
  { text: "[SYSTEM] VERIFYING DIGITAL_SOVEREIGNTY_PROTOCOL... VERIFIED.", tone: "text-[var(--muted)]" },
  { text: "[LOG] EXECUTING HEURISTIC_ANALYSIS...", tone: "text-[var(--muted)]" },
];

export default function LegacyPage() {
  const { t } = useApp();

  return (
    <>
      <section className="border-b border-[var(--line)]">
        <Reveal className="mx-auto max-w-[1100px] px-6 py-16">
          <p className="mb-4 font-mono text-[11px] tracking-[0.2em] text-[var(--mint)]">
            {t("legacy.eyebrow")}
          </p>
          <h1 className="max-w-2xl font-display text-4xl font-bold leading-[1.1] sm:text-5xl">
            {t("legacy.title")}
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-[var(--muted)]">
            {t("legacy.descPrefix")}
            <span className="text-[var(--mint)]">{t("legacy.descHighlight")}</span>
            {t("legacy.descSuffix")}
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1100px] px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-3">
          {METRICS.map((m, i) => (
            <Reveal
              key={m.tag}
              delay={i * 100}
              className="lift-on-hover rounded-[6px] border border-[var(--line)] bg-[var(--panel)] p-6"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#f4917a]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#f6d76b]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--mint)]" />
                </div>
                <span className="font-mono text-[10px] text-[var(--muted)]">
                  {m.tag}
                </span>
              </div>
              <p className="mb-2 font-mono text-[10px] tracking-[0.1em] text-[var(--muted)]">
                {m.label}
              </p>
              <div className={`font-display text-4xl font-bold ${m.valueColor}`}>
                {m.value}
              </div>
              <p className="mt-1 font-mono text-[10px] text-[var(--muted)]">
                {m.target}
              </p>
              <div className="mt-4 h-1 w-full rounded-full bg-black/30">
                <div
                  className={`h-1 rounded-full ${m.barColor}`}
                  style={{ width: `${m.barPct}%` }}
                />
              </div>
            </Reveal>
          ))}

          <Reveal delay={200} className="lift-on-hover rounded-[6px] border border-[var(--line)] bg-[var(--panel)] p-6">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#f4917a]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#f6d76b]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--mint)]" />
              </div>
              <span className="font-mono text-[10px] text-[var(--muted)]">
                SYSTEM_STATE
              </span>
            </div>
            <p className="mb-2 font-mono text-[10px] tracking-[0.1em] text-[var(--muted)]">
              DECOUPLING INDEX
            </p>
            <div className="font-display text-2xl font-bold text-[var(--mint)]">
              {"{ MIGRATING }"}
            </div>
            <div className="mt-4 space-y-1 font-mono text-[10px] text-[var(--muted)]">
              <div>SERVICES_MAPPED: 142/250</div>
              <div>LATENCY_DELTA: -22ms</div>
              <div>HARDENING_ACTIVE: TRUE</div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-6 pb-16">
        <p className="mb-8 font-mono text-[11px] tracking-[0.15em] text-[var(--mint)]">
          {t("legacy.pipelinesLabel")}
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PIPELINES.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.tag} delay={i * 130} className="lift-on-hover flex flex-col rounded-[8px] border border-transparent p-4 -m-4">
                <span className="mb-4 inline-block w-fit rounded-[3px] border border-[var(--mint)]/40 bg-[var(--mint)]/10 px-2 py-1 font-mono text-[10px] tracking-wider text-[var(--mint)]">
                  {p.tag}
                </span>
                <h3 className="mb-4 font-display text-xl font-semibold">
                  {p.title}
                </h3>
                <div
                  className={`mb-4 h-36 rounded-[6px] border border-[var(--line)] bg-gradient-to-br ${p.tone}`}
                />
                <p className="mb-6 flex-1 text-[13.5px] leading-relaxed text-[var(--muted)]">
                  {p.body}
                </p>
                <button className="inline-flex w-fit items-center gap-2 rounded-[3px] bg-[var(--mint)] px-4 py-2 font-mono text-[11px] font-semibold tracking-wide text-[#04120c] transition-colors hover:bg-[var(--mint-bright)]">
                  {p.cta}
                  <Icon className="h-3.5 w-3.5" />
                </button>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-6 pb-20">
        <Reveal className="rounded-[6px] border border-[var(--line)] bg-[var(--panel)]">
          <div className="flex items-center justify-between border-b border-[var(--line)] px-5 py-3">
            <span className="font-mono text-[11px] tracking-[0.1em] text-[var(--muted)]">
              SYSTEM_LOGS_LIVE.SH
            </span>
            <span className="flex items-center gap-1.5 font-mono text-[10px] text-[var(--mint)]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--mint)]" />
              LIVE_FEED
            </span>
          </div>
          <div className="space-y-1.5 p-5 font-mono text-[11px] leading-relaxed">
            {LOG_LINES.map((line, i) => (
              <div key={i} className={line.tone}>
                {line.text}
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <Footer status="SYSTEMS_INTEGRITY_VERIFIED" />
    </>
  );
}
