"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

const XsMenu = () => {
  let Links = [
    { name: "About me", link: "/about" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Contacts", link: "/contacts" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="z-10 mx-auto my-3 w-full max-w-7xl flex-none shadow-lg">
      <div className=" items-center justify-between bg-gray-navbar px-7 py-4 md:flex md:px-10">
        <div
          className="flex cursor-pointer items-center font-eiko text-2xl font-bold
        text-white text-opacity-75"
        >
          <span className="mr-1 pt-2 text-3xl">
            <Link href={"/"}>
              {" "}
              <p className="text-akai-red text-opacity-80">AKAI</p>
            </Link>
          </span>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-10 cursor-pointer text-3xl text-gray-light hover:text-akai-red md:top-8 md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`absolute left-0 z-[-1] flex w-full flex-col items-center justify-center bg-gray-navbar font-eiko transition-all  duration-500 ease-in md:static 
          md:z-auto md:flex md:w-auto md:flex-row md:items-center md:pb-0  md:pl-0 ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className=" my-7 rounded px-6 py-2 text-xl text-white text-opacity-75 hover:text-akai-red md:my-0 md:ml-8 md:px-0 md:py-0"
            >
              <Link href={link.link} className="duration-500">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default XsMenu;
