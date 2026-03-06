import { defineType, defineField } from "sanity";

export const researchArea = defineType({
  name: "researchArea",
  title: "Research Area",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "localizedString" }),
    defineField({ name: "description", title: "Description", type: "localizedText" }),
    defineField({ name: "icon", title: "Icon Emoji", type: "string" }),
    defineField({
      name: "publications",
      title: "Related Publications",
      type: "array",
      of: [{ type: "reference", to: [{ type: "publication" }] }],
    }),
    defineField({ name: "order", title: "Sort Order", type: "number" }),
  ],
  preview: {
    select: { title: "title.en", icon: "icon" },
    prepare({ title, icon }) {
      return { title: `${icon || ""} ${title || ""}` };
    },
  },
});
