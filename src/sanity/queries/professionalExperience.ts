import { sanityClient } from "../client";
import type { SanityWorkExperience } from "../types";

const workProjection = `{
_id,
title,
company,
startYear,
endYear,
currentlyEmployed,
summary,
highlights

}`;

const fetchOptions = {
  next: { revalidate: 60 },
};

export async function getWorkExperience(): Promise<SanityWorkExperience[]> {
  try {
    return await sanityClient.fetch<SanityWorkExperience[]>(
      `*[_type == "professionalExperience" && !(_id in path("drafts.**"))]
      | order(startYear desc, endYear desc)
        ${workProjection}`,
      {},
      fetchOptions,
    );
  } catch (error) {
    console.error("Unable to load Sanity Work Experience.", error);
    return [];
  }
}
