"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

export default function Artbar() {
  const segment = useSelectedLayoutSegment();
  const pathname = usePathname();
  return (
    <div className="sticky top-0 mb-3 flex w-full items-center justify-around bg-gray-dark bg-opacity-80 py-1 font-karla  text-white backdrop-blur-lg">
      <h2 className=" text-lg ">
        {" "}
        <Link
          className={`cursor-pointer border-y  hover:border-white ${
            pathname === "/portfolio" ? "border-white" : "border-transparent"
          }`}
          href={"/portfolio"}
        >
          CONCEPTS
        </Link>
      </h2>
      <h2 className=" text-lg ">
        {" "}
        <Link
          className={`cursor-pointer border-y border-transparent hover:border-white ${
            segment === "sketchbook" ? "border-white" : "border-transparent"
          }`}
          href={"/portfolio/sketchbook"}
        >
          SKETCHBOOK
        </Link>
      </h2>
      <h2 className=" text-lg ">
        {" "}
        <Link
          className={`cursor-pointer border-y border-transparent hover:border-white  ${
            segment === "illustrations" ? "border-white" : "border-transparent"
          }`}
          href={"/portfolio/illustrations"}
        >
          ILLUSTRATIONS
        </Link>
      </h2>
      <h2 className=" text-lg ">
        {" "}
        <Link
          className="cursor-pointer border-y border-transparent hover:border-white"
          target="_blank"
          href={"https://www.artstation.com/dullakai"}
        >
          ARTSTATION
        </Link>
      </h2>
    </div>
  );
}
