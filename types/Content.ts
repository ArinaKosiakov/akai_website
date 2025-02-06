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
