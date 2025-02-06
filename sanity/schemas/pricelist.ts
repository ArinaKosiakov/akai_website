import { defineType } from "sanity";
export const pricelist = defineType({
  name: "pricelist",
  type: "document",
  title: "Pricelist",
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
      name: "price",
      type: "number",
      title: "Price",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
    },
  ],
});
