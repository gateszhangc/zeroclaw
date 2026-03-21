import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  reporter: "list",
  timeout: 45000,
  use: {
    baseURL: "http://127.0.0.1:3411",
    screenshot: "only-on-failure",
    trace: "on-first-retry",
  },
  webServer: {
    command:
      "npm run build && HOSTNAME=127.0.0.1 PORT=3411 node .next/standalone/server.js",
    url: "http://127.0.0.1:3411",
    reuseExistingServer: false,
    timeout: 180000,
  },
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
    {
      name: "mobile-chromium",
      use: {
        ...devices["Pixel 5"],
      },
    },
  ],
});
