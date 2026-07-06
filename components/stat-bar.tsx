"use client";

import { useEffect, useRef, useState } from "react";

export function StatBar({ pct }: { pct: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="h-1.5 w-full rounded-full bg-black/30">
      <div
        className="h-1.5 rounded-full bg-[var(--mint)] transition-[width] duration-[1200ms] ease-out"
        style={{ width: visible ? `${pct}%` : "0%" }}
      />
    </div>
  );
}
