"use client";
import React, { RefObject, useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import img from "../../public/homepage_imgs/projects.jpg";
import img2 from "../../public/homepage_imgs/illustration.jpg";
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
    src: [img],
    id: "1",
  },
  {
    title: "Card 3",
    description: "Description for card 3",
    src: [img2],
    id: "2",
  },
];

function AdvancedCarousel({ type }: DisplayProp) {
  function handleNavigation(index: number): void {
    console.log("ok");
  }

  return (
    <div className="mb-12 w-full">
      {cards.map((card, index) => (
        <div key={index} className="mt-32 flex h-[60vh] w-full items-center">
          <div className="flex h-full w-[35%] flex-col items-start justify-center gap-8 pl-8 pr-12">
            <span className="font-eiko text-2xl">{card.title}</span>
            <span className="">
              {card.description} Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Perferendis aliquid labore velit, a voluptate
              officiis impedit vero incidunt, iusto odit earum sunt eius omnis!
              Doloribus eveniet amet assumenda debitis iure.
            </span>
            <div className="flex w-full flex-row items-center">
              <DotNavigator src_arr={card.src} onNavigate={handleNavigation} />
            </div>
          </div>
          <div className="flex h-full w-[65%] items-center justify-center overflow-hidden">
            <Image
              className="h-full w-auto rounded-lg object-contain"
              src={card.src[0]}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default AdvancedCarousel;
