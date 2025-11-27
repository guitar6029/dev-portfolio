import Card1 from "@/components/Accents/Card1";
import Shape1 from "@/components/Accents/Shape1";
import TechIcon from "@/components/TechIcon";
import { SkillTech } from "@/types/SkillTech";
import { TechName } from "@/types/Tech";

const TECH: SkillTech[] = [
  {
    title: "JS Libraries & Frameworks",
    stack: ["vue", "react", "nuxt", "next"],
  },
  {
    title: "Styling & UI Systems",
    stack: ["tailwind", "bootstrap"],
  },
  {
    title: "Tools & Ecosystem",
    stack: ["typescript", "node", "gitlab", "blender"],
  },
];

export default function Home() {
  return (
    <div className="flex relative min-h-screen flex-col gap-4 p-4">
      <div className="flex h-screen flex-col items-center justify-center gap-2 relative z-10">
        <span className="font-space text-4xl lg:text-[12rem]">Josh Soll</span>
        <span className="font-exo text-6xl text-(--blue)">
          Front End Developer
        </span>
        <span className="font-exo text-4xl">
          Building code that becomes something people actually use.
        </span>

        <div className="absolute bottom-40 z-20 left-10 flex items-center gap-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="w-16 h-16 rounded-xl border-2" />
          ))}
        </div>

        <Card1
          className="absolute top-0 left-0 -z-1"
          fill="var(--bg-panel)"
          stroke=" var(--text)"
          strokeWidth={1}
        />
      </div>
      <div className="flex flex-col items-center gap-12 h-screen relative">
        <div className="absolute h-6 w-6 bg-(--blue) top-10 left-20 z-1"></div>
        <div className="absolute h-6 w-6 bg-(--blue) top-10 left-40 z-1"></div>
        <div className="absolute h-6 w-6 bg-(--blue) top-10 left-60 z-1"></div>

        <Shape1 className="absolute top-5 -left-50 w-200 -z-1 " />
        <Shape1 className="absolute top-200 -right-50 w-200 -z-1 " />

        <div className="absolute h-6 w-6 bg-(--blue) top-220 right-20 z-1"></div>
        <div className="absolute h-6 w-6 bg-(--blue) top-220 right-40 z-1"></div>
        <div className="absolute h-6 w-6 bg-(--blue) top-220 right-60 z-1"></div>

        <div className="z-10 flex flex-col items-center justify-center gap-6">
          <h1 className="text-8xl font-space trns hover:text-(--blue)">
            Skills
          </h1>
          {TECH.map((techItem: SkillTech, index: number) => {
            return (
              <div key={index} className="flex flex-col items-center gap-6">
                <span className="text-4xl text-(--blue)">{techItem.title}</span>
                <div className="flex flex-row items-center justify-center gap-4">
                  {techItem.stack.map((item: string, idx: number) => {
                    return (
                      <div
                        key={idx}
                        className="w-50 trns hover:bg-(--bg-hover) h-35 border-2 rounded-xl flex flex-col items-center justify-center gap-2"
                      >
                        <TechIcon
                          name={item as TechName}
                          className="text-4xl"
                        />
                        <span className="capitalize">{item}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
