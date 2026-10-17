import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import ProfessionalExperience from "@/components/ProfessionalExperience";

export default function Home() {
  return (
    <div className="flex relative min-h-screen flex-col">
      <Hero />
      <Skills />
      <ProfessionalExperience />
    </div>
  );
}
