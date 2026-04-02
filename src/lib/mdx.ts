import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

export interface ProjectFrontmatter {
  title: string;
  company: string;
  year: string;
  category: string;
  summary: string;
  slug: string;
  order: number;
  gradient: string;
}

export interface AutomationFrontmatter {
  title: string;
  tools: string;
  summary: string;
  slug: string;
}

export function getProjects(): (ProjectFrontmatter & { content: string })[] {
  const dir = path.join(contentDir, "projects");
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));
  const projects = files.map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), "utf-8");
    const { data, content } = matter(raw);
    return { ...(data as ProjectFrontmatter), content };
  });
  return projects.sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
}

export function getProjectBySlug(
  slug: string
): (ProjectFrontmatter & { content: string }) | null {
  const projects = getProjects();
  return projects.find((p) => p.slug === slug) ?? null;
}

export function getCategories(): string[] {
  const projects = getProjects();
  const cats = new Set<string>();
  for (const p of projects) {
    for (const c of p.category.split(" · ")) {
      cats.add(c.trim());
    }
  }
  return Array.from(cats).sort();
}

export function getAutomations(): (AutomationFrontmatter & {
  content: string;
})[] {
  const dir = path.join(contentDir, "automations");
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));
  return files.map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), "utf-8");
    const { data, content } = matter(raw);
    return { ...(data as AutomationFrontmatter), content };
  });
}

export interface WritingFrontmatter {
  title: string;
  url: string;
  publication: string;
  date: string;
  slug: string;
}

export function getWriting(): WritingFrontmatter[] {
  const dir = path.join(contentDir, "writing");
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));
  return files.map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), "utf-8");
    const { data } = matter(raw);
    return data as WritingFrontmatter;
  });
}
