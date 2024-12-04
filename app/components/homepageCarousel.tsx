import React from "react";
import Image from "next/image";
import bg from "../../public/homepage_imgs/env.jpg";
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

function HomepageCarousel() {
  return (
    <div className="h-full">
      <Carousel pauseOnHover indicators={false} theme={customTheme}>
        <Image src={bg} alt="..." />
        <Image src={bg} alt="..." />
        <Image src={bg} alt="..." />
        <Image src={bg} alt="..." />
        <Image src={bg} alt="..." />
        <Image src={bg} alt="..." />
      </Carousel>
    </div>
  );
}

export default HomepageCarousel;
