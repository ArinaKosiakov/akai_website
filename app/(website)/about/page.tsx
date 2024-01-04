import React from "react";
import Image from "next/image";
import my_photo from "../../../public/me.png";

function AboutMe() {
  return (
    <div className="h-full bg-gray-background text-white">
      <div className="grid h-full grid-cols-1 overflow-y-scroll bg-gray-dark bg-opacity-80 scrollbar-hide md:grid-cols-2 md:grid-rows-hero ">
        <div className="px-10 py-10 font-karla text-xl md:col-start-1 md:col-end-2">
          <h1 className=" mb-3 pt-6 font-eiko text-5xl ">
            Hello, I&apos;m <span className=" text-akai-red">Akai</span>
          </h1>
          <p className="font-eiko text-2xl">
            <span className=" text-akai-red">Character designer</span> /
            Programmer
          </p>
        </div>

        <div className=" flex items-center justify-center py-6 md:col-start-2 md:row-span-2 md:bg-gray-background ">
          <div className="w-1/2 md:w-2/3">
            <Image src={my_photo} alt="photo"></Image>
          </div>
        </div>

        <div className=" flex flex-col gap-4 px-10 py-10 font-karla text-xl text-white/70 md:col-start-1 md:col-end-2 ">
          <p>
            Hey there! I&apos;m Arina, but you can call me{" "}
            <span className=" italic text-white">Akai</span>, a passionate ICT
            student, artist, web developer, and technology enthusiast. As a
            versatile individual with love for creativity, I proudly wear
            multiple hats – from crafting captivating digital experiences to
            expressing myself through art and content creation.
          </p>
          <p>
            Video games have always been a major source of inspiration and joy
            in my life. Ultimately, my dream is to contribute to the gaming
            industry either as a skilled{" "}
            <span className=" italic text-white">Character designer</span>,
            bringing unique and memorable characters to life, or as a talented{" "}
            <span className=" italic text-white">programmer</span>, shaping the
            backbone of thrilling gaming experiences.
          </p>
          <p>
            When I&apos;m not immersed in the virtual world or bringing my
            creative visions to life, you can often find me hitting the gym,
            pushing my limits, and embracing a healthy and active lifestyle.
          </p>
          <p>
            {" "}
            Did you know that <span className=" italic text-white">
              AKAI
            </span>{" "}
            means red in Japanese? This vibrant color perfectly represents me.
            Just like the color red, I&apos;m full of energy, enthusiasm, and a
            drive to make a lasting impact through my work.
          </p>
          <p className=" italic text-white">Thanks for stopping by!</p>
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
