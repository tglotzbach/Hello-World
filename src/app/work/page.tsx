import { Suspense } from "react";
import { getProjects, getCategories } from "@/lib/mdx";
import { ProjectCard } from "@/components/ProjectCard";
import { CategoryFilter } from "@/components/CategoryFilter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work — Tucker Glotzbach",
  description: "Case studies from payments, fintech, and AI product management.",
  openGraph: {
    title: "Work — Tucker Glotzbach",
    description: "Case studies from payments, fintech, and AI product management.",
  },
};

function ProjectGrid({ category }: { category?: string }) {
  const allProjects = getProjects();
  const projects = category
    ? allProjects.filter((p) => p.category.includes(category))
    : allProjects;

  return (
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
      {projects.length === 0 && (
        <p className="py-8 text-sm text-ink/40">No projects in this category yet.</p>
      )}
    </div>
  );
}

export default function WorkPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const categories = getCategories();

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="font-serif text-4xl font-bold tracking-tight">Work</h1>
      <p className="mt-3 text-sm text-ink/50">
        Case studies from payments, fintech, and AI product management.
      </p>
      <div className="mt-6">
        <Suspense>
          <CategoryFilter categories={categories} />
        </Suspense>
      </div>
      <ProjectGrid category={searchParams.category} />
    </section>
  );
}
