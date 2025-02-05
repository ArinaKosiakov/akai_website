import { Project } from "@/types/Projects";
import { createClient, defineQuery, groq } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { CardData, ImagesProps } from "@/types/Content";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { sanityFetch } from "@/app/(sanity)/live";
import { get } from "http";
import { StaticImageData } from "next/image";

const client = createClient({
  projectId: "cly2k8p2",
  dataset: "production",
  apiVersion: "2021-10-21",
});

export async function getCards(
  type: string,
  category: string,
): Promise<CardData[]> {
  const params = { type: `${type}`, category: `${category}` };
  const IMG_QUERY = defineQuery(
    `*[_type==$type && category==$category]{title, category, description, year, image}`,
  );

  const { projectId, dataset } = client.config();

  const urlImages = (source: SanityImageSource) =>
    projectId && dataset
      ? imageUrlBuilder({ projectId, dataset }).image(source)
      : null;

  const { data: events } = await sanityFetch({
    query: IMG_QUERY,
    params,
  });
  // console.log(events);

  const cards = events.map((event) => {
    const url = urlImages(event.image)?.url();
    const card: CardData = {
      title: event.title,
      description: event.description,
      year: event.year,
      src: url,
    };
    return card;
  });
  return cards;
}

export async function getImagesUrl(): Promise<string[]> {
  const IMG_QUERY = defineQuery(`*[_type=="homepage_imgs"]{category, image}`);
  const { projectId, dataset } = client.config();

  const urlImages = (source: SanityImageSource) =>
    projectId && dataset
      ? imageUrlBuilder({ projectId, dataset }).image(source)
      : null;

  const { data: events } = await sanityFetch({
    query: IMG_QUERY,
  });
  // console.log(events);

  const imgs_urls: string[] = events.map((event) => {
    const url = urlImages(event.image)?.url();
    return url;
  });
  return imgs_urls;
}
