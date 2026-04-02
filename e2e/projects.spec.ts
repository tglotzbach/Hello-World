import { test, expect } from "@playwright/test";

test.describe("Project Pages", () => {
  test("work page lists all projects", async ({ page }) => {
    await page.goto("/work");
    await expect(page.getByText("Apple Cash")).toBeVisible();
    await expect(page.getByText("Recoveries Platform")).toBeVisible();
    await expect(page.getByText("Ratcliff RE")).toBeVisible();
    await expect(page.getByText("Claude Job Search Automation System")).toBeVisible();
    await expect(page.getByText("Induck / Campus Dive")).toBeVisible();
  });

  test("project cards link to case study pages", async ({ page }) => {
    await page.goto("/work");
    await page.getByRole("link", { name: /Read case study/ }).first().click();
    await expect(page).toHaveURL(/\/work\/.+/);
  });

  test("apple-cash project page renders correctly", async ({ page }) => {
    await page.goto("/work/apple-cash");
    await expect(page).toHaveTitle(/Apple Cash/);
    await expect(page.getByText("Green Dot")).toBeVisible();
    await expect(page.getByText("2021–2023")).toBeVisible();
    await expect(page.getByText("Overview")).toBeVisible();
  });

  test("project page has back to work link", async ({ page }) => {
    await page.goto("/work/apple-cash");
    const backLinks = page.getByRole("link", { name: /Back to Work/ });
    await expect(backLinks.first()).toBeVisible();
  });

  test("back to work link navigates correctly", async ({ page }) => {
    await page.goto("/work/capital-one");
    await page.getByRole("link", { name: /Back to Work/ }).first().click();
    await expect(page).toHaveURL("/work");
  });

  test("project page shows hero banner with gradient", async ({ page }) => {
    await page.goto("/work/ratcliff-re");
    const banner = page.locator("[class*='bg-gradient']");
    await expect(banner).toBeVisible();
  });

  test("all project slugs resolve", async ({ page }) => {
    const slugs = [
      "apple-cash",
      "capital-one",
      "ratcliff-re",
      "job-search-automation",
      "induck",
    ];
    for (const slug of slugs) {
      await page.goto(`/work/${slug}`);
      await expect(page.locator("article")).toBeVisible();
      await expect(page.getByText("Page not found")).not.toBeVisible();
    }
  });
});
