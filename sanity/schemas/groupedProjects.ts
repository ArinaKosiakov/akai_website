import { defineType } from "sanity";

export const groups = defineType({
  name: "groupedProjects",
  type: "document",
  title: "Grouped Projects",
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
      name: "categoryFilter",
      title: "Category Filter",
      type: "string",
      options: {
        list: [
          { title: "Project", value: "projects" },
          { title: "Environments", value: "category2" },
        ],
        layout: "radio", // optional, for a nicer UI
      },
    },
    {
      name: "items",
      type: "array",
      title: "Grouped Items",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "project",
              options: {
                filter: "category == $category",
                filterParams: {
                  category: "Project",
                },
              },
            },
          ],
        },
      ],
    },
  ],
});
