import { list } from "postcss";
import { title } from "process";
import { defineType } from "sanity";

export const homepage = defineType({
  name: "homepage_imgs",
  type: "document",
  title: "Homepage Images",
  fields: [
    {
      name: "category",
      type: "string",
      title: "Type of image",
      options: {
        list: [
          { title: "Environment", value: "env" },
          { title: "Illustration", value: "ill" },
          { title: "Character Design", value: "chdes" },
          { title: "Study", value: "stud" },
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
