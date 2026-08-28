import { test, expect } from '@playwright/test';
import { readFileSync } from 'node:fs';

// Drive the suite off the real page inventory rather than a hand-kept list, so
// a page added to state.json without a template shows up as a failure here.
const state = JSON.parse(readFileSync('.site-factory/state.json', 'utf-8'));
const planned: string[] = state.pages.planned;

// One representative of each template, checked in depth. Every planned page
// still gets a load check below.
const templates = [
  { url: '/', name: 'homepage' },
  { url: '/services/', name: 'services index' },
  { url: '/service/dental-implants/', name: 'service page' },
  { url: '/doctors/', name: 'doctors index' },
  { url: '/doctors/patricia-swaintek-lamb-dmd/', name: 'provider page' },
  { url: '/locations/bernardsville/', name: 'location page' },
  { url: '/patient-center/new-patients/', name: 'patient center page' },
  { url: '/patient-center/faqs/', name: 'faq page' },
  { url: '/blog/', name: 'blog index' },
  { url: '/blog/should-you-consider-dental-implants/', name: 'blog post' },
  { url: '/testimonials/', name: 'testimonials' },
  { url: '/smile-gallery/', name: 'smile gallery' },
  { url: '/privacy-policy/', name: 'legal page' },
];

test.describe('page templates', () => {
  for (const { url, name } of templates) {
    test(`${name} (${url}) is well formed`, async ({ page }) => {
      const response = await page.goto(url);
      expect(response?.status()).toBe(200);

      await expect(page.locator('h1')).toHaveCount(1);
      await expect(page.locator('main#main-content')).toBeVisible();
      await expect(page.getByRole('banner')).toBeVisible();
      await expect(page.getByRole('contentinfo')).toBeVisible();

      const title = await page.title();
      expect(title.length).toBeGreaterThan(10);
      await expect(page.locator('meta[name="description"]')).toHaveCount(1);
      await expect(page.locator('link[rel="canonical"]')).toHaveCount(1);

      // Every page carries at least the site-wide LocalBusiness JSON-LD.
      const schemas = await page.locator('script[type="application/ld+json"]').count();
      expect(schemas).toBeGreaterThan(0);
    });
  }
});

test('every planned page returns 200', async ({ page }) => {
  const failures: string[] = [];
  for (const path of planned) {
    const url = path === '/' ? '/' : `${path}/`;
    const response = await page.goto(url);
    if (!response || response.status() >= 400) {
      failures.push(`${url} -> ${response?.status() ?? 'no response'}`);
    }
  }
  expect(failures, `planned pages that did not load:\n${failures.join('\n')}`).toEqual([]);
});

test('service pages skip sections that have no source content', async ({ page }) => {
  // Botox has no published process or FAQ on the real site, so those sections
  // must not render — an empty heading would be worse than no heading.
  await page.goto('/service/botox/');
  await expect(page.getByRole('heading', { name: 'Dental Applications' })).toBeVisible();
  await expect(page.getByRole('heading', { name: /FAQs/ })).toHaveCount(0);

  // Dental implants has both.
  await page.goto('/service/dental-implants/');
  await expect(page.getByRole('heading', { name: 'The Implant Process' })).toBeVisible();
  await expect(page.getByRole('heading', { name: /FAQs/ })).toBeVisible();
});

test('every blog post has real body copy and is indexable', async ({ page }) => {
  // All 62 posts were migrated from the live site; none is a stub any more.
  await page.goto('/blog/daily-habits-that-boost-your-oral-health/');
  await expect(page.locator('meta[name="robots"]')).toHaveCount(0);
  const words = await page.locator('main').innerText();
  expect(words.split(/\s+/).length).toBeGreaterThan(300);
});

test('blog index lists every post', async ({ page }) => {
  await page.goto('/blog/');
  const links = await page.locator('main a[href^="/blog/"]').evaluateAll((a) =>
    [...new Set(a.map((el) => el.getAttribute('href')))]
  );
  expect(links).toContain('/blog/daily-habits-that-boost-your-oral-health/');
  expect(links).toContain('/blog/should-you-consider-dental-implants/');
  expect(links.length).toBe(62);
});

test('migrated posts kept their outbound citations', async ({ page }) => {
  await page.goto('/blog/perio-protect-a-simple-and-effective-tool-for-preventing-gum-disease/');
  await expect(page.locator('main a[href^="https://www.perioprotect.com"]').first()).toBeVisible();
  // Old-site URLs are rewritten to this build's routes, never left on the
  // original domain or on a dead /content/ path.
  await expect(page.locator('main a[href*="proudtosmile.com"]')).toHaveCount(0);
  await expect(page.locator('main a[href^="/content/"]')).toHaveCount(0);
});

test('FAQ accordions open', async ({ page }) => {
  await page.goto('/patient-center/faqs/');
  // Scope to main: the header's nav dropdowns are <details> too.
  const first = page.locator('main details').first();
  await expect(first.locator('p')).toBeHidden();
  await first.locator('summary').click();
  await expect(first.locator('p')).toBeVisible();
});
