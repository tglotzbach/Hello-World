import Link from "next/link";
import { getProjects, getAutomations } from "@/lib/mdx";
import { ProjectCard } from "@/components/ProjectCard";
import { AutomationCard } from "@/components/AutomationCard";
import { ContactForm } from "@/components/ContactForm";

export default function Home() {
  const projects = getProjects();
  const automations = getAutomations().slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pb-16 pt-20 md:pt-28">
        <h1 className="font-serif text-5xl font-bold tracking-tight md:text-6xl">
          Tucker Glotzbach
        </h1>
        <p className="mt-4 text-lg text-ink/60">
          Senior Product Manager
        </p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/70">
          I build payments infrastructure, embedded finance platforms, and
          AI-native products. From scaling Apple Cash to founding an AI-powered
          proptech company, I operate at the intersection of complex systems
          and user-centric design.
        </p>
        <div className="mt-8 flex gap-4">
          <Link
            href="/work"
            className="border border-ink bg-ink px-5 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-ink/80"
          >
            View My Work
          </Link>
          <a
            href="/tucker-glotzbach-resume.pdf"
            download
            className="border border-ink/20 px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink/40"
          >
            Download Resume
          </a>
        </div>
      </section>

      <hr className="mx-auto max-w-5xl border-ink/10" />

      {/* Featured Work */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="font-serif text-3xl font-semibold tracking-tight">
          Featured Work
        </h2>
        <div className="mt-8 grid gap-x-12 gap-y-2 md:grid-cols-2">
          {projects.map((project) => (
            <div key={project.slug}>
              <ProjectCard
                title={project.title}
                category={project.category}
                summary={project.summary}
                slug={project.slug}
                gradient={project.gradient}
              />
              <hr className="border-ink/5" />
            </div>
          ))}
        </div>
      </section>

      <hr className="mx-auto max-w-5xl border-ink/10" />

      {/* Automations Preview */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="font-serif text-3xl font-semibold tracking-tight">
          Automations
        </h2>
        <p className="mt-3 text-sm text-ink/50">
          AI tools and workflows I&apos;ve built to work smarter.
        </p>
        <div className="mt-8 grid gap-x-12 gap-y-2 md:grid-cols-3">
          {automations.map((a) => (
            <AutomationCard
              key={a.slug}
              title={a.title}
              tools={a.tools}
              summary={a.summary}
              slug={a.slug}
            />
          ))}
        </div>
        <div className="mt-10">
          <Link
            href="/automations"
            className="text-sm font-medium text-ink/80 transition-colors hover:text-accent"
          >
            View all automations &rarr;
          </Link>
        </div>
      </section>

      <hr className="mx-auto max-w-5xl border-ink/10" />

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-2xl px-6 py-16">
        <h2 className="font-serif text-3xl font-semibold tracking-tight">
          Get in Touch
        </h2>
        <p className="mt-3 text-sm text-ink/50">
          Interested in working together or just want to say hello?
        </p>
        <div className="mt-8">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
