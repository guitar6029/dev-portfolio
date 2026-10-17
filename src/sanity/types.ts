import type { PortableTextBlock } from "@portabletext/react";

export type SanityImage = {
  asset?: { _ref: string };
  alt?: string;
};

export type SanityProject = {
  _id: string;
  title: string;
  slug: string;
  shortDescription: string;
  detailedDescription?: PortableTextBlock[];
  coverImage?: SanityImage;
  stack: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  featured: boolean;
  displayOrder?: number;
};

export type SanityWorkExperience = {
  _id: string;
  title: string;
  company: string;
  startYear: number;
  endYear?: number;
  currentlyEmployed: boolean;
  summary: string;
  highlights?: string[];
};
