import { StaticImageData } from "next/image";

export type CardData = {
  title: string;
  description: string;
  src?: StaticImageData | string;
  year?: string;
  id?: string;
};

export type CardCarouselProps = {
  type: string;
  cards: CardData[];
};
