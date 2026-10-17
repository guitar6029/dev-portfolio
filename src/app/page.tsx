import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";


export default function Home() {
  return (
    <div className="flex relative min-h-screen flex-col">
      <Hero />
      <Skills />
      <AboutMe />
    </div>
  );
}
