export default function Hero() {
  return (
    <section className="border-b border-zinc-200 bg-zinc-50">
      <div className="mx-auto min-h-[88vh] max-w-6xl px-6 py-24 md:px-8 md:py-32 flex items-center">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
             Uriel Dahan | Full-Stack Developer
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 md:text-6xl">
            I build practical systems with strong backend thinking and clear
            product direction.
          </h1>

          <p className="mt-6 text-lg leading-8 text-zinc-600 md:text-xl">
            I enjoy turning ideas into working products through architecture,
            planning, refactoring, and hands-on execution - from internal tools
            to full-stack platforms and experimental AI projects.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#featured-projects"
              className="rounded-lg bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-zinc-300 bg-white px-5 py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}