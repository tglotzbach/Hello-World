import { test, expect } from "@playwright/test";

test.describe("Responsive / Mobile", () => {
  test.use({ viewport: { width: 375, height: 812 } }); // iPhone X

  test("mobile shows hamburger menu", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByLabel("Toggle menu")).toBeVisible();
  });

  test("hamburger opens mobile nav", async ({ page }) => {
    await page.goto("/");
    await page.getByLabel("Toggle menu").click();

    // Should show nav links in the mobile dropdown
    const mobileMenu = page.locator("[class*='border-t']");
    await expect(mobileMenu).toBeVisible();
    await expect(mobileMenu.getByRole("link", { name: "Work" })).toBeVisible();
    await expect(mobileMenu.getByRole("link", { name: "About" })).toBeVisible();
  });

  test("mobile nav link navigates and closes menu", async ({ page }) => {
    await page.goto("/");
    await page.getByLabel("Toggle menu").click();

    const mobileMenu = page.locator("[class*='border-t']");
    await mobileMenu.getByRole("link", { name: "Work" }).click();

    await expect(page).toHaveURL("/work");
    // Menu should be closed
    await expect(page.locator("[class*='border-t']")).not.toBeVisible();
  });

  test("homepage renders correctly on mobile", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("h1")).toBeVisible();
    await expect(page.getByText("View My Work")).toBeVisible();
    await expect(page.getByText("Download Resume")).toBeVisible();
  });

  test("project page is readable on mobile", async ({ page }) => {
    await page.goto("/work/apple-cash");
    await expect(page.locator("article")).toBeVisible();
    await expect(page.getByText(/Back to Work/).first()).toBeVisible();
  });
});
