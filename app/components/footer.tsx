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
      <div className="flex  flex-row">
        <p className="text-white">dull.akai</p>
        <p className="ml-3 text-white text-opacity-50">
          &copy; {year} Arina Kosiakov
        </p>
      </div>
      <div>
        <ul className="flex flex-row text-white text-opacity-50">
          {Links.map((link) => (
            <li className="px-3" key={link.name}>
              {link.name}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
