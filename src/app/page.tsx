import { SkillTech } from "@/types/SkillTech";
import AnimatedShapesMoving from "@/components/Shapes/AnimatedShapesMoving";
import Card1 from "@/components/Accents/Card1";
import Shape1 from "@/components/Accents/Shape1";
import TechIcon from "@/components/TechIcon";
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
        <AnimatedShapesMoving
          shapes={5}
          className="w-4 h-4 absolute top-10 right-20 rounded-xl border-2 animated-shapes"
        />
        <Card1
          className="absolute top-0 left-0 -z-1"
          fill="var(--bg-panel)"
          stroke=" var(--text)"
          strokeWidth={1}
        />
      </div>
      <div className="flex flex-col items-center gap-12 h-screen relative">
        <Shape1 className="absolute top-100 -left-50 w-200 -z-1 " />
        <Shape1 className="absolute top-200 -right-50 w-200 -z-1 " />

        <AnimatedShapesMoving
          shapes={4}
          direction="right"
          className="absolute top-50 animated-shapes-up-down w-6 h-6 border-2"
        />

        <div className="z-10 flex flex-col items-center justify-center gap-6">
          <h1 className="text-8xl font-space trns hover:text-(--blue)">
            Skills
          </h1>
          {TECH.map((techItem: SkillTech, index: number) => {
            return (
              <div key={index} className="flex flex-col items-center gap-6">
                <span className="text-4xl text-(--blue)">{techItem.title}</span>
                <div className="flex flex-row flex-wrap items-center justify-center gap-4">
                  {techItem.stack.map((item: string, idx: number) => {
                    return (
                      <div
                        key={idx}
                        className="w-50 trns hover:bg-(--bg-hover) hover:text-(--blue-soft) h-35 border-2 rounded-xl flex flex-col items-center justify-center gap-2"
                      >
                        <TechIcon
                          name={item as TechName}
                          className="text-4xl"
                        />
                        <span className="capitalize text-2xl">{item}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col items-center gap-12 h-screen related">
        <h1 className="text-8xl font-space trns hover:text-(--blue)">
          About Me
        </h1>
        <p className="max-w-4xl text-4xl text-center">
          I'm a Frontend Developer who builds modern, responsive web interfaces
          with React, Next.js, Vue, and TypeScript. I focus on clean
          architecture, reusable components, and smooth user experience —
          whether it's UI animation, API integration, or scalable design
          systems. I enjoy turning complex ideas into simple, intuitive
          interfaces that people actually want to use.
        </p>
      </div>
    </div>
  );
}
