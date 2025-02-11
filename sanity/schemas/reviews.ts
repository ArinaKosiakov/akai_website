import { defineType } from "sanity";
export const review = defineType({
  name: "review",
  type: "document",
  title: "Review",
  fields: [
    { name: "name", type: "string", title: "Customer's name" },
    {
      name: "avatar",
      type: "image",
      title: "Avatar",
      options: { hotspot: true },
    },
    { name: "review", type: "string", title: "Review" },
    { name: "image", type: "image", title: "Image" },
  ],
});
