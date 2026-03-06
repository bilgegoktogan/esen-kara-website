import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site Settings")
        .id("siteSettings")
        .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
      S.divider(),
      S.documentTypeListItem("publication").title("Publications"),
      S.documentTypeListItem("blogPost").title("Blog Posts"),
      S.documentTypeListItem("researchArea").title("Research Areas"),
      S.documentTypeListItem("course").title("Courses"),
      S.documentTypeListItem("education").title("Education"),
    ]);
