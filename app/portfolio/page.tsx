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
    <div className="h-full flex flex-col item-center overflow-y-scroll scrollbar-hide justify-between text-white bg-gray-background">
      <div className="md:w-1/2 h-full flex items-center justify-center flex-col  md:mt-5 p-16 font-pfd text-xl md:text-7xl text-justify bg-akai-red-dark text-white">
        <h2 className="mb-6 cursor-pointer hover:border-y hover:border-white">
          {" "}
          <Link href={"/portfolio/concepts"}>CONCEPTS</Link>
        </h2>
        <h2 className="mb-6 hover:border-y hover:border-white">
          {" "}
          <Link href={"/portfolio/sketchbook"}>SKETCHBOOKS</Link>
        </h2>
        <h2 className="hover:border-y hover:border-white">
          {" "}
          <Link href={"/portfolio/illustrations"}>ILLUSTRATIONS</Link>
        </h2>
      </div>
    </div>
  );
}
export default Portfolio;
