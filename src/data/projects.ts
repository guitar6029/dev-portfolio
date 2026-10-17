import type { Project } from "@/types/types";

// Temporary repository-backed content until the Sanity migration is complete.
export const projects: Project[] = [
  {
    slug: "dev-portfolio",
    title: "Dev Portfolio",
    description: "Personal portfolio site.",
    stack: ["next", "react", "tailwind", "typescript"],
    github: "https://github.com/guitar6029/dev-portfolio",
  },
];
