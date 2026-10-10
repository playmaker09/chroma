import type { IconProps } from "./types";

export function BuildShipIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden
    >
      <path d="M8 6l-4 6 4 6M16 6l4 6-4 6M11 5l2 14" />
    </svg>
  );
}
