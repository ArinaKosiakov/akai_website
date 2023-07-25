"use client";
import { Inter } from "next/font/google";
import Image from "next/image";
import akai from "../public/akai-lg.svg";
import Link from "next/link";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    document.title = "Akaiko - Homepage";
  });

  return (
    <main className="page h-full flex flex-row justify-between text-white text-xl bg-gray-background">
      <div className="grid grid-cols-1 font-karla overflow-y-scroll scrollbar-hide h-full md:w-1/2">
        <div className="bg-gray-dark bg-opacity-80 pb-3 pt-10 px-10 md:col-start-1 md:col-end-2  md:text-2xl ">
          <h1 className="text-5xl font-pfd mb-10 hover:text-akai-red">
            <Link href={"/about"}>About me</Link>
          </h1>
          Hey there, I&apos;m Akai, a game industry and technology enthusiast
          with a diverse set of passions!
          <hr className="my-2 opacity-0" />
          Currently pursuing my dreams as an
          <span className=" text-akai-red"> engineering student</span>, I&apos;m
          also a versatile
          <span className=" text-akai-red"> content creator</span>,
          <span className=" text-akai-red"> artist</span> and sometimes web
          developer.
          <hr className="my-2 opacity-0" />
          Join me in this adventure as I bring together my passions, skills, and
          determination, striving to create engaging games and memorable
          experiences.
          <hr className="my-2 opacity-0" />
          Let&apos;s embark on this thrilling ride together!
        </div>

        <div className="pb-3 pt-10 px-10 bg-gray-dark bg-opacity-80 md:col-start-1 md:col-end-2 md:text-2xl ">
          <h1 className=" text-5xl font-pfd mb-10 hover:text-akai-red">
            <Link href={"/portfolio"}>Portfolio</Link>
          </h1>
          <p>
            Welcome to my portfolio! Here, you&apos;ll find a collection of my
            creative endeavors and technical accomplishments.
          </p>
          <hr className="my-2 opacity-0" />
          <p>
            Thank you for visiting, and I hope you enjoy exploring the pieces of
            my journey showcased here. If you&apos;d like to collaborate or
            discuss any opportunities, don&apos;t hesitate to get in touch!
            <hr className="my-2 opacity-0" />
            <span className=" text-akai-red">
              <Link href={"/contacts"}>
                Let&apos;s create something incredible together!
              </Link>
            </span>
          </p>
        </div>

        <div className="pb-3 pt-10 px-10 bg-gray-dark bg-opacity-80 md:col-start-1 md:col-end-2  md:text-2xl">
          <h1 className=" text-5xl font-pfd mb-10 hover:text-akai-red">
            <Link href={"https://www.twitch.tv/ak_aiko"}>Twitch</Link>
          </h1>
          Over the past 2 years, I&apos;ve been on an incredible streaming
          journey, dedicated to spreading joy and providing quality time for all
          of you.
          <hr className="my-2 opacity-0" />
          My first and foremost priority is to make each and every one of you
          happy through exciting gameplay and engaging content. I&apos;m
          thrilled to have shared unforgettable moments with all of you during
          this time.
          <hr className="my-2 opacity-0" />
          If you&apos;re looking for more interactions and behind-the-scenes
          fun, don&apos;t forget to join
          <span className=" text-akai-red">
            <Link href={"https://discord.gg/PfhJVSuyJD"}>
              {" "}
              my Discord server
            </Link>
          </span>
          . It&apos;s the perfect place to stay connected and be a part of our
          growing community.
          <hr className="my-2 opacity-0" />
          So, grab your favorite snack, sit back, and let&apos;s continue this
          adventure together. Thank you all for being a part of this amazing
          journey! See you on the stream!
        </div>

        <div className="pb-3 pt-10 px-10 bg-gray-dark bg-opacity-80 md:col-start-1 md:col-end-2 md:text-2xl ">
          <h1 className=" text-5xl font-pfd mb-10 hover:text-akai-red">
            <Link href={"/contacts"}>Contacts</Link>
          </h1>
          <p>
            Feel free to reach out to me through any of these platforms.
            I&apos;m looking forward to collaborate with you!
          </p>
          <hr className="my-2 opacity-0" />
        </div>
      </div>

      <div className="hidden h-full pt-6 pb-3 bg-gray-dark bg-opacity-80 md:bg-opacity-0 md:relative md:col-start-2 md:row-span-full md:py-0 md:flex md:items-center md:justify-center md:w-1/2">
        <Image
          src={akai}
          alt="logo"
          className="md:w-3/4 md:absolute md:right-0 md:bottom-3 opacity-20  md:opacity-100"
        ></Image>
      </div>
    </main>
  );
}

export default Home;
