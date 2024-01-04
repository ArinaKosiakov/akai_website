"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import akai from "../../../public/akai-lg.svg";
import {
  InstagramLogo,
  Tree,
  TwitchLogo,
  TwitterLogo,
} from "@phosphor-icons/react";

function Contacts() {
  return (
    <div className="flex h-full flex-row justify-between bg-gray-background  font-karla text-xl text-white">
      <div className="grid h-full grid-cols-1 overflow-y-scroll scrollbar-hide md:w-1/2">
        <div className="flex flex-col bg-gray-dark bg-opacity-80 px-10 pb-6 pt-10  md:col-start-1 md:col-end-2">
          <h1 className="mb-10 pt-6 font-eiko text-5xl">Contacts</h1>

          <p className="text-white/70">
            You can get to know me better by visiting my social platforms.
            <br /> Don&apos;t be afraid to{" "}
            <span className="italic text-white">contact me</span> if you have
            any questions.
          </p>

          <div className="mt-6 flex flex-wrap gap-6 py-6">
            <Link
              className="cursor-pointer  text-2xl hover:text-akai-red hover:underline"
              href={"https://www.instagram.com/dull.akai/"}
            >
              <InstagramLogo size={32} />
            </Link>

            <Link
              className="cursor-pointer  text-2xl hover:text-akai-red hover:underline"
              href={"https://www.twitch.tv/ak_aiko"}
            >
              <TwitchLogo size={32} />
            </Link>

            <Link
              className="cursor-pointer  text-2xl hover:text-akai-red hover:underline"
              href={"https://twitter.com/ak_aik0"}
            >
              <TwitterLogo size={32} />
            </Link>

            <Link
              className="cursor-pointer  text-2xl hover:text-akai-red hover:underline"
              href={"https://linktr.ee/ak_aiko"}
            >
              <Tree size={32} />
            </Link>
          </div>
          <h2 className="mb-10  mt-20 font-eiko md:text-4xl ">
            Let&apos;s work together!
          </h2>
          <p className="text-white/70">
            If you like what I do and want to build something together
            don&apos;t hesitate to contact me!
          </p>
          <p className="mt-8 cursor-pointer italic  text-akai-red ">
            <a href="mailto:kosiakov.arina@gmail.com">
              kosiakov.arina@gmail.com
            </a>
          </p>
        </div>
      </div>

      <div className="hidden h-full bg-gray-dark bg-opacity-80 pb-3 pt-6 md:relative md:col-start-2 md:row-span-full md:flex md:w-1/2 md:items-center md:justify-center md:bg-opacity-0 md:py-0">
        <Image
          src={akai}
          alt="logo"
          className=" opacity-20 md:absolute md:bottom-3 md:right-0 md:w-3/4  md:opacity-100"
        ></Image>
      </div>
    </div>
  );
}

export default Contacts;
