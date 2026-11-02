import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const mdLoader = (dir: string) =>
  glob({ pattern: "**/[^_]*.{md,mdx}", base: `./src/content/${dir}` });

// Post collection schema
const postsCollection = defineCollection({
  loader: mdLoader("posts"),
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
  loader: mdLoader("authors"),
  schema: z.object({
    id: z.string().optional(),
    title: z.string(),
    meta_title: z.string().optional(),
    image: z.string().optional(),
    description: z.string().optional(),
    social: z
      .object({
        linkedin: z.string().optional(),
        github: z.string().optional(),
      })
      .optional(),
    draft: z.boolean().optional(),
  }),
});

// Pages collection schema
const pagesCollection = defineCollection({
  loader: mdLoader("pages"),
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

// About page collection
const aboutCollection = defineCollection({
  loader: mdLoader("about"),
});

// Export collections
export const collections = {
  about: aboutCollection,
  posts: postsCollection,
  pages: pagesCollection,
  authors: authorsCollection,
};
