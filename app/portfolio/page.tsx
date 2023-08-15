import Link from "next/link";
import React from "react";
import Image from "next/image";
import akai from "../../public/akai-lg.svg";

function Portfolio() {
  return (
    <div className=" h-full flex flex-row justify-between text-white text-3xl bg-gray-background">
      <div className="grid grid-cols-1 w-full font-karla overflow-y-scroll scrollbar-hide h-full md:w-1/2">
        <div className=" h-full flex items-center justify-center flex-col font-pfd text-justify bg-akai-red-dark opacity-80 text-white md:text-5xl">
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

      <div className="hidden h-full pt-6 pb-3 bg-gray-dark bg-opacity-80 md:bg-opacity-0 md:relative md:col-start-2 md:row-span-full md:py-0 md:flex md:items-center md:justify-center md:w-1/2">
        <Image
          src={akai}
          alt="logo"
          className="md:w-3/4 md:absolute md:right-0 md:bottom-3 opacity-20  md:opacity-100"
        ></Image>
      </div>
    </div>
  );
}
export default Portfolio;
