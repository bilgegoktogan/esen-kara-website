import { defineType, defineField } from "sanity";

export const blogPost = defineType({
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "localizedString", validation: (Rule) => Rule.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title.en", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "excerpt", title: "Excerpt", type: "localizedText" }),
    defineField({ name: "date", title: "Publish Date", type: "date" }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Literature", value: "literature" },
          { title: "Travel", value: "travel" },
          { title: "Academia", value: "academia" },
          { title: "Culture", value: "culture" },
          { title: "Books", value: "books" },
        ],
      },
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string", title: "Alt text" }],
    }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({ name: "content", title: "Content", type: "localizedPortableText" }),
  ],
  orderings: [{ title: "Date (Newest)", name: "dateDesc", by: [{ field: "date", direction: "desc" }] }],
  preview: {
    select: { title: "title.en", date: "date", media: "coverImage" },
    prepare({ title, date, media }) {
      return { title, subtitle: date, media };
    },
  },
});
