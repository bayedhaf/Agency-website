"use client";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useApp } from "@/components/providers";
import Link from "next/link";

export function HomeHeroText() {
  const { t } = useApp();

  return (
    <>
      <h1 className="max-w-2xl font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
        {t("hero.title1")}
        <br />
        {t("hero.title2")}
      </h1>
      <p className="mt-6 max-w-md text-[15px] leading-relaxed text-[var(--muted)]">
        {t("hero.paragraph")}
      </p>
      <div className="mt-9 flex flex-wrap items-center gap-4">
       <Link href="/initialize"> <Button size="lg">
          {t("hero.cta1")}
          <ArrowRight className="h-4 w-4" />
        </Button>
        </Link>
       <Link href="/solutions">
        <Button size="lg" variant="outline">
          {t("hero.cta2")}
        </Button>
       </Link>
      </div>
    </>
  );
}
