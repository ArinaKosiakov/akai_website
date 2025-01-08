import { defineField, defineType } from "sanity";
export const display_images = defineType({
  name: "Display",
  title: "Display Images",
  type: "document",
  groups: [
    { name: "details", title: "Details" },
    { name: "editorial", title: "Editorial" },
  ],
  fields: [
    defineField({
      name: "Title",
      type: "string",
    }),
    defineField({
      name: "Description",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "Date",
      type: "date",
    }),
    defineField({
      //0-sketch 1-illustration
      name: "Tag",
      type: "number",
    }),
  ],
});
