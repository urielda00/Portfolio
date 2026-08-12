import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import AdditionalProjects from "@/components/sections/AdditionalProjects";
import HowIWork from "@/components/sections/HowIWork";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Experience />
      <FeaturedProjects />
      <AdditionalProjects />
      <HowIWork />
      <Contact />
    </main>
  );
}
