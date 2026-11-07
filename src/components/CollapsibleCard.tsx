"use client";

import { useState } from "react";

export default function CollapsibleCard({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-lg border border-border bg-surface transition-colors">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <div>
          <p className="font-mono text-sm font-medium text-ink">{title}</p>
          {subtitle && (
            <p className="mt-0.5 text-xs text-ink-muted">{subtitle}</p>
          )}
        </div>
        <span
          className={`shrink-0 text-ink-muted transition-transform ${
            open ? "rotate-45" : ""
          }`}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      {open && <div className="border-t border-border px-5 py-4">{children}</div>}
    </div>
  );
}
