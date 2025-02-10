import { defineType } from "sanity";
export const commissions = defineType({
  name: "commissions",
  type: "document",
  title: "Commissions",
  fields: [
    { name: "title", type: "string", title: "Title" },
    { name: "subtitle", type: "boolean", title: "Commission status" },
    {
      name: "reviews",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "review" }],
        },
      ],
    },
    {
      name: "prices",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "price" }],
        },
      ],
    },
  ],
});
