import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type DotNavigatorProp = {
  src_arr: any[];
  onNavigate?: (index: number) => void;
};

function DotNavigator({ src_arr, onNavigate }: DotNavigatorProp) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [canMoveLeft, setCanMoveLeft] = useState(true);
  const [canMoveRight, setCanMoveRight] = useState(true);

  const handleNavigate = (index: number) => {
    if (index === 0) {
      setCanMoveLeft(false);
    }
    if (index === src_arr.length - 1) {
      setCanMoveRight(false);
    }
    if (index >= 0 && index < src_arr.length) {
      if (index > 0) {
        setCanMoveLeft(true);
      }

      setCurrentIndex(index);
      console.log(currentIndex);

      if (onNavigate) {
        onNavigate(index);
      }
    }
  };

  return (
    <div className="flex w-full flex-row items-center justify-between md:w-[70%] lg:w-[40%] xl:w-[30%]">
      <button
        disabled={!canMoveLeft}
        onClick={() => handleNavigate(currentIndex - 1)}
      >
        <FaChevronLeft />
      </button>

      {src_arr.map((item, index) => (
        <div
          key={index}
          onClick={() => handleNavigate(index)}
          className="h-3 w-3 rounded-full border border-white bg-custom_gray-700 hover:cursor-pointer hover:bg-akai-500"
          style={{
            backgroundColor: index === currentIndex ? "#CB4949" : "",
            border: index === currentIndex ? "#CB4949" : "",
          }}
        ></div>
      ))}

      <button
        disabled={!canMoveRight}
        onClick={() => handleNavigate(currentIndex + 1)}
      >
        <FaChevronRight />
      </button>
    </div>
  );
}

export default DotNavigator;
