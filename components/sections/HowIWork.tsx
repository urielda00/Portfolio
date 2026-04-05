export default function HowIWork() {
  const principles = [
    {
      title: "Architecture before noise",
      description:
        "I like defining a clean structure early so the project can grow without turning into a mess.",
    },
    {
      title: "Refactoring with purpose",
      description:
        "I enjoy improving broken or messy systems and turning them into something clearer, more stable, and easier to extend.",
    },
    {
      title: "Backend and systems thinking",
      description:
        "I naturally focus on flows, logic, responsibilities, integration points, and how the full system behaves in practice.",
    },
    {
      title: "Practical product execution",
      description:
        "I care about building things that actually work for real users, real workflows, and real constraints.",
    },
  ];

  return (
    <section className="border-b border-zinc-200 bg-zinc-50">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            How I Work
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
            I enjoy building clear systems that can actually move forward
          </h2>

          <p className="mt-4 text-lg leading-8 text-zinc-600">
            My strongest value usually comes from structure, ownership, and
            practical decision making - not just writing code, but helping a
            product become more solid and more deliverable.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {principles.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-zinc-900">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}