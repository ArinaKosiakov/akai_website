"use client";
import { Inter } from "next/font/google";
import character from "../../public/homepage_imgs/characters.jpg";
import env from "../../public/homepage_imgs/env.jpg";
import illustration from "../../public/homepage_imgs/illustration.jpg";
import projects from "../../public/homepage_imgs/projects.jpg";
import sketches from "../../public/homepage_imgs/sketches.jpg";
import Image from "next/image";
import image from "../../public/homepage_imgs/pedro-monkey-puppet.gif";
import Link from "next/link";

function Home() {
  const homepageText =
    "Ehm well, we are still trying to work on this, be patient";

  return (
    <main className="block h-full bg-gray-background text-xl text-white">
      <div className="flex flex-col items-center justify-center">
        <p className="text-center font-eiko text-5xl" id="homepage-text">
          {homepageText}
        </p>
        <Image src={image} className="mt-16 w-60" />
      </div>
    </main>
  );
}

export default Home;
