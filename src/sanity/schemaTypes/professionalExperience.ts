
import { defineField, defineType } from "sanity";

export const professionalExperience = defineType({
    name: "professionalExperience",
    title: "Professional Experience",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Job Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "company",
            title: "Company",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "startYear",
            title: "Start Year",
            type: "number",
            validation: (Rule) =>
                Rule.required().integer().min(1950).max(2100),
        }),
        defineField({
            name: "endYear",
            title: "End Year",
            type: "number",
            validation: (Rule) =>
                Rule.integer().min(1950).max(2100),
        }),
        defineField({
            name: "currentlyEmployed",
            title: "Currently Employed",
            type: "boolean",
            initialValue: false,
        }),
        defineField({
            name: "summary",
            title: "Summary",
            type: "text",
            rows: 4,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "highlights",
            title: "Key Contributions",
            type: "array",
            of: [{ type: "string" }],
        }),
    ],
    preview: {
        select: {
            title: "title",
            subtitle: "company",
        },
    },
});
