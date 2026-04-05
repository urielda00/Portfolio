import Image from "next/image";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const previewImage = project.images[0];
  const githubLink = project.links.find((link) =>
    link.label.toLowerCase().includes("github")
  );
  const liveLink = project.links.find((link) =>
    link.label.toLowerCase().includes("live")
  );

  return (
    <article className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="border-b border-zinc-200 bg-zinc-100">
        {previewImage ? (
          <Image
            src={previewImage.src}
            alt={previewImage.alt}
            width={1200}
            height={800}
            className="h-52 w-full object-cover"
          />
        ) : (
          <div className="flex h-52 items-center justify-center text-sm text-zinc-500">
            Project preview coming soon
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
            {project.status}
          </span>
          <span className="text-sm text-zinc-500">{project.year}</span>
        </div>

        <h3 className="mt-4 text-xl font-bold tracking-tight text-zinc-900">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-zinc-600">
          {project.shortDescription}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((item) => (
            <span
              key={item}
              className="rounded-full bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-600"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {liveLink && (
            <a
              href={liveLink.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-800"
            >
              Live Site
            </a>
          )}

          {githubLink && (
            <a
              href={githubLink.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}