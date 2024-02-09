import { test, expect } from "@playwright/test";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

test("Go to login page", async ({ page }) => {
  await page.goto("http://frontend:3000/signin");

  await page.locator('[data-test-id="email"]').click();
  await page.locator('[data-test-id="email"]').fill('mael@vincent.fr');
  await page.locator('[data-test-id="password"]').click();
  await page.locator('[data-test-id="password"]').fill('1234');

  await page.getByRole("button", { name: "Login" }).click();
  
  await page.waitForLoadState("networkidle");
  //await page.waitForLoadState("networkidle");
  console.log(page.url());
  await expect(page.url()).toEqual("http://frontend:3000/");
});