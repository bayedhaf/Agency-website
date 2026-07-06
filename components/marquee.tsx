import type { ReactNode } from "react";

export function Marquee({ children }: { children: ReactNode }) {
  return (
    <div className="marquee-wrap overflow-hidden">
      <div className="marquee-track">
        <div className="flex items-center gap-14 pr-14">{children}</div>
        <div className="flex items-center gap-14 pr-14" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
