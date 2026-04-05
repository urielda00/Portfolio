import Hero from "@/components/sections/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import AdditionalProjects from "@/components/sections/AdditionalProjects";
import HowIWork from "@/components/sections/HowIWork";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProjects />
      <AdditionalProjects />
      <HowIWork />
      <Contact />
    </main>
  );
}