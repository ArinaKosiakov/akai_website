"use client";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../public/logo/logo_bianco.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

function Navbar() {
  let Links = [
    { name: "Portfolio", link: "/portfolio" },
    { name: "About me", link: "/about" },
    { name: "Contacts", link: "/contacts" },
  ];

  const path = usePathname();

  return (
    <div className="mb-8 flex h-20 w-full justify-center align-middle shadow-md">
      <div className="flex h-full w-9/12 flex-row items-center justify-between">
        <div className="ml-6">
          <Link href={"/"}>
            <Image width={50} height={50} src={logo} alt="logo of the " />
          </Link>
        </div>
        <div>
          <ul className="flex flex-row items-center justify-center text-white">
            {Links.map((link) => (
              <li
                key={link.name}
                className="relative z-10 mx-6 hover:cursor-pointer"
              >
                <Link href={link.link} className="relative">
                  {link.name}
                </Link>
                <span
                  className={`"w-full h-full" absolute inset-0 -z-10 ${path === link.link ? "rounded-full bg-white opacity-20 blur-lg" : ""}`}
                ></span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
