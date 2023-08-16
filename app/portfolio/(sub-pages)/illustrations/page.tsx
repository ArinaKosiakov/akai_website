import React from "react";
import Image from "next/image";

import Sketch1 from "../../../../public/sketches/01.jpg";
import Sketch4 from "../../../../public/sketches/04.jpg";

function Illustrations() {
  return (
    <div className="grid grid-cols-4 grid-rows-6 gap-3 place-items-stretch h-full">
      <div className=" col-start-1 col-end-2 row-start-1 row-end-2">
        <Image
          className="h-full w-full object-cover"
          src={Sketch1}
          alt="sketch"
        ></Image>
      </div>

      <div className=" col-start-2 col-end-3 row-start-1 row-end-2">
        <Image
          className="h-full w-full object-cover"
          src={Sketch1}
          alt="sketch"
        ></Image>
      </div>

      <div className=" col-start-3 col-end-5 row-start-1 row-end-3">
        <Image
          className="h-full w-full object-cover"
          src={Sketch1}
          alt="sketch"
        ></Image>
      </div>

      <div className=" col-start-1 col-end-3 row-start-2 row-end-4">
        <Image
          className="h-full w-full object-cover"
          src={Sketch1}
          alt="sketch"
        ></Image>
      </div>

      <div className=" col-start-3 col-end-4 ">
        <Image
          className="h-full w-full object-cover"
          src={Sketch1}
          alt="sketch"
        ></Image>
      </div>

      <div className=" col-start-4 ">
        <Image
          className="h-full w-full object-cover"
          src={Sketch1}
          alt="sketch"
        ></Image>
      </div>

      <div className=" col-start-1 col-end-2 row-start-4 row-end-5">
        <Image
          className="h-full w-full object-cover"
          src={Sketch1}
          alt="sketch"
        ></Image>
      </div>

      <div className=" col-start-2 col-end-3 row-start-4 row-end-5">
        <Image
          className="h-full w-full object-cover"
          src={Sketch1}
          alt="sketch"
        ></Image>
      </div>

      <div className=" col-start-3 col-end-5 row-start-4 row-end-6">
        <Image
          className="h-full w-full object-cover"
          src={Sketch1}
          alt="sketch"
        ></Image>
      </div>

      <div className=" col-start-1 col-end-3 row-start-5 row-end-7">
        <Image
          className="h-full w-full object-cover"
          src={Sketch1}
          alt="sketch"
        ></Image>
      </div>

      <div className=" col-start-3 col-end-4 row-start-6">
        <Image
          className="h-full w-full object-cover"
          src={Sketch1}
          alt="sketch"
        ></Image>
      </div>

      <div className=" col-start-4 ">
        <Image
          className="h-full w-full object-cover  row-start-6"
          src={Sketch1}
          alt="sketch"
        ></Image>
      </div>
    </div>
  );
}
export default Illustrations;
