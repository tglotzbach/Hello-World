import Link from "next/link";

interface AutomationCardProps {
  title: string;
  tools: string;
  summary: string;
  slug: string;
}

export function AutomationCard({ title, tools, summary, slug }: AutomationCardProps) {
  return (
    <article className="py-6">
      <p className="text-xs font-medium uppercase tracking-widest text-ink/40">
        {tools}
      </p>
      <h3 className="mt-2 font-serif text-xl font-semibold tracking-tight">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink/60">{summary}</p>
      <Link
        href={`/automations#${slug}`}
        className="mt-3 inline-block text-sm font-medium text-ink/80 transition-colors hover:text-accent"
      >
        Learn more &rarr;
      </Link>
    </article>
  );
}
