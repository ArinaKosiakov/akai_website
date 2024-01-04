import React from "react";
import Image from "next/image";

import Sketch5 from "../../../../../public/sketches/01.jpg";
import Sketch4 from "../../../../../public/sketches/04.jpg";
import Sketch1 from "../../../../../public/concepts/kiri1.jpg";
import Sketch2 from "../../../../../public/concepts/kiri_expressions.jpg";

function Concepts() {
  return (
    <div className="grid h-full grid-cols-3 grid-rows-5 place-items-stretch gap-3">
      <div className=" col-start-1 col-end-2 ">
        <Image
          className="h-full w-full object-cover"
          src={Sketch1}
          alt="sketch"
        ></Image>
      </div>
      <div className=" col-start-2 col-end-3">
        <Image
          className="h-full w-full object-cover"
          src={Sketch2}
          alt="sketch"
        ></Image>
      </div>
      <div className=" col-start-3 col-end-4">
        <Image
          className="h-full w-full object-cover"
          src={Sketch5}
          alt="sketch"
        ></Image>
      </div>
      <div className=" col-start-1 col-end-4">
        <Image
          className="h-full w-full object-cover"
          src={Sketch4}
          alt="sketch"
        ></Image>
      </div>
      <div className=" col-start-1 col-end-2">
        <Image
          className="h-full w-full object-cover"
          src={Sketch5}
          alt="sketch"
        ></Image>
      </div>
      <div className=" col-start-2 col-end-3">
        <Image
          className="h-full w-full object-cover"
          src={Sketch5}
          alt="sketch"
        ></Image>
      </div>
      <div className=" col-start-3 col-end-4">
        <Image
          className="h-full w-full object-cover"
          src={Sketch5}
          alt="sketch"
        ></Image>
      </div>
      <div className=" col-start-1 col-end-4">
        <Image
          className="h-full w-full object-cover"
          src={Sketch4}
          alt="sketch"
        ></Image>
      </div>
      <div className=" col-start-1 col-end-2">
        <Image
          className="h-full w-full object-cover"
          src={Sketch5}
          alt="sketch"
        ></Image>
      </div>
      <div className=" col-start-2 col-end-3">
        <Image
          className="h-full w-full object-cover"
          src={Sketch5}
          alt="sketch"
        ></Image>
      </div>
      <div className=" col-start-3 col-end-4">
        <Image
          className="h-full w-full object-cover"
          src={Sketch5}
          alt="sketch"
        ></Image>
      </div>
    </div>
  );
}
export default Concepts;
