"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import { dictionaries, type Lang } from "@/lib/i18n";

type Theme = "dark" | "light";

interface AppContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  t: (path: string) => string;
  theme: Theme;
  toggleTheme: () => void;
}

const AppContext = createContext<AppContextValue | null>(null);

function getByPath(obj: unknown, path: string): unknown {
  return path
    .split(".")
    .reduce<unknown>(
      (acc, key) =>
        acc && typeof acc === "object" ? (acc as Record<string, unknown>)[key] : undefined,
      obj
    );
}

export function Providers({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [theme, setThemeState] = useState<Theme>("dark");

  useEffect(() => {
    const storedLang = localStorage.getItem("gamta-lang") as Lang | null;
    const storedTheme = localStorage.getItem("gamta-theme") as Theme | null;

    /* eslint-disable react-hooks/set-state-in-effect -- one-time hydration from localStorage on mount */
    if (storedLang === "en" || storedLang === "om") {
      setLangState(storedLang);
    }
    if (storedTheme === "dark" || storedTheme === "light") {
      setThemeState(storedTheme);
      document.documentElement.setAttribute("data-theme", storedTheme);
    }
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    localStorage.setItem("gamta-lang", next);
  };

  const toggleLang = () => setLang(lang === "en" ? "om" : "en");

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setThemeState(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("gamta-theme", next);
  };

  const t = (path: string) => {
    const value = getByPath(dictionaries[lang], path);
    return typeof value === "string" ? value : path;
  };

  return (
    <AppContext.Provider value={{ lang, setLang, toggleLang, t, theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error("useApp must be used within <Providers>");
  }
  return ctx;
}
