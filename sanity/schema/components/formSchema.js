const formSchema = {
  name: "form",
  type: "document",
  title: "Form Component",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "suheading",
      type: "text",
      title: "Subheading",
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
  ],
};

export default formSchema;
