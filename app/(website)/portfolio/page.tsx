import React from "react";
import Link from "next/link";
import CardCarousel from "@/app/components/portfolioSlider";
import { FaArrowRight } from "react-icons/fa";

import src from "../../../public/homepage_imgs/img1.jpg";
import { getCards } from "@/sanity/sanity-utils";

async function Portfolio() {
  const projectCards = await getCards("project", "project");
  const envCards = await getCards("project", "environment");
  const sketchesCards = await getCards("artwork", "sketch");
  const illCards = await getCards("artwork", "illustration");
  const cards = await getCards("artwork", "illustration");

  return (
    <div className="flex h-full flex-col justify-center px-[5%]">
      <div className="mb-24">
        <Link href={"/portfolio/projects"}>
          <div className="mb-6 flex items-center font-eiko">
            <span className="mr-3 text-2xl">Projects</span>
            <FaArrowRight className="mt-[2px]" />
          </div>
        </Link>
        <CardCarousel type="projects" cards={projectCards} />
      </div>
      <div className="mb-24">
        <Link href={"/portfolio/environments"}>
          <div className="mb-6 flex items-center font-eiko">
            <span className="mr-3 text-2xl">Environments</span>
            <FaArrowRight className="mt-[2px]" />
          </div>
        </Link>
        <CardCarousel type="environments" cards={envCards} />
      </div>
      <div className="mb-24">
        <Link href={"/portfolio/sketchbook"}>
          <div className="mb-6 flex items-center font-eiko">
            <span className="mr-3 text-2xl">Sketchbook</span>
            <FaArrowRight className="mt-[2px]" />
          </div>
        </Link>
        <CardCarousel type="sketchbook" cards={sketchesCards} />
      </div>
      <div className="mb-24">
        <Link href={"/portfolio/illustrations"}>
          <div className="mb-6 flex items-center font-eiko">
            <span className="mr-3 text-2xl">Illustrations</span>
            <FaArrowRight className="mt-[2px]" />
          </div>
        </Link>
        <CardCarousel type="illustrations" cards={illCards} />
      </div>
    </div>
  );
}
export default Portfolio;
