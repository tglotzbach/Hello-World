import { render, screen } from "@testing-library/react";
import { Footer } from "@/components/Footer";

describe("Footer", () => {
  it("renders the copyright with current year", () => {
    render(<Footer />);
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
  });

  it("renders Tucker Glotzbach in the copyright", () => {
    render(<Footer />);
    expect(screen.getByText(/Tucker Glotzbach/)).toBeInTheDocument();
  });

  it("renders LinkedIn link", () => {
    render(<Footer />);
    const link = screen.getByText("LinkedIn").closest("a");
    expect(link).toHaveAttribute("href", "https://linkedin.com/in/tuckerglotzbach");
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("renders Resume download link", () => {
    render(<Footer />);
    const link = screen.getByText("Resume").closest("a");
    expect(link).toHaveAttribute("href", "/tucker-glotzbach-resume.pdf");
    expect(link).toHaveAttribute("download");
  });

  it("renders Email link", () => {
    render(<Footer />);
    const link = screen.getByText("Email").closest("a");
    expect(link).toHaveAttribute("href", "mailto:hello@tuckerglotzbach.com");
  });
});
