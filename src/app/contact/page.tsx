import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { EmailIcon, PhoneIcon } from "@/icons";

export const metadata: Metadata = {
  title: "Contact — Chroma",
  description: "Start a project conversation with Chroma.",
};

const contactGroups = [
  {
    label: "Email",
    Icon: EmailIcon,
    items: [
      {
        value: "angeles.ckloie@gmail.com",
        href: "mailto:angeles.ckloie@gmail.com",
      },
      {
        value: "mendiola.lespaul.dev@gmail.com",
        href: "mailto:mendiola.lespaul.dev@gmail.com",
      },
    ],
  },
  {
    label: "Phone (+63)",
    Icon: PhoneIcon,
    items: [
      { value: "949 5604 561", href: "tel:+639495604561" },
      { value: "961 2528 229", href: "tel:+639612528229" },
    ],
  },
];

export default function ContactPage() {
  return (
    <section className="page-glow">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-16 md:grid-cols-[0.9fr_1.1fr] md:items-start md:px-8 md:py-24">
        <aside className="glass-card p-6 md:p-8">
          <h1 className="text-heading text-2xl font-semibold tracking-tight">Contact Information</h1>
          <p className="mt-3 text-sm leading-6 text-muted">
            Tell us about the product, the constraint, or the opportunity. We typically reply
            within one business day.
          </p>
          <ul className="mt-8 space-y-5">
            {contactGroups.map((group) => (
              <li key={group.label} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 text-muted">
                  <group.Icon />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                    {group.label}
                  </p>
                  <div className="mt-1 space-y-1">
                    {group.items.map((item) => (
                      <a
                        key={item.value}
                        href={item.href}
                        className="block text-foreground hover:opacity-80"
                      >
                        {item.value}
                      </a>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </aside>
        <ContactForm />
      </div>
    </section>
  );
}
