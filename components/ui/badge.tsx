import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-[3px] border px-2 py-1 font-mono text-[10px] font-medium tracking-wider uppercase",
  {
    variants: {
      variant: {
        mint: "border-[var(--mint)]/40 bg-[var(--mint)]/10 text-[var(--mint)]",
        violet: "border-violet-400/40 bg-violet-400/10 text-violet-300",
        neutral: "border-[var(--line)] bg-white/[0.02] text-[var(--muted)]",
      },
    },
    defaultVariants: {
      variant: "neutral",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
