"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function artbar() {
  return (
    <div className="mb-3 h-fit flex flex-col items-center justify-around sm:flex-row w-full  bg-akai-red-dark text-white">
      <h2 className=" font-pfd text-lg border-y border-white">
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
      <h2 className=" font-pfd text-lg">
        {" "}
        <Link className=" cursor-pointer" href={"/portfolio/illustrations"}>
          ILLUSTRATIONS
        </Link>
      </h2>
    </div>
  );
}
