import React from "react";
//import illustrations from "../images_paths/illustrations";
import Image, { getImageProps, StaticImageData } from "next/image";
import { CardData } from "@/types/Content";
import { getCards } from "@/sanity/sanity-utils";

type DisplayProp = {
  type: string;
};

async function Display({ type }: DisplayProp) {
  //const images = type === "sketchbook" ? sketches : illustrations;
  const category = type === "sketchbook" ? "sketch" : "illustration";
  const images = await getCards("artwork", `${category}`);

  return (
    <div className="flex h-full flex-col items-center text-sm md:text-xl">
      {images.map((image: CardData, index: number) => (
        <div
          id={`${index + 1}`}
          key={index}
          className="w-100% mb-12 flex flex-col items-center md:max-w-[80%]"
        >
          <Image
            src={image.src!}
            alt={""}
            className="h-auto max-w-[100%]"
            width={600}
            height={500}
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
