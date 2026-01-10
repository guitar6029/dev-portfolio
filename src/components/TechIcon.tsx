import {
  SiClerk,
  SiExpress,
  SiFigma,
  SiJavascript,
  SiJest,
  SiNextdotjs,
  SiNodedotjs,
  SiNuxtdotjs,
  SiPostgresql,
  SiReact,
  SiSvelte,
  SiTypescript,
  SiVuedotjs,
  SiZod,
} from "react-icons/si";
import { FaDocker } from "react-icons/fa";
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
import { BsFiletypeJson } from "react-icons/bs";
import { JSX } from "react";
import { TechName } from "@/types/Tech";
import PiniaIcon from "./Icons/PiniaIcon";

const ICON_MAP: Record<TechName, JSX.Element> = {
  blender: <RiBlenderLine />,
  bootstrap: <RiBootstrapFill />,
  clerk: <SiClerk />,
  docker: <FaDocker />,
  express: <SiExpress />,
  figma: <SiFigma />,
  github: <RiGithubFill />,
  gitlab: <RiGitlabFill />,
  javascript: <SiJavascript />,
  jest: <SiJest />,
  jsonserver: <BsFiletypeJson />,
  linkedin: <RiLinkedinFill />,
  mongodb: <DiMongodb />,
  next: <SiNextdotjs />,
  nodejs: <SiNodedotjs />,
  nuxt: <SiNuxtdotjs />,
  pinia: <PiniaIcon />,
  postgresql: <SiPostgresql />,
  react: <SiReact />,
  svelte: <SiSvelte />,
  tailwind: <RiTailwindCssFill />,
  tools: <RiToolsFill />,
  typescript: <SiTypescript />,
  vue: <SiVuedotjs />,
  zod: <SiZod />,
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
