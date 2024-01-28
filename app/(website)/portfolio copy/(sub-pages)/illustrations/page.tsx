import React from "react";
import Image from "next/image";

import Sketch1 from "../../../../../public/illustration/3.jpg";
import Sketch2 from "../../../../../public/illustration/2.jpg";
import Sketch3 from "../../../../../public/illustration/1.jpg";
import Sketch4 from "../../../../../public/illustration/aiko.jpg";
import Sketch5 from "../../../../../public/illustration/rework.jpg";
import Sketch6 from "../../../../../public/illustration/gwen.jpg";
import Sketch7 from "../../../../../public/illustration/spider.jpg";
import Sketch8 from "../../../../../public/illustration/sam2.jpg";
import Sketch9 from "../../../../../public/illustration/sam.jpg";
import Sketch10 from "../../../../../public/illustration/witch_mushrooms.jpg";
import Sketch11 from "../../../../../public/illustration/witch.jpg";
import Sketch12 from "../../../../../public/illustration/wednsday.jpg";

function Illustrations() {
  return (
    <div className="grid h-full grid-cols-4 grid-rows-6 place-items-stretch gap-3">
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
          src={Sketch3}
          alt="sketch"
        ></Image>
      </div>

      <div className=" col-start-3 col-end-5 row-start-1 row-end-3">
        <Image
          className="h-full w-full object-cover"
          src={Sketch2}
          alt="sketch"
        ></Image>
      </div>

      <div className=" col-start-1 col-end-3 row-start-2 row-end-4">
        <Image
          className="h-full w-full object-cover"
          src={Sketch6}
          alt="sketch"
        ></Image>
      </div>

      <div className=" col-start-3 col-end-4 ">
        <Image
          className="h-full w-full object-cover"
          src={Sketch8}
          alt="sketch"
        ></Image>
      </div>

      <div className=" col-start-4 ">
        <Image
          className="h-full w-full object-cover"
          src={Sketch4}
          alt="sketch"
        ></Image>
      </div>

      <div className=" col-start-1 col-end-2 row-start-4 row-end-5">
        <Image
          className="h-full w-full object-cover"
          src={Sketch7}
          alt="sketch"
        ></Image>
      </div>

      <div className=" col-start-2 col-end-3 row-start-4 row-end-5">
        <Image
          className="h-full w-full object-cover"
          src={Sketch5}
          alt="sketch"
        ></Image>
      </div>

      <div className=" col-start-3 col-end-5 row-start-4 row-end-6">
        <Image
          className="h-full w-full object-cover"
          src={Sketch9}
          alt="sketch"
        ></Image>
      </div>

      <div className=" col-start-1 col-end-3 row-start-5 row-end-7">
        <Image
          className="h-full w-full object-cover"
          src={Sketch12}
          alt="sketch"
        ></Image>
      </div>

      <div className=" col-start-3 col-end-4 row-start-6">
        <Image
          className="h-full w-full object-cover"
          src={Sketch11}
          alt="sketch"
        ></Image>
      </div>

      <div className=" col-start-4 ">
        <Image
          className="row-start-6 h-full w-full  object-cover"
          src={Sketch10}
          alt="sketch"
        ></Image>
      </div>
    </div>
  );
}
export default Illustrations;
