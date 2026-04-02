import { render, screen } from "@testing-library/react";
import { ProjectCard } from "@/components/ProjectCard";

const props = {
  title: "Test Project",
  category: "AI · Fintech",
  summary: "A test project summary for testing purposes.",
  slug: "test-project",
  gradient: "from-stone-200 to-stone-100",
};

describe("ProjectCard", () => {
  it("renders the project title", () => {
    render(<ProjectCard {...props} />);
    // Title appears in both the banner and the heading
    expect(screen.getAllByText("Test Project").length).toBeGreaterThanOrEqual(1);
  });

  it("renders the category tag", () => {
    render(<ProjectCard {...props} />);
    expect(screen.getByText("AI · Fintech")).toBeInTheDocument();
  });

  it("renders the summary", () => {
    render(<ProjectCard {...props} />);
    expect(screen.getByText(props.summary)).toBeInTheDocument();
  });

  it("links to the correct project page", () => {
    render(<ProjectCard {...props} />);
    const links = screen.getAllByRole("link");
    const projectLinks = links.filter(
      (l) => l.getAttribute("href") === "/work/test-project"
    );
    expect(projectLinks.length).toBeGreaterThanOrEqual(1);
  });

  it("renders the case study CTA", () => {
    render(<ProjectCard {...props} />);
    expect(screen.getByText(/Read case study/)).toBeInTheDocument();
  });

  it("applies the gradient class", () => {
    const { container } = render(<ProjectCard {...props} />);
    const banner = container.querySelector("[class*='bg-gradient']");
    expect(banner).not.toBeNull();
    expect(banner?.className).toContain("from-stone-200");
  });

  it("uses default gradient when none provided", () => {
    const { container } = render(
      <ProjectCard
        title="No Gradient"
        category="Test"
        summary="Test"
        slug="no-gradient"
      />
    );
    const banner = container.querySelector("[class*='bg-gradient']");
    expect(banner).not.toBeNull();
    expect(banner?.className).toContain("from-stone-200");
  });
});
