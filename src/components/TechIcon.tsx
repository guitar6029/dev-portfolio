import {
  SiClerk,
  SiFigma, 
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiNuxtdotjs,
  SiPostgresql, 
  SiReact,
  SiSvelte,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import {
  RiBlenderLine,
  RiBootstrapFill,
  RiGithubFill,
  RiGitlabFill,
  RiLinkedinFill, 
  RiTailwindCssFill,
  RiToolsFill,
} from "react-icons/ri";
import { JSX } from "react";
import { TechName } from "@/types/Tech";

const ICON_MAP: Record<TechName, JSX.Element> = {
  blender: <RiBlenderLine />,
  bootstrap: <RiBootstrapFill />,
  clerk: <SiClerk />,
  figma: <SiFigma />,
  github: <RiGithubFill />,
  gitlab: <RiGitlabFill />,
  javascript: <SiJavascript />,
  linkedin: <RiLinkedinFill />,
  mongodb: <DiMongodb />,
  next: <SiNextdotjs />,
  node: <SiNodedotjs />,
  nuxt: <SiNuxtdotjs />,
  postgresql: <SiPostgresql />,
  react: <SiReact />,
  svelte: <SiSvelte />,
  tailwind: <RiTailwindCssFill />,
  tools: <RiToolsFill />,
  typescript: <SiTypescript />,
  vue: <SiVuedotjs />,
};

export type TechIconProps = {
  name: TechName;
  className?: string;
};

export default function TechIcon({ name, className }: TechIconProps) {
  const Icon = ICON_MAP[name];

  return (
    <span className={`inline-flex items-center ${className}`}>{Icon}</span>
  );
}
