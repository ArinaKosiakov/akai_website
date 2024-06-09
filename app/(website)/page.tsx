"use client";
import { Inter } from "next/font/google";
import Image from "next/image";
import akai from "../../public/akai-lg.svg";
import Link from "next/link";

function Home() {
  return (
    <main className="flex h-full flex-row justify-between bg-gray-background text-xl text-white">
      <div className="grid h-full grid-cols-1 overflow-y-scroll font-karla scrollbar-hide md:w-1/2">
        <div className="mb-6 bg-gray-dark bg-opacity-80 px-10 pb-3 pt-8 md:col-start-1 md:col-end-2  md:text-2xl ">
          <h1 className="mb-10 font-eiko text-5xl text-akai-red">
            <Link href={"/about"}>About me</Link>
          </h1>
          <div className="flex flex-col gap-4 font-light text-white/70">
            <p>
              Hey there, I&apos;m Akai, a game industry and technology
              enthusiast with a diverse set of passions!
            </p>

            <p>
              {" "}
              A newborn ICT
              <span className="italic text-white"> engineer</span>,
              <span className="italic text-white"> content creator</span>,
              <span className="italic text-white"> artist </span> and sometimes
              <span className="italic text-white"> web developer</span>.
            </p>
          </div>
        </div>

        <div className="mb-6 bg-gray-dark bg-opacity-80  px-10 pb-3 pt-8 md:col-start-1 md:col-end-2 md:text-2xl ">
          <h1 className=" mb-10 font-eiko text-5xl text-akai-red">
            <Link href={"/portfolio"}>Portfolio</Link>
          </h1>
          <div className="flex flex-col gap-4 text-white/70">
            <p>
              Welcome to my portfolio! Here, you&apos;ll find a collection of my
              creative endeavors and technical accomplishments.
            </p>
            <p>
              Thank you for visiting, and I hope you enjoy exploring the pieces
              of my journey showcased here. If you&apos;d like to collaborate or
              discuss any opportunities, don&apos;t hesitate to get in touch!{" "}
            </p>{" "}
            <Link className=" text-akai-red" href={"/contacts"}>
              Let&apos;s create something incredible together!
            </Link>
          </div>
        </div>

        <div className=" bg-gray-dark bg-opacity-80 px-10 pb-5 pt-8 md:col-start-1 md:col-end-2 md:text-2xl ">
          <h1 className=" mb-10 font-eiko text-5xl text-akai-red">
            <Link href={"/contacts"}>Contacts</Link>
          </h1>
          <div className="text-white/70">
            <p>
              Feel free to reach out to me through any of these platforms.
              I&apos;m looking forward to collaborate with you!
            </p>
          </div>
        </div>
      </div>

      <div className="hidden h-full bg-gray-dark bg-opacity-80 pb-3 pt-6 md:relative md:col-start-2 md:row-span-full md:flex md:w-1/2 md:items-center md:justify-center md:bg-opacity-0 md:py-0">
        <Image
          src={akai}
          alt="logo"
          className="opacity-20 md:absolute md:bottom-3 md:right-0 md:w-3/4  md:opacity-100"
        ></Image>
      </div>
    </main>
  );
}

export default Home;
