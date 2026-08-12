const proofPoints = [
  {
    title: "Production Developer",
    description: "Building and maintaining live software systems",
  },
  {
    title: "AI Automation",
    description: "Real-world AI-assisted workflows and integrations",
  },
  {
    title: "End-to-End Ownership",
    description: "Architecture → Development → Deployment",
  },
  {
    title: "Full-Stack + Backend",
    description: "React · Node.js · MongoDB · Docker",
  },
];

export default function CredibilityStrip() {
  return (
    <section aria-label="Professional highlights" className="border-b border-zinc-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-9 md:px-8 md:py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {proofPoints.map((point, index) => (
            <div
              key={point.title}
              className={index === 0 ? "" : "lg:border-l lg:border-zinc-200 lg:pl-8"}
            >
              <h2 className="text-sm font-semibold text-zinc-950">{point.title}</h2>
              <p className="mt-2 text-[0.9375rem] leading-6 text-zinc-600">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
