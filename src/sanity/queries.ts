import { sanityClient } from "./client";
import type { SanityProject } from "./types";

const projectProjection = `{
  _id,
  title,
  "slug": slug.current,
  shortDescription,
  detailedDescription,
  coverImage,
  stack,
  githubUrl,
  liveDemoUrl,
  featured,
  displayOrder
}`;

const fetchOptions = {
  next: { revalidate: 60 },
};

export async function getProjects(): Promise<SanityProject[]> {
  try {
    return await sanityClient.fetch<SanityProject[]>(
      `*[_type == "project" && !(_id in path("drafts.**"))]
        | order(coalesce(displayOrder, 999999) asc, title asc)
        ${projectProjection}`,
      {},
      fetchOptions,
    );
  } catch (error) {
    console.error("Unable to load Sanity projects.", error);
    return [];
  }
}

export async function getProjectBySlug(
  slug: string,
): Promise<SanityProject | null> {
  try {
    return await sanityClient.fetch<SanityProject | null>(
      `*[_type == "project" && slug.current == $slug && !(_id in path("drafts.**"))][0]
        ${projectProjection}`,
      { slug },
      fetchOptions,
    );
  } catch (error) {
    console.error("Unable to load the Sanity project.", error);
    return null;
  }
}
