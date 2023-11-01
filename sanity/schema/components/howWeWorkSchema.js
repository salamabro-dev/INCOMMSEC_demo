const listItemSchema = {
  name: "listItem",
  type: "object",
  fields: [
    {
      name: "description",
      type: "text",
      title: "Description",
    },
  ],
};

const statsSchema = {
  name: "statsItem",
  type: "object",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "subheading",
      type: "string",
      title: "Sub-Heading",
    },
    {
      name: "linkText",
      type: "string",
      title: "Link Text",
    },
    {
      name: "link",
      type: "url",
      title: "URL",
    },
  ],
};

const howWeWorkSchema = {
  name: "howWeWork",
  type: "document",
  title: "How We Work Component",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "items",
      type: "array",
      title: "List items",
      of: [
        {
          type: "listItem",
        },
      ],
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alt Text",
        },
      ],
    },
    {
      name: "stats",
      type: "array",
      title: "Stats",
      of: [
        {
          type: "statsItem",
        },
      ],
    },
  ],
};

export { howWeWorkSchema, listItemSchema, statsSchema };
