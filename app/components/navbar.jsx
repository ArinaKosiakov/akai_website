"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/logo-gray.png";

const XsMenu = () => {
  let Links = [
    { name: "About me", link: "/about" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Contacts", link: "/contacts" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="z-10 shadow-lg w-full my-3 max-w-7xl mx-auto flex-none">
      <div className=" md:flex items-center justify-between bg-gray-navbar py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-pfd
        text-white text-opacity-75"
        >
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            <Link href={"/"}>
              {" "}
              <Image
                src={logo}
                width={70}
                alt="logo"
                className="md:md:w-100 lg:w-100"
              ></Image>
            </Link>
          </span>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-10 md:top-8 cursor-pointer md:hidden text-gray-light hover:text-akai-red"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`flex justify-center flex-col items-center md:flex md:items-center md:flex-row md:pb-0 absolute md:static  bg-gray-navbar md:z-auto z-[-1] 
          left-0 w-full md:w-auto md:pl-0 transition-all duration-500  ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className=" md:py-0 py-2 md:px-0 px-6 rounded md:ml-8 text-xl md:my-0 my-7 hover:text-akai-red text-white text-opacity-75"
            >
              <Link
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
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
