import type { IconProps } from "./types";

export function ExploreChevronIcon({ className = "h-2 w-[6px] shrink-0" }: IconProps) {
  return (
    <svg
      viewBox="0 0 6 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M1 7L4 4L1 1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
