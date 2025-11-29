import AbsoluteWrapper from "./AbsoluteWrapper";
import AnimatedShapesMoving from "./Shapes/AnimatedShapesMoving";

export default function Hero() {
  return (
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

      <AbsoluteWrapper className="top-10 left-1/2 -translate-x-1/2 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-auto h-full"
          viewBox="0 0 1054 81"
          fill="none"
        >
          <path
            d="M0 58.5H217L273 0.5H460L519 80.5H802L905 30.5H1054"
            stroke="var(--cp-purple)"
            strokeWidth={0.2}
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
        className="w-4 h-4 absolute top-10 right-20 rounded-xl border-4 animated-shapes z-1"
      />
    </div>
  );
}
