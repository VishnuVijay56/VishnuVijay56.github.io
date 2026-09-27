import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number(),
    placeholder: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    hero: z.object({
      type: z.enum(['image', 'video', 'youtube']),
      src: z.string(),
      alt: z.string().optional(),
      poster: z.string().optional(),
      caption: z.string().optional(),
      loop: z.boolean().optional(),
    }).optional(),
    // Optional sections can be omitted. Markdown supports figures and KaTeX math.
    relatedPublications: z.array(z.string()).default([]),
    links: z.object({
      paper: z.string().optional(),
      code: z.string().optional(),
      video: z.string().optional(),
    }).optional(),
  }),
});

export const collections = { projects };
