import { ArrowRight, User } from "lucide-react";

import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { StatBar } from "@/components/stat-bar";
import Image from "next/image";

const TRIO = [
  {
    file: "infrastructure_lead.sh",
    name: "Bayisa Balcha",
    role: "BACKEND & INFRASTRUCTURE",
     image: "/uploads/bbb.jpg",
    body: "Master of distributed systems and zero-latency pipelines. Elias builds the foundations that never fracture.",
  },
  {
    file: "design_architect.tsx",
    name: "Aman Abdala",
    
    role: "FRONTEND & DESIGN ARCHITECT",
     image: "/uploads/aman.jpg",
    body: "Crafting pixel-perfect logic and high-fidelity interactions. Maya bridges the gap between human and machine.",
  },
  {
    file: "system_bridge.py",
    name: "Girma Wekayo",
    role: "SYSTEM ARCHITECT & THE BRIDGE",
     image: "/uploads/girma_pro.png",
    body: "The glue between architecture and execution. Kaelen orchestrates the flow of data across the entire stack.",
  },
];

const STATS = [
  { label: "STABILITY", value: "99.9%", pct: 99 },
  { label: "AGILITY", value: "88ms", pct: 90 },
  { label: "SYNC", value: "FULL", pct: 100 },
];

export default function TrioPage() {
  return (
    <>
      <section className="border-b border-[var(--line)]">
        <div className="mx-auto max-w-[1100px] px-6 py-16">
          <Reveal>
            <h1 className="font-display text-5xl font-bold sm:text-6xl">
              The Trio
            </h1>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-[var(--muted)]">
              Three architects. One cohesive engine. We define the
              infrastructure, the interface, and the bridge between concept and
              deployment.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-3">
          {TRIO.map((m, i) => (
            <Reveal
              key={m.name}
              delay={i * 130}
              className="lift-on-hover overflow-hidden rounded-[6px] border border-[var(--line)] bg-[var(--panel)]"
            >
              <div className="flex items-center justify-between border-b border-[var(--line)] px-4 py-2.5">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#f4917a]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#f6d76b]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--mint)]" />
                </div>
                <span className="font-mono text-[10px] text-[var(--muted)]">
                  {m.file}
                </span>
              </div>

              <div className="group flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br from-[#171d27] to-[#0a0d13]">
                <Image
                  src={m.image}
                  alt={m.name}
                  width={350}
                  height={150}
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="font-display text-xl font-semibold">
                  {m.name}
                </h3>
                <p className="mb-3 mt-1 font-mono text-[11px] tracking-[0.1em] text-[var(--mint)]">
                  {m.role}
                </p>
                <p className="text-[13.5px] leading-relaxed text-[var(--muted)]">
                  {m.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--panel-2)]">
        <div className="mx-auto grid max-w-[1100px] gap-10 px-6 py-16 lg:grid-cols-[1fr_1fr_0.7fr] lg:items-center">
          <Reveal>
            <h2 className="font-display text-4xl font-bold leading-tight">
              The
              <br />
              Synergy
            </h2>
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-[var(--muted)]">
              Our collective output is greater than the sum of our commits. We
              operate in a perpetual state of synchronization.
            </p>
          </Reveal>

          <Reveal delay={150} className="space-y-6">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="mb-2 flex items-center justify-between font-mono text-[12px]">
                  <span className="tracking-[0.1em] text-[var(--muted)]">
                    {s.label}
                  </span>
                  <span className="text-[var(--fg)]">{s.value}</span>
                </div>
                <StatBar pct={s.pct} />
              </div>
            ))}
          </Reveal>

          <Reveal delay={300} className="flex flex-col items-center gap-3 text-center">
            <div className="pulse-glow flex h-16 w-16 items-center justify-center rounded-[6px] border border-dashed border-[var(--line)] font-mono text-lg text-[var(--muted)]">
              {"{ }"}
            </div>
            <p className="font-mono text-[10px] leading-relaxed tracking-[0.05em] text-[var(--muted)]">
              CONTINUOUS ARCHITECTURAL
              <br />
              INTEGRITY MONITORING
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-6 py-16">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr_1.4fr]">
          <Reveal>
            <span className="font-mono text-[11px] tracking-[0.15em] text-[var(--mint)]">
              01 // CORE_OPS
            </span>
            <p className="mt-3 text-[13.5px] leading-relaxed text-[var(--muted)]">
              Real-time monitoring of all production environments across
              global nodes.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <span className="font-mono text-[11px] tracking-[0.15em] text-[var(--mint)]">
              02 // DEV_SYNC
            </span>
            <p className="mt-3 text-[13.5px] leading-relaxed text-[var(--muted)]">
              Automated peer-review cycles ensuring code quality remains at an
              elite level.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <button className="group flex w-full items-center justify-between rounded-[6px] border border-[var(--line)] bg-[var(--panel)] px-6 py-6 text-left transition-all duration-300 hover:border-[var(--mint)] hover:shadow-[0_14px_36px_-18px_rgba(79,227,161,0.4)]">
              <div>
                <div className="font-mono text-[12px] font-medium text-[var(--fg)]">
                  OPERATIONAL_STATUS: NOMINAL
                </div>
                <div className="mt-1 font-mono text-[10px] text-[var(--muted)]">
                  GAMTA CORE SYSTEMS ENCRYPTED
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-[var(--muted)] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[var(--mint)]" />
            </button>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
