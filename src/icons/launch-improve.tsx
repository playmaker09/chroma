import type { IconProps } from "./types";

export function LaunchImproveIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden
    >
      <path d="M12 3v6M12 15v6M5 12H3M21 12h-2" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
