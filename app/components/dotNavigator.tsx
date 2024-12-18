import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type DotNavigatorProp = {
  src_arr: any[];
  onNavigate?: (index: number) => void;
};

function DotNavigator({ src_arr, onNavigate }: DotNavigatorProp) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [activeEvent, setActiveEvent] = useState<number>(0);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleNavigate = (index: number) => {
    if (currentIndex === 0 || currentIndex === src_arr.length - 1) {
      setIsDisabled(true);
    }
    if (index >= 0 && index < src_arr.length) {
      setCurrentIndex(index);
      if (onNavigate) {
        onNavigate(index);
      }
    }
    console.log(currentIndex);
    console.log(isDisabled);
    setActiveEvent(index);
  };

  return (
    <div className="flex w-full flex-row items-center justify-between md:w-[70%] lg:w-[40%] xl:w-[30%]">
      <button
        disabled={isDisabled}
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
            backgroundColor: index === activeEvent ? "#CB4949" : "",
            border: index === activeEvent ? "#CB4949" : "",
          }}
        ></div>
      ))}

      <button
        disabled={isDisabled}
        onClick={() => handleNavigate(currentIndex + 1)}
      >
        <FaChevronRight />
      </button>
    </div>
  );
}

export default DotNavigator;
