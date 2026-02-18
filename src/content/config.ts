import { defineCollection, z } from 'astro:content';

const artikel = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        tags: z.array(z.string()).default([]),
        coverImage: z.string().optional(),
    }),
});

const tutorial = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        tags: z.array(z.string()).default([]),
        series: z.string().optional(),
        order: z.number().optional(),
    }),
});

export const collections = { artikel, tutorial };
