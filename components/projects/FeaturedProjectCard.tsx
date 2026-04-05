import Image from "next/image";
import type { Project } from "@/data/projects";

type FeaturedProjectCardProps = {
  project: Project;
};

export default function FeaturedProjectCard({
  project,
}: FeaturedProjectCardProps) {
  const previewImages = project.images.slice(0, 2);

  return (
    <article className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm">
      <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="border-b border-zinc-200 bg-zinc-50 lg:border-b-0 lg:border-r">
          <div className="space-y-4 p-4 md:p-5">
            {previewImages.length > 0 ? (
              previewImages.map((image) => (
                <div
                  key={image.src}
                  className="overflow-hidden rounded-2xl border border-zinc-200 bg-white"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1400}
                    height={900}
                    className="h-auto w-full"
                  />
                </div>
              ))
            ) : (
              <div className="flex aspect-[16/10] items-center justify-center rounded-2xl border border-dashed border-zinc-300 bg-white text-sm text-zinc-500">
                Project preview coming soon
              </div>
            )}
          </div>
        </div>

        <div className="p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-zinc-900 px-3 py-1 text-xs font-semibold text-white">
              {project.status}
            </span>
            <span className="text-sm text-zinc-500">{project.year}</span>
          </div>

          <h3 className="mt-4 text-2xl font-bold tracking-tight text-zinc-900 md:text-3xl">
            {project.title}
          </h3>

          <p className="mt-4 text-base leading-7 text-zinc-600">
            {project.shortDescription}
          </p>

          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
              Role
            </p>
            <p className="mt-2 text-sm leading-6 text-zinc-700">
              {project.role}
            </p>
          </div>

          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
              Highlights
            </p>

            <ul className="mt-3 space-y-2">
              {project.highlights.slice(0, 3).map((highlight) => (
                <li key={highlight} className="text-sm leading-6 text-zinc-700">
                  - {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.slice(0, 6).map((item) => (
              <span
                key={item}
                className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}