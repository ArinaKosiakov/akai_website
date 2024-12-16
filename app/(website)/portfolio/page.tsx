import React from "react";
import Image from "next/image";
import CardCarousel from "@/app/components/carousel";

import Sketch5 from "../../../public/sketches/01.jpg";
import Sketch4 from "../../../public/sketches/04.jpg";
import Sketch1 from "../../../public/concepts/kiri1.jpg";
import Sketch2 from "../../../public/concepts/kiri_expressions.jpg";

function Concepts() {
  return (
    <div className="flex h-full flex-col justify-center">
      <div className="mb-24">
        <div className="mb-6 font-eiko text-2xl">Projects</div>
        <CardCarousel type="projects" cards={} />
      </div>
      <div className="mb-24">
        <div className="mb-6 font-eiko text-2xl">Environments</div>
        <CardCarousel type="environments" />
      </div>
      <div className="mb-24">
        <div className="mb-6 font-eiko text-2xl">Sketchbook</div>
        <CardCarousel type="sketchbook" />
      </div>
      <div className="mb-24">
        <div className="mb-6 font-eiko text-2xl">Illustrations</div>
        <CardCarousel type="illustrations" />
      </div>
    </div>
  );
}
export default Concepts;
