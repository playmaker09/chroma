import { ProcessStepBadge } from "@/icons";

const steps = [
  {
    step: 1 as const,
    title: "Discover",
    body: "We learn how you work today—users, workflows, systems, and constraints—then define scope, risks, and what “done” means before we quote or write code.",
  },
  {
    step: 2 as const,
    title: "Design & plan",
    body: "We align on flows, interfaces, and the technical shape of the build: data, integrations, permissions, and milestones—so design and engineering share one target.",
  },
  {
    step: 3 as const,
    title: "Build & ship",
    body: "We implement in focused increments with regular demos and staging you can click through—integrations, QA, and launch prep included, not a big-bang handoff.",
  },
  {
    step: 4 as const,
    title: "Launch & improve",
    body: "After go-live we monitor stability, fix what shows up in the wild, and prioritize improvements from real usage—performance, UX, and the metrics you care about.",
  },
];

export function Process() {
  return (
    <section id="process">
      <div className="mx-auto w-full max-w-[1440px] px-5 pb-16 md:px-10 md:pb-20 lg:px-20 lg:pb-20">
        <h2 className="text-heading text-left text-3xl font-semibold tracking-tight md:text-5xl">
          Our Process
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {steps.map((step) => (
            <article key={step.title} className="glass-card p-6">
              <ProcessStepBadge step={step.step} className="h-[29px] w-auto" />
              <h3 className="text-heading mt-4 text-lg font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
