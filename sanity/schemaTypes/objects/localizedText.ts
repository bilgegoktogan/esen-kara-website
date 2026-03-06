import { defineType } from "sanity";

export const localizedText = defineType({
  name: "localizedText",
  title: "Localized Text",
  type: "object",
  fields: [
    { name: "en", title: "English", type: "text" },
    { name: "tr", title: "Türkçe", type: "text" },
  ],
});
