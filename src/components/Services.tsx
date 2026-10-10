import Link from "next/link";
import type { ReactNode } from "react";
import {
  ExploreChevronIcon,
  MobileProductIcon,
  ProductUxIcon,
  SaasPlatformIcon,
  SystemModernizationIcon,
} from "@/icons";

const services: {
  title: string;
  body: ReactNode;
  Icon: typeof ProductUxIcon;
}[] = [
  {
    title: "Product & UX",
    body: (
      <>
        We turn rough ideas, broken workflows, and{" "}
        <strong className="font-semibold text-foreground">
          difficult user journeys into clear, usable product experiences
        </strong>
        —from UX flows and interfaces to production-ready frontends.
      </>
    ),
    Icon: ProductUxIcon,
  },
  {
    title: "SaaS & Platform",
    body: (
      <>
        We build multi-tenant products, billing-ready architecture, and dashboards around the{" "}
        <strong className="font-semibold text-foreground">
          operational workflows they actually require
        </strong>
        —so platforms scale with your customers, not against them.
      </>
    ),
    Icon: SaasPlatformIcon,
  },
  {
    title: "System Modernization",
    body: (
      <>
        We replace brittle processes, legacy applications, and disconnected tools with{" "}
        <strong className="font-semibold text-foreground">
          maintainable systems that automate operations
        </strong>{" "}
        and give teams better control over their data.
      </>
    ),
    Icon: SystemModernizationIcon,
  },
  {
    title: "Mobile Product",
    body: (
      <>
        We design and build mobile applications that connect cleanly with your existing systems,
        APIs, and business workflows—
        <strong className="font-semibold text-foreground">built for real-world usage</strong>, not
        just app-store presence.
      </>
    ),
    Icon: MobileProductIcon,
  },
];

export function Services() {
  return (
    <section id="services" className="section-glow-services">
      <div className="mx-auto w-full max-w-[1440px] px-5 pb-16 md:px-10 md:pb-20 lg:px-20 lg:pb-20">
        <h2 className="text-heading text-left text-3xl font-semibold tracking-tight md:text-5xl">
          Services We Offer
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-8">
          {services.map((service) => (
            <article
              key={service.title}
              className="glass-card relative min-h-[220px] p-6 pb-12"
            >
              <div className="text-muted">
                <service.Icon />
              </div>
              <h3 className="text-heading mt-5 text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{service.body}</p>
              <Link
                href="/contact"
                className="explore-link absolute bottom-6 left-6 inline-flex flex-row items-center gap-1"
              >
                Explore
                <ExploreChevronIcon />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
