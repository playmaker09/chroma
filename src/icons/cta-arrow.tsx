import type { IconProps } from "./types";

/** Arrow up-right — nav CTA, hero actions, bottom CTA */
export function CtaArrowIcon({ className = "h-3 w-3 shrink-0" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 14"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M9.91614 9.91614V4.08374H4.08374M9.91614 4.08374L4.08374 9.91614"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { CtaArrowIcon as ArrowUpRightIcon };
