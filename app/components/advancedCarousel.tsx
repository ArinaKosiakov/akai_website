"use client";
import React, { RefObject, useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import img from "../../public/homepage_imgs/img1.jpg";
import img2 from "../../public/homepage_imgs/img2.jpg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import DotNavigator from "./dotNavigator";

type DisplayProp = {
  type: string;
};

type SingleProject = {
  title: string;
  description: string;
  src: StaticImageData[];
  id: string;
};

const cards: SingleProject[] = [
  {
    title: "Card 1",
    description: "Description for card 1",
    src: [img, img2, img],
    id: "0",
  },
  {
    title: "Card 2",
    description: "Description for card 2",
    src: [img, img2, img],
    id: "1",
  },
  {
    title: "Card 3",
    description: "Description for card 3",
    src: [img2, img2, img],
    id: "2",
  },
];

function AdvancedCarousel({ type }: DisplayProp) {
  // State to track the current index for each card
  const [currentIndexes, setCurrentIndexes] = useState<number[]>(
    cards.map(() => 0), // Initialize all cards to index 0
  );

  const handleNavigation = (cardIndex: number, imageIndex: number): void => {
    setCurrentIndexes((prevIndexes) =>
      prevIndexes.map((current, idx) =>
        idx === cardIndex ? imageIndex : current,
      ),
    );
  };

  return (
    <div className="mb-12 w-full">
      {cards.map((card, cardIndex) => (
        <div
          id={`${cardIndex}`}
          key={card.id}
          className="mb-14 flex h-[60vh] w-full flex-col items-center lg:mb-0 lg:mt-32 lg:flex-row"
        >
          <div className="flex h-full w-full flex-col items-start justify-center gap-8 lg:w-[35%] lg:pl-8 lg:pr-12">
            <span className="font-eiko text-2xl">{card.title}</span>
            <span>
              {card.description} Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Perferendis aliquid labore velit, a voluptate
              officiis impedit vero incidunt, iusto odit earum sunt eius omnis!
              Doloribus eveniet amet assumenda debitis iure.
            </span>
            <div className="flex w-full flex-row items-center justify-center lg:justify-start">
              <DotNavigator
                src_arr={card.src}
                onNavigate={(imageIndex) =>
                  handleNavigation(cardIndex, imageIndex)
                }
              />
            </div>
          </div>
          <div className="mt-10 flex h-full w-full items-center justify-center overflow-hidden md:mt-0 lg:w-[65%]">
            <Image
              className="h-full w-auto rounded-lg object-contain"
              src={card.src[currentIndexes[cardIndex]]} // Use state specific to this card
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default AdvancedCarousel;
