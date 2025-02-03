import { Project } from "@/types/Projects";
import { createClient, defineQuery, groq } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { CardData } from "@/types/Content";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { sanityFetch } from "@/app/(sanity)/live";

export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId: "cly2k8p2",
    dataset: "production",
    apiVersion: "2021-10-21",
  });

  return await client.fetch(
    groq`*[_type == "project"]{
          _id,
          _createdAt,
          name,
          "slug": slug.current,
          "image": image.asset->url,
          "alt": image.alt,
          url,
          content
        }`,
  );
}

export async function getCards(
  type: string,
  category: string,
): Promise<CardData[]> {
  const IMG_QUERY = defineQuery(
    `*[_type==$type && category==$category]{title, category, description, year, image}`,
    { type, category }, // Pass variables as parameters
  );

  const client = createClient({
    projectId: "cly2k8p2",
    dataset: "production",
    apiVersion: "2021-10-21",
  });

  const { projectId, dataset } = client.config();

  const urlImages = (source: SanityImageSource) =>
    projectId && dataset
      ? imageUrlBuilder({ projectId, dataset }).image(source)
      : null;

  const { data: events } = await sanityFetch({ query: IMG_QUERY });
  console.log(events);

  const cards = events.map((event) => {
    const url = urlImages(event.image)?.url();
    const card: CardData = {
      title: event.title,
      description: event.description,
      src: url,
    };
    return card;
  });
  return cards;
}
