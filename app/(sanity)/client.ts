import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "cly2k8p2",
  dataset: "production",
  apiVersion: "2024-11-01",
  useCdn: false,
});
