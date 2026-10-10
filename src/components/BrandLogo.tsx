"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
  width?: number;
  height?: number;
  /** Force the dark-theme asset (e.g. always on a dark bar). */
  onDarkSurface?: boolean;
};

export function BrandLogo({
  className = "",
  priority = false,
  width = 1280,
  height = 324,
  onDarkSurface = false,
}: BrandLogoProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const useDarkAsset =
    onDarkSurface || (mounted ? resolvedTheme === "dark" : true);

  const src = useDarkAsset ? "/brand-dark.png" : "/brand-light.png";

  return (
    <span className={`relative inline-flex items-center ${className}`}>
      <Image
        src={src}
        alt="Chroma"
        width={width}
        height={height}
        priority={priority}
        unoptimized
        className="h-auto w-auto max-w-full"
      />
    </span>
  );
}
