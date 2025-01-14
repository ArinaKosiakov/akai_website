import { defineType } from "sanity";
export const projects = defineType({
  name: "project",
  type: "document",
  title: "Project or Environment",
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
          { title: "Project", value: "project" },
          { title: "Environment", value: "environment" },
        ],
      },
    },
    {
      name: "image",
      type: "image",
      title: "Image",
    },
  ],
});
