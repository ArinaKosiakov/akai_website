import { defineType } from "sanity";
export const artwork = defineType({
  name: "artwork",
  type: "document",
  title: "Artwork",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "category",
      type: "string",
      title: "Category",
      options: {
        list: [
          { title: "Sketch", value: "sketch" },
          { title: "Illustration", value: "illustration" },
        ],
      },
    },
    {
      name: "image",
      type: "image",
      title: "Image",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
    {
      name: "year",
      type: "number",
      title: "Year",
    },
  ],
});
