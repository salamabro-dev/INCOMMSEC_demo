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

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}
