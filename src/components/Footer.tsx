import { DribbbleIcon, InstagramIcon } from "@/icons";

const social = [
  {
    label: "Instagram",
    href: "#",
    Icon: InstagramIcon,
  },
  {
    label: "Dribbble",
    href: "#",
    Icon: DribbbleIcon,
  },
];

export function Footer() {
  return (
    <footer className="bg-cta-bg text-cta-fg">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-20">
        <div className="border-t border-white/10 pt-8 pb-10">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <p className="text-sm text-white/55">© 2026 Chroma. All rights reserved.</p>
            <div className="flex items-center gap-3">
              {social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white/55 transition hover:bg-white/10 hover:text-white"
                >
                  <item.Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
