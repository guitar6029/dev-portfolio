import AbsoluteWrapper from "@/components/AbsoluteWrapper";

import Image from "next/image";
import { PortableText } from "@portabletext/react";
import PanelB from "@/components/Accents/PanelB";
import TechIcon from "@/components/TechIcon";
import { getProjectBySlug, getProjects } from "@/sanity/queries/projects";
import { urlFor } from "@/sanity/image";
import type { SanityProject } from "@/sanity/types";
import type { TechName } from "@/types/Tech";
import { notFound } from "next/navigation";

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
    <div className="relative mt-10 p-4 flex flex-col items-center justify-center gap-3 animate-slide-in-right">
      <AbsoluteWrapper className="top-0 left-20 h-[70vh]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-auto"
          viewBox="0 0 448 3393"
          fill="none"
        >
          <path
            d="M0.5 0V495.555C0.5 498.95 2.22198 502.113 5.07314 503.955L149.927 597.545C152.778 599.387 154.5 602.55 154.5 605.945V1302.95C154.5 1305.84 153.247 1308.59 151.064 1310.49L3.93579 1438.51C1.75312 1440.41 0.5 1443.16 0.5 1446.05V1976.5V2377.49C0.5 2380.64 1.98881 2383.61 4.51666 2385.5L150.483 2494.5C153.011 2496.39 154.5 2499.36 154.5 2502.51V3181.8C154.5 3185.06 156.089 3188.11 158.758 3189.99L447.5 3392.5"
            stroke="var(--cp-purple)"
            strokeWidth={5}
          />
        </svg>
      </AbsoluteWrapper>

      <AbsoluteWrapper className="bottom-20 right-0 h-screen">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-auto"
          viewBox="0 0 448 3393"
          fill="none"
        >
          <path
            d="M0.5 0V495.555C0.5 498.95 2.22198 502.113 5.07314 503.955L149.927 597.545C152.778 599.387 154.5 602.55 154.5 605.945V1302.95C154.5 1305.84 153.247 1308.59 151.064 1310.49L3.93579 1438.51C1.75312 1440.41 0.5 1443.16 0.5 1446.05V1976.5V2377.49C0.5 2380.64 1.98881 2383.61 4.51666 2385.5L150.483 2494.5C153.011 2496.39 154.5 2499.36 154.5 2502.51V3181.8C154.5 3185.06 156.089 3188.11 158.758 3189.99L447.5 3392.5"
            stroke="var(--cp-purple)"
            strokeWidth={5}
          />
        </svg>
      </AbsoluteWrapper>

      <AbsoluteWrapper className="bottom-50 right-10 flex flex-col gap-2 opacity-30">
        {Array.from({ length: 3 }).map((_, idx: number) => {
          return <div key={idx} className="w-6 h-6 border"></div>;
        })}
      </AbsoluteWrapper>

      <AbsoluteWrapper className="top-50 left-10 flex flex-col gap-2 animate-ud opacity-30">
        {Array.from({ length: 3 }).map((_, idx: number) => {
          return <div key={idx} className="w-6 h-6 border"></div>;
        })}
      </AbsoluteWrapper>
      <AbsoluteWrapper className="bottom-20 left-10 h-screen">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-auto opacity-40"
          viewBox="0 0 448 3393"
          fill="none"
        >
          <path
            d="M0.5 0V495.555C0.5 498.95 2.22198 502.113 5.07314 503.955L149.927 597.545C152.778 599.387 154.5 602.55 154.5 605.945V1302.95C154.5 1305.84 153.247 1308.59 151.064 1310.49L3.93579 1438.51C1.75312 1440.41 0.5 1443.16 0.5 1446.05V1976.5V2377.49C0.5 2380.64 1.98881 2383.61 4.51666 2385.5L150.483 2494.5C153.011 2496.39 154.5 2499.36 154.5 2502.51V3181.8C154.5 3185.06 156.089 3188.11 158.758 3189.99L447.5 3392.5"
            stroke="var(--cp-purple)"
            strokeWidth={5}
          />
        </svg>
      </AbsoluteWrapper>

      <div className="flex flex-col items-center justify-center gap-12 p-4 z-10 relative ">
        <div className="flex flex-row items-end text-center relative gap-2">
          {Array.from({ length: 3 }).map((_, idx: number) => {
            return (
              <div
                key={idx}
                className="w-2 h-2 border-2 animate-ud"
                style={
                  { "--delay": `${(idx + 1) * 100}ms` } as React.CSSProperties
                }
              ></div>
            );
          })}
          <h1 className="text-6xl font-space text-(--blue)">{project.title}</h1>
        </div>
        {project.coverImage?.asset && (
          <Image
            src={urlFor(project.coverImage).width(1200).height(675).url()}
            alt={project.coverImage.alt ?? project.title}
            width={1200}
            height={675}
            className="max-w-4xl h-auto"
          />
        )}
        {project.detailedDescription ? (
          <div className="text-3xl max-w-4xl">
            <PortableText value={project.detailedDescription} />
          </div>
        ) : (
          <p className="text-3xl max-w-4xl">{project.shortDescription}</p>
        )}
        <div className="flex items-center gap-2 text-4xl font-bold font-space text-(--blue) ">
          <TechIcon name={"tools"} />
          Tools Used
        </div>
        <div className="flex flex-col md:flex-row md:flex-wrap md:max-w-4xl md:items-center gap-4 cursor-default">
          {project.stack.map((tech, index) => (
            <div
              className="relative group text-xl flex flex-row items-center gap-2 justify-center p-4 min-w-55 h-50 animate-slide-in-left"
              key={index}
            >
              <div className="absolute inset-0">
                <PanelB strokeWidth={2} />
              </div>
              <div className="z-10 flex flex-row items-center gap-2">
                <TechIcon name={tech as TechName} />
                <span className="capitalize">{tech}</span>
              </div>
            </div>
          ))}
        </div>
        {project.githubUrl && (
          <div className="flex flex-row justify-center items-center gap-2 rounded-xl p-4trns min-w-100">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center font-bold hover:text-(--cp-purple) trns"
            >
              <TechIcon name="github" className="text-4xl" />
            </a>
          </div>
        )}
        {project.liveDemoUrl && (
          <div className="flex flex-row justify-center items-center gap-2 rounded-xl p-4 trns min-w-100 hover:text-(--cp-purple) trns">
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noreferrer"
              className="font-bold"
            >
              Preview
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
