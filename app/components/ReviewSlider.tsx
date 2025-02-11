"use client";
import { ReviewProps } from "@/types/Content";
import { Card } from "flowbite-react";
import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-infinite-logo-slider";

function ReviewSlider({ reviews }: { reviews: ReviewProps[] }) {
  const [expandedReviews, setExpandedReviews] = useState<{
    [key: number]: boolean;
  }>({});

  const toggleExpand = (index: number) => {
    setExpandedReviews((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle the state for the specific review
    }));
  };

  const [visible, setVisible] = useState(false);

  return (
    <div>
      {!visible ? (
        <div className="flex flex-row items-center">
          <div className="text-custom_gray-300">
            Don&apos;t know if you should trust me? Take a look on what my
            clients think!
          </div>
          <button
            onClick={() => setVisible(!visible)}
            className="ml-3 h-6 w-40 rounded-md bg-akai-700 text-sm hover:bg-akai-500"
          >
            show me
          </button>
        </div>
      ) : (
        <div className="mt-10">
          {/* <button
            onClick={() => setVisible(!visible)}
            className="mb-3 ml-3 h-6 w-40 rounded-md bg-akai-700 text-sm hover:bg-akai-500"
          >
            close
          </button> */}
          <Slider
            pauseOnHover={true}
            width="400px"
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
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {expandedReviews[idx]
                        ? r.review
                        : `${r.review.substring(0, 50)}... `}
                      {r.review.length > 50 && (
                        <button
                          className="ml-2 text-akai-500 hover:underline"
                          onClick={() => toggleExpand(idx)}
                        >
                          {expandedReviews[idx] ? "Read less" : "Read more"}
                        </button>
                      )}
                    </span>
                  </div>
                </Card>
              </Slider.Slide>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
}

export default ReviewSlider;
