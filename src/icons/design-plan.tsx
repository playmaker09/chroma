import type { IconProps } from "./types";

export function DesignPlanIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden
    >
      <path d="M4 6h16M4 12h10M4 18h7" />
    </svg>
  );
}
