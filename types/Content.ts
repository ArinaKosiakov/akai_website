import { StaticImageData } from "next/image";

export type CardData = {
  title: string;
  description: string;
  src?: StaticImageData | string;
  id?: string;
};

export type CardCarouselProps = {
  type: string;
  cards: CardData[];
};
