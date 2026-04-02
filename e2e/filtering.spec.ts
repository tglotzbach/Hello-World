import { test, expect } from "@playwright/test";

test.describe("Category Filtering", () => {
  test("work page shows filter buttons", async ({ page }) => {
    await page.goto("/work");
    await expect(page.getByRole("button", { name: "All" })).toBeVisible();
  });

  test("'All' filter is active by default", async ({ page }) => {
    await page.goto("/work");
    const allButton = page.getByRole("button", { name: "All" });
    await expect(allButton).toHaveClass(/bg-ink/);
  });

  test("clicking a category filters projects", async ({ page }) => {
    await page.goto("/work");

    // Count initial projects
    const initialCards = await page.getByText(/Read case study/).count();
    expect(initialCards).toBe(5);

    // Click a specific category
    await page.getByRole("button", { name: "Venture" }).click();
    await expect(page).toHaveURL(/category=Venture/);

    // Should show fewer projects
    const filteredCards = await page.getByText(/Read case study/).count();
    expect(filteredCards).toBeLessThan(initialCards);
    expect(filteredCards).toBeGreaterThan(0);
  });

  test("clicking 'All' resets the filter", async ({ page }) => {
    await page.goto("/work?category=Venture");
    await page.getByRole("button", { name: "All" }).click();
    await expect(page).toHaveURL("/work");

    const cards = await page.getByText(/Read case study/).count();
    expect(cards).toBe(5);
  });

  test("filtering preserves page structure", async ({ page }) => {
    await page.goto("/work?category=Embedded%20Finance");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Work");
    // Apple Cash should show (it has Embedded Finance category)
    await expect(page.getByText("Apple Cash")).toBeVisible();
  });
});
