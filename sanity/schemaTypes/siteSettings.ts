import { defineType, defineField } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Full Name", type: "string" }),
    defineField({ name: "title", title: "Site Title", type: "localizedString" }),
    defineField({ name: "greeting", title: "Greeting", type: "localizedString" }),
    defineField({ name: "bio", title: "Short Bio", type: "localizedText" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({
      name: "social",
      title: "Social Links",
      type: "object",
      fields: [
        { name: "instagram", title: "Instagram URL", type: "url" },
        { name: "twitter", title: "X / Twitter URL", type: "url" },
        { name: "scholar", title: "Google Scholar URL", type: "url" },
        { name: "academia", title: "Academia URL", type: "url" },
        { name: "researchgate", title: "ResearchGate URL", type: "url" },
      ],
    }),
    defineField({
      name: "university",
      title: "University Info",
      type: "object",
      fields: [
        { name: "name", title: "University Name", type: "localizedString" },
        { name: "faculty", title: "Faculty", type: "localizedString" },
        { name: "department", title: "Department", type: "localizedString" },
      ],
    }),
    defineField({
      name: "profileImage",
      title: "Profile Photo",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  preview: {
    prepare() {
      return { title: "Site Settings" };
    },
  },
});
