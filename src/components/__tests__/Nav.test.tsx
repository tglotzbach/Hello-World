import { render, screen, fireEvent } from "@testing-library/react";
import { Nav } from "@/components/Nav";

// Mock next/navigation
const mockPathname = jest.fn().mockReturnValue("/");
jest.mock("next/navigation", () => ({
  usePathname: () => mockPathname(),
}));

describe("Nav", () => {
  beforeEach(() => {
    mockPathname.mockReturnValue("/");
  });

  it("renders the site name", () => {
    render(<Nav />);
    expect(screen.getByText("Tucker Glotzbach")).toBeInTheDocument();
  });

  it("renders all navigation links", () => {
    render(<Nav />);
    expect(screen.getAllByText("Work").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Automations").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Writing").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("About").length).toBeGreaterThanOrEqual(1);
  });

  it("renders the site name as a link to home", () => {
    render(<Nav />);
    const homeLink = screen.getByText("Tucker Glotzbach").closest("a");
    expect(homeLink).toHaveAttribute("href", "/");
  });

  it("has correct hrefs for navigation links", () => {
    render(<Nav />);
    // Desktop links
    const links = screen.getAllByRole("link");
    const hrefs = links.map((l) => l.getAttribute("href"));
    expect(hrefs).toContain("/work");
    expect(hrefs).toContain("/automations");
    expect(hrefs).toContain("/writing");
    expect(hrefs).toContain("/about");
  });

  it("toggles mobile menu when hamburger is clicked", () => {
    render(<Nav />);
    const button = screen.getByLabelText("Toggle menu");

    // Mobile menu should not be visible initially — check for the border-t container
    const nav = button.closest("header");
    expect(nav?.querySelectorAll('[class*="border-t"]').length).toBe(0);

    fireEvent.click(button);

    // After click, mobile menu should appear
    expect(nav?.querySelectorAll('[class*="border-t"]').length).toBe(1);
  });

  it("closes mobile menu when a link is clicked", () => {
    render(<Nav />);
    const button = screen.getByLabelText("Toggle menu");
    fireEvent.click(button);

    // Click a link inside the mobile menu
    const header = button.closest("header")!;
    const mobileMenu = header.querySelector('[class*="border-t"]');
    const mobileLink = mobileMenu?.querySelector("a");
    if (mobileLink) {
      fireEvent.click(mobileLink);
    }

    // Menu should close
    expect(header.querySelectorAll('[class*="border-t"]').length).toBe(0);
  });

  it("highlights the active link based on pathname", () => {
    mockPathname.mockReturnValue("/work");
    render(<Nav />);

    // The Work links should have font-medium class
    const workLinks = screen.getAllByText("Work");
    const activeLink = workLinks.find((el) =>
      el.className.includes("font-medium")
    );
    expect(activeLink).toBeDefined();
  });
});
