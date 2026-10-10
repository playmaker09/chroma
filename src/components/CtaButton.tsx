import Link from "next/link";
import { CtaArrowIcon } from "@/icons";

export function CtaButton() {
  return (
    <Link
      href="/contact"
      className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-950 transition hover:bg-white/90"
    >
      Email us
      <CtaArrowIcon className="h-3 w-3 text-neutral-950" />
    </Link>
  );
}
