"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import Image from "next/image";
import akai from "../../public/akai-lg.svg";
import Artbar from "../../components/artbar";
import { Sketch1, Sketch4 } from "../../../public";

function Portfolio() {
  useEffect(() => {
    document.title = "Akaiko - Illustrations";
  });

  return (
    <div className="h-full text-white font-karlatext-xl bg-gray-background overflow-y-scroll scrollbar-hide">
      <div className="">
        <div className="mb-3 h-fit flex flex-col items-center justify-around sm:flex-row w-full  bg-akai-red-dark text-white">
          <h2 className=" font-pfd text-lg ">
            {" "}
            <Link className=" cursor-pointer" href={"/portfolio/concepts"}>
              CONCEPTS
            </Link>
          </h2>
          <h2 className=" font-pfd text-lg">
            {" "}
            <Link className=" cursor-pointer" href={"/portfolio/sketchbook"}>
              SKETCHBOOK
            </Link>
          </h2>
          <h2 className=" font-pfd text-lg border-y border-white">
            {" "}
            <Link className=" cursor-pointer" href={"/portfolio/illustrations"}>
              ILLUSTRATIONS
            </Link>
          </h2>
        </div>

        <div className="grid grid-cols-3 grid-rows-5 h-full">
          <div className=" m-1 col-start-1 col-end-2">
            <Image src={Sketch1} alt="sketch"></Image>
          </div>
          <div className=" m-1 col-start-2 col-end-3">
            <Image src={Sketch1} alt="sketch"></Image>
          </div>
          <div className=" m-1 col-start-3 col-end-4">
            <Image src={Sketch1} alt="sketch"></Image>
          </div>
          <div className=" m-1 col-start-1 col-end-4">
            <Image src={Sketch4} alt="sketch"></Image>
          </div>
          <div className=" m-1 col-start-1 col-end-2">
            <Image src={Sketch1} alt="sketch"></Image>
          </div>
          <div className=" m-1 col-start-2 col-end-3">
            <Image src={Sketch1} alt="sketch"></Image>
          </div>
          <div className=" m-1 col-start-3 col-end-4">
            <Image src={Sketch1} alt="sketch"></Image>
          </div>
          <div className=" m-1 col-start-1 col-end-4">
            <Image src={Sketch4} alt="sketch"></Image>
          </div>
          <div className=" m-1 col-start-1 col-end-2">
            <Image src={Sketch1} alt="sketch"></Image>
          </div>
          <div className=" m-1 col-start-2 col-end-3">
            <Image src={Sketch1} alt="sketch"></Image>
          </div>
          <div className=" m-1 col-start-3 col-end-4">
            <Image src={Sketch1} alt="sketch"></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Portfolio;
