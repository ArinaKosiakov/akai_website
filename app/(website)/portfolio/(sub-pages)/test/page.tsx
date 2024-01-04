import React from "react";
import Image from "next/image";
import { getProjects } from "@/sanity/sanity-utils";

export default async function Test() {
  const projects = await getProjects();

  return (
    <div className="grid h-full grid-cols-4 grid-rows-6 place-items-stretch gap-3">
      {projects.map((project) => (
        <div key={project.name}>
          <Image
            src={project.image}
            width={300}
            height={500}
            alt={project.alt}
          />
        </div>
      ))}
    </div>
  );
}
