import { defineType, defineField } from "sanity";

export const publication = defineType({
  name: "publication",
  title: "Publication",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "journal", title: "Journal / Publisher", type: "string" }),
    defineField({ name: "year", title: "Year", type: "number", validation: (Rule) => Rule.required() }),
    defineField({
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Article", value: "article" },
          { title: "Book", value: "book" },
          { title: "Chapter", value: "chapter" },
        ],
      },
    }),
    defineField({ name: "doi", title: "DOI", type: "string" }),
    defineField({ name: "coAuthors", title: "Co-Authors", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "abstract", title: "Abstract", type: "text" }),
    defineField({
      name: "field",
      title: "Fields / Tags",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({ name: "pdfFile", title: "PDF File", type: "file", options: { accept: ".pdf" } }),
    defineField({ name: "coverImage", title: "Cover Image", type: "image", options: { hotspot: true } }),
  ],
  orderings: [{ title: "Year (Newest)", name: "yearDesc", by: [{ field: "year", direction: "desc" }] }],
  preview: {
    select: { title: "title", year: "year", type: "type" },
    prepare({ title, year, type }) {
      return { title, subtitle: `${type} (${year})` };
    },
  },
});
