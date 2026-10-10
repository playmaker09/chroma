import { CtaButton } from "./CtaButton";

export function Cta() {
  return (
    <section className="bg-cta-bg text-cta-fg">
      <div className="mx-auto max-w-4xl px-5 py-20 text-center md:px-8 md:py-24">
        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
          Complex systems demand
          <br />
          serious engineering
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/60 md:text-base">
          We{" "}
          <span className="underline decoration-white/50 underline-offset-4">deliberately</span>{" "}
          limit our engagements each quarter to stay deeply involved in the architecture, product,
          and engineering decisions that matter with our recurring clients.
        </p>
        <CtaButton />
      </div>
    </section>
  );
}
