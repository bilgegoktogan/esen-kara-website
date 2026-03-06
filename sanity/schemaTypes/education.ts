import { defineType, defineField } from "sanity";

export const education = defineType({
  name: "education",
  title: "Education",
  type: "document",
  fields: [
    defineField({ name: "degree", title: "Degree", type: "localizedString" }),
    defineField({ name: "field", title: "Field of Study", type: "localizedString" }),
    defineField({ name: "university", title: "University", type: "localizedString" }),
    defineField({ name: "thesis", title: "Thesis Title", type: "localizedText" }),
    defineField({ name: "order", title: "Sort Order", type: "number" }),
  ],
  orderings: [{ title: "Sort Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "degree.en", subtitle: "university.en" },
  },
});
