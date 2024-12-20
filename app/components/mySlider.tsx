"use client";
import React from "react";
import Slider from "react-infinite-logo-slider";
import ps from "../../public/logos/photoshop.png";
import Image from "next/image";

function MySlider() {
  return (
    <Slider
      duration={40}
      pauseOnHover={true}
      blurBorders={false}
      blurBorderColor={"#fff"}
    >
      <Slider.Slide>
        <Image src={ps} alt="any" width={100} height={100} />
      </Slider.Slide>
      <Slider.Slide>
        <Image src={ps} alt="any2" width={100} height={100} />
      </Slider.Slide>
      <Slider.Slide>
        <Image src={ps} alt="any3" width={100} height={100} />
      </Slider.Slide>
    </Slider>
  );
}

export default MySlider;
