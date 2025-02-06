import { createClient, defineQuery, groq } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { CardData, ProjectsProps } from "@/types/Content";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { sanityFetch } from "@/app/(sanity)/live";

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

export async function getProjects(category: string): Promise<ProjectsProps[]> {
  const params = { category: `${category}` };
  const IMG_QUERY = defineQuery(
    `*[_type=="project" && category==$category]{title, description, images}`,
  );
  const { projectId, dataset } = client.config();

  const { data: events } = await sanityFetch({
    query: IMG_QUERY,
    params,
  });

  const cards = events.map((event) => {
    const urlImages = (source: SanityImageSource) =>
      projectId && dataset
        ? imageUrlBuilder({ projectId, dataset }).image(source)
        : null;
    const imgs = event.images;
    // console.log(imgs);

    const url = imgs.map((img) => {
      const url = urlImages(img)?.url();
      return url;
    });
    // console.log(url);

    const card: CardData = {
      title: event.title,
      description: event.description,
      year: event.year,
      src: url,
    };
    return card;
  });
  console.log(cards);

  return cards;
}
