import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.SANITY_PROJECT_ID || "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || process.env.SANITY_DATASET || "production";

export default defineConfig({
  name: "emmas-rogers-pomeranians",
  title: "Emma's Rodgers Pomeranians",
  projectId: projectId || "placeholder",
  dataset,
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});
