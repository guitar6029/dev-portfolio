import { getWorkExperience } from "@/sanity/queries/professionalExperience";
import type { SanityWorkExperience } from "@/sanity/types";
import ProfessionalExperienceEntry from "./ProfessionalExperienceEntry";
import SectionRail from "./ui/SectionRail";

export default async function ProfessionalExperience() {
  const workExperience = await getWorkExperience();
  const sortedWorkExperience = [...workExperience].sort(compareWorkExperience);

  return (
    <section
      className="professional-experience"
      aria-labelledby="professional-experience-heading"
    >
      <SectionRail
        label="SYSTEM"
        index="03"
        total="04"
        className="section-rail--section"
      />
      <div className="professional-experience__inner">
        <header className="professional-experience__intro">
          <p className="professional-experience__eyebrow">03 / EXPERIENCE</p>
          <h2
            id="professional-experience-heading"
            className="professional-experience__title"
          >
            PROFESSIONAL EXPERIENCE
          </h2>
        </header>

        {sortedWorkExperience.length > 0 ? (
          <ol className="professional-experience__timeline">
            {sortedWorkExperience.map((experience) => (
              <li
                key={experience._id}
                className="professional-experience__entry"
              >
                <ProfessionalExperienceEntry experience={experience} />
              </li>
            ))}
          </ol>
        ) : (
          <p className="professional-experience__empty">
            Professional experience will appear here soon.
          </p>
        )}
      </div>
    </section>
  );
}

function compareWorkExperience(
  first: SanityWorkExperience,
  second: SanityWorkExperience,
) {
  const startYearDifference = second.startYear - first.startYear;

  if (startYearDifference !== 0) {
    return startYearDifference;
  }

  const firstEndYear = first.currentlyEmployed
    ? Number.POSITIVE_INFINITY
    : first.endYear ?? first.startYear;
  const secondEndYear = second.currentlyEmployed
    ? Number.POSITIVE_INFINITY
    : second.endYear ?? second.startYear;

  return secondEndYear - firstEndYear;
}
