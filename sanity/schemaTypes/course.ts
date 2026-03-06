import { defineType, defineField } from "sanity";

export const course = defineType({
  name: "course",
  title: "Course",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Course Name", type: "localizedString" }),
    defineField({
      name: "level",
      title: "Level",
      type: "string",
      options: {
        list: [
          { title: "Undergraduate", value: "undergraduate" },
          { title: "Graduate", value: "graduate" },
        ],
      },
    }),
    defineField({ name: "description", title: "Description", type: "localizedText" }),
    defineField({ name: "order", title: "Sort Order", type: "number" }),
  ],
  preview: {
    select: { title: "name.en", level: "level" },
    prepare({ title, level }) {
      return { title, subtitle: level };
    },
  },
});
