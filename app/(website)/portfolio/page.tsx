import React from "react";
import PortfolioPanel from "@/app/components/portfolioPanel";
import { getCards } from "@/sanity/sanity-utils";

async function Portfolio() {
  const sketchbookCards = await getCards("artwork", "sketch");
  const personalWorkCards = await getCards("artwork", "illustration");
  const commissionsCards = await getCards("project", "project");
  const booksCards = await getCards("project", "environment"); // You may need to create a new schema for books

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Portfolio Header
      <div className="mb-16 text-center">
        <h1 className="mb-4 font-eiko text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
          Portfolio
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
          Explore my creative works across different mediums and styles
        </p>
      </div> */}

      {/* Portfolio Sections */}
      <div className="space-y-8">
        <PortfolioPanel
          type="sketchbook"
          cards={sketchbookCards}
          title="Sketchbook"
        />

        <PortfolioPanel
          type="personal-work"
          cards={personalWorkCards}
          title="Personal Work"
        />

        <PortfolioPanel
          type="commissions"
          cards={commissionsCards}
          title="Commissions"
        />

        <PortfolioPanel type="my-books" cards={booksCards} title="My Books" />
      </div>
    </div>
  );
}
export default Portfolio;
