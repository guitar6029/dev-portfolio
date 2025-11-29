import AnimatedShapesMoving from "@/components/Shapes/AnimatedShapesMoving";
import AbsoluteWrapper from "@/components/AbsoluteWrapper";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import LineA from "@/components/Accents/LineA";
import Hero from "@/components/Hero";
import BoxA from "@/components/Accents/BoxA";

export default function Home() {
  return (
    <div className="flex relative min-h-screen flex-col gap-4">
      <Hero />
      <div className="h-100 w-full relative">
        <AbsoluteWrapper className="top-50 -left-50">
          <BoxA />
        </AbsoluteWrapper>

        <AbsoluteWrapper className="top-100 -right-50">
          <BoxA />
        </AbsoluteWrapper>

        <AbsoluteWrapper className="top-10 left-10 flex flex-col gap-2 animate-ud opacity-30">
          {Array.from({ length: 3 }).map((_, idx: number) => {
            return <div key={idx} className="w-6 h-6 border"></div>;
          })}
        </AbsoluteWrapper>

        <AbsoluteWrapper className="top-20 left-0 w-full">
          <LineA />
        </AbsoluteWrapper>
      </div>
      <Skills />
      <div className="h-100 w-full relative">
        <LineA />
      </div>
      <AboutMe />
    </div>
  );
}
