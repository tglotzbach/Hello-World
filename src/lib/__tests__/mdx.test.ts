import {
  getProjects,
  getProjectBySlug,
  getCategories,
  getAutomations,
  getWriting,
} from "@/lib/mdx";

describe("getProjects", () => {
  it("returns all projects", () => {
    const projects = getProjects();
    expect(projects.length).toBeGreaterThanOrEqual(5);
  });

  it("returns projects sorted by order field", () => {
    const projects = getProjects();
    for (let i = 1; i < projects.length; i++) {
      expect(projects[i].order).toBeGreaterThanOrEqual(projects[i - 1].order);
    }
  });

  it("returns projects with required frontmatter fields", () => {
    const projects = getProjects();
    for (const p of projects) {
      expect(p.title).toBeTruthy();
      expect(p.company).toBeTruthy();
      expect(p.year).toBeTruthy();
      expect(p.category).toBeTruthy();
      expect(p.summary).toBeTruthy();
      expect(p.slug).toBeTruthy();
      expect(p.order).toBeDefined();
      expect(p.gradient).toBeTruthy();
    }
  });

  it("returns projects with MDX content", () => {
    const projects = getProjects();
    for (const p of projects) {
      expect(p.content).toBeTruthy();
      expect(p.content.length).toBeGreaterThan(50);
    }
  });

  it("returns unique slugs", () => {
    const projects = getProjects();
    const slugs = projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});

describe("getProjectBySlug", () => {
  it("returns a project for a valid slug", () => {
    const project = getProjectBySlug("apple-cash");
    expect(project).not.toBeNull();
    expect(project!.title).toBe("Apple Cash");
    expect(project!.company).toBe("Green Dot");
  });

  it("returns null for an invalid slug", () => {
    const project = getProjectBySlug("nonexistent-project");
    expect(project).toBeNull();
  });

  it("returns full content for each known project", () => {
    const slugs = ["apple-cash", "capital-one", "ratcliff-re", "job-search-automation", "induck"];
    for (const slug of slugs) {
      const project = getProjectBySlug(slug);
      expect(project).not.toBeNull();
      expect(project!.content).toBeTruthy();
    }
  });
});

describe("getCategories", () => {
  it("returns an array of category strings", () => {
    const categories = getCategories();
    expect(categories.length).toBeGreaterThan(0);
    for (const c of categories) {
      expect(typeof c).toBe("string");
      expect(c.length).toBeGreaterThan(0);
    }
  });

  it("returns sorted categories", () => {
    const categories = getCategories();
    const sorted = [...categories].sort();
    expect(categories).toEqual(sorted);
  });

  it("returns unique categories", () => {
    const categories = getCategories();
    expect(new Set(categories).size).toBe(categories.length);
  });

  it("includes expected categories", () => {
    const categories = getCategories();
    expect(categories).toContain("Embedded Finance");
    expect(categories).toContain("Payments Infrastructure");
  });
});

describe("getAutomations", () => {
  it("returns all automations", () => {
    const automations = getAutomations();
    expect(automations.length).toBeGreaterThanOrEqual(3);
  });

  it("returns automations with required frontmatter fields", () => {
    const automations = getAutomations();
    for (const a of automations) {
      expect(a.title).toBeTruthy();
      expect(a.tools).toBeTruthy();
      expect(a.summary).toBeTruthy();
      expect(a.slug).toBeTruthy();
    }
  });

  it("returns automations with content", () => {
    const automations = getAutomations();
    for (const a of automations) {
      expect(a.content).toBeTruthy();
    }
  });
});

describe("getWriting", () => {
  it("returns all writing entries", () => {
    const writing = getWriting();
    expect(writing.length).toBeGreaterThanOrEqual(3);
  });

  it("returns entries with required frontmatter fields", () => {
    const writing = getWriting();
    for (const w of writing) {
      expect(w.title).toBeTruthy();
      expect(w.url).toBeTruthy();
      expect(w.publication).toBeTruthy();
      expect(w.date).toBeTruthy();
      expect(w.slug).toBeTruthy();
    }
  });
});
