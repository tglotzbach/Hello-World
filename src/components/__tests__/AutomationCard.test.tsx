import { render, screen } from "@testing-library/react";
import { AutomationCard } from "@/components/AutomationCard";

const props = {
  title: "Test Automation",
  tools: "Claude API · Node.js",
  summary: "A test automation summary.",
  slug: "test-automation",
};

describe("AutomationCard", () => {
  it("renders the title", () => {
    render(<AutomationCard {...props} />);
    expect(screen.getByText("Test Automation")).toBeInTheDocument();
  });

  it("renders the tools", () => {
    render(<AutomationCard {...props} />);
    expect(screen.getByText("Claude API · Node.js")).toBeInTheDocument();
  });

  it("renders the summary", () => {
    render(<AutomationCard {...props} />);
    expect(screen.getByText(props.summary)).toBeInTheDocument();
  });

  it("links to the automation anchor", () => {
    render(<AutomationCard {...props} />);
    const link = screen.getByText(/Learn more/).closest("a");
    expect(link).toHaveAttribute("href", "/automations#test-automation");
  });
});
