import { test, expect } from '@playwright/test';

test('homepage loads', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Proud To Smile Dentistry/);
  await expect(page.locator('h1')).toHaveCount(1);
});

test('every header and footer link resolves', async ({ page }) => {
  await page.goto('/');

  // Collect hrefs rather than clicking: most nav links live inside closed
  // <details> dropdowns and the hidden mobile panel, so they are not
  // clickable until their disclosure is opened. What matters is that the
  // destination exists.
  const hrefs = await page
    .locator('header a[href^="/"], footer a[href^="/"]')
    .evaluateAll((links) =>
      [...new Set(links.map((l) => l.getAttribute('href')!))].filter((h) => h && h !== '#main-content')
    );

  expect(hrefs.length).toBeGreaterThan(30);

  for (const href of hrefs) {
    const response = await page.goto(href);
    expect(response?.status(), `${href} should resolve`).toBeLessThan(400);
  }
});

test('mobile menu opens and exposes navigation', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');

  const menu = page.locator('#mobile-menu');
  await expect(menu).toBeHidden();

  await page.click('#mobile-menu-toggle');
  await expect(menu).toBeVisible();
  await expect(page.locator('#mobile-menu-toggle')).toHaveAttribute('aria-expanded', 'true');

  // Nested disclosure reveals its sub-links.
  await menu.locator('summary', { hasText: 'Services' }).first().click();
  await expect(menu.getByRole('link', { name: 'Veneers', exact: true })).toBeVisible();
});

test('desktop dropdowns open on hover', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/');

  const nav = page.locator('nav[aria-label="Main navigation"]');

  // Providers and Testimonials live under About now — no top-level entry.
  await expect(nav.getByRole('link', { name: 'Doctors', exact: true })).toBeHidden();

  for (const [label, item] of [
    ['About', 'Doctors'],
    ['Services', 'Veneers'],
    ['Patient Center', 'Blog'],
  ] as const) {
    await nav.locator('.nav-trigger', { hasText: label }).first().hover();
    await expect(nav.getByRole('link', { name: item, exact: true })).toBeVisible();
    await expect(nav.locator('.dropdown-shell:visible')).toHaveCount(1);
  }
});

test('a dropdown stays open while the pointer travels into it', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/');

  const nav = page.locator('nav[aria-label="Main navigation"]');
  const trigger = nav.locator('.nav-trigger', { hasText: 'About' }).first();
  await trigger.hover();

  // The gap between trigger and card is a transparent pad, not a dead zone.
  const panel = await nav.locator('.dropdown-shell:visible .dropdown-panel').boundingBox();
  await page.mouse.move(panel!.x + 40, panel!.y + panel!.height - 8, { steps: 20 });
  await expect(nav.getByRole('link', { name: 'Doctors', exact: true })).toBeVisible();
});

test('dropdowns open on keyboard focus and report their state', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/');

  const nav = page.locator('nav[aria-label="Main navigation"]');
  const trigger = nav.locator('.nav-trigger', { hasText: 'About' }).first();

  await expect(trigger).toHaveAttribute('aria-expanded', 'false');
  await trigger.focus();
  await expect(nav.getByRole('link', { name: 'Doctors', exact: true })).toBeVisible();
  await expect(trigger).toHaveAttribute('aria-expanded', 'true');

  await page.keyboard.press('Escape');
  await expect(nav.getByRole('link', { name: 'Doctors', exact: true })).toBeHidden();
  await expect(trigger).toHaveAttribute('aria-expanded', 'false');
});

test('skip link is the first focusable element', async ({ page }) => {
  await page.goto('/');
  await page.keyboard.press('Tab');
  const focused = page.locator(':focus');
  await expect(focused).toHaveAttribute('href', '#main-content');
});
