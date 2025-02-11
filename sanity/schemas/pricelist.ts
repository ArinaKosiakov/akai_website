import { options } from "prettier-plugin-tailwindcss";
import { defineType } from "sanity";
export const price = defineType({
  name: "price",
  type: "document",
  title: "Price",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },

    {
      name: "description",
      type: "text",
      title: "Description",
    },
    {
      name: "options",
      type: "array",
      title: "Options",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "price",
      type: "number",
      title: "Price",
    },
    {
      name: "currency",
      type: "string",
      title: "Currency",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
    },
  ],
});
