const pricingSchema = {
  name: "pricing",
  type: "document",
  title: "Pricing Component",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "heading",
      type: "string",
      title: "Heading",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
    {
      name: "btnText",
      type: "string",
      title: "Button Text",
    },
    {
      name: "btnLink",
      type: "url",
      title: "Button Link",
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
        {
          name: "width",
          type: "number",
          title: "width",
        },
        {
          name: "height",
          type: "number",
          title: "height",
        },
      ],
    },
  ],
};

export default pricingSchema;
