import { defineField, defineType } from "sanity";

export const puppy = defineType({
  name: "puppy",
  title: "Puppy",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name (optional)", type: "string" }),
    defineField({
      name: "gender",
      title: "Gender",
      type: "string",
      options: { list: ["male", "female"] },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "personality",
      title: "Personality description",
      type: "text",
      rows: 3,
      validation: (r) => r.required(),
    }),
    defineField({ name: "image", title: "Photo", type: "image" }),
    defineField({
      name: "isAvailable",
      title: "Available",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "sortOrder",
      title: "Sort order",
      type: "number",
      initialValue: 0,
    }),
  ],
  orderings: [
    { title: "Sort order", name: "sortOrder", by: [{ field: "sortOrder", direction: "asc" }] },
  ],
});
