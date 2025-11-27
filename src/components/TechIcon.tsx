import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiSvelte,
  SiReact,
  SiNuxtdotjs,
  SiVuedotjs,
  SiNodedotjs,
  SiClerk,
  SiPostgresql, 
} from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import {
  RiTailwindCssFill,
  RiBlenderLine,
  RiGithubFill,
  RiToolsFill,
  RiBootstrapFill,
  RiGitlabFill,
} from "react-icons/ri";
import { JSX } from "react";
import { TechName } from "@/types/Tech";

const ICON_MAP: Record<TechName, JSX.Element> = {
  blender: <RiBlenderLine />,
  bootstrap: <RiBootstrapFill />,
  clerk: <SiClerk />,
  github: <RiGithubFill />,
  gitlab: <RiGitlabFill />,
  javascript: <SiJavascript />,
  next: <SiNextdotjs />,
  node: <SiNodedotjs />,
  nuxt: <SiNuxtdotjs />,
  react: <SiReact />,
  svelte: <SiSvelte />,
  tailwind: <RiTailwindCssFill />,
  tools: <RiToolsFill />,
  typescript: <SiTypescript />,
  vue: <SiVuedotjs />,
  postgresql: <SiPostgresql />,
  mongodb: <DiMongodb />
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
