import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type CardData = {
  title: string;
  description: string;
  src?: string[];
  src_thumb?: string;
  year?: string;
  id?: string;
};

export type CardCarouselProps = {
  type: string;
  cards: CardData[];
};

export type ProjectsProps = {
  title: string;
  description: string;
  src?: string[];
};

export type CommissionProps = {
  title: string;
  subtitle: string;
  reviews: ReviewProps[];
  pricelist: PricesProps[];
};

export type PricesProps = {
  title: string;
  price: number;
  description: string;
  currency: string;
  image_url?: string;
  options: string[];
};
export type ReviewProps = {
  name: string;
  review: string;
  image_url?: string;
  avatar_url?: string;
};
