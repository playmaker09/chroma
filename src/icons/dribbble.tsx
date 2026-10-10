import type { IconProps } from "./types";

export function DribbbleIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 3 4 7 4 9s-1.5 6-4 9M12 3c-2.5 3-4 7-4 9s1.5 6 4 9" />
    </svg>
  );
}
