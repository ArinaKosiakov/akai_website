export type CardData = {
  title: string;
  description: string;
  src?: string;
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
  image_url: string | undefined;
};
export type ReviewProps = {
  name: string;
  review: string;
  image_url: string | undefined;
  avatar_url: string | undefined;
};
