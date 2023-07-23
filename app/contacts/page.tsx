"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import akai from "../../public/akai-lg.svg";

function Contacts() {
  useEffect(() => {
    document.title = "Akaiko - Contacts";
  });

  return (
    <div className="h-full font-karla text-white text-xl bg-gray-background">
      <div className="grid grid-cols-1 overflow-y-scroll scrollbar-hide md:grid-cols-2 md:grid-rows-hero h-full ">
        <div className="flex flex-col pb-6 pt-16 px-10 md:col-start-1 md:col-end-2 md:text-2xl bg-gray-dark bg-opacity-80">
          <h1 className="text-5xl font-pfd mb-10 pt-6 hover:text-akai-red">
            Contacts
          </h1>

          <p>
            You can get to know me better by visiting my social platforms.
            <br /> Don&apos;t be afraid to contact me if you have any questions.
          </p>

          <div className="flex justify-around py-6">
            <h2 className="cursor-pointer hover:animate-bounce hover:underline hover:text-akai-red text-2xl">
              <Link href={"https://www.instagram.com/ak_aik0/"}>Instagram</Link>
            </h2>
            <h2 className="cursor-pointer hover:animate-bounce hover:underline hover:text-akai-red text-2xl">
              <Link href={"https://www.twitch.tv/ak_aiko"}>Twitch</Link>
            </h2>
            <h2 className="cursor-pointer hover:animate-bounce hover:underline hover:text-akai-red text-2xl">
              <Link href={"https://twitter.com/ak_aik0"}>Twitter</Link>
            </h2>
          </div>
        </div>

        <div className="flex flex-col justify-center items-centertext-xl mt-6 px-10 md:col-start-1 md:col-end-2 md:text-2xl  bg-gray-dark bg-opacity-80 ">
          <h1 className="text-5xl pt-6 md:text-7xl font-pfd mb-10 text-akai-red">
            Let&apos;s work together!
          </h1>
          <p>
            If you like what I do and want to build something together
            don&apos;t hesitate to contact me!
          </p>
          <div className="cursor-pointer hover:animate-bounce hover:underline hover:text-akai-red mt-8 text-3xl">
            <a href="mailto:kosiakov.arina@gmail.com">
              kosiakov.arina@gmail.com
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center bg-gray-dark bg-opacity-80 md:bg-opacity-0 md:relative md:col-start-2 md:row-start-2">
          <Image
            src={akai}
            alt="logo"
            className=" md:w-3/4 md:absolute md:right-0 md:bottom-4 opacity-20  md:opacity-100"
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
