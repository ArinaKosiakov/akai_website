import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { media } from "sanity-plugin-media";
import schemas from "./sanity/schemas";
import { visionTool } from "@sanity/vision";
const config = defineConfig({
  projectId: "cly2k8p2",
  dataset: "production",
  title: "DullAkai website",
  apiVersion: "2023-09-06",
  basePath: "/admin",
  plugins: [structureTool(), media(), visionTool()],
  schema: { types: schemas },
});

export default config;
