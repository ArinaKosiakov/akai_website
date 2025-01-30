import React from "react";
import Link from "next/link";
import CardCarousel from "@/app/components/portfolioSlider";
import { FaArrowRight } from "react-icons/fa";

import { createClient, defineQuery } from "next-sanity";
import { sanityFetch } from "../../(sanity)/live";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import imageUrlBuilder from "@sanity/image-url";
import { CardData } from "@/types/Content";

import src from "../../../public/homepage_imgs/img1.jpg";

const IMG_QUERY = defineQuery(
  `*[_type=="artwork" && category=="sketch"]{title,category,description,year,image}`,
);

const client = createClient({
  projectId: "cly2k8p2",
  dataset: "production",
  apiVersion: "2021-10-21",
});

const { projectId, dataset } = client.config();

const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

async function Portfolio() {
  const { data: events } = await sanityFetch({ query: IMG_QUERY });
  console.log(events);

  const cards2 = events.map((event) => {
    const url = urlFor(event.image)?.url();
    const card: CardData = {
      title: event.title,
      description: event.description,
      src: url,
    };
    return card;
  });
  console.log(cards2);

  const cards = [
    {
      title: "Card 1",
      description: "Description for card 1",
      src: src,
    },
    {
      title: "Card 2",
      description: "Description for card 2",
      src: src,
    },
    {
      title: "Card 3",
      description: "Description for card 3",
      src: src,
    },
    {
      title: "Card 4",
      description: "Description for card 4",
      src: src,
    },
  ];

  return (
    <div className="flex h-full flex-col justify-center px-[5%]">
      <div className="mb-24">
        <Link href={"/portfolio/projects"}>
          <div className="mb-6 flex items-center font-eiko">
            <span className="mr-3 text-2xl">Projects</span>
            <FaArrowRight className="mt-[2px]" />
          </div>
        </Link>
        <CardCarousel type="projects" cards={cards} />
      </div>
      <div className="mb-24">
        <Link href={"/portfolio/environments"}>
          <div className="mb-6 flex items-center font-eiko">
            <span className="mr-3 text-2xl">Environments</span>
            <FaArrowRight className="mt-[2px]" />
          </div>
        </Link>
        <CardCarousel type="environments" cards={cards} />
      </div>
      <div className="mb-24">
        <Link href={"/portfolio/sketchbook"}>
          <div className="mb-6 flex items-center font-eiko">
            <span className="mr-3 text-2xl">Sketchbook</span>
            <FaArrowRight className="mt-[2px]" />
          </div>
        </Link>
        <CardCarousel type="sketchbook" cards={cards2} />
      </div>
      <div className="mb-24">
        <Link href={"/portfolio/illustrations"}>
          <div className="mb-6 flex items-center font-eiko">
            <span className="mr-3 text-2xl">Illustrations</span>
            <FaArrowRight className="mt-[2px]" />
          </div>
        </Link>
        <CardCarousel type="illustrations" cards={cards} />
      </div>
    </div>
  );
}
export default Portfolio;
