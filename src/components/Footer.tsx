export function Footer() {
  return (
    <footer className="mt-24">
      <hr className="border-ink/10" />
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-10 text-sm text-ink/50 sm:flex-row sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Tucker Glotzbach</p>
        <div className="flex gap-6">
          <a
            href="https://linkedin.com/in/tuckerglotzbach"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-ink"
          >
            LinkedIn
          </a>
          <a
            href="/tucker-glotzbach-resume.pdf"
            download
            className="transition-colors hover:text-ink"
          >
            Resume
          </a>
          <a
            href="mailto:hello@tuckerglotzbach.com"
            className="transition-colors hover:text-ink"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
