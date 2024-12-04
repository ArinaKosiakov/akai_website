"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import akai from "../../../public/akai-lg.svg";
import {
  InstagramLogo,
  Tree,
  TwitchLogo,
  TwitterLogo,
} from "@phosphor-icons/react";

import { handleContactSubmission } from "@/app/components/lib/actions";

function Contacts() {
  return (
    <div className="flex h-full w-full flex-row items-center justify-around text-white">
      <div className="flex w-1/2 flex-col items-start gap-20 pr-10">
        <h1 className="font-eiko text-5xl">CONTACTS</h1>
        <p className="text-l self-stretch font-karla">
          You can get to know me better and see more of my works by visiting the
          links below. <br /> For more information send me a message.
        </p>
        <div className="flex flex-row gap-6 py-6">
          <Link
            className="cursor-pointer text-2xl text-akai-500 hover:text-white"
            href={"https://www.instagram.com/dull.akai/"}
            target="_blank"
          >
            <InstagramLogo size={32} />
          </Link>

          <Link
            className="cursor-pointer text-2xl text-akai-500 hover:text-white"
            href={"https://www.twitch.tv/ak_aiko"}
            target="_blank"
          >
            <TwitchLogo size={32} />
          </Link>

          <Link
            className="cursor-pointer text-2xl text-akai-500 hover:text-white"
            href={"https://linktr.ee/dull.akai"}
            target="_blank"
          >
            <Tree size={32} />
          </Link>
        </div>
      </div>
      <div className="w-1/3 font-karla">
        <form
          className="flex flex-col"
          action={handleContactSubmission}
          name="messageForm"
        >
          <label className="mb-2">Name</label>
          <input
            className="w-full rounded-md px-4 py-2 font-medium text-black"
            name="name"
            type="text"
            placeholder="Name"
          />
          <label className="mb-2 mt-6">Email</label>
          <input
            className="w-full rounded-md px-4 py-2 font-medium text-black"
            name="email"
            type="email"
            placeholder="Email"
          />
          <label className="mb-2 mt-6">Message</label>
          <textarea
            className="rounded-md py-2 pl-4 font-medium text-black"
            name="message"
            id="message"
            placeholder="Message"
          ></textarea>
          <button
            className="mt-6 h-10 w-24 rounded-md bg-akai-700 hover:bg-akai-500"
            type="submit"
            value="Submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contacts;
