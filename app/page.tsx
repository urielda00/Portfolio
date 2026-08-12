import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import AdditionalProjects from "@/components/sections/AdditionalProjects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Experience />
      <FeaturedProjects />
      <AdditionalProjects />
      <Contact />
    </main>
  );
}
