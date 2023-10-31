import { groq, createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../sanity/env";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion,
});

export async function getBanners() {
  return client.fetch(
    groq`*[_type == "banner"]{
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

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}
