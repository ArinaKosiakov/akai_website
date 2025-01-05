import React from "react";
import sketches from "../images_paths/sketches";
import illustrations from "../images_paths/illustrations";
import Image, { StaticImageData } from "next/image";

type DisplayProp = {
  type: string;
};

type ImagesArrayProp = {
  title: string;
  url: StaticImageData;
  description?: string;
  date: string;
};

function Display({ type }: DisplayProp) {
  const images = type === "sketchbook" ? sketches : illustrations;

  return (
    <div className="flex h-full flex-col items-center text-sm md:text-xl">
      {images.map((image: ImagesArrayProp, index: number) => (
        <div
          key={index}
          className="w-100% mb-12 flex flex-col items-center md:max-w-[80%]"
        >
          <Image
            src={image.url}
            alt={""}
            className="h-auto max-w-[60%]"
          ></Image>
          <div className="mt-4 flex w-full flex-row justify-between">
            <span className="text-white text-opacity-70">
              {image.title} - {image.description}
            </span>
            <span className="text-xs text-white text-opacity-50 md:text-xl">
              {image.date}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Display;
