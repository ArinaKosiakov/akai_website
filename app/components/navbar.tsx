import Link from "next/link";
import React, { useState } from "react";
import logo from "../../public/logo/logo_bianco.png";
import Image from "next/image";

function Navbar() {
  let Links = [
    { name: "Portfolio", link: "/portfolio" },
    { name: "About me", link: "/about" },
    { name: "Contacts", link: "/contacts" },
  ];

  return (
    <div className="flex h-20 w-full justify-center  align-middle">
      <div className="flex h-full w-9/12 flex-row items-center justify-between ">
        <div className="ml-6">
          <Image width={50} height={50} src={logo} alt="logo of the " />
        </div>
        <div>
          <ul className="flex flex-row items-center justify-center text-white">
            {Links.map((link) => (
              <li key={link.name} className="mx-6">
                <Link href={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
