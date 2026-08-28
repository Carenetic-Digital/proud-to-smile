import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// The real practice's 62 published blog posts, extracted verbatim from
// proudtosmile.com — body copy, headings and outbound citations all lifted
// from the live /post/<slug> pages (see reference/content-proudtosmile.md
// section 7).
//
// `draft` is retained for future unpublished work; nothing sets it today. A
// draft post builds (so an old /post/<slug> link still resolves) but is
// noindexed and left out of both the index listing and the sitemap.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string().default(''),
    // Set when a post's copy is substantively revised — feeds `dateModified`
    // in the BlogPosting schema. Falls back to `date` when absent.
    updated: z.coerce.date().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
