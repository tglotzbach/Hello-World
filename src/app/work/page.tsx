import { getProjects } from "@/lib/mdx";
import { ProjectCard } from "@/components/ProjectCard";

export default function WorkPage() {
  const projects = getProjects();

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="font-serif text-4xl font-bold tracking-tight">Work</h1>
      <p className="mt-3 text-sm text-ink/50">
        Case studies from payments, fintech, and AI product management.
      </p>
      <div className="mt-10 grid gap-x-12 gap-y-2 md:grid-cols-2">
        {projects.map((project) => (
          <div key={project.slug}>
            <ProjectCard
              title={project.title}
              category={project.category}
              summary={project.summary}
              slug={project.slug}
            />
            <hr className="border-ink/5" />
          </div>
        ))}
      </div>
    </section>
  );
}
