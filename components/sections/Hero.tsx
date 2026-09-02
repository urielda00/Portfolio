import Image from "next/image";
import styles from "./Hero.module.css";

const proofTags = [
  "Production Experience",
  "AI & Automation",
  "Backend Systems",
  "Docker & Infrastructure",
];

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

export default function Hero() {
  return (
    <section className="border-b border-zinc-200 bg-[#f8f8f6]">
      <div className={`mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:px-8 md:py-16 lg:grid-cols-[minmax(0,1.55fr)_minmax(240px,0.75fr)] lg:gap-10 ${styles.heroContent}`}>
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0b5e7a]">
            Uriel Dahan
          </p>

          <p className="mt-4 flex items-center gap-2 text-sm font-medium text-zinc-600 md:mt-3">
            <span className="h-px w-5 bg-[#0b5e7a]" aria-hidden="true" />
            Software Developer 
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-zinc-950 sm:text-5xl md:mt-3 md:text-[3.5rem]">
            Software Developer focused on AI Automation,
            <span className="mt-1 block text-zinc-700 md:mt-2">
              Backend &amp; Production Systems.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 md:mt-5">
            I build production software, AI-powered workflows and backend
            systems - from architecture and implementation to deployment and
            infrastructure.
          </p>

          <ul className="mt-7 flex flex-wrap gap-2 md:mt-6" aria-label="Core strengths">
            {proofTags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-[#0b5e7a]/40 bg-[#0b5e7a]/[0.075] px-3 py-1.5 text-sm font-medium text-zinc-700"
              >
                {tag}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3 md:mt-7">
            <a
              href="#featured-projects"
              className="rounded-md bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0b5e7a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b5e7a]"
            >
              View My Work
            </a>
            <a
              href="/resume/uriel-dahan-resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:border-[#0b5e7a]/50 hover:bg-[#0b5e7a]/[0.04] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b5e7a]"
            >
              Resume
            </a>
            <a
              href="https://github.com/urielda00"
              target="_blank"
              rel="noreferrer"
              className="px-2 py-3 text-sm font-semibold text-zinc-700 transition-colors hover:text-[#0b5e7a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b5e7a]"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/uriel-dahan/"
              target="_blank"
              rel="noreferrer"
              className="px-2 py-3 text-sm font-semibold text-zinc-700 transition-colors hover:text-[#0b5e7a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b5e7a]"
            >
              LinkedIn
            </a>
          </div>

          <p className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500 md:mt-5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0b5e7a]" aria-hidden="true" />
            B.Sc. Computer Science - Third-Year Student
          </p>
        </div>

        <div className="relative mx-auto h-48 w-48 sm:h-56 sm:w-56 lg:justify-self-start lg:h-64 lg:w-64">
          <div className="absolute -inset-3 rounded-full border border-[#0b5e7a]/20" aria-hidden="true" />
          <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white bg-zinc-200 shadow-[0_12px_32px_rgba(24,24,27,0.12)]">
            <Image
              src="/portrait.jpeg"
              alt="Uriel Dahan"
              fill
              priority
              sizes="(max-width: 639px) 192px, (max-width: 1023px) 224px, 256px"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-200/90" aria-label="Professional highlights">
        <div className="mx-auto max-w-6xl px-6 py-5 md:px-8 md:py-6">
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
      </div>
    </section>
  );
}
