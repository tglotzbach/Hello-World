import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center">
      <p className="text-sm font-medium uppercase tracking-widest text-ink/30">
        404
      </p>
      <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight">
        Page not found
      </h1>
      <p className="mt-4 text-base text-ink/50">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 border border-ink bg-ink px-5 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-ink/80"
      >
        Back to Home
      </Link>
    </section>
  );
}
