import Image from "next/image";
import { ExploreChevronIcon } from "@/icons";
import { getProjects } from "@/lib/projects";

const projectLinkClassName =
  "explore-link absolute bottom-6 left-6 inline-flex flex-row items-center gap-1";

function ProjectLink({ href }: { href: string | null }) {
  const label = (
    <>
      View project
      <ExploreChevronIcon />
    </>
  );

  if (!href) {
    return (
      <span className={`${projectLinkClassName} cursor-default opacity-70`}>{label}</span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={projectLinkClassName}
    >
      {label}
    </a>
  );
}

export function Projects() {
  const projects = getProjects();

  return (
    <section id="projects">
      <div className="mx-auto w-full max-w-[1440px] px-5 pb-16 md:px-10 md:pb-20 lg:px-20 lg:pb-20">
        <h2 className="text-heading text-left text-3xl font-semibold tracking-tight md:text-5xl">
          Projects
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-8">
        {projects.map((project) => (
          <article key={project.slug} className="glass-card flex flex-col overflow-hidden">
            <div className="relative aspect-[16/10] bg-surface-muted">
              {project.imagePath ? (
                <Image
                  src={project.imagePath}
                  alt={project.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  loading="lazy"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-2 px-6 text-center">
                  <div className="h-24 w-36 rounded-lg border border-border bg-surface shadow-sm" />
                  <p className="text-xs text-muted">Thumbnail coming soon</p>
                </div>
              )}
            </div>
            <div className="relative flex min-h-[180px] flex-1 flex-col p-6 pb-12">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
                {project.category}
              </p>
              <h3 className="text-heading mt-2 text-lg font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{project.body}</p>
              <ProjectLink href={project.href} />
            </div>
          </article>
        ))}
        </div>
      </div>
    </section>
  );
}
