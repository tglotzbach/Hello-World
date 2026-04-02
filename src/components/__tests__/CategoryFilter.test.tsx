import { render, screen, fireEvent } from "@testing-library/react";
import { CategoryFilter } from "@/components/CategoryFilter";

const mockPush = jest.fn();
const mockSearchParams = new URLSearchParams();

jest.mock("next/navigation", () => ({
  useRouter: () => ({ push: mockPush }),
  useSearchParams: () => mockSearchParams,
}));

const categories = ["AI Product", "Data Products", "Embedded Finance"];

describe("CategoryFilter", () => {
  beforeEach(() => {
    mockPush.mockClear();
  });

  it("renders 'All' button plus all categories", () => {
    render(<CategoryFilter categories={categories} />);
    expect(screen.getByText("All")).toBeInTheDocument();
    expect(screen.getByText("AI Product")).toBeInTheDocument();
    expect(screen.getByText("Data Products")).toBeInTheDocument();
    expect(screen.getByText("Embedded Finance")).toBeInTheDocument();
  });

  it("renders the correct number of buttons", () => {
    render(<CategoryFilter categories={categories} />);
    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBe(4); // All + 3 categories
  });

  it("navigates to /work when 'All' is clicked", () => {
    render(<CategoryFilter categories={categories} />);
    fireEvent.click(screen.getByText("All"));
    expect(mockPush).toHaveBeenCalledWith("/work", { scroll: false });
  });

  it("navigates with category param when a category is clicked", () => {
    render(<CategoryFilter categories={categories} />);
    fireEvent.click(screen.getByText("AI Product"));
    expect(mockPush).toHaveBeenCalledWith(
      "/work?category=AI%20Product",
      { scroll: false }
    );
  });

  it("highlights the 'All' button by default", () => {
    render(<CategoryFilter categories={categories} />);
    const allButton = screen.getByText("All");
    expect(allButton.className).toContain("bg-ink");
  });
});
