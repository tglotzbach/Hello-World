import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getProjects, getProjectBySlug } from "@/lib/mdx";
import type { Metadata } from "next";

export function generateStaticParams() {
  return getProjects().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — Tucker Glotzbach`,
    description: project.summary,
    openGraph: {
      title: `${project.title} — Tucker Glotzbach`,
      description: project.summary,
      type: "article",
    },
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/work"
        className="text-sm text-ink/40 transition-colors hover:text-ink"
      >
        &larr; Back to Work
      </Link>

      {/* Hero banner */}
      <div
        className={`mt-6 flex h-48 items-end rounded-sm bg-gradient-to-br ${project.gradient ?? "from-stone-200 to-stone-100"} p-6 md:h-56`}
      >
        <h1 className="font-serif text-3xl font-bold tracking-tight text-ink/80 md:text-4xl">
          {project.title}
        </h1>
      </div>

      <div className="mt-6 flex flex-wrap gap-3 text-sm text-ink/50">
        <span>{project.company}</span>
        <span>&middot;</span>
        <span>{project.year}</span>
        <span>&middot;</span>
        <span>{project.category}</span>
      </div>

      <hr className="my-8 border-ink/10" />

      <div className="prose prose-neutral max-w-none prose-headings:font-serif prose-headings:tracking-tight prose-a:text-accent prose-a:no-underline hover:prose-a:underline">
        <MDXRemote source={project.content} />
      </div>

      <hr className="my-12 border-ink/10" />

      <Link
        href="/work"
        className="text-sm text-ink/40 transition-colors hover:text-ink"
      >
        &larr; Back to Work
      </Link>
    </article>
  );
}
