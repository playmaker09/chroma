"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@/icons";

type ThemeToggleProps = {
  onDarkNav?: boolean;
};

export function ThemeToggle({ onDarkNav = false }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`flex h-10 w-10 items-center justify-center rounded-full border transition ${
        onDarkNav
          ? "border-white/20 text-white hover:bg-white/10"
          : "border-border text-foreground hover:bg-surface-muted"
      }`}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
