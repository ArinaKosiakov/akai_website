import React from "react";
import Image from "next/image";
import my_photo from "../../../public/aboutme/pfp.jpg";
import thisisme from "@/public/aboutme/thisisme.png";
import HorizontalTimeline from "@/app/components/timeline";
import { ls } from "../../i18n/translations";
import MySlider from "@/app/components/SkillSlider";

function AboutMe() {
  return (
    <div className="h-full w-full pl-[5%]">
      <div className="flex flex-row items-center justify-around text-white">
        <div className="flex w-full flex-col items-start lg:w-3/5 lg:pr-10">
          <h1 className="font-eiko text-3xl md:text-4xl lg:text-5xl">
            Hello, I&apos;m <span className="text-akai-500">Akai</span>
          </h1>
          <h2 className="pb-10 pt-2 text-lg lg:text-2xl">
            Concept artist, environment designer
          </h2>
          <p className="pb-6">
            Hey there! I&apos;m Arina, in art DullAkai or just Akai. I&apos;m a
            passionate artist and technology enthusiast. My interests go from
            videogames, to traditional art, from programming to reading books.
          </p>
          <p className="pb-6">
            You may ask why <span className="text-akai-500">AKAI </span>? Well
            it means red in Japanese and I can&apos;t see myself without this
            color in my life as it perfectly represents me.
          </p>
          <p className="pb-6">
            Talking about art, it has always been very important in my life
            since I was a kid. Through whole my life I kept a pencil in my
            hands, I was drawing in my notebooks, in my books and on the desks.
            It has always been my biggest passion and finally now I can share my
            works with other people.
          </p>
          <div className="mt-10 w-full">
            <h2 className="pd-10 font-eiko text-lg lg:text-2xl">
              My latest achievements
            </h2>
            <HorizontalTimeline styles={""} />
          </div>
        </div>
        <div className="relative hidden w-2/5 items-center lg:flex lg:justify-center">
          <Image
            height={500}
            src={my_photo}
            alt="photo of me"
            className="relative rounded-xl"
          />
          <Image
            src={thisisme}
            className="absolute right-0 top-36 z-10 hidden 2xl:block"
            width={300}
            alt=""
          />
        </div>
      </div>
      <div className="mb-10 mt-20">
        <MySlider />
      </div>
    </div>
  );
}
export default AboutMe;
