"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import Image from "next/image";
import akai from "../../public/akai-lg.svg";
import my_photo from "../../public/me.png";

function AboutMe() {
  useEffect(() => {
    document.title = "Akaiko - About me";
  });
  return (
    <div className="h-full text-white bg-gray-background">
      <div className="grid grid-cols-1 overflow-y-scroll scrollbar-hide md:grid-cols-2 md:grid-rows-hero bg-gray-dark bg-opacity-80 h-full ">
        <div className="py-10 px-10 font-karla text-xl md:col-start-1 md:col-end-2">
          <h1 className=" text-5xl font-pfd mb-3 pt-6 ">
            Hello, I&apos;m <span className=" text-akai-red">Akai</span>
          </h1>
          <p className="text-2xl">
            <span className=" text-akai-red">Character designer</span> /
            Programmer
          </p>
        </div>

        <div className=" md:col-start-2 md:row-span-2 flex items-center justify-center py-6">
          <div className="w-1/2 md:w-2/3">
            <Image src={my_photo} alt="photo"></Image>
          </div>
        </div>

        <div className="py-10 px-10 font-karla text-xl md:col-start-1 md:col-end-2 ">
          Hey there! I&apos;m <span className=" text-akai-red">Akai</span>, a
          passionate ICT student, artist, web developer, and technology
          enthusiast. As a versatile individual with a love for creativity, I
          proudly wear multiple hats – from crafting captivating digital
          experiences to expressing myself through art and content creation.
          <hr className="my-2 opacity-0" />
          Video games have always been a major source of inspiration and joy in
          my life.Ultimately, my dream is to contribute to the gaming industry
          either as a skilled{" "}
          <span className=" text-akai-red">Character designer</span>, bringing
          unique and memorable characters to life, or as a talented{" "}
          <span className=" text-akai-red">programmer</span>, shaping the
          backbone of thrilling gaming experiences.
          <hr className="my-2 opacity-0" />
          When I&apos;m not immersed in the virtual world or bringing my
          creative visions to life, you can often find me hitting the gym,
          pushing my limits, and embracing a healthy and active lifestyle.
          <hr className="my-2 opacity-0" />
          <hr className="my-2 opacity-0" />
          Did you know that <span className=" text-akai-red">AKAI</span> means
          red in Japanese? This vibrant color perfectly represents me. Just like
          the color red, I&apos;m full of energy, enthusiasm, and a drive to
          make a lasting impact through my work.
          <hr className="my-2 opacity-0" />
          Thanks for stopping by!
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
