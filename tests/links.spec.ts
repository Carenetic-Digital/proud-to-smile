import { test, expect } from '@playwright/test';

test('internal links on the homepage resolve', async ({ page }) => {
  await page.goto('/');

  const hrefs = await page
    .locator('a[href^="/"]')
    .evaluateAll((links) =>
      [...new Set(links.map((l) => l.getAttribute('href')!))].filter((h) => h && !h.startsWith('#'))
    );

  for (const href of hrefs) {
    const response = await page.goto(href);
    expect(response?.status(), `${href} should resolve`).toBeLessThan(400);
  }
});

test('every internal link ends with a trailing slash', async ({ page }) => {
  // Cloudflare resolves trailing-slash URLs directly; a non-trailing URL costs
  // an extra redirect hop. See CLAUDE.md → Conventions.
  for (const path of ['/', '/services/', '/service/veneers/', '/doctors/', '/blog/', '/patient-center/']) {
    await page.goto(path);
    const bad = await page.locator('a[href^="/"]').evaluateAll((links) =>
      links
        .map((l) => l.getAttribute('href')!)
        .filter((h) => h && !h.startsWith('#') && !h.endsWith('/') && !/\.[a-z0-9]+$/i.test(h))
    );
    expect(bad, `${path} has links missing a trailing slash`).toEqual([]);
  }
});

test('external links open safely', async ({ page }) => {
  for (const path of [
    '/',
    '/patient-center/patient-forms/',
    '/bill-pay/',
    '/resources/',
    // Migrated post bodies carry outbound citations; they follow the same rule.
    '/blog/perio-protect-a-simple-and-effective-tool-for-preventing-gum-disease/',
  ]) {
    await page.goto(path);
    const links = page.locator('a[href^="http"]');
    const count = await links.count();
    for (let i = 0; i < count; i++) {
      await expect(links.nth(i)).toHaveAttribute('target', '_blank');
      await expect(links.nth(i)).toHaveAttribute('rel', /noopener/);
    }
  }
});

test('images declare intrinsic dimensions', async ({ page }) => {
  // Explicit width/height prevents layout shift (CLS).
  for (const path of ['/', '/service/veneers/', '/doctors/patricia-swaintek-lamb-dmd/', '/smile-gallery/']) {
    await page.goto(path);
    const missing = await page.locator('img').evaluateAll((imgs) =>
      imgs.filter((i) => !i.getAttribute('width') || !i.getAttribute('height')).map((i) => i.getAttribute('src'))
    );
    expect(missing, `${path} has images without width/height`).toEqual([]);
  }
});

test('only the LCP image loads eagerly', async ({ page }) => {
  await page.goto('/');
  const eager = await page.locator('img').evaluateAll((imgs) =>
    imgs.filter((i) => i.getAttribute('loading') !== 'lazy').map((i) => i.getAttribute('src'))
  );
  expect(eager.length).toBeLessThanOrEqual(2); // hero + logo
});
