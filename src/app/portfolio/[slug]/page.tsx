import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";

import { getProjectBySlug, getProjects } from "@/sanity/queries/projects";
import { urlFor } from "@/sanity/image";
import type { SanityProject } from "@/sanity/types";

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function Project({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const project: SanityProject | null = await getProjectBySlug(
    resolvedParams.slug,
  );

  if (!project) notFound();

  return (
    <section className="project-detail-page" aria-labelledby="project-title">
      <div className="project-detail__inner">
        <nav className="project-detail__back-nav" aria-label="Project navigation">
          <Link href="/portfolio" className="project-detail__back-link">
            <span aria-hidden="true">←</span> Back to Projects
          </Link>
        </nav>

        <header className="project-detail__header">
          <p className="project-detail__eyebrow">Portfolio / Project Detail</p>
          <h1 id="project-title" className="project-detail__title">
            {project.title}
          </h1>
          <p className="project-detail__summary">{project.shortDescription}</p>
        </header>

        {project.coverImage?.asset && (
          <Image
            src={urlFor(project.coverImage).width(1400).height(788).url()}
            alt={project.coverImage.alt ?? project.title}
            width={1400}
            height={788}
            className="project-detail__cover"
          />
        )}

        <div
          className={`project-detail__body${
            project.detailedDescription
              ? ""
              : " project-detail__body--without-description"
          }`}
        >
          <div className="project-detail__description">
            {project.detailedDescription && (
              <PortableText value={project.detailedDescription} />
            )}
          </div>

          <aside className="project-detail__meta" aria-label="Project details">
            <section className="project-detail__meta-section">
              <h2 className="project-detail__meta-label">Technology</h2>
              <ul className="project-detail__stack">
                {project.stack.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </section>

            {(project.githubUrl || project.liveDemoUrl) && (
              <section className="project-detail__meta-section">
                <h2 className="project-detail__meta-label">Explore</h2>
                <div className="project-detail__links">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub <span aria-hidden="true">↗</span>
                    </a>
                  )}
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live demo <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </section>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}
