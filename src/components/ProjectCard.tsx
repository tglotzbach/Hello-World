import Link from "next/link";

interface ProjectCardProps {
  title: string;
  category: string;
  summary: string;
  slug: string;
}

export function ProjectCard({ title, category, summary, slug }: ProjectCardProps) {
  return (
    <article className="group py-6">
      <p className="text-xs font-medium uppercase tracking-widest text-accent">
        {category}
      </p>
      <h3 className="mt-2 font-serif text-2xl font-semibold tracking-tight">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink/60">{summary}</p>
      <Link
        href={`/work/${slug}`}
        className="mt-3 inline-block text-sm font-medium text-ink/80 transition-colors hover:text-accent"
      >
        Read case study &rarr;
      </Link>
    </article>
  );
}
