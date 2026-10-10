import Link from "next/link";
import { CtaArrowIcon } from "@/icons";

export function NavCta({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/contact"
      className={`inline-flex items-center gap-2 rounded-xl bg-[var(--nav-link-active-bg)] px-6 py-3 text-sm font-semibold text-[var(--nav-link-active-fg)] transition hover:opacity-90 ${className}`}
    >
      Let&apos;s get working
      <CtaArrowIcon className="h-3 w-3" />
    </Link>
  );
}
