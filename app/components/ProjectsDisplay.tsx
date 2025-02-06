"use client";
import React, { RefObject, useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import DotNavigator from "./dotNavigator";
import { ProjectsProps } from "@/types/Content";

type CarouselProps = {
  type: string;
  projects: ProjectsProps[];
};

function AdvancedCarousel({ type, projects }: CarouselProps) {
  // State to track the current index for each card
  const [currentIndexes, setCurrentIndexes] = useState<number[]>(
    projects.map(() => 0), // Initialize all projects to index 0
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
      {projects.map((card, cardIndex) => (
        <div
          id={`${cardIndex + 1}`}
          key={cardIndex}
          className="mb-14 flex h-[60vh] w-full flex-col items-center lg:mb-0 lg:mt-32 lg:flex-row"
        >
          <div className="flex h-full w-full flex-col items-start justify-center gap-8 lg:w-[35%] lg:pl-8 lg:pr-12">
            <span className="font-eiko text-2xl">{card.title}</span>
            <span>{card.description}</span>
            <div className="flex w-full flex-row items-center justify-center lg:justify-start">
              <DotNavigator
                src_arr={card.src!}
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
              width={500}
              height={500}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default AdvancedCarousel;
