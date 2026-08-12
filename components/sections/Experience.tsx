const roles = [
  {
    title: "Software Developer",
    company: "Azrieli College of Engineering",
    dates: "2026 - Present",
    description:
      "Building, refactoring and maintaining production internal software systems, backend APIs, deployment flows and reliability improvements.",
  },
  {
    title: "Automation Developer",
    company: "Place-IL & 8200 for Businesses",
    dates: "2026 - Present",
    description:
      "Building AI-assisted automation workflows and integrations for real businesses.",
  },
  {
    title: "Full-Stack Developer",
    company: "Daily-English Startup",
    dates: "2023 - 2024",
    description:
      "Worked with React, TypeScript, Node.js and complex backend-driven data flows.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-b border-zinc-200 bg-[linear-gradient(135deg,#f3f6f7_0%,#f8f8f6_48%,#f1f5f6_100%)]"
    >
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:px-8 md:pb-24 md:pt-20">
        <div className="max-w-2xl border-l-2 border-sky-800 pl-5">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-800">
            Professional Experience
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
            Professional Software Experience
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-zinc-600">
            Production systems, AI automation and full-stack development across real organizations and products.
          </p>
        </div>

        <ol className="relative mt-12 max-w-5xl border-y border-zinc-300/80 bg-white/55 md:mt-14">
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-2.5 top-0 w-px bg-sky-800/25 md:left-[15.625rem]"
          />
          {roles.map((role) => (
            <li
              key={`${role.title}-${role.company}`}
              className="relative grid grid-cols-[minmax(0,1fr)] gap-y-3 px-7 py-8 not-last:border-b not-last:border-zinc-200/90 md:grid-cols-[11rem_2.25rem_minmax(0,1fr)] md:gap-x-6 md:px-8 md:py-9"
            >
              <span
                aria-hidden="true"
                className="absolute left-1 top-[2.4rem] z-10 size-3 rounded-full border-[3px] border-[#f5f7f7] bg-sky-800 shadow-[0_0_0_1px_rgba(3,105,161,0.3)] md:left-[15.25rem] md:top-[2.9rem]"
              />
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-600 md:pt-1 md:text-right">
                {role.dates}
              </p>
              <div className="hidden md:block" aria-hidden="true" />
              <div className="max-w-2xl">
                <h3 className="text-xl font-semibold tracking-tight text-zinc-950 md:text-[1.35rem]">
                  {role.title}
                </h3>
                <p className="mt-1.5 text-sm font-semibold text-sky-800">{role.company}</p>
                <p className="mt-3.5 leading-7 text-zinc-600">{role.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
