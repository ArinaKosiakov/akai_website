"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import env from "../../public/homepage_imgs/env.jpg";
import { Carousel } from "@mantine/carousel";

//map functions to display the thumbnail and title for each piece/project
const data = [
  { title: "1", source: env },
  { title: "2", source: env },
  { title: "3", source: env },
  { title: "4", source: env },
  { title: "5", source: env },
  { title: "5", source: env },
];

function EmblaCarousel() {
  return (
    <>
      <Carousel withIndicators height={200}>
        {data.map((item, index) => (
          <Carousel.Slide key={index}>
            <ProjectCard title={item.title} img_src={item.source} />
          </Carousel.Slide>
        ))}
      </Carousel>
    </>
  );
}

export default EmblaCarousel;
