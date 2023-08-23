import Link from "next/link";
import React from "react";
import Image from "next/image";
import akai from "../../public/akai-lg.svg";

function Portfolio() {
  return (
    <div className=" flex h-full flex-row justify-between bg-gray-background text-3xl text-white">
      <div className="grid h-full w-full grid-cols-1 overflow-y-scroll font-eiko scrollbar-hide md:w-1/2">
        <div className=" flex h-full flex-col items-center justify-center bg-gray-dark bg-opacity-80 text-justify text-white opacity-80 md:text-5xl">
          <h2 className="mb-6 cursor-pointer border-y border-transparent transition hover:border-y hover:border-white">
            {" "}
            <Link href={"/portfolio/concepts"}>CONCEPTS</Link>
          </h2>
          <h2 className="mb-6 cursor-pointer border-y border-transparent transition hover:border-y hover:border-white">
            {" "}
            <Link href={"/portfolio/sketchbook"}>SKETCHBOOK</Link>
          </h2>
          <h2 className="cursor-pointer border-y border-transparent transition hover:border-y hover:border-white">
            {" "}
            <Link href={"/portfolio/illustrations"}>ILLUSTRATIONS</Link>
          </h2>
        </div>
      </div>

      <div className="hidden h-full bg-gray-dark bg-opacity-80 pb-3 pt-6 md:relative md:col-start-2 md:row-span-full md:flex md:w-1/2 md:items-center md:justify-center md:bg-opacity-0 md:py-0">
        <Image
          src={akai}
          alt="logo"
          className="opacity-20 md:absolute md:bottom-3 md:right-0 md:w-3/4  md:opacity-100"
        ></Image>
      </div>
    </div>
  );
}
export default Portfolio;
