"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { Footer } from "@/components/footer";
import { useApp } from "@/components/providers";
import { dictionaries } from "@/lib/i18n";
import { Reveal } from "@/components/reveal";

export default function FaqPage() {
  const { t, lang } = useApp();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = dictionaries[lang].faq.items;

  return (
    <>
      <section className="border-b border-[var(--line)]">
        <Reveal className="mx-auto max-w-[820px] px-6 py-16 text-center">
          <p className="mb-4 font-mono text-[11px] tracking-[0.2em] text-[var(--mint)]">
            {t("faq.eyebrow")}
          </p>
          <h1 className="font-display text-4xl font-bold leading-[1.1] sm:text-5xl">
            {t("faq.title")}
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-[var(--muted)]">
            {t("faq.paragraph")}
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[760px] px-6 py-16">
        <div className="space-y-3">
          {items.map((item, i) => {
            const open = openIndex === i;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-[6px] border border-[var(--line)] bg-[var(--panel)]"
              >
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-display text-[15px] font-semibold">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-[var(--mint)] transition-transform ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {open && (
                  <div className="px-5 pb-5">
                    <p className="text-[13.5px] leading-relaxed text-[var(--muted)]">
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </>
  );
}
