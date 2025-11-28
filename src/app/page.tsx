import { SkillTech } from "@/types/SkillTech";
import AnimatedShapesMoving from "@/components/Shapes/AnimatedShapesMoving";
import Shape1 from "@/components/Accents/Shape1";
import TechIcon from "@/components/TechIcon";
import { TechName } from "@/types/Tech";
import Panel1 from "@/components/Accents/Panel1";
import AbsoluteWrapper from "@/components/AbsoluteWrapper";

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
    <div className="flex relative min-h-screen flex-col gap-4">
      <div className="flex h-screen flex-col items-center justify-center gap-2 relative z-10">
        <AbsoluteWrapper className="-top-20 left-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="448"
            height="3393"
            viewBox="0 0 448 3393"
            fill="none"
          >
            <path
              d="M0.5 0V495.555C0.5 498.95 2.22198 502.113 5.07314 503.955L149.927 597.545C152.778 599.387 154.5 602.55 154.5 605.945V1302.95C154.5 1305.84 153.247 1308.59 151.064 1310.49L3.93579 1438.51C1.75312 1440.41 0.5 1443.16 0.5 1446.05V1976.5V2377.49C0.5 2380.64 1.98881 2383.61 4.51666 2385.5L150.483 2494.5C153.011 2496.39 154.5 2499.36 154.5 2502.51V3181.8C154.5 3185.06 156.089 3188.11 158.758 3189.99L447.5 3392.5"
              stroke="var(--cp-purple)"
              strokeWidth={1}
            />
          </svg>
        </AbsoluteWrapper>
        <AbsoluteWrapper className="-top-20 left-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="448"
            height="3393"
            viewBox="0 0 448 3393"
            fill="none"
          >
            <path
              d="M0.5 0V495.555C0.5 498.95 2.22198 502.113 5.07314 503.955L149.927 597.545C152.778 599.387 154.5 602.55 154.5 605.945V1302.95C154.5 1305.84 153.247 1308.59 151.064 1310.49L3.93579 1438.51C1.75312 1440.41 0.5 1443.16 0.5 1446.05V1976.5V2377.49C0.5 2380.64 1.98881 2383.61 4.51666 2385.5L150.483 2494.5C153.011 2496.39 154.5 2499.36 154.5 2502.51V3181.8C154.5 3185.06 156.089 3188.11 158.758 3189.99L447.5 3392.5"
              stroke="var(--cp-purple)"
              strokeWidth={2}
            />
          </svg>
        </AbsoluteWrapper>

        <AbsoluteWrapper className="-top-50 right-1 -z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-600 w-200"
            viewBox="0 0 739 7345"
            fill="none"
          >
            <path
              d="M738.5 0.333496L172.55 632.486C170.908 634.32 170 636.694 170 639.156V1759.47C170 1763.35 172.246 1766.88 175.762 1768.53L732.738 2029.14C736.254 2030.78 738.5 2034.31 738.5 2038.2V2898.01C738.5 2901.06 737.109 2903.94 734.722 2905.84L4.27832 3486.33C1.89118 3488.23 0.5 3491.11 0.5 3494.16V5428.31C0.5 5431.75 2.26648 5434.94 5.17734 5436.77L733.823 5894.89C736.734 5896.72 738.5 5899.92 738.5 5903.36V7344.83"
              stroke="var(--cp-purple)"
              strokeDasharray="10000"
              strokeDashoffset="10000"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="10000; 0; 10000"
                dur="6s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </AbsoluteWrapper>

        <AbsoluteWrapper className="-top-50 right-10 -z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-600 w-200"
            viewBox="0 0 739 7345"
            fill="none"
          >
            <path
              d="M738.5 0.333496L172.55 632.486C170.908 634.32 170 636.694 170 639.156V1759.47C170 1763.35 172.246 1766.88 175.762 1768.53L732.738 2029.14C736.254 2030.78 738.5 2034.31 738.5 2038.2V2898.01C738.5 2901.06 737.109 2903.94 734.722 2905.84L4.27832 3486.33C1.89118 3488.23 0.5 3491.11 0.5 3494.16V5428.31C0.5 5431.75 2.26648 5434.94 5.17734 5436.77L733.823 5894.89C736.734 5896.72 738.5 5899.92 738.5 5903.36V7344.83"
              stroke="var(--cp-purple)"
            />
          </svg>
        </AbsoluteWrapper>

        <span className="font-space text-4xl lg:text-[12rem]">Josh Soll</span>
        <span className="font-exo text-6xl text-(--blue)">
          Front End Developer
        </span>
        <span className="font-exo text-4xl">
          Building code that becomes something people actually use.
        </span>
        <AnimatedShapesMoving
          shapes={5}
          direction="left"
          className="w-4 h-4 absolute top-10 right-20 rounded-xl border-2 animated-shapes"
        />
      </div>

      <div className="h-100 w-full relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          viewBox="0 0 2339 185"
          fill="none"
        >
          <path
            d="M0 184H1100.96C1104.13 184 1107.11 182.499 1109 179.954L1239 4.54563C1240.89 2.00077 1243.87 0.5 1247.04 0.5H2339"
            stroke="var(--blue-glow)"
            strokeWidth={10}
          />
        </svg>
      </div>

      <div className="flex flex-col items-center gap-12 h-screen relative">
        <Shape1 className="absolute top-100 -left-50 w-200 -z-1 " />
        <Shape1 className="absolute top-200 -right-50 w-200 -z-1 " />

        <AnimatedShapesMoving
          shapes={5}
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

      <div className="flex flex-col items-center gap-12 h-screen relative">
        <AbsoluteWrapper className="bottom-0 -left-10 h-[120vh]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-auto"
            viewBox="0 0 154 490"
            fill="none"
          >
            <path
              d="M15 489.185V339.1C15 337.834 15.2401 336.581 15.7076 335.405L149 0.18457M36 489.185V338.989C36 337.796 36.2136 336.612 36.6306 335.494L153.5 22.1846M0.5 489.185V339.133C0.5 337.846 0.748289 336.571 1.23125 335.379L130.5 16.1846M51.5 489.185V338.917C51.5 337.771 51.6972 336.633 52.083 335.553L153.5 51.6846M64 489.185V338.864C64 337.752 64.1853 336.648 64.5484 335.598L153.5 78.1846"
              stroke="var(--cp-purple)"
              strokeWidth={2}
              strokeDasharray="1000"
              strokeDashoffset="1000"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="1000; 0; 1000"
                dur="20s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </AbsoluteWrapper>

        <div className="relative w-full flex flex-row items-center justify-center">
          {/* <div className="absolute inset-1 z-1">
            <Panel1 stroke="var(--blue)" strokeWidth={2} />
          </div> */}
          <div className="trns hover:text-(--blue) relative z-10 flex flex-col items-center justify-center gap-2 mt-10">
            <span className="text-8xl font-space ">About Me</span>
            <p className="max-w-4xl text-4xl text-center">
              I'm a Frontend Developer who builds modern, responsive web
              interfaces with React, Next.js, Vue, and TypeScript. I focus on
              clean architecture, reusable components, and smooth user
              experience — whether it's UI animation, API integration, or
              scalable design systems. I enjoy turning complex ideas into
              simple, intuitive interfaces that people actually want to use.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
