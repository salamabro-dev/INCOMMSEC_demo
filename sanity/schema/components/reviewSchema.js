const reviewsSchema = {
  name: "reviews",
  type: "document",
  title: "Reviews",
  fields: [
    {
      name: "review",
      type: "text",
      title: "Review",
    },
    {
      name: "role",
      type: "string",
      title: "Role",
    },
    {
      name: "company",
      type: "string",
      title: "Company",
    },
  ],
};

const reviewSchema = {
  name: "review",
  type: "document",
  title: "Review Component",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "reviews",
      type: "array",
      title: "List reviews",
      of: [
        {
          type: "reviews",
        },
      ],
    },
  ],
};

export { reviewSchema, reviewsSchema };
