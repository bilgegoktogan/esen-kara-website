import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "8kbn0q47",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});
