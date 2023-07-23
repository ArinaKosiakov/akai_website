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

          <p>
            Hello, I&apos;m Akai an
            <span className=" text-akai-red"> engineering student</span>,
            <span className=" text-akai-red"> content creator</span> and
            <span className=" text-akai-red"> artist</span>. Sometimes I&apos;m
            a web developer and other times a musician. I have many different
            hobbies and interests and I love to share them with other people.
          </p>
          <hr className="h-1 my-2 opacity-0" />
          <p>
            My biggest dream is to work in the game industry. In order to
            achieve this dream I&apos;m currently very focused on improving my
            coding and art skills.
          </p>
        </div>

        <div className="pb-3 pt-10 px-10 bg-gray-dark bg-opacity-80 md:col-start-1 md:col-end-2 md:text-2xl ">
          <h1 className=" text-5xl font-pfd mb-10 hover:text-akai-red">
            <Link href={"/portfolio"}>Portfolio</Link>
          </h1>
          <p>
            I&apos;ve been drawing since I was 10, but I started to focus on my
            art around two years ago.
          </p>
          <hr className="h-1 my-2 opacity-0" />
          <p>
            Here you can find some of my best illustrations, projects and work
            at a glance. If you are interested to collaborate or you would like
            ne to work on your commission contact me through the email you will
            find in the
            <span className=" text-akai-red">
              <Link href={"/contacts"}>contacts</Link>
            </span>
            .
          </p>
        </div>

        <div className="pb-3 pt-16 px-10 bg-gray-dark bg-opacity-80 md:col-start-1 md:col-end-2  md:text-2xl">
          <h1 className=" text-5xl font-pfd mb-10 hover:text-akai-red">
            <Link href={"https://www.twitch.tv/ak_aiko"}>Twitch</Link>
          </h1>
          <p>
            Two years ago I started my career as a streamer and I couldn&apos;t
            be happier. It is an immense pleasure to have people who share my
            interests and like what I&apos;m doing.
          </p>
          <hr className="h-1 my-2 opacity-0" />
          <p>
            My first priority is to make people feel less alone and make them
            smile. I hope my community is going to grow and I&apos;ll meet more
            and more nice people.
          </p>
          <hr className="h-1 my-2 opacity-0" />
          <p>
            Join{" "}
            <span className=" text-akai-red">
              {" "}
              <Link href={"https://discord.gg/PfhJVSuyJD"}>my discord</Link>
            </span>{" "}
            server for more info.
          </p>
        </div>

        <div className="pb-3 pt-16 px-10 bg-gray-dark bg-opacity-80 md:col-start-1 md:col-end-2 md:text-2xl ">
          <h1 className=" text-5xl font-pfd mb-10 hover:text-akai-red">
            <Link href={"/contacts"}>Contacts</Link>
          </h1>
          <p>
            If you want to collaborate on any art or web projects you can
            contact me on any of my socials, or email.
          </p>
          <hr className="h-1 my-2 opacity-0" />
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
