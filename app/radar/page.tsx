"use client";

import { useState } from "react";
import { Info, ChevronDown, Rocket } from "lucide-react";

import { Footer } from "@/components/footer";
import { useApp } from "@/components/providers";
import { Reveal } from "@/components/reveal";

const ENVIRONMENTS = [
  {
    id: "legacy",
    env: "ENV: LEGACY_MONOLITH",
    title: "Technical Debt Refactoring",
    body: "Deconstruct monolithic structures into scalable micro-architectures without downtime.",
    tags: ["DEBT_AUDIT", "DECOUPLING"],
  },
  {
    id: "cloud",
    env: "ENV: CLOUD_NATIVE",
    title: "Distributed Intelligence",
    body: "High-concurrency systems built for horizontal scale on AWS, GCP, or Azure environments.",
    tags: ["KUBERNETES", "SERVERLESS"],
  },
  {
    id: "ai",
    env: "ENV: AI_SCALE",
    title: "Neural Architecture",
    body: "Integration of LLM agents and vector databases into production-grade pipelines.",
    tags: ["LLMOPS", "VECTOR_DB"],
  },
];

export default function RadarPage() {
  const { t } = useApp();
  const [selected, setSelected] = useState("cloud");
  const [protocol, setProtocol] = useState<"encrypted" | "clear">("encrypted");
  const [revealed, setRevealed] = useState(false);

  return (
    <>
      <section className="border-b border-[var(--line)]">
        <Reveal className="mx-auto max-w-[820px] px-6 py-16 text-center">
          <p className="mb-4 font-mono text-[11px] tracking-[0.2em] text-[var(--mint)]">
            {t("radar.eyebrow")}
          </p>
          <h1 className="font-display text-4xl font-bold leading-[1.1] sm:text-5xl">
            {t("radar.title1")}
            <span className="text-[var(--mint)]">{t("radar.title2")}</span>
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-[var(--muted)]">
            {t("radar.paragraph")}
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1100px] px-6 py-16">
        <p className="mb-8 font-mono text-[11px] tracking-[0.15em] text-[var(--mint)]">
          {t("radar.sectionLabel")}
        </p>

        <div className="grid gap-6 sm:grid-cols-3">
          {ENVIRONMENTS.map((e, i) => {
            const active = selected === e.id;
            return (
              <Reveal key={e.id} delay={i * 120}>
              <button
                onClick={() => setSelected(e.id)}
                className={`lift-on-hover w-full rounded-[6px] border bg-[var(--panel)] p-6 text-left transition-colors ${
                  active
                    ? "border-[var(--mint)]"
                    : "border-[var(--line)] hover:border-[var(--line)]"
                }`}
                style={
                  active
                    ? { borderLeftWidth: "3px", borderLeftColor: "var(--mint)" }
                    : undefined
                }
              >
                <div className="mb-5 flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#f4917a]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#f6d76b]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--mint)]" />
                </div>
                <p className="mb-2 font-mono text-[10px] tracking-[0.1em] text-[var(--muted)]">
                  {e.env}
                </p>
                <h3 className="mb-3 font-display text-xl font-semibold">
                  {e.title}
                </h3>
                <p className="mb-5 text-[13.5px] leading-relaxed text-[var(--muted)]">
                  {e.body}
                </p>
                <div className="flex flex-wrap gap-2">
                  {e.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-[3px] border border-[var(--mint)]/40 bg-[var(--mint)]/10 px-2 py-1 font-mono text-[10px] text-[var(--mint)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </button>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-6 flex items-center gap-2 rounded-[6px] border border-[var(--line)] bg-[var(--panel)] px-5 py-4">
          <Info className="h-4 w-4 text-[var(--mint)]" />
          <span className="font-mono text-[12px] text-[var(--muted)]">
            {t("radar.selectHint")}
          </span>
        </Reveal>
      </section>

      <section className="border-t border-[var(--line)] bg-[var(--panel-2)]">
        <div className="mx-auto grid max-w-[1100px] gap-10 px-6 py-16 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
              {t("radar.consultTitle1")}
              <br />
              <span className="text-[var(--mint)]">{t("radar.consultTitle2")}</span>
            </h2>
            <p className="mt-5 max-w-md text-[14px] leading-relaxed text-[var(--muted)]">
              {t("radar.consultParagraph")}
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Architecture Readiness Audit",
                "Direct Developer Sync (No PMs)",
                "Zero-Cost Prototype Framework",
              ].map((item, i) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[3px] border border-[var(--line)] font-mono text-[11px] text-[var(--mint)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[13.5px] text-[var(--fg)]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="lift-on-hover rounded-[6px] border border-[var(--line)] bg-[var(--panel)] p-6"
          >
            <div className="mb-5 flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#f4917a]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#f6d76b]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--mint)]" />
            </div>

            <label className="mb-1.5 block font-mono text-[10px] tracking-[0.1em] text-[var(--muted)]">
              SYSTEM NAME / COMPANY
            </label>
            <input
              type="text"
              placeholder="ORION_CORE_PRIMARY"
              className="mb-5 w-full rounded-[4px] border border-[var(--line)] bg-black/30 px-3 py-2.5 font-mono text-[13px] text-[var(--fg)] placeholder:text-[var(--muted)]/60 focus:border-[var(--mint)] focus:outline-none"
            />

            <label className="mb-1.5 block font-mono text-[10px] tracking-[0.1em] text-[var(--muted)]">
              ARCHITECTURE TYPE
            </label>
            <select className="mb-5 w-full rounded-[4px] border border-[var(--line)] bg-black/30 px-3 py-2.5 font-mono text-[13px] text-[var(--fg)] focus:border-[var(--mint)] focus:outline-none">
              <option>SELECT_PROTOCOL</option>
              <option>Microservices_Mesh</option>
              <option>Monolith_Refactor</option>
              <option>Serverless_Edge</option>
            </select>

            <label className="mb-1.5 block font-mono text-[10px] tracking-[0.1em] text-[var(--muted)]">
              SECURITY PROTOCOL
            </label>
            <div className="mb-6 grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setProtocol("encrypted")}
                className={`rounded-[4px] border px-3 py-2.5 font-mono text-[12px] transition-colors ${
                  protocol === "encrypted"
                    ? "border-[var(--mint)] text-[var(--mint)]"
                    : "border-[var(--line)] text-[var(--muted)]"
                }`}
              >
                ENCRYPTED
              </button>
              <button
                type="button"
                onClick={() => setProtocol("clear")}
                className={`rounded-[4px] border px-3 py-2.5 font-mono text-[12px] transition-colors ${
                  protocol === "clear"
                    ? "border-[var(--mint)] text-[var(--mint)]"
                    : "border-[var(--line)] text-[var(--muted)]"
                }`}
              >
                CLEAR_SITE
              </button>
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-[4px] bg-[var(--mint)] py-3 font-mono text-[13px] font-semibold tracking-wide text-[#04120c] transition-colors hover:bg-[var(--mint-bright)]"
            >
              INITIALIZE PROTOCOL
              <Rocket className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-6 py-10 text-center">
        <button
          onClick={() => setRevealed((v) => !v)}
          className="mx-auto flex items-center gap-2 rounded-[4px] border border-[var(--line)] px-5 py-3 font-mono text-[11px] tracking-[0.1em] text-[var(--muted)] transition-colors hover:border-[var(--mint)] hover:text-[var(--mint)]"
        >
          <ChevronDown
            className={`h-3.5 w-3.5 transition-transform ${revealed ? "rotate-180" : ""}`}
          />
          {t("radar.reveal")}
        </button>

        {revealed && (
          <div className="mx-auto mt-6 max-w-lg rounded-[6px] border border-[var(--line)] bg-[var(--panel)] p-6 text-left">
            <p className="font-mono text-[10px] tracking-[0.1em] text-[var(--mint)]">
              ENGINEERING_CELL // TRINITY
            </p>
            <p className="mt-3 text-[13.5px] leading-relaxed text-[var(--muted)]">
              Three architects, zero intermediaries. Every consultation is
              routed directly to the engineer who will build your system —
              not a sales rep.
            </p>
          </div>
        )}
      </section>

      <Footer status="[SEC_STATUS: ENCRYPTED]" />
    </>
  );
}
