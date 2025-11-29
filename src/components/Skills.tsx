import { SkillTech } from "@/types/SkillTech";
import { TechName } from "@/types/Tech";
import AbsoluteWrapper from "./AbsoluteWrapper";
import Shape1 from "./Accents/Shape1";
import AnimatedShapesMoving from "./Shapes/AnimatedShapesMoving";
import TechIcon from "./TechIcon";
import PanelB from "./Accents/PanelB";

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

export default function Skills() {
  return (
    <div className="flex flex-col items-center gap-12 h-screen relative">
      <AbsoluteWrapper className="top-20 left-0 h-screen rotate-45">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-auto"
          viewBox="0 0 448 3393"
          fill="none"
        >
          <path
            d="M0.5 0V495.555C0.5 498.95 2.22198 502.113 5.07314 503.955L149.927 597.545C152.778 599.387 154.5 602.55 154.5 605.945V1302.95C154.5 1305.84 153.247 1308.59 151.064 1310.49L3.93579 1438.51C1.75312 1440.41 0.5 1443.16 0.5 1446.05V1976.5V2377.49C0.5 2380.64 1.98881 2383.61 4.51666 2385.5L150.483 2494.5C153.011 2496.39 154.5 2499.36 154.5 2502.51V3181.8C154.5 3185.06 156.089 3188.11 158.758 3189.99L447.5 3392.5"
            stroke="var(--cp-purple)"
            strokeWidth={1}
          >
            <animate
              attributeName="opacity"
              values="0.3; 1; 0.3"
              dur="4s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </AbsoluteWrapper>

      <AbsoluteWrapper className="top-20 right-0 h-screen rotate-45">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-auto"
          viewBox="0 0 448 3393"
          fill="none"
        >
          <path
            d="M0.5 0V495.555C0.5 498.95 2.22198 502.113 5.07314 503.955L149.927 597.545C152.778 599.387 154.5 602.55 154.5 605.945V1302.95C154.5 1305.84 153.247 1308.59 151.064 1310.49L3.93579 1438.51C1.75312 1440.41 0.5 1443.16 0.5 1446.05V1976.5V2377.49C0.5 2380.64 1.98881 2383.61 4.51666 2385.5L150.483 2494.5C153.011 2496.39 154.5 2499.36 154.5 2502.51V3181.8C154.5 3185.06 156.089 3188.11 158.758 3189.99L447.5 3392.5"
            stroke="var(--cp-purple)"
            strokeWidth={1}
          >
            <animate
              attributeName="opacity"
              values="0.3; 1; 0.3"
              dur="4s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </AbsoluteWrapper>

      <Shape1 className="sm:hidden lg:block absolute top-100 -left-50 w-200 -z-1 " />
      <Shape1 className="sm:hidden lg:block absolute top-200 -right-50 w-200 -z-1 " />

      <AnimatedShapesMoving
        shapes={5}
        direction="right"
        className="absolute top-50 animated-shapes-up-down w-6 h-6 border-2 z-1 opacity-25"
      />

      <div className="z-10 flex flex-col items-center justify-center gap-6">
        <div className="flex flex-row items-end relative gap-2">
          {Array.from({ length: 3 }).map((_, idx: number) => {
            return (
              <div
                key={idx}
                className="w-2 h-2 border-2 animate-ud"
                style={
                  { "--delay": `${(idx + 1) * 100}ms` } as React.CSSProperties
                }
              ></div>
            );
          })}
          <h1 className="text-8xl font-space trns hover:text-(--blue)">
            Skills
          </h1>
        </div>
        {TECH.map((techItem: SkillTech, index: number) => {
          return (
            <div key={index} className="flex flex-col items-center gap-10">
              <span className="text-4xl text-(--blue)">{techItem.title}</span>
              <div className="flex flex-row flex-wrap items-center justify-center gap-4">
                {techItem.stack.map((item: string, idx: number) => {
                  return (
                    <div
                      className="relative group w-50 h-50 flex items-center justify-center animate-slide-in-left"
                      key={idx}
                    >
                      <PanelB />

                      <div
                        className="relative z-10 cursor-default trns  group-hover:text-(--cp-purple-light) flex flex-col items-center justify-center gap-2"
                        style={
                          {
                            "--delay": `${(idx + 1) * 340}ms`,
                          } as React.CSSProperties
                        }
                      >
                        <TechIcon
                          name={item as TechName}
                          className="text-4xl"
                        />
                        <span className="capitalize text-2xl">{item}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
