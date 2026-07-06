"use client";

import { CheckCircle2, SlidersHorizontal, Rocket, Shield, Lock, History } from "lucide-react";

import { Footer } from "@/components/footer";
import { useApp } from "@/components/providers";

const STEPS = [
  { key: "01_Auth", state: "done" as const },
  { key: "02_Config", state: "active" as const },
  { key: "03_Deploy", state: "upcoming" as const },
];

const LOG_LINES = [
  { text: "[SYSTEM] TRINITY KERNEL 8.4.2 LOADING...", tone: "text-[var(--muted)]" },
  { text: "[INFO] MEMORY CHECK: 128TB OK", tone: "text-[var(--muted)]" },
  { text: "[INFO] CORES 1-64: INITIALIZED", tone: "text-[var(--muted)]" },
  { text: "[AUTH] RSA HANDSHAKE PENDING...", tone: "text-[var(--muted)]" },
  { text: "[OK] HANDSHAKE COMPLETED", tone: "text-[var(--mint)]" },
  { text: "[INFO] CONNECTING TO SECURE GRID...", tone: "text-[var(--muted)]" },
  { text: "[INFO] SYNCING GLOBAL STATE...", tone: "text-[var(--muted)]" },
  { text: "[WARN] LATENCY_SPIKE_DETECTED: NODE_7", tone: "text-[var(--coral)]" },
];

const INFO_CARDS = [
  {
    n: "01",
    title: "IDENTITY_ROOT",
    body: "The root identity is cryptographically signed. All downstream processes inherit this primary trust certificate.",
  },
  {
    n: "02",
    title: "GRID_OVERLAY",
    body: "Network configurations utilize the TRINITY mesh, providing 99.999% availability via redundant global shards.",
  },
  {
    n: "03",
    title: "AUTO_SCALING",
    body: "Resource allocation is dynamic. The system breathes with demand, collapsing costs during idle cycles.",
  },
];

export default function InitializePage() {
  const { t } = useApp();

  return (
    <>
      <section className="border-b border-[var(--line)]">
        <div className="mx-auto max-w-[1100px] px-6 py-16">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-[var(--mint)]" />
            <span className="font-mono text-[11px] tracking-[0.2em] text-[var(--mint)]">
              {t("initialize.eyebrow")}
            </span>
          </div>
          <h1 className="max-w-2xl font-display text-4xl font-bold leading-[1.1] sm:text-5xl">
            {t("initialize.title")}
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-[var(--muted)]">
            {t("initialize.paragraph")}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-6 py-16">
        <div className="mb-8 flex flex-wrap items-center gap-8 border-b border-[var(--line)] pb-0">
          {STEPS.map((s) => (
            <div key={s.key} className="pb-4">
              <div className="mb-3 flex items-center gap-2">
                <span
                  className={`font-mono text-[13px] font-medium ${
                    s.state === "upcoming" ? "text-[var(--muted)]" : "text-[var(--fg)]"
                  }`}
                >
                  {s.key}
                </span>
                {s.state === "done" && (
                  <CheckCircle2 className="h-4 w-4 text-[var(--mint)]" />
                )}
                {s.state === "active" && (
                  <SlidersHorizontal className="h-4 w-4 text-[var(--mint)]" />
                )}
                {s.state === "upcoming" && (
                  <Rocket className="h-4 w-4 text-[var(--muted)]" />
                )}
              </div>
              <div
                className={`h-[2px] w-24 rounded-full sm:w-32 ${
                  s.state === "upcoming" ? "bg-[var(--line)]" : "bg-[var(--mint)]"
                }`}
              />
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <div className="rounded-[6px] border border-[var(--line)] bg-[var(--panel)]">
            <div className="flex items-center justify-between border-b border-[var(--line)] px-5 py-3">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#f4917a]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#f6d76b]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--mint)]" />
              </div>
              <span className="font-mono text-[10px] text-[var(--muted)]">
                SESSION_ID: 88-X-OMEGA
              </span>
            </div>

            <div className="p-6">
              <div className="mb-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block font-mono text-[10px] tracking-[0.1em] text-[var(--muted)]">
                    SYSTEM_NAME
                  </label>
                  <input
                    placeholder="e.g. TRINITY_CORE_01"
                    className="w-full rounded-[4px] border border-[var(--line)] bg-black/30 px-3 py-2.5 font-mono text-[13px] text-[var(--fg)] placeholder:text-[var(--muted)]/60 focus:border-[var(--mint)] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block font-mono text-[10px] tracking-[0.1em] text-[var(--muted)]">
                    ARCHITECTURE_TYPE
                  </label>
                  <select className="w-full rounded-[4px] border border-[var(--line)] bg-black/30 px-3 py-2.5 font-mono text-[13px] text-[var(--fg)] focus:border-[var(--mint)] focus:outline-none">
                    <option>Microservices_Mesh</option>
                    <option>Monolith_Refactor</option>
                    <option>Serverless_Edge</option>
                  </select>
                </div>
              </div>

              <label className="mb-1.5 block font-mono text-[10px] tracking-[0.1em] text-[var(--muted)]">
                SECURITY_PROTOCOL
              </label>
              <div className="mb-6 grid gap-3 sm:grid-cols-3">
                <button className="flex items-center justify-between rounded-[4px] border border-[var(--mint)] px-3 py-2.5 font-mono text-[12px] text-[var(--mint)]">
                  AES-256-GCM
                  <Shield className="h-3.5 w-3.5" />
                </button>
                <button className="flex items-center justify-between rounded-[4px] border border-[var(--line)] px-3 py-2.5 font-mono text-[12px] text-[var(--muted)]">
                  Quantum_Resistant
                  <Lock className="h-3.5 w-3.5" />
                </button>
                <button className="flex items-center justify-between rounded-[4px] border border-[var(--line)] px-3 py-2.5 font-mono text-[12px] text-[var(--muted)]">
                  Legacy_Handshake
                  <History className="h-3.5 w-3.5" />
                </button>
              </div>

              <div className="mb-8 grid grid-cols-3 gap-4">
                <div className="rounded-[4px] border border-[var(--line)] bg-black/20 p-3">
                  <div className="font-mono text-[9px] tracking-[0.1em] text-[var(--muted)]">
                    LATENCY_CAP
                  </div>
                  <div className="mt-1 font-display text-lg font-bold text-[var(--mint)] sm:text-xl">
                    24ms
                  </div>
                </div>
                <div className="rounded-[4px] border border-[var(--line)] bg-black/20 p-3">
                  <div className="font-mono text-[9px] tracking-[0.1em] text-[var(--muted)]">
                    DATA_SHARDING
                  </div>
                  <div className="mt-1 font-display text-lg font-bold sm:text-xl">
                    ENABLED
                  </div>
                </div>
                <div className="rounded-[4px] border border-[var(--line)] bg-black/20 p-3">
                  <div className="font-mono text-[9px] tracking-[0.1em] text-[var(--muted)]">
                    UPSCALE_RATIO
                  </div>
                  <div className="mt-1 font-display text-lg font-bold sm:text-xl">
                    3:1
                  </div>
                </div>
              </div>

              <div className="flex flex-col-reverse items-center gap-4 sm:flex-row sm:justify-end">
                <button className="font-mono text-[12px] text-[var(--muted)] hover:text-[var(--fg)]">
                  ABORT_SEQUENCE
                </button>
                <button className="flex w-full items-center justify-center gap-2 rounded-[4px] bg-[var(--mint)] px-6 py-3 font-mono text-[13px] font-semibold text-[#04120c] transition-colors hover:bg-[var(--mint-bright)] sm:w-auto">
                  CONTINUE_PROMPT →
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col rounded-[6px] border border-[var(--line)] bg-[var(--panel)]">
            <div className="flex items-center justify-between border-b border-[var(--line)] px-5 py-3">
              <span className="font-mono text-[11px] tracking-[0.1em] text-[var(--fg)]">
                BOOT_LOG_REALTIME
              </span>
              <span className="flex items-center gap-1.5 font-mono text-[10px] text-[var(--mint)]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--mint)]" />
                LIVE
              </span>
            </div>
            <div className="flex-1 space-y-2 p-5 font-mono text-[11px] leading-relaxed">
              {LOG_LINES.map((line, i) => (
                <div key={i} className={line.tone}>
                  {line.text}
                </div>
              ))}
            </div>
            <div className="border-t border-[var(--line)] p-5">
              <div className="mb-2 flex items-center justify-between font-mono text-[11px]">
                <span className="text-[var(--muted)]">CPU_LOAD</span>
                <span className="text-[var(--fg)]">42.8%</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-black/30">
                <div className="h-1.5 w-[43%] rounded-full bg-[var(--mint)]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-6 pb-20">
        <div className="grid gap-8 sm:grid-cols-3">
          {INFO_CARDS.map((c) => (
            <div key={c.n} className="border-l border-[var(--line)] pl-5">
              <span className="font-mono text-[11px] tracking-[0.15em] text-[var(--mint)]">
                {`${c.n} // ${c.title}`}
              </span>
              <p className="mt-3 text-[13.5px] leading-relaxed text-[var(--muted)]">
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer status="INITIALIZE_V1" />
    </>
  );
}
