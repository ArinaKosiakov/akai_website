"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import React, { useState } from "react";

export default function Artbar() {
  const segment = useSelectedLayoutSegment();
  return (
    <div className="mb-3 h-fit sticky top-0 flex flex-col items-center justify-around sm:flex-row w-full  bg-akai-red-dark text-white">
      <h2 className=" font-pfd text-lg ">
        {" "}
        <Link
          className={`cursor-pointer border-y  ${
            segment === "concepts" ? "border-white" : "border-transparent"
          }`}
          href={"/portfolio/concepts"}
        >
          CONCEPTS
        </Link>
      </h2>
      <h2 className=" font-pfd text-lg ">
        {" "}
        <Link
          className={`cursor-pointer border-y border-transparent ${
            segment === "sketchbook" ? "border-white" : "border-transparent"
          }`}
          href={"/portfolio/sketchbook"}
        >
          SKETCHBOOK
        </Link>
      </h2>
      <h2 className=" font-pfd text-lg ">
        {" "}
        <Link
          className={`cursor-pointer border-y border-transparent ${
            segment === "illustrations" ? "border-white" : "border-transparent"
          }`}
          href={"/portfolio/illustrations"}
        >
          ILLUSTRATIONS
        </Link>
      </h2>
    </div>
  );
}
