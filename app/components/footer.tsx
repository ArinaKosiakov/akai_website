import React from "react";
import Link from "next/link";

function Footer() {
  const year = new Date().getFullYear();
  let Links = [
    {
      name: "Instagram",
      link: "https://www.instagram.com/dull.akai/",
    },
    {
      name: "Twitch",
      link: "https://www.twitch.tv/dullakai",
    },
    {
      name: "ArtStation",
      link: "https://dullakai.artstation.com/",
    },
  ];

  return (
    <footer className="flex h-10 w-full items-center justify-around">
      <div className="flex flex-row">
        <p className="text-neutral-500">dull.akai</p>
        <p className="ml-3 text-neutral-500">&copy; {year} Arina Kosiakov</p>
      </div>
      <div>
        <ul className="flex flex-row text-neutral-500">
          {Links.map((link) => (
            <li
              className="cursor-pointer px-3 hover:text-white"
              key={link.name}
            >
              {link.name}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
