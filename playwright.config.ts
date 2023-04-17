import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './src',
  outputDir: 'test-results/',
  timeout: 15 * 60 * 1000,
  expect: {
    timeout: 10 * 1000
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['allure-playwright'], ['html'], ['line']],
  use: {
    channel: 'chrome',
    actionTimeout: 0,
    trace: 'on-first-retry',
    headless: true,
    screenshot: 'only-on-failure'
  },
};

export default config;
