import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("homepage loads with correct title", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Tucker Glotzbach/);
  });

  test("homepage displays hero section", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("h1")).toContainText("Tucker Glotzbach");
    await expect(page.getByText("Senior Product Manager")).toBeVisible();
  });

  test("homepage displays featured work section", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("Featured Work")).toBeVisible();
  });

  test("homepage displays automations section", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { name: "Automations" })).toBeVisible();
  });

  test("homepage displays contact form", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("Get in Touch")).toBeVisible();
    await expect(page.getByLabel("Name")).toBeVisible();
    await expect(page.getByLabel("Email")).toBeVisible();
    await expect(page.getByLabel("Message")).toBeVisible();
  });

  test("nav links navigate to correct pages", async ({ page }) => {
    await page.goto("/");

    // Navigate to Work page
    await page.getByRole("link", { name: "Work" }).first().click();
    await expect(page).toHaveURL("/work");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Work");

    // Navigate to Automations page
    await page.getByRole("link", { name: "Automations" }).first().click();
    await expect(page).toHaveURL("/automations");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Automations");

    // Navigate to Writing page
    await page.getByRole("link", { name: "Writing" }).first().click();
    await expect(page).toHaveURL("/writing");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Writing");

    // Navigate to About page
    await page.getByRole("link", { name: "About" }).first().click();
    await expect(page).toHaveURL("/about");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("About");
  });

  test("clicking site name navigates to homepage", async ({ page }) => {
    await page.goto("/about");
    await page.getByRole("link", { name: "Tucker Glotzbach" }).click();
    await expect(page).toHaveURL("/");
  });

  test("404 page shows for unknown routes", async ({ page }) => {
    await page.goto("/this-does-not-exist");
    await expect(page.getByText("Page not found")).toBeVisible();
    await expect(page.getByRole("link", { name: "Back to Home" })).toBeVisible();
  });

  test("404 page back to home link works", async ({ page }) => {
    await page.goto("/this-does-not-exist");
    await page.getByRole("link", { name: "Back to Home" }).click();
    await expect(page).toHaveURL("/");
  });
});
