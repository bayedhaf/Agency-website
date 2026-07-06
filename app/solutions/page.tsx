import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";

const FLOW = [
  {
    n: "01_AUDIT",
    title: "Discovery & Audit",
    body: "Deep packet inspection of your current architecture to identify performance bottlenecks and security vulnerabilities.",
    lines: [
      "$ gamta audit --deep-scan --verbose",
      "Scanning 842 endpoints...",
      "[OK] Vulnerability check complete.",
    ],
  },
  {
    n: "02_SPRINT",
    title: "Sprint Development",
    body: "Rapid iteration cycles using our proprietary Trinity Framework to build scalable, high-concurrency systems.",
    lines: [
      "$ gamta dev --mode=sprint",
      "Compiling modules...100%",
      "[OK] Integration tests passed.",
    ],
  },
  {
    n: "03_LAUNCH",
    title: "Launch & Maintenance",
    body: "Continuous CI/CD deployment with 24/7 automated health monitoring and redundant failover protocols.",
    lines: [
      "$ gamta deploy --env=prod",
      "Deploying to 3 regions...",
      "[OK] System operational.",
    ],
  },
];

const SERVICES = [
  {
    tag: "WEB_CORE",
    title: "Web Development",
    body: "Performant single-page applications built for speed, accessibility, and complex state management.",
    bullets: ["REACT_NEXT_SYSTEMS", "TAILWIND_ARCHITECTURE", "GRAPHQL_DATA_LAYERS"],
    image:
      "linear-gradient(135deg, #10161f 0%, #0b0f16 100%)",
  },
  {
    tag: "MOBILE_OS",
    title: "Mobile Systems",
    body: "Native-grade cross-platform mobile solutions that provide high-tier user experiences on iOS and Android.",
    bullets: ["NATIVE_BRIDGE_PROTOCOLS", "OFFLINE_FIRST_SYNC", "REALTIME_PUSH_CLUSTER"],
    image:
      "linear-gradient(135deg, #12141e 0%, #0b0d14 100%)",
  },
  {
    tag: "CLOUD_INFRA",
    title: "Cloud Infrastructure",
    body: "Automated serverless scaling and robust container orchestration for global enterprise workloads.",
    bullets: ["KUBERNETES_ORCHESTRATION", "TERRAFORM_IAC_MODULAR", "EDGE_COMPUTE_MESH"],
    image:
      "linear-gradient(135deg, #1a1130 0%, #0c0a16 100%)",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <section className="border-b border-[var(--line)]">
        <Reveal className="mx-auto max-w-[1100px] px-6 py-16">
          <p className="mb-4 font-mono text-[11px] tracking-[0.2em] text-[var(--mint)]">
            {"// SERVICES.MANIFEST"}
          </p>
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <h1 className="max-w-2xl font-display text-4xl font-bold leading-[1.1] sm:text-5xl">
              Digital sovereignty through{" "}
              <span className="text-[var(--mint)]">elite engineering.</span>
            </h1>
            <div className="flex items-center gap-4 lg:flex-col lg:items-end lg:border-l lg:border-[var(--line)] lg:pl-6">
              <span className="font-display text-4xl font-bold text-[var(--mint)]">
                03.0
              </span>
              <span className="font-mono text-[10px] tracking-[0.15em] text-[var(--muted)]">
                OPERATIONAL CORE
              </span>
            </div>
          </div>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-[var(--muted)]">
            We build immutable digital foundations for enterprises that
            require absolute technical precision. Our Trinity architecture
            ensures every line of code serves a strategic objective.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1100px] px-6 py-16">
        <div className="mb-8 flex items-center justify-between">
          <span className="font-mono text-[11px] tracking-[0.15em] text-[var(--fg)]">
            SYSTEM_DEPLOYMENT_FLOW
          </span>
          <span className="font-mono text-[11px] tracking-[0.15em] text-[var(--mint)]">
            {"{ EXECUTING_CYCLE }"}
          </span>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {FLOW.map((step, i) => (
            <Reveal
              key={step.n}
              delay={i * 120}
              className="lift-on-hover flex flex-col rounded-[6px] border border-[var(--line)] bg-[var(--panel)] p-6"
            >
              <span className="mb-4 font-mono text-[12px] font-medium text-[var(--mint)]">
                {step.n}
              </span>
              <h3 className="mb-2 font-display text-lg font-semibold">
                {step.title}
              </h3>
              <p className="mb-6 flex-1 text-[13.5px] leading-relaxed text-[var(--muted)]">
                {step.body}
              </p>
              <div className="rounded-[4px] bg-black/30 p-3 font-mono text-[10.5px] leading-relaxed text-[var(--muted)]">
                {step.lines.map((line, i) => (
                  <div key={i} className={i === 0 ? "text-[var(--mint)]" : ""}>
                    {line}
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-6 pb-20">
        <div className="grid gap-6 sm:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal
              key={s.tag}
              delay={i * 120}
              className="lift-on-hover overflow-hidden rounded-[6px] border border-[var(--line)] bg-[var(--panel)]"
            >
              <div
                className="h-36 border-b border-[var(--line)]"
                style={{ background: s.image }}
              />
              <div className="p-6">
                <span
                  className={
                    "mb-4 inline-block rounded-[3px] border px-2 py-1 font-mono text-[10px] tracking-wider " +
                    (s.tag === "MOBILE_OS"
                      ? "border-violet-400/40 bg-violet-400/10 text-violet-300"
                      : "border-[var(--mint)]/40 bg-[var(--mint)]/10 text-[var(--mint)]")
                  }
                >
                  {s.tag}
                </span>
                <h3 className="mb-2 font-display text-lg font-semibold">
                  {s.title}
                </h3>
                <p className="mb-5 text-[13.5px] leading-relaxed text-[var(--muted)]">
                  {s.body}
                </p>
                <ul className="space-y-1.5">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="font-mono text-[11px] text-[var(--mint)]"
                    >
                      {"> "}
                      <span className="text-[var(--muted)]">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-6 pb-20">
        <Reveal className="rounded-[6px] border border-[var(--line)] bg-[var(--panel)] px-6 py-20 text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Ready to optimize your{" "}
            <span className="text-[var(--mint)]">architecture?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[15px] text-[var(--muted)]">
            Join the ranks of elite firms using GAMTA systems to power their
            digital frontlines. Precision is only a ping away.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg">Commence_Audit</Button>
            <Button size="lg" variant="outline">
              View_API_Docs
            </Button>
          </div>
          <Link
            href="/trio"
            className="mt-6 inline-block font-mono text-[11px] tracking-[0.1em] text-[var(--muted)] underline-offset-4 hover:text-[var(--mint)] hover:underline"
          >
            Meet_The_Trio →
          </Link>
        </Reveal>
      </section>

      <Footer status="Latency: 12ms | Uptime: 99.999%" />
    </>
  );
}
