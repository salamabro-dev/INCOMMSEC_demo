import { groq, createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../sanity/env";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion,
  useCdn: false,
});

export async function getBanners() {
  return client.fetch(
    groq`*[_type == "banner"]{
        _id,
        sectionTitle,
        bannerHeading,
        bannerSubheading,
        bannerText,
        buttonText,
        buttonLink,
        image,
        alt
    }`
  );
}

export async function getHowWeWork() {
  return client.fetch(
    groq`*[_type == "howWeWork"] {
  _id,
  title,
  "items": items[]{
    description
  },
  "image": image,
  "stats": stats[]{
    title,
    subheading,
    linkText,
    link
  }
}`
  );
}

export async function getReview() {
  return client.fetch(
    groq`*[_type == "review"]{
      _id,
      title,
      "reviews": reviews[]{
      review,
      role,
      company
      }
    }`
  );
}

export async function getPricing() {
  return client.fetch(
    groq`*[_type == "pricing"] {
  _id,
    title,
    heading,
    description,
    btnText,
    btnLink,
    image,
    alt,
}`
  );
}

export async function getForm() {
  return client.fetch(
    groq`*[_type == "form"] {
      _id,
      title,
      subheading,
      image,
      alt
    }`
  );
}

const builder = imageUrlBuilder(client);

export async function getLogo() {
  return client.fetch(
    groq`*[_type == "logo"] {
      _id,
      image
    }`
  );
}

export function urlFor(source) {
  return builder.image(source);
}
