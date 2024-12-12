import React from "react";
import Image from "next/image";
import img from "../../../public/illustration/1.jpg";

import { TfiArrowRight } from "react-icons/tfi";
import { TfiArrowTopRight } from "react-icons/tfi";

import { title } from "process";
import ProjectView from "@/app/components/ProjectView";

//map function to show all the different folders (characters,environments, projects, illustrations, sketchbook)

function Concepts() {
  return (
    <div className="flex h-[100vh] w-full flex-col justify-start gap-8">
      <div className="mt-20">
        <ProjectView title="Characters" posts={["gravity fallout"]} />
      </div>
      <div className="mt-40">
        <ProjectView title="Characters" posts={["gravity fallout"]} />
      </div>
    </div>
  );
}
export default Concepts;
