import type { TechName } from "./Tech";

export type Project = {
  slug: string;
  title: string;
  description: string;
  github: string;
  preview?: string;
  stack: TechName[];
};
