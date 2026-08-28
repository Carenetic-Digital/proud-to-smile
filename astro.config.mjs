// sparkable-preview-config: v2
import fs from 'node:fs';
import path from 'node:path';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// In the hosted preview the Astro dev server isn't reachable directly — it's
// proxied same-origin by the Next.js app under /preview/<projectId>/. The
// manager injects PREVIEW_BASE so every page and asset URL is emitted under
// that prefix and stays routable through the proxy. Unset in a normal
// production build, so base falls back to "/".
const previewBase = process.env.PREVIEW_BASE;

// Routes that render with `noindex` and therefore must stay out of the sitemap.
// Draft posts still build (old /post/<slug> links resolve) but are noindexed
// until the client supplies their copy — see src/content.config.ts.
const BLOG_DIR = './src/content/blog';
const draftPostPaths = fs
  .readdirSync(BLOG_DIR)
  .filter((file) => file.endsWith('.md'))
  .filter((file) => /^draft:\s*true\s*$/m.test(fs.readFileSync(path.join(BLOG_DIR, file), 'utf8')))
  .map((file) => `/blog/${file.replace(/\.md$/, '')}/`);

// `/about/news/` is a standing section index with no articles yet — it renders
// with `noindex` until the client supplies press content, so it must stay out
// of the sitemap too.
// Migrated blog bodies carry the practice's own outbound citations (Mayo
// Clinic, ADA, Cleveland Clinic, perioprotect.com…). Open those in a new tab so
// following a source doesn't cost the reader the article, and set rel to match
// the external links the components already render. Site-relative links — the
// rewritten old-site URLs — are left alone. Written inline rather than pulling
// in rehype-external-links for a nine-line tree walk.
function rehypeExternalLinks() {
  return (tree) => {
    const visit = (node) => {
      if (node.type === 'element' && node.tagName === 'a') {
        const href = node.properties?.href;
        if (typeof href === 'string' && /^https?:\/\//i.test(href)) {
          node.properties.target = '_blank';
          node.properties.rel = ['noopener', 'noreferrer'];
        }
      }
      for (const child of node.children || []) visit(child);
    };
    visit(tree);
  };
}

const noindexPaths = ['/appointment-thank-you/', '/about/news/', ...draftPostPaths];

export default defineConfig({
  // Set this to your production URL (updated during deployment)
  site: 'https://www.proudtosmile.com',
  base: previewBase || undefined,
  output: 'static',
  integrations: [
    sitemap({
      // Standing guard: any `homepage-vN` concept page is an internal
      // design-comparison route, never a real one. None exist right now (the
      // approved concept became `index.astro`), but /homepage adds them again
      // on a re-run.
      //
      // Everything in `noindexPaths` carries a `noindex` robots tag, so
      // submitting it here would send Google contradictory signals.
      filter: (page) =>
        !/\/homepage-v\d/.test(page) &&
        !noindexPaths.some((p) => new URL(page).pathname.endsWith(p)),
    }),
  ],
  markdown: {
    rehypePlugins: [rehypeExternalLinks],
  },
  devToolbar: {
    enabled: false,
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      // HMR websockets can't traverse the HTTP-only proxy, so disable them
      // under the preview to stop the client spamming reconnect attempts.
      // The app instead reloads the iframe on each agent edit (a `reload` SSE
      // event), and astro dev recompiles per request.
      ...(previewBase && { hmr: false }),
      // Container volumes (Railway, fly.io) don't reliably fire inotify for
      // file changes, so Vite wouldn't invalidate its module cache and a
      // reload would serve stale modules. Polling sidesteps that — required
      // for the auto-reload to actually reflect edits. Local dev keeps native
      // watching (neither var is set).
      ...((previewBase || process.env.FLY_APP_NAME) && {
        watch: { usePolling: true, interval: 500 },
      }),
    },
  },
});
