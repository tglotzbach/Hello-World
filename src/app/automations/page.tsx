import { MDXRemote } from "next-mdx-remote/rsc";
import { getAutomations } from "@/lib/mdx";

export default function AutomationsPage() {
  const automations = getAutomations();

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="font-serif text-4xl font-bold tracking-tight">
        Automations
      </h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/50">
        AI tools and workflows I&apos;ve designed and built — from multi-agent
        systems to data pipelines powered by Claude, APIs, and creative
        automation.
      </p>

      <div className="mt-12 space-y-16">
        {automations.map((a) => (
          <article key={a.slug} id={a.slug}>
            <p className="text-xs font-medium uppercase tracking-widest text-ink/40">
              {a.tools}
            </p>
            <h2 className="mt-2 font-serif text-2xl font-semibold tracking-tight">
              {a.title}
            </h2>
            <div className="mt-4 prose prose-neutral max-w-none prose-headings:font-serif prose-headings:tracking-tight prose-a:text-accent prose-a:no-underline hover:prose-a:underline">
              <MDXRemote source={a.content} />
            </div>
            <hr className="mt-12 border-ink/10" />
          </article>
        ))}
      </div>
    </section>
  );
}
