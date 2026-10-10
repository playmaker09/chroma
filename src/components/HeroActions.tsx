"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { CtaArrowIcon } from "@/icons";

export function HeroActions() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  if (isDark) {
    return (
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/contact"
          className="inline-flex items-center gap-1.5 rounded-xl btn-primary px-6 py-3 text-sm font-medium"
        >
          Start Project
          <CtaArrowIcon className="h-3 w-3 shrink-0" />
        </Link>
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1 text-sm font-medium btn-ghost"
        >
          View Case Studies
          <CtaArrowIcon className="h-3 w-3 shrink-0" />
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Link
        href="/contact"
        className="btn-outline-brand inline-flex items-center gap-1 rounded-xl px-6 py-3 text-sm font-medium transition"
      >
        Start Project
        <CtaArrowIcon className="h-3 w-3 shrink-0" />
      </Link>
      <Link
        href="/#projects"
        className="inline-flex items-center gap-1 rounded-xl btn-primary px-6 py-3 text-sm font-medium"
      >
        View Case Studies
        <CtaArrowIcon className="h-3 w-3 shrink-0" />
      </Link>
    </div>
  );
}
