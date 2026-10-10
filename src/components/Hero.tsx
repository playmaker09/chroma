import { HeroActions } from "./HeroActions";
import { HeroLogo } from "./HeroLogo";
import { HeroVisual } from "./HeroVisual";

const pillars = [
  {
    title: "UI/UX Design",
    subtitle: "Product-ready and on-brand design",
    body:
      "On-brand look & feel • Easy paths for customers • Layout plans through polished pages • Clickable Figma previews • One consistent style across the site • Mobile & desktop friendly",
  },
  {
    title: "Build & Integrate",
    subtitle: "Ship the product, not just the site",
    body:
      "Responsive web & mobile • Secure data & custom business rules • API & third-party integrations • Payment & booking flows • Production-ready implementation • Launch & build support",
  },
  {
    title: "Ongoing Support",
    subtitle: "Keeping it running & growing",
    body:
      "Content & layout updates • New features & enhancements • Web & mobile maintenance • Design refinements • Bug fixes & performance • Priority support when you need it",
  },
];

export function Hero() {
  return (
    <section className="page-glow relative overflow-hidden">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-12 px-5 pb-16 pt-[120px] lg:px-20 md:pb-20 md:gap-14">
        <HeroLogo />
        <HeroVisual />
      </div>

      <div className="mx-auto w-full max-w-[1440px]">
        <div className="hero-copy">
          <h1 className="text-heading mx-auto max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            Complex Problems.
            <br />
            Elegant Systems.
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-7 text-muted md:text-lg">
            We design and engineer high-performance digital systems, web applications, and mobile
            products that turn complex requirements into elegant, reliable technology. Thoughtful
            architecture, refined experiences, and production-ready execution—without unnecessary
            complexity.
          </p>
          <HeroActions />
        </div>

        <div className="flex flex-col gap-6 px-5 pb-16 text-left md:flex-row md:gap-8 md:px-10 md:pb-20 lg:px-20 lg:pb-20">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="pillar-card">
              <h2 className="pillar-card-title">{pillar.title}</h2>
              <p className="pillar-card-subtitle">{pillar.subtitle}</p>
              <p className="pillar-card-body">{pillar.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
