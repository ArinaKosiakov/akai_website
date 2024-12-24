"use client";
import React from "react";
import Slider from "react-infinite-logo-slider";
import ps from "../../public/logos/photoshop.png";
import il from "../../public/logos/illustrator.png";
import bl from "../../public/logos/blender.png";
import zb from "../../public/logos/zbrush.png";
import pro from "../../public/logos/procreate.png";
import Image from "next/image";

function MySlider() {
  return (
    <Slider pauseOnHover={true} blurBorders={true} blurBorderColor={"#3f4041"}>
      <Slider.Slide>
        <Image src={ps} alt="any" width={85} height={85} />
      </Slider.Slide>
      <Slider.Slide>
        <Image src={il} alt="any2" width={40} height={40} />
      </Slider.Slide>
      <Slider.Slide>
        <Image src={pro} alt="any3" width={40} height={40} />
      </Slider.Slide>
      <Slider.Slide>
        <Image src={zb} alt="any3" width={40} height={40} />
      </Slider.Slide>
      <Slider.Slide>
        <Image src={bl} alt="any3" width={40} height={40} />
      </Slider.Slide>
    </Slider>
  );
}

export default MySlider;
