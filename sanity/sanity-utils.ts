import { createClient, defineQuery, groq } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { CardData, CommissionProps, ProjectsProps } from "@/types/Content";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { sanityFetch } from "@/app/(sanity)/live";
import { title } from "process";
import { subtle } from "crypto";
import { describe } from "node:test";

const client = createClient({
  projectId: "cly2k8p2",
  dataset: "production",
  apiVersion: "2021-10-21",
});
export const { projectId, dataset } = client.config();

export const urlImages = (
  source: SanityImageSource,
  projectId: string | undefined,
  dataset: string | undefined,
) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export async function getCards(
  type: string,
  category: string,
): Promise<CardData[]> {
  const params = { type: `${type}`, category: `${category}` };
  const IMG_QUERY = defineQuery(
    `*[_type==$type && category==$category]{title, category, description, year, image}`,
  );

  const { data: events } = await sanityFetch({
    query: IMG_QUERY,
    params,
  });
  // console.log(events);

  const cards = events.map(
    (event: {
      image: SanityImageSource;
      title: any;
      description: any;
      year: any;
    }) => {
      const url = urlImages(event.image, projectId, dataset)?.url();
      const card: CardData = {
        title: event.title,
        description: event.description,
        year: event.year,
        src: url,
      };
      return card;
    },
  );
  return cards;
}

export async function getImagesUrl(): Promise<string[]> {
  const IMG_QUERY = defineQuery(`*[_type=="homepage_imgs"]{category, image}`);
  const { projectId, dataset } = client.config();

  const { data: events } = await sanityFetch({
    query: IMG_QUERY,
  });
  // console.log(events);

  const imgs_urls: string[] = events.map(
    (event: { image: SanityImageSource }) => {
      const url = urlImages(event.image, projectId, dataset)?.url();
      return url;
    },
  );
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

  const cards = events.map(
    (event: { images: any; title: any; description: any; year: any }) => {
      const urlImages = (source: SanityImageSource) =>
        projectId && dataset
          ? imageUrlBuilder({ projectId, dataset }).image(source)
          : null;
      const imgs = event.images;
      // console.log(imgs);

      const url = imgs.map((img: SanityImageSource) => {
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
    },
  );
  console.log(cards);

  return cards;
}
export async function getCommissions(): Promise<CommissionProps> {
  const QUERY = defineQuery(
    `*[_type == "commissions"] {
  title, subtitle,
  "reviews": reviews[]->{image,name,avatar,review},
  "prices": prices[]->{title,description,price,currency,image},
}`,
  );
  const { projectId, dataset } = client.config();
  const { data: events } = await sanityFetch({
    query: QUERY,
  });

  //create review and preices object that transforms the img reference into an url
  const newReviews = (reviews: any[]) => {
    const r = reviews.map((obj) => {
      const rev = {
        name: obj.name,
        review: obj.review,
        image_url: urlImages(obj.image, projectId, dataset)?.url(),
        avatar_url: urlImages(obj.avatar, projectId, dataset)?.url(),
      };
      return rev;
    });
    return r;
  };
  const newPrices = (prices: any[]) => {
    const r = prices.map((obj) => {
      const rev = {
        title: obj.title,
        price: obj.price,
        description: obj.description,
        currency: obj.currency,
        image_url: urlImages(obj.image, projectId, dataset)?.url(),
      };
      return rev;
    });
    return r;
  };

  const e = events[0];
  const commission = {
    title: e.title,
    subtitle: e.subtitle,
    reviews: newReviews(e.reviews),
    pricelist: newPrices(e.prices),
  };

  // console.log(commission);

  return commission;
}
