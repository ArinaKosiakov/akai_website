import React from "react";
import img from "../../public/sketches/13.jpg";
import Image from "next/image";

type DisplayProp = {
  type: string;
};

function Display({ type }: DisplayProp) {
  const images = [
    {
      title: "Animals",
      url: img,
      description: "Practise of animal anatomy.",
      date: "September 2024",
    },
    {
      title: "Image",
      url: img,
      description: "Practise of animal anatomy.",
      date: "September 2024",
    },
    {
      title: "Image",
      url: img,
      description: "Practise of animal anatomy.",
      date: "September 2024",
    },
    {
      title: "Image",
      url: img,
      description: "Practise of animal anatomy.",
      date: "September 2024",
    },
    {
      title: "Image",
      url: img,
      description: "Practise of animal anatomy.",
      date: "September 2024",
    },
  ];
  return (
    <div className="flex h-full flex-col items-center">
      {images.map((image, index) => (
        <div
          key={index}
          className="w-100% mb-12 flex flex-col items-center md:max-w-[80%]"
        >
          <Image
            src={image.url}
            alt={""}
            className="h-auto max-w-[80%]"
          ></Image>
          <div className="mt-4 flex w-full flex-row justify-between">
            <span className="text-white text-opacity-70">
              {image.title} - {image.description}
            </span>
            <span className="text-white text-opacity-50">{image.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Display;
