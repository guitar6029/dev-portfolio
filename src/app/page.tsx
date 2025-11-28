import { SkillTech } from "@/types/SkillTech";
import AnimatedShapesMoving from "@/components/Shapes/AnimatedShapesMoving";
import Shape1 from "@/components/Accents/Shape1";
import TechIcon from "@/components/TechIcon";
import { TechName } from "@/types/Tech";
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
        <AbsoluteWrapper className="-top-20 left-0 h-[200vh]">
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
            />
          </svg>
        </AbsoluteWrapper>
        <AbsoluteWrapper className="-top-20 left-0 h-[300vh]">
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

        <div className="flex flex-col items-center justify-center gap-2 relative animate-slide-in-left">
          <span className="relative text-center font-space text-4xl lg:text-[12rem] z-10">
            Josh Soll
          </span>
        </div>
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
              <div key={index} className="flex flex-col items-center gap-6">
                <span className="text-4xl text-(--blue)">{techItem.title}</span>
                <div className="flex flex-row flex-wrap items-center justify-center gap-4">
                  {techItem.stack.map((item: string, idx: number) => {
                    return (
                      <div
                        key={idx}
                        className="w-50 trns hover:bg-(--bg-hover) hover:text-(--blue-soft) h-35 border-2 rounded-xl flex flex-col items-center justify-center gap-2 animate-slide-in-left"
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
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
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

      <div className="flex flex-col items-center justify-center gap-12 h-screen relative">
        <AbsoluteWrapper className="bottom-0 left-40 h-screen ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-auto"
            viewBox="0 0 448 3393"
            fill="none"
          >
            <path
              d="M0.5 0V495.555C0.5 498.95 2.22198 502.113 5.07314 503.955L149.927 597.545C152.778 599.387 154.5 602.55 154.5 605.945V1302.95C154.5 1305.84 153.247 1308.59 151.064 1310.49L3.93579 1438.51C1.75312 1440.41 0.5 1443.16 0.5 1446.05V1976.5V2377.49C0.5 2380.64 1.98881 2383.61 4.51666 2385.5L150.483 2494.5C153.011 2496.39 154.5 2499.36 154.5 2502.51V3181.8C154.5 3185.06 156.089 3188.11 158.758 3189.99L447.5 3392.5"
              stroke="var(--cp-purple)"
              strokeWidth={10}
            />
          </svg>
        </AbsoluteWrapper>

        <AbsoluteWrapper className="bottom-0 left-0 h-[200vh]">
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
            />
          </svg>
        </AbsoluteWrapper>

        <AbsoluteWrapper className="bottom-10 right-0 h-[200vh]">
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
            />
          </svg>
        </AbsoluteWrapper>

        <AbsoluteWrapper className="bottom-10 right-10 h-screen">
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
            />
          </svg>
        </AbsoluteWrapper>

        <AbsoluteWrapper className="bottom-0 left-1/2-translate-x-1/2 h-screen rotate-90">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-auto h-full"
            viewBox="0 0 442 554"
            fill="none"
          >
            <path
              d="M176.477 483.385L385.425 552.44C396.681 556.16 408.684 549.328 411.233 537.75L440.621 404.246C441.18 401.703 441.238 399.075 440.791 396.51L389.226 100.84C387.855 92.9817 381.947 86.6894 374.191 84.8279L25.1683 1.06254C12.2725 -2.03244 -0.00945556 8.05204 0.516559 21.3036L12.158 314.577C12.3575 319.603 14.4434 324.37 18.0001 327.926L168.611 478.537C170.818 480.745 173.512 482.405 176.477 483.385Z"
              stroke="var(--cp-purple-dark)"
              strokeWidth={2}
            />
          </svg>
        </AbsoluteWrapper>

        <div className="relative w-full flex flex-row items-center justify-center trns hover:scale-105">
          <div className="trns hover:text-(--blue) relative z-10 flex flex-col items-center justify-center gap-4 mt-10">
            <span className="text-8xl font-space ">About Me</span>
            <p className="max-w-4xl text-4xl text-center">
              I'm a Frontend Developer who builds modern, responsive web
              interfaces with React, Next.js, Vue, and TypeScript. I focus on
              clean architecture, reusable components, and smooth user
              experience — whether it's UI animation, API integration, or
              scalable design systems. I enjoy turning complex ideas into
              simple, intuitive interfaces that people actually want to use.
            </p>
            <div className="flex items-center text-6xl gap-4">
              <a
                href="https://github.com/guitar6029"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TechIcon
                  name="github"
                  className="trns hover:text-(--cp-purple) hover:scale-105"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/joshsoll/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TechIcon
                  name="linkedin"
                  className="trns hover:text-(--cp-purple) hover:scale-105"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
