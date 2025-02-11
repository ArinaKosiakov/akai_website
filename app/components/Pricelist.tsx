import { PricesProps } from "@/types/Content";
import { Card } from "flowbite-react";
import Image from "next/image";
import React from "react";

function Pricelist({ prices }: { prices: PricesProps[] }) {
  return (
    <div className="flex w-full flex-col gap-5 md:w-[60] lg:w-[80%] xl:w-full xl:flex-row">
      {prices.map((p, idx) => (
        <Card
          key={idx}
          className="w-full items-center justify-center xl:max-w-sm"
        >
          <div className="flex h-full flex-col items-center justify-start">
            <h5 className="mb-4 text-xl font-medium text-custom_gray-500 dark:text-custom_gray-400">
              {p.title}
            </h5>
            <Image
              alt=""
              height="96"
              src={p.image_url!}
              width="96"
              className="mb-12 shadow-lg"
            />
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
          </div>
        </Card>
      ))}
    </div>
  );
}

export default Pricelist;
