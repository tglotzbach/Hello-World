import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Tucker Glotzbach",
  description:
    "Senior Product Manager specializing in payments infrastructure, embedded finance, and AI-native products. Based in Alexandria, VA.",
  openGraph: {
    title: "About — Tucker Glotzbach",
    description:
      "Senior Product Manager specializing in payments infrastructure, embedded finance, and AI-native products.",
  },
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-serif text-4xl font-bold tracking-tight">About</h1>

      <div className="mt-8 space-y-5 text-base leading-relaxed text-ink/70">
        <p>
          I&apos;m Tucker Glotzbach, a Senior Product Manager based in Alexandria, VA.
          I specialize in payments infrastructure, embedded finance, and AI-native
          products.
        </p>

        <p>
          Over the past decade, I&apos;ve led product work across some of the most
          demanding environments in fintech — from scaling Apple Cash at Green Dot
          to building data-driven servicing platforms at Capital One. I think in
          systems, ship with precision, and care deeply about the craft of product
          management.
        </p>

        <p>
          Today, I&apos;m the CEO and founder of Ratcliff RE, an AI-powered real
          estate investment analysis platform. I&apos;m also an active builder of
          AI automation systems using Claude, designing multi-agent workflows
          that turn complex operations into repeatable processes.
        </p>

        <p>
          Before product management, I founded and exited a consumer product
          company (Induck / Campus Dive), giving me a founder&apos;s perspective
          on every product I touch.
        </p>

        <hr className="my-8 border-ink/10" />

        <h2 className="font-serif text-2xl font-semibold tracking-tight text-ink">
          What I believe
        </h2>

        <ul className="list-disc space-y-2 pl-5 text-ink/60">
          <li>Great products come from deep domain understanding, not frameworks.</li>
          <li>AI should augment judgment, not replace it.</li>
          <li>The best PMs are systems thinkers who can also ship.</li>
          <li>Craft matters — in writing, design, and code.</li>
        </ul>
      </div>

      <hr className="my-12 border-ink/10" />

      <div className="flex gap-6 text-sm">
        <a
          href="https://linkedin.com/in/tuckerglotzbach"
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink/50 transition-colors hover:text-accent"
        >
          LinkedIn
        </a>
        <a
          href="mailto:hello@tuckerglotzbach.com"
          className="text-ink/50 transition-colors hover:text-accent"
        >
          Email
        </a>
        <a
          href="/tucker-glotzbach-resume.pdf"
          download
          className="text-ink/50 transition-colors hover:text-accent"
        >
          Resume
        </a>
      </div>
    </section>
  );
}
