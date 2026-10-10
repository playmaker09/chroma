import type { IconProps } from "./types";

export function ProductUxIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M16.0003 19.9991V3.99915C16.0003 3.46871 15.7895 2.96 15.4144 2.58493C15.0393 2.20986 14.5306 1.99915 14.0001 1.99915H9.99979C9.46931 1.99915 8.96056 2.20986 8.58546 2.58493C8.21036 2.96 7.99963 3.46871 7.99963 3.99915V19.9991M3.99931 5.99915H20.0006C21.1052 5.99915 22.0007 6.89458 22.0007 7.99915V17.9991C22.0007 19.1037 21.1052 19.9991 20.0006 19.9991H3.99931C2.89465 19.9991 1.99915 19.1037 1.99915 17.9991V7.99915C1.99915 6.89458 2.89465 5.99915 3.99931 5.99915Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
