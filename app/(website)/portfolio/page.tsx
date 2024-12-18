import React from "react";
import Link from "next/link";
import CardCarousel from "@/app/components/portfolioCarousel";
import { FaArrowRight } from "react-icons/fa";

import Sketch5 from "../../../public/sketches/01.jpg";
import Sketch4 from "../../../public/sketches/04.jpg";
import Sketch1 from "../../../public/concepts/kiri1.jpg";
import Sketch2 from "../../../public/concepts/kiri_expressions.jpg";

function Portfolio() {
  return (
    <div className="flex h-full flex-col justify-center px-[5%]">
      <div className="mb-24">
        <Link href={"/portfolio/projects"}>
          <div className="mb-6 flex items-center font-eiko">
            <span className="mr-3 text-2xl">Projects</span>
            <FaArrowRight className="mt-[2px]" />
          </div>
        </Link>
        <CardCarousel type="projects" />
      </div>
      <div className="mb-24">
        <Link href={"/portfolio/environments"}>
          <div className="mb-6 flex items-center font-eiko">
            <span className="mr-3 text-2xl">Environments</span>
            <FaArrowRight className="mt-[2px]" />
          </div>
        </Link>
        <CardCarousel type="environments" />
      </div>
      <div className="mb-24">
        <Link href={"/portfolio/sketchbook"}>
          <div className="mb-6 flex items-center font-eiko">
            <span className="mr-3 text-2xl">Sketchbook</span>
            <FaArrowRight className="mt-[2px]" />
          </div>
        </Link>
        <CardCarousel type="sketchbook" />
      </div>
      <div className="mb-24">
        <Link href={"/portfolio/illustrations"}>
          <div className="mb-6 flex items-center font-eiko">
            <span className="mr-3 text-2xl">Illustrations</span>
            <FaArrowRight className="mt-[2px]" />
          </div>
        </Link>
        <CardCarousel type="illustrations" />
      </div>
    </div>
  );
}
export default Portfolio;
