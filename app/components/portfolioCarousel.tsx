"use client";

import React, { FC, RefObject, useEffect, useState } from "react";
import { Card } from "flowbite-react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image, { StaticImageData } from "next/image";
import bg from "../../public/homepage_imgs/img1.jpg";
import Link from "next/link";

type CardData = {
  title: string;
  description: string;
  src: StaticImageData;
  id?: string;
};

type CardCarouselProps = {
  type: string;
  cards?: CardData[];
};

const CardCarousel: FC<CardCarouselProps> = ({ type }) => {
  const carouselRef: RefObject<HTMLDivElement> = React.useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const cards: CardData[] = [
    {
      title: "Card 1",
      description: "Description for card 1",
      src: bg,
    },
    {
      title: "Card 2",
      description: "Description for card 2",
      src: bg,
    },
    {
      title: "Card 3",
      description: "Description for card 3",
      src: bg,
    },
    {
      title: "Card 4",
      description: "Description for card 4",
      src: bg,
    },
    {
      title: "Card 5",
      description: "Description for card 4",
      src: bg,
    },
    {
      title: "Card 6",
      description: "Description for card 4",
      src: bg,
      id: "",
    },
  ];
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };
  useEffect(() => {
    if (carouselRef.current) {
      handleScroll();
      carouselRef.current.addEventListener("scroll", handleScroll);
      return () => {
        carouselRef.current?.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div className="relative flex w-full justify-center">
      {/* Left Navigation Button */}
      <button
        className={`absolute left-0 z-10 flex h-full w-8 items-center justify-center bg-custom_gray-700 bg-opacity-30 p-2 backdrop-blur-sm lg:w-[3%] ${!canScrollLeft ? "opacity-0" : ""}`}
        onClick={scrollLeft}
        disabled={!canScrollLeft}
      >
        <FaChevronLeft />
      </button>
      {/* Card Container */}
      <div
        ref={carouselRef}
        className="no-scrollbar flex w-full gap-4 overflow-x-auto scroll-smooth px-12"
        style={{ scrollBehavior: "smooth" }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="min-w-[150px] md:min-w-[200px] lg:min-w-[300px]"
          >
            <Card
              className="border-none"
              renderImage={() => (
                <Image width={500} height={250} src={card.src} alt="image 1" />
              )}
              href={`/portfolio/${type}/#${index}`}
              // href={`/portfolio/illustrations`}
            >
              {/* <Image src={card.src} alt="image" width={500} height={2500} /> */}
              <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {card.title}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {card.description}
              </p>
            </Card>
          </div>
        ))}
      </div>
      {/* Right Navigation Button */}
      <button
        className={`absolute right-0 z-10 flex h-full w-8 items-center justify-center bg-custom_gray-700 bg-opacity-30 p-2 backdrop-blur-sm lg:w-[3%] ${!canScrollRight ? "opacity-0" : ""}`}
        onClick={scrollRight}
        disabled={!canScrollRight}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default CardCarousel;

// Usage Example:
// import CardCarousel from './CardCarousel';
// const cards: CardData[] = [
//   { title: 'Card 1', description: 'Description for card 1' },
//   { title: 'Card 2', description: 'Description for card 2' },
//   { title: 'Card 3', description: 'Description for card 3' },
//   { title: 'Card 4', description: 'Description for card 4' },
// ];
// <CardCarousel cards={cards} />;
