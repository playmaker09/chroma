import Link from "next/link";

export function NavLogo() {
  return (
    <Link href="/" aria-label="Chroma home" className="inline-flex items-center gap-2">
      <span className="h-4 w-4 shrink-0 rounded-full bg-white" aria-hidden />
      <span
        className="text-xl font-bold leading-none text-white"
        style={{ fontFamily: "var(--font-outfit), sans-serif" }}
      >
        Chroma.
      </span>
    </Link>
  );
}
