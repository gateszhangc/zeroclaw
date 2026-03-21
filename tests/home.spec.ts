import { expect, test } from "@playwright/test";

test("homepage renders the ZeroClaw research narrative", async ({ page }) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });

  await expect(page).toHaveTitle(/ZeroClaw Guide/i);
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: /ZeroClaw is the fast, small, security-minded path to autonomous agents\./i,
    })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: /View Repository/i })
  ).toHaveAttribute("href", "https://github.com/zeroclaw-labs/zeroclaw");
  await expect(
    page.getByRole("heading", { level: 2, name: "What is ZeroClaw?" })
  ).toBeVisible();
  await expect(
    page.getByRole("heading", {
      level: 2,
      name: "ZeroClaw keyword topics worth ranking for",
    })
  ).toBeVisible();
});

test("homepage keeps setup and faq content visible on mobile", async ({
  page,
}) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });

  await expect(page.getByText("ZeroClaw vs OpenClaw")).toBeVisible();
  await expect(page.getByText("How to install ZeroClaw")).toBeVisible();
  await expect(
    page.getByRole("heading", { level: 2, name: "ZeroClaw FAQ" })
  ).toBeVisible();
});

test("homepage exposes canonical metadata and structured data", async ({
  page,
}) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });

  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    /https:\/\/zeroclaw\.lol\/?$/
  );
  await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
    "content",
    "https://zeroclaw.lol"
  );

  const schemas = await page
    .locator('script[type="application/ld+json"]')
    .allTextContents();
  const schemaText = schemas.join("\n");

  expect(schemaText).toContain('"@type":"WebSite"');
  expect(schemaText).toContain('"@type":"WebPage"');
  expect(schemaText).toContain('"@type":"FAQPage"');
});

test("robots and sitemap expose crawl signals", async ({ request }) => {
  const robotsResponse = await request.get("/robots.txt");
  expect(robotsResponse.ok()).toBeTruthy();

  const robotsText = await robotsResponse.text();
  expect(robotsText).toContain("User-Agent: *");
  expect(robotsText).toContain("Allow: /");
  expect(robotsText).toContain("Sitemap: https://zeroclaw.lol/sitemap.xml");

  const sitemapResponse = await request.get("/sitemap.xml");
  expect(sitemapResponse.ok()).toBeTruthy();

  const sitemapText = await sitemapResponse.text();
  expect(sitemapText).toMatch(/<loc>https:\/\/zeroclaw\.lol\/?<\/loc>/);
});
