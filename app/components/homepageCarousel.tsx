import React from "react";
import Image, { StaticImageData } from "next/image";
import { Carousel, CustomFlowbiteTheme } from "flowbite-react";

const customTheme: CustomFlowbiteTheme["carousel"] = {
  root: {
    base: "relative h-full w-full",
    leftControl:
      "opacity-0 absolute left-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none",
    rightControl:
      "opacity-0 absolute right-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none",
  },
};

function HomepageCarousel({ imgs }: { imgs: string[] }) {
  return (
    <div className="h-full">
      <Carousel pauseOnHover indicators={false} theme={customTheme}>
        {Object.values(imgs).map((img: StaticImageData | string, index) => (
          <Image src={img} key={index} alt="..." width={500} height={200} />
        ))}
      </Carousel>
    </div>
  );
}

export default HomepageCarousel;
