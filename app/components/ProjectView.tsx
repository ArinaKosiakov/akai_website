import React from "react";
import { TfiArrowRight, TfiArrowTopRight } from "react-icons/tfi";
import EmblaCarousel from "./EmblaCarousel";

//need a JSON file and different folders with the projects

type ProjectViewProp = {
  title: string;
  posts: string[];
};

function ProjectView(props: ProjectViewProp) {
  return (
    <>
      <div className="h-[30vh]">
        <div className="flex flex-row items-center">
          <h1 className="font-eiko text-5xl">{props.title}</h1>
          <span className="ml-3 mt-3 flex items-center justify-center text-2xl">
            <TfiArrowRight />
          </span>
        </div>
        <EmblaCarousel />
      </div>
    </>
  );
}

export default ProjectView;
