"use client";
import React, { useState } from "react";
import Link from "next/link";

import { toast } from "react-toastify";

import {
  InstagramLogo,
  Tree,
  TwitchLogo,
  TwitterLogo,
} from "@phosphor-icons/react";
import { FaArtstation } from "react-icons/fa";

import { handleContactSubmission } from "@/app/components/lib/actions";

function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("message", formData.message);

    try {
      // Call server function
      const response = await handleContactSubmission(form);
      console.log("mex", response);

      // Trigger toast based on response
      if (response!.success) {
        toast.success(response!.message);
      } else {
        toast.error(response!.message);
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="flex w-full flex-col items-center justify-center text-white lg:flex-row lg:justify-around">
      <div className="mt-16 flex w-full flex-col items-start gap-8 md:mt-0 md:w-1/2 md:gap-14 md:pr-8 lg:gap-20 lg:pr-10">
        <h1 className="mt-10 font-eiko text-3xl md:mt-0 md:text-4xl lg:text-5xl">
          CONTACTS
        </h1>
        <p className="text-l self-stretch font-karla">
          You can get to know me better and see more of my works by visiting the
          links below. <br /> For more information send me a message.
        </p>
        <div className="flex flex-row gap-6 py-6">
          <Link
            className="cursor-pointer text-xl text-akai-500 hover:text-white md:text-2xl"
            href={"https://www.instagram.com/dull.akai/"}
            target="_blank"
          >
            <InstagramLogo size={32} />
          </Link>

          <Link
            className="cursor-pointer text-xl text-akai-500 hover:text-white md:text-2xl"
            href={"https://www.twitch.tv/ak_aiko"}
            target="_blank"
          >
            <TwitchLogo size={32} />
          </Link>

          <Link
            className="cursor-pointer text-xl text-akai-500 hover:text-white md:text-2xl"
            href={"https://linktr.ee/dull.akai"}
            target="_blank"
          >
            <Tree size={32} />
          </Link>
          <Link
            className="cursor-pointer text-2xl text-akai-500 hover:text-white"
            href={"https://www.artstation.com/dullakai"}
            target="_blank"
          >
            <FaArtstation size={32} />
          </Link>
        </div>
      </div>
      <span className="my-10 w-full border-[1px] border-white/5 md:hidden"></span>
      <div className="w-full font-karla md:w-2/3 md:pl-8 lg:w-1/3 lg:pl-0">
        <form
          className="flex flex-col"
          action={handleSubmit}
          name="messageForm"
        >
          <label className="mb-2">Name</label>
          <input
            className="w-full rounded-md px-4 py-2 font-medium text-black"
            name="name"
            type="text"
            placeholder="Name"
            onChange={handleChange}
          />
          <label className="mb-2 mt-6">Email</label>
          <input
            className="w-full rounded-md px-4 py-2 font-medium text-black"
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <label className="mb-2 mt-6">Message</label>
          <textarea
            className="rounded-md py-2 pl-4 font-medium text-black"
            name="message"
            id="message"
            placeholder="Message"
            onChange={handleChange}
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
