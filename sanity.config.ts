import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { media } from "sanity-plugin-media";
import schemas from "./sanity/schemas";
import { visionTool } from "@sanity/vision";
const config = defineConfig({
  projectId: "cly2k8p2",
  dataset: "production",
  title: "Akaiko website",
  apiVersion: "2023-09-06",
  basePath: "/admin",
  plugins: [deskTool(), media(), visionTool()],
  schema: { types: schemas },
});

export default config;
