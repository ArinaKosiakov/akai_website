import React, { useState } from "react";
import Link from "next/link";

function Footer() {
  const year = new Date().getFullYear();
  let Links = [
    {
      name: "Instagram",
      link: "https://www.instagram.com/dull.akai/",
    },
    // {
    //   name: "Twitch",
    //   link: "https://www.twitch.tv/dullakai",
    // },
    {
      name: "ArtStation",
      link: "https://dullakai.artstation.com/",
    },
    {
      name: "YouTube",
      link: "https://youtube.com/@dullakaii",
    },
  ];

  return (
    <footer className="mb-2 flex h-10 w-full items-center justify-center">
      <div className="flex w-9/12 items-center justify-between">
        <div className="flex flex-row">
          <p className="text-white text-opacity-30">dull.akai</p>
          <p className="ml-3 text-white text-opacity-30">
            &copy; {year} Arina Kosiakov
          </p>
        </div>
        <div className="hidden md:block">
          <ul className="flex flex-row text-white text-opacity-30">
            {Links.map((link) => (
              <li
                className="px-3 hover:cursor-pointer hover:text-white"
                key={link.name}
              >
                <Link target="blank" href={link.link}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
