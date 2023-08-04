"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import Image from "next/image";
import akai from "../../public/akai-lg.svg";
import Artbar from "../../components/artbar";
import { Sketch1, Sketch4 } from "../../../public";

function Portfolio() {
  useEffect(() => {
    document.title = "Akaiko - Concepts";
  });

  return (
    <div className="h-full text-white font-karlatext-xl bg-gray-background overflow-y-scroll scrollbar-hide">
      <div className="">
        <Artbar />
        <div className="flex justify-between items-center flex-row">
          <div className="my-2 mr-2">
            <Image src={Sketch1} alt="sketch"></Image>
          </div>
          <div className="my-2 mr-2">
            <Image src={Sketch1} alt="sketch"></Image>
          </div>
          <div className="my-2">
            <Image src={Sketch1} alt="sketch"></Image>
          </div>
        </div>
        <div>
          <Image src={Sketch4} alt="sketch"></Image>
        </div>
        <div className="flex justify-between items-center flex-row">
          <div className="my-2 mr-2">
            <Image src={Sketch1} alt="sketch"></Image>
          </div>
          <div className="my-2 mr-2">
            <Image src={Sketch1} alt="sketch"></Image>
          </div>
          <div className="my-2">
            <Image src={Sketch1} alt="sketch"></Image>
          </div>
        </div>
        <div>
          <Image src={Sketch4} alt="sketch"></Image>
        </div>
        <div className="flex justify-between items-center flex-row">
          <div className="my-2 mr-2">
            <Image src={Sketch1} alt="sketch"></Image>
          </div>
          <div className="my-2 mr-2">
            <Image src={Sketch1} alt="sketch"></Image>
          </div>
          <div className="my-2">
            <Image src={Sketch1} alt="sketch"></Image>
          </div>
        </div>
        <div>
          <Image src={Sketch4} alt="sketch"></Image>
        </div>
      </div>
    </div>
  );
}
export default Portfolio;
