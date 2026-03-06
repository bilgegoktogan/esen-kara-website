import { defineType, defineArrayMember } from "sanity";

const richTextMembers = [
  defineArrayMember({
    type: "block",
    styles: [
      { title: "Normal", value: "normal" },
      { title: "H2", value: "h2" },
      { title: "H3", value: "h3" },
      { title: "Quote", value: "blockquote" },
    ],
    marks: {
      decorators: [
        { title: "Bold", value: "strong" },
        { title: "Italic", value: "em" },
      ],
      annotations: [
        {
          name: "link",
          type: "object",
          title: "Link",
          fields: [{ name: "href", type: "url", title: "URL" }],
        },
      ],
    },
  }),
  defineArrayMember({
    type: "image",
    options: { hotspot: true },
    fields: [
      { name: "alt", type: "string", title: "Alt text" },
      { name: "caption", type: "string", title: "Caption" },
    ],
  }),
];

export const localizedPortableText = defineType({
  name: "localizedPortableText",
  title: "Localized Rich Text",
  type: "object",
  fields: [
    { name: "en", title: "English", type: "array", of: richTextMembers },
    { name: "tr", title: "Türkçe", type: "array", of: richTextMembers },
  ],
});
