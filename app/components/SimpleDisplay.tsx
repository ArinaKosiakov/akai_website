import React from "react";
//import illustrations from "../images_paths/illustrations";
import Image, { getImageProps, StaticImageData } from "next/image";
import { CardData } from "@/types/Content";
import { getCards } from "@/sanity/sanity-utils";

type DisplayProp = {
  type: string;
};

async function Display({ type }: DisplayProp) {
  // Map the new portfolio categories to the correct data categories
  let dataCategory: string;
  let dataType: string;

  switch (type) {
    case "sketchbook":
      dataCategory = "sketch";
      dataType = "artwork";
      break;
    case "personal-work":
      dataCategory = "illustration";
      dataType = "artwork";
      break;
    default:
      dataCategory = "sketch";
      dataType = "artwork";
  }

  const images = await getCards(dataType, dataCategory);

  return (
    <div className="flex h-full flex-col items-center text-sm md:text-xl">
      {images.map((image: CardData, index: number) => (
        <div
          id={`${index + 1}`}
          key={index}
          className="w-100% mb-12 flex flex-col items-center md:max-w-[80%]"
        >
          <Image
            src={image.src_thumb!}
            alt={""}
            className="h-auto max-w-[100%]"
            width={600}
            height={600}
            quality={100}
          ></Image>
          <div className="mt-4 flex w-full flex-row justify-between">
            <span className="text-white text-opacity-70">
              {image.title} - {image.description}
            </span>
            <span className="text-xs text-white text-opacity-50 md:text-xl">
              {image.year}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Display;
