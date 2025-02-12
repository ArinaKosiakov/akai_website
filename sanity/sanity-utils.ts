import { createClient, defineQuery, groq } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { CardData, CommissionProps, ProjectsProps } from "@/types/Content";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { sanityFetch } from "@/app/(sanity)/live";

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

  const events = await client.fetch(IMG_QUERY, params, {
    cache: "no-store",
  });
  //console.log(events);

  const cards = events.map(
    (event: {
      image: SanityImageSource;
      title: string;
      description: string;
      year: string;
    }) => {
      let url: string | undefined;
      event.image
        ? (url = urlImages(event.image, projectId, dataset)?.url())
        : "";
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
  const IMG_QUERY = defineQuery(
    `*[_type=="homepage_imgs"] | order(_updatedAt desc) {category, image}`,
  );
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
  const events = await client.fetch(IMG_QUERY, params, { cache: "no-store" });

  const cards = events.map(
    (event: {
      images: string[];
      title: string;
      description: string;
      year: string;
    }) => {
      const imgs = event.images;
      console.log(event);

      const url = imgs.map((img: SanityImageSource) => {
        const url = urlImages(img, projectId, dataset)?.url();
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
  // console.log(cards);

  return cards;
}
export async function getCommissions(): Promise<CommissionProps> {
  const QUERY = defineQuery(
    `*[_type == "commissions"] | order(_updatedAt asc) {
  title, subtitle,
  "reviews": reviews[]->{image,name,avatar,review},
  "prices": prices[]->{title,description,price,currency,image,options},
}`,
  );
  const events = await client.fetch(QUERY, {}, { cache: "no-store" });

  //create review and preices object that transforms the img reference into an url
  const newReviews = (reviews: any[]) => {
    if (!reviews) {
      return [];
    }
    const r = reviews.map((obj) => {
      const rev = {
        name: obj.name,
        review: obj.review,
        avatar_url: urlImages(obj.avatar, projectId, dataset)?.url(),
      };
      return rev;
    });
    return r;
  };
  const newPrices = (prices: any[]) => {
    if (!prices) {
      return [];
    }
    const r = prices.map((obj) => {
      const rev = {
        title: obj.title,
        price: obj.price,
        description: obj.description,
        currency: obj.currency,
        image_url: urlImages(obj.image, projectId, dataset)?.url(),
        options: obj.options,
      };
      return rev;
    });
    return r;
  };

  const e = events[0];
  // console.log(e.reviews[0].avatar);

  const commission = {
    title: e.title,
    subtitle: e.subtitle,
    reviews: newReviews(e.reviews),
    pricelist: newPrices(e.prices),
  };

  // console.log(commission);

  return commission;
}
