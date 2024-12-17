import React from "react";
import img from "../../public/homepage_imgs/env.jpg";
import Image from "next/image";

type DisplayProp = {
  type: string;
};

function Display({ type }: DisplayProp) {
  const images = [
    {
      title: "Image",
      url: img,
    },
    {
      title: "Image",
      url: img,
    },
    {
      title: "Image",
      url: img,
    },
    {
      title: "Image",
      url: img,
    },
    {
      title: "Image",
      url: img,
    },
  ];
  return (
    <div>
      {images.map((image, index) => (
        <div key={index} className="mb-32">
          <Image src={image.url} alt={""}></Image>
          <span className="text-opacity-70">{image.title}</span>
        </div>
      ))}
    </div>
  );
}

export default Display;
