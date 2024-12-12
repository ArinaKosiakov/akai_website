import React from "react";
import Image, { StaticImageData } from "next/image";
import { TfiArrowTopRight } from "react-icons/tfi";

type CardProp = {
  title: string;
  img_src: StaticImageData; //  thumbnails
};

function ProjectCard(card: CardProp) {
  return (
    <>
      <div className="mr-6 mt-10 justify-start">
        <div className="relative mb-2 h-52 w-96">
          <Image
            src={card.img_src}
            alt=""
            className="object-fill"
            layout="fill"
          />
        </div>
        <div className="flex flex-row items-end gap-2">
          <span className="text-lg">{card.title}</span>
          <span className="flex items-center justify-center pb-1">
            <TfiArrowTopRight />
          </span>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
