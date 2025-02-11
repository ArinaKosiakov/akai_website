import { PricesProps } from "@/types/Content";
import { Card } from "flowbite-react";
import Link from "next/link";
import React from "react";

function Pricelist({ prices }: { prices: PricesProps[] }) {
  return (
    <div className="flex w-[60%] flex-col gap-5 lg:flex-row">
      {prices.map((p, idx) => (
        <Card key={idx} className="lg:max-w-sm">
          <h5 className="mb-4 text-xl font-medium text-custom_gray-500 dark:text-custom_gray-400">
            {p.title}
          </h5>
          <div className="flex items-baseline justify-center text-gray-900 dark:text-white">
            <span className="text-3xl font-semibold">{p.currency}</span>
            <span className="text-5xl font-extrabold tracking-tight">
              {p.price}
            </span>
          </div>
          <ul className="my-7 space-y-5">
            {p.options?.map((opt, id) => (
              <li key={id} className="flex space-x-3">
                <svg
                  className="h-5 w-5 shrink-0 text-akai-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  {opt}
                </span>
              </li>
            ))}
          </ul>
          {/* <button
            type="button"
            className="inline-flex w-full justify-center rounded-lg bg-akai-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-akai-700"
          >
            <Link href={"/contacts"}>Contact me</Link>
          </button> */}
        </Card>
      ))}
    </div>
  );
}

export default Pricelist;
