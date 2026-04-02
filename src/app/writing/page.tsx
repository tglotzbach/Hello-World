import { getWriting } from "@/lib/mdx";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing — Tucker Glotzbach",
  description: "Essays and articles on product management, fintech, and AI.",
  openGraph: {
    title: "Writing — Tucker Glotzbach",
    description: "Essays and articles on product management, fintech, and AI.",
  },
};

export default function WritingPage() {
  const articles = getWriting();

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-serif text-4xl font-bold tracking-tight">Writing</h1>
      <p className="mt-3 text-sm text-ink/50">
        Essays and articles on product management, fintech, and AI.
      </p>

      <div className="mt-10 space-y-1">
        {articles.map((article) => (
          <a
            key={article.slug}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-baseline justify-between gap-4 py-5"
          >
            <div>
              <h2 className="font-serif text-lg font-semibold tracking-tight transition-colors group-hover:text-accent">
                {article.title}
              </h2>
              <p className="mt-1 text-sm text-ink/40">
                {article.publication} &middot; {article.date}
              </p>
            </div>
            <span className="shrink-0 text-sm text-ink/30 transition-colors group-hover:text-accent">
              &rarr;
            </span>
          </a>
        ))}
      </div>

      <hr className="mt-8 border-ink/10" />
      <p className="mt-6 text-sm text-ink/40">
        More articles on{" "}
        <a
          href="https://linkedin.com/in/tuckerglotzbach"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          LinkedIn
        </a>
        .
      </p>
    </section>
  );
}
