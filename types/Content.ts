import { StaticImageData } from "next/image";

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
