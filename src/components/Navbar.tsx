"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { MenuIcon } from "@/icons";
import { NavCta } from "./NavCta";
import { NavLogo } from "./NavLogo";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "/", label: "Home", hash: "" },
  { href: "/#services", label: "Our Services", hash: "#services" },
  { href: "/#projects", label: "Client Projects", hash: "#projects" },
  { href: "/#process", label: "Our Process", hash: "#process" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const syncFromUrl = () => {
      if (pathname === "/") {
        setActiveHash(window.location.hash);
      } else {
        setActiveHash("");
      }
    };
    syncFromUrl();
    window.addEventListener("hashchange", syncFromUrl);
    return () => window.removeEventListener("hashchange", syncFromUrl);
  }, [pathname]);

  const isActive = useCallback(
    (link: (typeof links)[number]) => {
      if (pathname !== "/") {
        return false;
      }
      if (!link.hash) {
        return activeHash === "" || activeHash === "#";
      }
      return activeHash === link.hash;
    },
    [pathname, activeHash],
  );

  const navigate = useCallback(
    (link: (typeof links)[number], event: React.MouseEvent<HTMLAnchorElement>) => {
      setOpen(false);
      setActiveHash(link.hash);

      if (pathname !== "/") {
        return;
      }

      event.preventDefault();

      if (!link.hash) {
        window.history.pushState(null, "", "/");
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      window.history.pushState(null, "", link.hash);
      document.getElementById(link.hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
    },
    [pathname],
  );

  function linkClassName(active: boolean) {
    const base = "rounded-full px-4 py-2 text-sm transition";
    return active
      ? `${base} bg-[var(--nav-link-active-bg)] font-medium text-[var(--nav-link-active-fg)]`
      : `${base} font-normal text-white hover:text-white/90`;
  }

  function mobileLinkClassName(active: boolean) {
    return active
      ? "rounded-full bg-[var(--nav-link-active-bg)] px-4 py-2.5 text-sm font-medium text-[var(--nav-link-active-fg)]"
      : "rounded-lg px-4 py-2.5 text-sm font-normal text-white/80 hover:bg-white/10 hover:text-white";
  }

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-[15px]"
      style={{
        background: "var(--nav-bg)",
        borderColor: "var(--nav-border)",
      }}
    >
      <div className="relative mx-auto flex w-full max-w-[1440px] items-center justify-between px-5 py-6 lg:px-20">
        <NavLogo />

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-2 lg:flex">
          {links.map((link) => {
            const active = isActive(link);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={(event) => navigate(link, event)}
                className={linkClassName(active)}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle onDarkNav />
          <NavCta />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle onDarkNav />
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white"
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </div>

      {open ? (
        <div
          className="border-t px-5 py-4 lg:hidden lg:px-20"
          style={{
            borderColor: "var(--nav-border)",
            background: "var(--nav-bg)",
          }}
        >
          <nav className="flex flex-col gap-2">
            {links.map((link) => {
              const active = isActive(link);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(event) => navigate(link, event)}
                  className={mobileLinkClassName(active)}
                >
                  {link.label}
                </Link>
              );
            })}
            <NavCta className="mt-2 w-full justify-center" />
          </nav>
        </div>
      ) : null}
    </header>
  );
}
