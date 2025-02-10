"use client";
import { getCommissions } from "@/sanity/sanity-utils";
import { ReviewProps } from "@/types/Content";
import { Card } from "flowbite-react";
import Image from "next/image";
import React from "react";
import Slider from "react-infinite-logo-slider";

function ReviewSlider({ reviews }: { reviews: ReviewProps[] }) {
  return (
    <Slider
      pauseOnHover={true}
      width="500px"
      blurBorders={true}
      blurBorderColor={"#3f4041"}
    >
      {reviews.map((r, idx) => (
        <Slider.Slide key={idx}>
          <Card className="w-[300px]">
            <div className="flex flex-col items-center pb-10">
              <Image
                alt=""
                height="96"
                src={r.avatar_url!}
                width="96"
                className="mb-3 rounded-full shadow-lg"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                {r.name}
              </h5>
              <span className="h-[100px] text-sm text-gray-500 dark:text-gray-400">
                {r.review}
              </span>
              {/* <div className="mt-4 flex space-x-3 lg:mt-6">
                <Image
                  alt=""
                  height="96"
                  src={r.image_url!}
                  width="96"
                  className="mb-3 shadow-lg"
                />
              </div> */}
            </div>
          </Card>
        </Slider.Slide>
      ))}
    </Slider>
  );
}

export default ReviewSlider;
