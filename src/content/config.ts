import { defineCollection, z } from "astro:content";

// Post collection schema
const postsCollection = defineCollection({
  schema: z.object({
    id: z.string().optional(),
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    date: z.date().optional(),
    image: z.string().optional(),
    authors: z.array(z.string()).default(["admin"]),
    categories: z.array(z.string()).default(["others"]),
    tags: z.array(z.string()).default(["others"]),
    draft: z.boolean().optional(),
  }),
});

// Author collection schema
const authorsCollection = defineCollection({
  schema: z.object({
    id: z.string().optional(),
    title: z.string(),
    meta_title: z.string().optional(),
    image: z.string().optional(),
    description: z.string().optional(),
    social: z
      .object({
        facebook: z.string().optional(),
        twitter: z.string().optional(),
        instagram: z.string().optional(),
      })
      .optional(),
    draft: z.boolean().optional(),
  }),
});

// Pages collection schema
const pagesCollection = defineCollection({
  schema: z.object({
    id: z.string().optional(),
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    layout: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

export const aboutCollection = defineCollection({
  schema: z.object({
    id: z.string().optional(),
    title: z.string(),
    description: z.string().optional(),
    meta_title: z.string().optional(),
    image: z.string().optional(),
    draft: z.boolean().optional(),
    what_i_do: z
      .object({
        title: z.string().optional(),
        items: z.array(
          z.object({
            title: z.string(),
            description: z.string(),
          }),
        ),
      })
      .optional(),
  }),
});

// Export collections
export const collections = {
  about: aboutCollection,
  posts: postsCollection,
  pages: pagesCollection,
  authors: authorsCollection,
};
