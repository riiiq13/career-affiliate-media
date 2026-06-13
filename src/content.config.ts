import { defineCollection, z } from "astro:content";

const articles = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    target_reader: z.string(),
    search_intent: z.string(),
    monetization: z.string(),
    related_articles: z.array(z.string()).default([]),
    updated_at: z.string(),
    faqs: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string()
        })
      )
      .default([])
  })
});

const offers = defineCollection({
  type: "data",
  schema: z.object({
    id: z.string().optional(),
    program_name: z.string().optional(),
    category: z.string().optional(),
    memo: z.string().optional()
  })
});

export const collections = { articles, offers };
