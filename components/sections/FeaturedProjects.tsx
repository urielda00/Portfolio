import FeaturedProjectCard from "@/components/projects/FeaturedProjectCard";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section
      id="featured-projects"
      className="border-b border-zinc-200 bg-zinc-50/70"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-28">
        <div className="mb-8 rounded-2xl border border-zinc-200 bg-white/80 px-4 py-3 text-sm leading-6 text-zinc-600 backdrop-blur-sm">
          Some projects use Render&apos;s free tier for backend hosting, so the
          first data load may take up to a minute while the server wakes up.
        </div>

        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Featured Projects
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
            Selected work focused on systems, ownership, and delivery
          </h2>

          <p className="mt-4 text-lg leading-8 text-zinc-600">
            These projects represent the kind of work I enjoy most - building,
            restructuring, and shipping systems with real product and technical
            depth.
          </p>
        </div>

        <div className="mt-16 grid gap-10">
          {featuredProjects.map((project) => (
            <FeaturedProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}