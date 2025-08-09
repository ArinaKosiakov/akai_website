"use client";

import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { CardData } from "../../types/Content";

interface PortfolioPanelProps {
  type: string;
  cards: CardData[];
  title: string;
}

const PortfolioPanel: FC<PortfolioPanelProps> = ({ type, cards, title }) => {
  // Get the first card for the panel image
  const panelImage = cards[0];

  if (!panelImage) {
    return null;
  }

  return (
    <Link href={`/portfolio/${type}`} className="group block">
      <div className="relative h-48 w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 md:h-64 lg:h-80">
        {/* Background Image */}
        <Image
          src={
            panelImage.src_thumb || (panelImage.src && panelImage.src[0]) || ""
          }
          alt={title}
          fill
          className="object-cover grayscale filter transition-all duration-700 ease-in-out group-hover:grayscale-0"
          sizes="100vw"
          priority
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 group-hover:bg-opacity-20" />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h2 className="mb-2 transform font-eiko text-3xl font-bold text-white transition-transform duration-300 group-hover:scale-105 md:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="translate-y-2 transform text-lg text-gray-200 opacity-0 transition-opacity duration-300 group-hover:translate-y-0 group-hover:opacity-100 md:text-xl">
              {cards.length} {cards.length === 1 ? "item" : "items"}
            </p>
          </div>
        </div>

        {/* Hover Arrow */}
        <div className="absolute bottom-6 right-6 translate-x-2 transform opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white bg-opacity-20 backdrop-blur-sm">
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PortfolioPanel;
