import { TrendingDown, TrendingUp, ShieldAlert, ShieldCheck, Wallet, CircleDollarSign, CheckCircle2 } from "lucide-react";

import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";

const FILTERS = ["view-all", "fin-tech", "healthcare"];

type MetricIconKind = "alert" | "check" | "wallet" | "coin" | "down" | "up";

const PROJECTS: {
  title: string;
  tag: string;
  tagVariant: "mint" | "violet";
  image: string;
  before: { value: string; label: string; icon: MetricIconKind };
  after: { value: string; label: string; icon: MetricIconKind };
  beforeLabel: string;
  afterLabel: string;
  log: string;
  detail: string;
}[] = [
  {
    title: "NeoLedger Architecture",
    tag: "FIN_TECH",
    tagVariant: "mint",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop",
    before: { value: "4.2s", label: "Latency Average", icon: "down" },
    after: { value: "0.08s", label: "98% Improvement", icon: "up" },
    beforeLabel: "BEFORE_METRICS",
    afterLabel: "AFTER_OPTIMIZATION",
    log: "LOG_DETAILS_SEQ: 0994-A",
    detail:
      "Re-engineered core ledger synchronization engine. Implemented zero-copy memory mapping for high-frequency transaction validation. Resulted in 15k TPS sustained throughput.",
  },
  {
    title: "OmniHealth Sync",
    tag: "HEALTHCARE",
    tagVariant: "violet",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=400&fit=crop",
    before: { value: "89%", label: "System Uptime", icon: "alert" },
    after: { value: "99.99%", label: "Fail-safe Active", icon: "check" },
    beforeLabel: "LEGACY_STABILITY",
    afterLabel: "TRINITY_UPTIME",
    log: "LOG_DETAILS_SEQ: 2210-C",
    detail:
      "Enterprise medical record interoperability layer. Built using Rust-based microservices to ensure memory safety and HIPAA-compliant data encryption at rest and in transit.",
  },
  {
    title: "Auto-Scale Core",
    tag: "INFRASTRUCTURE",
    tagVariant: "mint",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    before: { value: "$140k", label: "Monthly Infrastructure", icon: "wallet" },
    after: { value: "$32k", label: "77% Cost Reduction", icon: "coin" },
    beforeLabel: "BASELINE_COST",
    afterLabel: "OPTIMIZED_BURN",
    log: "LOG_DETAILS_SEQ: 5541-B",
    detail:
      "Automated Kubernetes orchestration framework with predictive resource allocation. Utilizes AI to forecast traffic spikes and spin up containers 40% faster than standard HPA.",
  },
];

function MetricIcon({ icon }: { icon: MetricIconKind }) {
  const cls = "h-4 w-4";
  switch (icon) {
    case "alert":
      return <ShieldAlert className={`${cls} text-[var(--coral)]`} />;
    case "check":
      return <ShieldCheck className={`${cls} text-[var(--mint)]`} />;
    case "wallet":
      return <Wallet className={`${cls} text-[var(--coral)]`} />;
    case "coin":
      return <CircleDollarSign className={`${cls} text-[var(--mint)]`} />;
    case "down":
      return <TrendingDown className={`${cls} text-[var(--coral)]`} />;
    default:
      return <TrendingUp className={`${cls} text-[var(--mint)]`} />;
  }
}

export default function TerminalPage() {
  return (
    <>
      <section className="border-b border-[var(--line)]">
        <div className="mx-auto max-w-[1100px] px-6 py-16">
          <Reveal className="flex flex-col justify-between gap-8 lg:flex-row lg:items-start">
            <div>
              <p className="mb-4 font-mono text-[11px] tracking-[0.2em] text-[var(--mint)]">
                ARCHIVE.INDEX_04
              </p>
              <h1 className="max-w-xl font-display text-4xl font-bold leading-[1.1] sm:text-5xl">
                Project_Catalogue
              </h1>
              <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-[var(--muted)]">
                A curated repository of high-precision engineering solutions.
                Optimized for scalability, reliability, and technical
                excellence.
              </p>
            </div>

            <div className="w-full max-w-[220px] rounded-[6px] border border-[var(--line)] bg-[var(--panel)] p-5">
              <div className="mb-4 flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#f4917a]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#f6d76b]" />
                <span className="pulse-glow h-2.5 w-2.5 rounded-full bg-[var(--mint)]" />
              </div>
              <div className="space-y-1.5 font-mono text-[11px] text-[var(--muted)]">
                <div>{"> CPU_LOAD: 12.4%"}</div>
                <div>{"> MEM_AVAIL: 64GB"}</div>
                <div>
                  {"> STATUS: "}
                  <span className="text-[var(--mint)]">READY</span>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <span className="font-mono text-[12px] text-[var(--muted)]">
              Filter_Select:
            </span>
            {FILTERS.map((f, i) => (
              <button
                key={f}
                className={
                  "rounded-[3px] border px-4 py-1.5 font-mono text-[11px] transition-all duration-200 hover:scale-[1.04] " +
                  (i === 0
                    ? "border-[var(--mint)] text-[var(--mint)]"
                    : "border-[var(--line)] text-[var(--muted)] hover:text-[var(--fg)]")
                }
              >
                [ {f} ]
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 120}
              className="lift-on-hover overflow-hidden rounded-[6px] border border-[var(--line)] bg-[var(--panel)]"
            >
              <div
                className="relative h-56 w-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${p.image})` }}
              >
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative flex h-full items-start p-3">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#f4917a]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#f6d76b]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[var(--mint)]" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="font-display text-xl font-semibold">
                    {p.title}
                  </h3>
                  <span
                    className={
                      "rounded-[3px] border px-2 py-1 font-mono text-[10px] tracking-wider " +
                      (p.tagVariant === "violet"
                        ? "border-violet-400/40 bg-violet-400/10 text-violet-300"
                        : "border-[var(--mint)]/40 bg-[var(--mint)]/10 text-[var(--mint)]")
                    }
                  >
                    {p.tag}
                  </span>
                </div>

                <div className="mb-5 grid grid-cols-2 gap-4">
                  <div>
                    <div className="mb-1 font-mono text-[10px] tracking-wide text-[var(--muted)]">
                      {p.beforeLabel}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MetricIcon icon={p.before.icon} />
                      <span className="font-display text-2xl font-bold text-[var(--coral)]">
                        {p.before.value}
                      </span>
                    </div>
                    <div className="mt-1 text-[11px] text-[var(--muted)]">
                      {p.before.label}
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 font-mono text-[10px] tracking-wide text-[var(--muted)]">
                      {p.afterLabel}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MetricIcon icon={p.after.icon} />
                      <span className="font-display text-2xl font-bold text-[var(--mint)]">
                        {p.after.value}
                      </span>
                    </div>
                    <div className="mt-1 text-[11px] text-[var(--muted)]">
                      {p.after.label}
                    </div>
                  </div>
                </div>

                <div className="rounded-[4px] bg-black/30 p-4">
                  <div className="mb-1.5 font-mono text-[10px] text-[var(--muted)]">
                    {"// " + p.log}
                  </div>
                  <p className="font-mono text-[10.5px] leading-relaxed text-[var(--muted)]">
                    {p.detail}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal
            delay={PROJECTS.length * 120}
            className="flex min-h-[440px] flex-col items-center justify-center rounded-[6px] border border-dashed border-[var(--line)] p-6"
          >
            <CheckCircle2 className="mb-4 h-6 w-6 text-[var(--muted)]" />
            <span className="font-mono text-[12px] tracking-[0.1em] text-[var(--muted)]">
              AWAITING_NEXT_COMMAND...
            </span>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}