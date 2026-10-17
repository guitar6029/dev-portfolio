import type { SanityWorkExperience } from "@/sanity/types";

type ProfessionalExperienceEntryProps = {
  experience: SanityWorkExperience;
};

export default function ProfessionalExperienceEntry({
  experience,
}: ProfessionalExperienceEntryProps) {
  const highlights = experience.highlights ?? [];

  return (
    <article className="professional-experience__card">
      <p className="professional-experience__years">
        {formatEmploymentYears(experience)}
      </p>
      <div className="professional-experience__details">
        <h3 className="professional-experience__role">{experience.title}</h3>
        <p className="professional-experience__company">
          {experience.company}
        </p>
        <p className="professional-experience__summary">
          {experience.summary}
        </p>
        {highlights.length > 0 && (
          <ul className="professional-experience__highlights">
            {highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

function formatEmploymentYears(experience: SanityWorkExperience) {
  if (experience.currentlyEmployed) {
    return `${experience.startYear} — Present`;
  }

  if (experience.endYear) {
    return `${experience.startYear} — ${experience.endYear}`;
  }

  return `${experience.startYear}`;
}
