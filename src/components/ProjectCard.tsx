import Link from "next/link";

interface ProjectCardProps {
  title: string;
  category: string;
  summary: string;
  slug: string;
  gradient?: string;
}

export function ProjectCard({ title, category, summary, slug, gradient }: ProjectCardProps) {
  return (
    <article className="group py-6">
      {/* Hero image banner */}
      <Link href={`/work/${slug}`} className="block">
        <div
          className={`mb-4 flex h-36 items-end rounded-sm bg-gradient-to-br ${gradient ?? "from-stone-200 to-stone-100"} p-5 transition-shadow group-hover:shadow-sm`}
        >
          <span className="font-serif text-lg font-semibold tracking-tight text-ink/70">
            {title}
          </span>
        </div>
      </Link>
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
