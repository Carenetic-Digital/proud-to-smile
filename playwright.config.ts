import { defineConfig } from '@playwright/test';

// Port 4321 is Astro's default and collides with any other Astro project the
// developer happens to have running — with `reuseExistingServer` that silently
// points the whole suite at the wrong site. Pin a project-specific port and
// never reuse a foreign server on it.
const PORT = 4327;

export default defineConfig({
  testDir: './tests',
  webServer: {
    command: `npm run preview -- --port ${PORT}`,
    url: `http://localhost:${PORT}`,
    timeout: 120000,
    reuseExistingServer: false,
  },
  use: {
    baseURL: `http://localhost:${PORT}`,
    trace: 'on-first-retry',
  },
  projects: [{ name: 'chromium', use: { browserName: 'chromium' } }],
});
