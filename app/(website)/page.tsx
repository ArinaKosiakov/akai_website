import { ls } from "../i18n/translations";
import HomepageCarousel from "../components/homepageCarousel";
import { HiArrowNarrowRight } from "react-icons/hi";
import Link from "next/link";
import { getImagesUrl } from "@/sanity/sanity-utils";

async function Home() {
  const imgs = await getImagesUrl();

  return (
    <main className="flex h-full flex-col items-center justify-center text-xl text-white scrollbar-hide lg:pl-[2%]">
      {/* hero section */}
      <div className="flex h-fit flex-col items-center justify-center pb-3 lg:mb-0">
        <p className="text-center font-eiko text-3xl md:text-4xl lg:text-5xl">
          {ls.homepage.title}
        </p>
        <p className="mt-8 text-center font-eiko text-lg text-white text-opacity-60 md:text-xl lg:text-2xl">
          {ls.homepage.subtitle}
        </p>
      </div>
      {/* view of the main projects */}
      <div className="h-1/3 w-full md:mt-6 md:min-h-[430px] md:w-4/5 lg:h-4/5 lg:min-h-0">
        <HomepageCarousel imgs={imgs} />
      </div>
      <div className="mr-10 flex w-full justify-end">
        <Link
          href={"/portfolio"}
          className="flex h-10 items-center justify-center rounded-md px-2 text-lg text-white text-opacity-70 hover:cursor-pointer hover:text-opacity-100 md:mt-6"
        >
          {ls.buttons.more}
          <HiArrowNarrowRight className="ml-2 lg:ml-6" />
        </Link>
      </div>
    </main>
  );
}

export default Home;
