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
    <section id="experience" className="border-b border-zinc-200 bg-[#f8f8f6]">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-800">
            Professional Experience
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
            Building software in real production contexts.
          </h2>
        </div>

        <ol className="mt-12 max-w-4xl divide-y divide-zinc-200 border-t border-zinc-200">
          {roles.map((role) => (
            <li key={`${role.title}-${role.company}`} className="grid gap-3 py-7 md:grid-cols-[11rem_minmax(0,1fr)] md:gap-8">
              <p className="text-sm font-medium text-zinc-500">{role.dates}</p>
              <div>
                <h3 className="text-xl font-semibold text-zinc-950">{role.title}</h3>
                <p className="mt-1 text-sm font-medium text-sky-800">{role.company}</p>
                <p className="mt-3 max-w-2xl leading-7 text-zinc-600">{role.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
