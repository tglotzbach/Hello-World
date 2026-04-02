import { test, expect } from "@playwright/test";

test.describe("About Page", () => {
  test("renders about page content", async ({ page }) => {
    await page.goto("/about");
    await expect(page).toHaveTitle(/About/);
    await expect(page.getByText("Tucker Glotzbach")).toBeVisible();
    await expect(page.getByText("Alexandria, VA")).toBeVisible();
  });

  test("renders beliefs section", async ({ page }) => {
    await page.goto("/about");
    await expect(page.getByText("What I believe")).toBeVisible();
  });

  test("has LinkedIn, Email, and Resume links", async ({ page }) => {
    await page.goto("/about");
    await expect(page.getByRole("link", { name: "LinkedIn" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Email" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Resume" })).toBeVisible();
  });
});

test.describe("Writing Page", () => {
  test("renders writing page", async ({ page }) => {
    await page.goto("/writing");
    await expect(page).toHaveTitle(/Writing/);
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Writing");
  });

  test("lists articles from MDX content", async ({ page }) => {
    await page.goto("/writing");
    // Should have at least 3 article entries
    const articles = page.locator("a.group");
    await expect(articles).toHaveCount(3);
  });

  test("articles show publication and date", async ({ page }) => {
    await page.goto("/writing");
    await expect(page.getByText(/LinkedIn/).first()).toBeVisible();
  });
});

test.describe("Automations Page", () => {
  test("renders automations page", async ({ page }) => {
    await page.goto("/automations");
    await expect(page).toHaveTitle(/Automations/);
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Automations");
  });

  test("lists all automations", async ({ page }) => {
    await page.goto("/automations");
    await expect(page.getByText("Job Search Scoring Bot")).toBeVisible();
    await expect(page.getByText("Ratcliff RE Valuation Engine")).toBeVisible();
    await expect(page.getByText("LinkedIn Content System")).toBeVisible();
  });

  test("automations show tools used", async ({ page }) => {
    await page.goto("/automations");
    await expect(page.getByText("Claude Dispatch").first()).toBeVisible();
  });
});

test.describe("Footer", () => {
  test("footer is visible on all pages", async ({ page }) => {
    const pages = ["/", "/work", "/automations", "/writing", "/about"];
    for (const path of pages) {
      await page.goto(path);
      await expect(page.locator("footer")).toBeVisible();
    }
  });

  test("footer has correct links", async ({ page }) => {
    await page.goto("/");
    const footer = page.locator("footer");
    await expect(footer.getByRole("link", { name: "LinkedIn" })).toBeVisible();
    await expect(footer.getByRole("link", { name: "Resume" })).toBeVisible();
    await expect(footer.getByRole("link", { name: "Email" })).toBeVisible();
  });
});
