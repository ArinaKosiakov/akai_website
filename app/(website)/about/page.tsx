import React from "react";
import Image from "next/image";
import my_photo from "../../../public/pfp.jpg";
import TimelineCustom from "@/app/components/timeline";
import thisisme from "@/public/thisisme.png";

function AboutMe() {
  return (
    <div className="flex h-full w-full flex-row items-center justify-around text-white">
      <div className="flex w-1/2 flex-col items-start pr-10">
        <h1 className="font-eiko text-5xl">
          Hello, I&apos;m <span className="text-akai-500">Akai</span>
        </h1>
        <h2 className="pb-10 pt-2 text-xl">
          Concept artist, environment designer
        </h2>
        <p className="pb-6">
          Hey there! I&apos;m Arina, in art DullAkai or just Akai. I&apos;m a
          passionate artist and technology enthusiast. My interests go from
          videogames, to traditional art, from programming to reading books.
        </p>
        <p className="pb-6">
          You may ask why <span className="text-white">AKAI </span>? Well it
          means red in Japanese and I can&apos;t see myself without this color
          in my life as it perfectly represents me.
        </p>
        <p className="pb-6">
          Talking about art, it has always been very important in my life since
          I was a kid. Through whole my life I kept a pencil in my hands, I was
          drawing in my notebooks, in my books and on the desks. It has always
          been my biggest passion and finally now I can share my works with
          other people.
        </p>
        <div className="mt-10 w-full">
          <h2 className="pd-10 font-eiko text-2xl">My latest achievements</h2>
          <TimelineCustom />
        </div>
      </div>
      <div className="relative flex w-1/2 items-center justify-center">
        <Image
          height={500}
          src={my_photo}
          alt="photo of me"
          className="relative rounded-xl"
        />
        <Image
          src={thisisme}
          className="absolute right-10 top-36 z-10"
          width={300}
          alt=""
        />
      </div>
    </div>
  );
}
export default AboutMe;
