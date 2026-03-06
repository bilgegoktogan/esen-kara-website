import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemaTypes";
import { structure } from "./sanity/structure";

export default defineConfig({
  name: "esen-kara-website",
  title: "Esen Kara Website",
  projectId: "8kbn0q47",
  dataset: "production",
  basePath: "/studio",
  plugins: [structureTool({ structure }), visionTool({ defaultApiVersion: "2024-01-01" })],
  schema: {
    types: schemaTypes,
  },
});
