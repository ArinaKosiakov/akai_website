"use client";

import { ls } from "../i18n/translations";
import HomepageCarousel from "../components/homepageCarousel";
import { HiArrowNarrowRight } from "react-icons/hi";
import Link from "next/link";

function Home() {
  return (
    <main className="bg-custom_gray-700 flex h-full flex-col justify-center text-xl text-white scrollbar-hide">
      {/* hero section */}
      <div className="bg-custom_gray-700 flex h-fit flex-col items-center justify-center pb-3">
        <p className="text-center font-eiko text-5xl">{ls.homepage.title}</p>
        <p className="mt-8 text-center font-eiko text-2xl text-white text-opacity-60">
          {ls.homepage.subtitle}
        </p>
      </div>
      {/* view of the main projects */}
      <div className="h-3/5 w-full md:mt-6">
        <HomepageCarousel />
      </div>
      <div className="flex w-full justify-end">
        <Link
          href={"/portfolio"}
          className="mt-6 flex h-10 items-center justify-center rounded-md px-2 text-white text-opacity-70 hover:cursor-pointer hover:text-opacity-100"
        >
          {ls.buttons.more}
          <HiArrowNarrowRight className="ml-6" />
        </Link>
      </div>
    </main>
  );
}

export default Home;
