import {
  Braces,
  Cog,
  FileCode2,
  Cloud,
  ShieldCheck,
  Command,
} from "lucide-react";

import { Footer } from "@/components/footer";
import { LaptopShowcase } from "@/components/laptop-showcase";
import { HomeHeroText } from "@/components/home-hero-text";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { Counter } from "@/components/counter";
import { Marquee } from "@/components/marquee";
import Link from "next/link";

const STACK = [
  { label: "REACT_CORE", icon: Braces },
  { label: "NODE_RUNTIME", icon: Cog },
  { label: "PYTHON_ENGINE", icon: FileCode2 },
  { label: "AWS_INFRA", icon: Cloud },
  { label: "SSL_ENCRYPTED", icon: ShieldCheck },
];

const BARS = [18, 34, 26, 44, 60, 40, 68];

const FEATURES = [
  {
    n: "01",
    title: "Integrated Logic",
    body: "Our unified engine consolidates disparate data streams into a single, high-fidelity processing layer designed for massive scale.",
  },
  {
    n: "02",
    title: "Atomic Security",
    body: "Encryption is not a feature—it's the foundation. Every bit of data is validated against our zero-trust development framework.",
  },
  {
    n: "03",
    title: "Adaptive Growth",
    body: "The engine evolves with your requirements, utilizing modular expansion packs that integrate seamlessly into existing clusters.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="bg-grid relative overflow-hidden border-b border-[var(--line)]">
        <LaptopShowcase />

        <div className="relative z-10 mx-auto max-w-[1100px] px-6 pb-24 pt-16">
          <div className="mb-6 flex items-center gap-3">
            <span className="flex items-center gap-1.5 rounded-[3px] border border-[var(--mint)]/40 bg-[var(--mint)]/10 px-2 py-1 font-mono text-[10px] tracking-[0.15em] text-[var(--mint)]">
              <span className="pulse-glow h-1.5 w-1.5 rounded-full bg-[var(--mint)]" />
              SYSTEM V4.0.2
            </span>
            <span className="h-px w-8 bg-[var(--line)]" />
            <span className="font-mono text-[11px] text-[var(--muted)]">
              Uptime: 99.998%
            </span>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <HomeHeroText />
            </div>

            <div className="float-y hidden lg:block">
              <TrinityGlyph />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--line)] py-8">
        <p className="mb-5 text-center font-mono text-[10px] tracking-[0.2em] text-[var(--muted)]">
      GAMTA TECHNOLOGY_STACK // ALWAYS ADVANCING
        </p>
        <Marquee>
          {STACK.map(({ label, icon: Icon }) => (
            <div key={label} className="flex shrink-0 items-center gap-2">
              <Icon className="h-4 w-4 text-[var(--muted)]" />
              <span className="font-mono text-[11px] tracking-[0.1em] text-[var(--muted)]">
                {label}
              </span>
            </div>
          ))}
        </Marquee>
      </section>

      <section className="mx-auto max-w-[1100px] px-6 py-16">
        <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          <Reveal className="lift-on-hover rounded-[6px] border border-[var(--line)] bg-[var(--panel)] p-8">
            <div className="mb-1 flex items-center justify-between">
              <h2 className="font-display text-xl font-semibold">
                Operational Velocity
              </h2>
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#f4917a]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#f6d76b]" />
                <span className="pulse-glow h-2.5 w-2.5 rounded-full bg-[var(--mint)]" />
              </div>
            </div>
            <p className="mb-8 font-mono text-[12px] text-[var(--muted)]">
              Real-time throughput analysis
            </p>

            <div className="mb-10 grid grid-cols-3 gap-6">
              <Metric value={1.2} decimals={1} suffix="ms" label="LATENCY" />
              <Metric value={482} suffix="k" label="REQ/SEC" />
              <Metric value={0.0} decimals={1} suffix="%" label="ERROR RATE" />
            </div>

            <div className="flex h-32 items-end gap-3">
              {BARS.map((h, i) => (
                <div
                  key={i}
                  className="fill-bar flex-1 origin-bottom rounded-t-[2px] transition-[height]"
                  style={{
                    height: `${h}%`,
                    background:
                      i === 4 || i === 6
                        ? "var(--mint)"
                        : "rgba(79, 227, 161, 0.35)",
                    animationDelay: `${i * 70}ms`,
                  }}
                />
              ))}
            </div>
          </Reveal>

          <div className="flex flex-col gap-6">
            <Reveal delay={120} className="lift-on-hover rounded-[6px] border border-[var(--line)] bg-[var(--panel)] p-6">
              <div className="mb-5 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[var(--mint)]" />
                <span className="font-mono text-[11px] tracking-[0.15em] text-[var(--mint)]">
                  CORE_SPECS
                </span>
              </div>
              <dl className="space-y-4">
                <Spec label="Architecture" value="Micro-Triad" />
                <Spec label="Protocol" value="gRPC / TLS 1.3" />
                <Spec label="Deployment" value="Multi-Region" />
              </dl>
            </Reveal>

            <Reveal delay={220}>
             <Link href="/terminal">
              <button className="group flex w-full items-center justify-between rounded-[6px] bg-[var(--mint)] px-6 py-5 text-left transition-all duration-300 hover:bg-[var(--mint-bright)] hover:shadow-[0_14px_36px_-14px_rgba(79,227,161,0.55)]">
                <div>
                  <div className="font-mono text-[12px] font-semibold tracking-wide text-[#04120c]">
                    TERMINAL_ACCESS
                  </div>
                  <div className="font-mono text-[10px] text-[#04120c]/70">
                    Initialize direct shell interface
                  </div>
                </div>
                <Command className="h-4 w-4 text-[#04120c] transition-transform duration-300 group-hover:translate-x-1" />
              </button></Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-6 pb-20">
        <Reveal className="mb-10 text-center">
          <span className="font-mono text-[11px] tracking-[0.2em] text-[var(--mint)]">
            WHY_TEAMS_CHOOSE_GAMTA
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold">
            Built on three engineering pillars.
          </h2>
        </Reveal>
        <div className="grid gap-10 sm:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal
              key={f.n}
              delay={i * 120}
              className="lift-on-hover rounded-[8px] border border-transparent p-5 -m-5"
            >
              <span className="mb-5 inline-block rounded-[3px] border border-[var(--line)] px-2 py-1 font-mono text-[11px] text-[var(--mint)]">
                {f.n}
              </span>
              <h3 className="mb-2 font-display text-lg font-semibold">
                {f.title}
              </h3>
              <p className="text-[14px] leading-relaxed text-[var(--muted)]">
                {f.body}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-6 pb-20">
        <Reveal className="rounded-[6px] border border-[var(--line)] bg-[var(--panel)] px-6 py-20 text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Built for the Elite.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] text-[var(--muted)]">
            Ready to deploy the most sophisticated engine in the current
            development landscape?
          </p>
         <Link href="/initialize">
          <Button size="lg" className="mt-8 transition-transform duration-300 hover:scale-[1.03]">
            Initialize Protocol
          </Button>
         </Link>
        </Reveal>
      </section>

      <Footer />
    </>
  );
}

function Metric({
  value,
  decimals = 0,
  suffix = "",
  label,
}: {
  value: number;
  decimals?: number;
  suffix?: string;
  label: string;
}) {
  return (
    <div>
      <div className="font-display text-3xl font-bold text-[var(--mint)]">
        <Counter value={value} decimals={decimals} suffix={suffix} />
      </div>
      <div className="mt-1 font-mono text-[10px] tracking-[0.1em] text-[var(--muted)]">
        {label}
      </div>
    </div>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between font-mono text-[12px]">
      <dt className="text-[var(--muted)]">{label}</dt>
      <dd className="text-[var(--fg)]">{value}</dd>
    </div>
  );
}

function TrinityGlyph() {
  return (
    <div className="relative mx-auto h-[280px] w-[280px]">
      <div className="absolute left-1/2 top-0 h-[130px] w-[130px] -translate-x-1/2 rounded-[6px] border border-[var(--mint)]/60" />
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full"
        fill="none"
      >
        <rect
          x="20"
          y="55"
          width="160"
          height="130"
          rx="4"
          stroke="var(--mint)"
          strokeOpacity="0.5"
        />
        <path
          d="M100 40 L165 165 L35 165 Z"
          stroke="var(--mint)"
          strokeOpacity="0.6"
        />
        <circle cx="100" cy="65" r="5" fill="var(--mint)" />
        <circle cx="60" cy="150" r="5" fill="var(--mint)" fillOpacity="0.7" />
        <circle cx="140" cy="150" r="5" fill="var(--mint)" fillOpacity="0.7" />
      </svg>
    </div>
  );
}
