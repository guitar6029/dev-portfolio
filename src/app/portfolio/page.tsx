import Image from "next/image";
import Link from "next/link";

import { getProjects } from "@/sanity/queries/projects";

export default async function Projects() {
  const projects = await getProjects();

  return (
    <section className="projects-page" aria-labelledby="projects-heading">
      <div className="projects-page__inner">
        <div className="projects-page__intro-layout">
          <div className="projects-page__intro-copy">
            <header className="projects-page__intro">
              <p className="projects-page__eyebrow">Portfolio / 01</p>
              <h1 id="projects-heading" className="projects-page__title">
                Selected Projects
              </h1>
              <p className="projects-page__summary">
                A focused selection of interfaces, systems, and digital products.
              </p>
            </header>
          </div>

          <Image
            src="/images/decorations/retro-desk-space.png"
            alt=""
            aria-hidden="true"
            width={1774}
            height={887}
            sizes="(max-width: 900px) 0px, 52vw"
            className="projects-page__art"
          />
        </div>

        {projects.length === 0 ? (
          <p className="projects-page__empty">No projects published yet.</p>
        ) : (
          <div className="projects-list" aria-label="Selected projects">
            {projects.map((project, index) => (
              <Link
                href={`/portfolio/${project.slug}`}
                key={project.slug}
                className="project-row"
              >
                <span className="project-row__index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="project-row__content">
                  <span className="project-row__title">{project.title}</span>
                  <span className="project-row__description">
                    {project.shortDescription}
                  </span>
                  {project.stack.length > 0 && (
                    <span className="project-row__stack">
                      {project.stack.join(" / ")}
                    </span>
                  )}
                </span>
                <span className="project-row__link" aria-hidden="true">
                  View project <span>↗</span>
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
