export default function Contact() {
  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center md:px-8">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
          Contact
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
          Let&apos;s connect
        </h2>

        <p className="mt-4 text-lg leading-8 text-zinc-600">
          I&apos;m currently looking for a full-stack, backend, or product engineering
          role where I can contribute through architecture, refactoring, system
          thinking, and practical execution inside a strong product team.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:urielda00@email.com"
            className="rounded-lg bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
          >
            Email me
          </a>

          <a
            href="https://github.com/urielda00"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/uriel-dahan/"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100"
          >
            LinkedIn
          </a>

          <a
            href="/resume/uriel-dahan-resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}