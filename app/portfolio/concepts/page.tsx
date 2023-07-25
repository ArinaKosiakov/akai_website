"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import Image from "next/image";
import akai from "../../public/akai-lg.svg";

function Portfolio() {
  useEffect(() => {
    document.title = "Akaiko - Homepage";
  });

  return (
    <div className="h-full text-white bg-gray-background">
      <div className="overflow-y-scroll scrollbar-hide">
        <div className="h-fit flex flex-col items-center justify-around sm:flex-row w-full  bg-akai-red-dark text-white">
          <h2 className=" font-pfd text-lg border-y border-white">
            {" "}
            <Link className=" cursor-pointer" href={"/portfolio/concepts"}>
              CONCEPTS
            </Link>
          </h2>
          <h2 className=" font-pfd text-lg">
            {" "}
            <Link className=" cursor-pointer" href={"/portfolio/sketchbook"}>
              SKETCHBOOKS
            </Link>
          </h2>
          <h2 className=" font-pfd text-lg">
            {" "}
            <Link className=" cursor-pointer" href={"/portfolio/illustrations"}>
              ILLUSTRATIONS
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
}
export default Portfolio;
