import { defineType } from "sanity";
export const Reviews = defineType({
  name: "Reviews",
  type: "document",
  title: "Reviews",
  fields: [
    { name: "name", type: "string", title: "Customer's name" },
    { name: "review", type: "string", title: "Review" },
    { name: "image", type: "image", title: "Image" },
  ],
});
