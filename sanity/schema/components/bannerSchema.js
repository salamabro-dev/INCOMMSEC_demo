const bannerSchema = {
  name: "banner",
  type: "document",
  title: "Banner Component",
  fields: [
    {
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
      description: "The title of the section",
    },
    {
      name: "bannerHeading",
      title: "Banner Heading",
      type: "string",
      description: "The main heading of the banner",
    },
    {
      name: "bannerSubheading",
      title: "Banner Subheading",
      type: "string",
      description: "The subheading or additional information",
    },
    {
      name: "bannerText",
      title: "Banner Text",
      type: "text",
      description: "The text content of the banner",
    },
    {
      name: "buttonText",
      title: "Button Text",
      type: "string",
      description: "The text on the CTA button",
    },
    {
      name: "buttonLink",
      title: "Button Link",
      type: "url",
      description: "The link to be opened when the button is clicked",
    },
    {
      name: "image",
      title: "Banner Image",
      type: "image",
      description: "The image used in the banner",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alternative text",
          type: "string",
        },
      ],
    },
  ],
};

export default bannerSchema;
