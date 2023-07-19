"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import Image from "next/image";
import akai from "../../public/akai-lg.svg";
import my_photo from "../../public/me_small.jpg";

function AboutMe() {
  useEffect(() => {
    document.title = "Akaiko - About me";
  });
  return (
    <div className="h-full text-white bg-gray-background">
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-hero overflow-scroll bg-gray-dark bg-opacity-80 h-full ">
        <div className=" md:col-start-1 md:col-end-2 font-karla text-xl pt-16 px-10 xs:pt-10 md:text-2xl  bg-gray-dark bg-opacity-80">
          <h1 className=" xs:text-3xl md:text-5xl font-pfd mb-10 hover:text-akai-red">
            Hello, I&apos;m <span className=" text-akai-red">Akai</span>
          </h1>
          <p className="text-xl">
            <span className=" text-akai-red">Character designer</span> /
            Programmer
          </p>
        </div>

        <div className=" md:col-start-2 md:row-span-2 flex items-center justify-center bg-gray-dark bg-opacity-80">
          <div>
            <Image
              src={my_photo}
              alt="logo"
              className="rounded-xl object-cover"
            ></Image>
          </div>
        </div>

        <div className="md:col-start-1 md:col-end-2 font-karla text-xl px-10 pb-10 md:px-16 md:text-2xl lg:pt-6 bg-gray-dark bg-opacity-80">
          <p>
            <span className=" text-akai-red">Akai</span> means red in japanese
            and for me Akai means being passionate, loving and energetic.
          </p>
          <hr className="h-1 my-2 opacity-0" />
          <p>
            I&apos;ve been into technology since I was little and currently
            I&apos;m studying Telecomunication engineering at the University. My
            biggest dream is to work in the
            <span className=" text-akai-red">game industry</span> and I am
            trying my best to improve my programming and srtistic skills in
            order to achieve this dream.
          </p>
          <hr className="h-1 my-2 opacity-0" />
          <p>
            I have different hobbies, some are being an{" "}
            <span className=" text-akai-red">artist</span>,
            <span className=" text-akai-red"> streamer</span>,
            <span className=" text-akai-red"> painter</span>, and{" "}
            <span className=" text-akai-red"> web developer</span> (and yes this
            site, I made it! ). I like to work out and in my free time I spend
            my time playing video games and watching animes. I am always opened
            to suggestions!{" "}
          </p>
          <hr className="h-1 my-2 opacity-0" />
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
