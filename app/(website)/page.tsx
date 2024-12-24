"use client";
import { ls } from "../i18n/translations";
import HomepageCarousel from "../components/homepageCarousel";
import { HiArrowNarrowRight } from "react-icons/hi";
import Link from "next/link";

function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-custom_gray-700 pl-[2%] text-xl text-white scrollbar-hide">
      {/* hero section */}
      <div className="mb-12 flex h-fit flex-col items-center justify-center bg-custom_gray-700 pb-3 lg:mb-0">
        <p className="text-center font-eiko text-3xl md:text-4xl lg:text-5xl">
          {ls.homepage.title}
        </p>
        <p className="mt-8 text-center font-eiko text-lg text-white text-opacity-60 md:text-xl lg:text-2xl">
          {ls.homepage.subtitle}
        </p>
      </div>
      {/* view of the main projects */}
      <div className="h-1/3 w-full md:mt-6 md:w-4/5 lg:h-4/5">
        <HomepageCarousel />
      </div>
      <div className="flex w-full justify-end">
        <Link
          href={"/portfolio"}
          className="flex h-10 items-center justify-center rounded-md px-2 text-lg text-white text-opacity-70 hover:cursor-pointer hover:text-opacity-100 md:mt-6"
        >
          {ls.buttons.more}
          <HiArrowNarrowRight className="ml-3 md:ml-6" />
        </Link>
      </div>
    </main>
  );
}

export default Home;
