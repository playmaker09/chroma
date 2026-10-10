import type { IconProps } from "./types";

export function PhoneIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden
    >
      <path d="M6.5 3.8h2.4l1.3 3.2-1.7 1.2a12.2 12.2 0 0 0 6.3 6.3l1.2-1.7 3.2 1.3v2.4c0 .9-.7 1.7-1.6 1.8-8.2.8-15-6-14.2-14.2.1-.9.9-1.6 1.8-1.6Z" />
    </svg>
  );
}
