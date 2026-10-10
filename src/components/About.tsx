export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20 md:px-8">
      <p className="section-kicker text-xs font-medium uppercase text-muted">About</p>
      <div className="mt-4 grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
        <h2 className="max-w-xl text-3xl font-semibold tracking-tight md:text-5xl">
          A product studio for serious software.
        </h2>
        <p className="max-w-lg text-base leading-7 text-muted">
          Based in Taguig, Chroma partners with founders and operators to design, build, and
          modernize digital products. We care about craft, but we care more about systems that
          keep working when the problems get harder.
        </p>
      </div>
    </section>
  );
}
