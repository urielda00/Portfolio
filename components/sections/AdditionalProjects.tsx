import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

export default function AdditionalProjects() {
  const additionalProjects = projects.filter((project) => !project.featured);

  return (
    <section className="border-b border-zinc-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Additional Projects
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
            More projects that reflect practical problem solving
          </h2>

          <p className="mt-4 text-lg leading-8 text-zinc-600">
            Smaller and collaborative projects that still show product thinking,
            implementation, and real use cases.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {additionalProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}