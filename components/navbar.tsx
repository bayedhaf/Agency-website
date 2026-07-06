"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  TerminalSquare,
  Menu,
  X,
  Sun,
  Moon,
  Languages,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useApp } from "@/components/providers";

const NAV_KEYS = [
  { key: "system", href: "/" },
  { key: "solutions", href: "/solutions" },
  { key: "terminal", href: "/terminal" },
  { key: "radar", href: "/radar" },
  { key: "legacy", href: "/legacy" },
  { key: "faq", href: "/faq" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const { t, lang, toggleLang, theme, toggleTheme } = useApp();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--bg)]/90 backdrop-blur">
      <div className="mx-auto flex h-[68px] max-w-[1100px] items-center justify-between px-6">
        <Link
          href="/"
          className="font-display text-lg font-bold tracking-[0.08em] text-[var(--fg)]"
          onClick={() => setOpen(false)}
        >
          GAMTA
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_KEYS.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "font-mono text-[11px] tracking-[0.15em] transition-colors",
                  active
                    ? "border-b-2 border-[var(--mint)] pb-4 pt-4 text-[var(--mint)]"
                    : "text-[var(--muted)] hover:text-[var(--fg)]"
                )}
              >
                {t(`nav.${item.key}`)}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={toggleLang}
            aria-label="Switch language"
            className="hidden items-center gap-1.5 rounded-[3px] border border-[var(--line)] px-2 py-1.5 font-mono text-[10px] tracking-widest text-[var(--muted)] transition-colors hover:border-[var(--mint)] hover:text-[var(--mint)] sm:flex"
          >
            <Languages className="h-3.5 w-3.5" />
            {lang === "en" ? "EN" : "AF"}
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "dark" ? t("theme.toggleToLight") : t("theme.toggleToDark")
            }
            className="hidden items-center justify-center rounded-[3px] border border-[var(--line)] p-1.5 text-[var(--muted)] transition-colors hover:border-[var(--mint)] hover:text-[var(--mint)] sm:flex"
          >
            {theme === "dark" ? (
              <Sun className="h-3.5 w-3.5" />
            ) : (
              <Moon className="h-3.5 w-3.5" />
            )}
          </button>

          <TerminalSquare className="hidden h-[18px] w-[18px] text-[var(--muted)] lg:block" />

          <Link href="/initialize" className="hidden sm:block">
            <Button size="sm">{t("nav.initialize")}</Button>
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="flex h-9 w-9 items-center justify-center rounded-[3px] border border-[var(--line)] text-[var(--muted)] md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[var(--line)] bg-[var(--bg)] px-6 py-5 md:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_KEYS.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-[4px] px-3 py-2.5 font-mono text-[12px] tracking-[0.1em]",
                    active
                      ? "bg-[var(--mint)]/10 text-[var(--mint)]"
                      : "text-[var(--muted)] hover:bg-white/[0.03] hover:text-[var(--fg)]"
                  )}
                >
                  {t(`nav.${item.key}`)}
                </Link>
              );
            })}
          </nav>

          <div className="mt-4 flex items-center gap-3 border-t border-[var(--line)] pt-4">
            <button
              type="button"
              onClick={toggleLang}
              className="flex flex-1 items-center justify-center gap-1.5 rounded-[3px] border border-[var(--line)] px-3 py-2 font-mono text-[11px] tracking-widest text-[var(--muted)]"
            >
              <Languages className="h-3.5 w-3.5" />
              {lang === "en" ? "EN" : "AF"}
            </button>
            <button
              type="button"
              onClick={toggleTheme}
              className="flex flex-1 items-center justify-center gap-1.5 rounded-[3px] border border-[var(--line)] px-3 py-2 font-mono text-[11px] tracking-widest text-[var(--muted)]"
            >
              {theme === "dark" ? (
                <Sun className="h-3.5 w-3.5" />
              ) : (
                <Moon className="h-3.5 w-3.5" />
              )}
              {theme === "dark" ? "Light" : "Dark"}
            </button>
          </div>

          <Link href="/initialize" onClick={() => setOpen(false)} className="mt-3 block">
            <Button size="sm" className="w-full">
              {t("nav.initialize")}
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}
