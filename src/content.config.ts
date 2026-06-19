import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // 1. Import loader baru bawaan Astro v6

const blog = defineCollection({
	// 2. Ganti type: 'content' dengan loader glob di bawah ini
	loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		pubDate: z.coerce.date(),
	}),
});

export const collections = { blog };