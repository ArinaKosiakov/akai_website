"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import akai from "../../../public/akai-lg.svg";
import Link from "next/link";

function Twitch() {
  useEffect(() => {
    document.title = "Akaiko - Twitch";
  });

  return (
    <div className="page flex h-full flex-row justify-between bg-gray-background text-white">
      <div className="item-center z-10 flex h-full w-1/2 flex-col overflow-y-scroll scrollbar-hide">
        <div className=" h-full w-full bg-gray-dark bg-opacity-80 p-16 font-karla text-2xl">
          <h1 className=" font-pfd mb-10 text-5xl hover:text-akai-red">
            {" "}
            <Link href={"https://www.twitch.tv/ak_aiko"}>Twitch</Link>{" "}
          </h1>

          <p>
            I&apos;ve been streaming for the past two years and I got to know a
            lot of amazing people. I am a{" "}
            <span className=" text-akai-red">variety streamer </span>
            which means I bring different content. I usually stream{" "}
            <span className=" text-akai-red">video-games</span>, but sometimes I
            like to share also how I create my{" "}
            <span className=" text-akai-red">art</span>.
          </p>
          <hr className="my-2 h-1 opacity-0" />
        </div>

        <div className=" mt-5 h-full w-full bg-gray-dark bg-opacity-80 p-16 font-karla text-2xl">
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            nisi exercitationem adipisci alias, commodi soluta, fugiat corrupti
            accusamus porro earum vero at, est recusandae? Repudiandae ea
            aspernatur nobis sequi cupiditate.
          </p>
        </div>
      </div>

      <div className="relative z-0 h-full  w-1/2">
        <Image
          alt="logo"
          src={akai}
          className=" absolute bottom-8 right-14 scale-125"
        ></Image>
      </div>
    </div>
  );
}
export default Twitch;
