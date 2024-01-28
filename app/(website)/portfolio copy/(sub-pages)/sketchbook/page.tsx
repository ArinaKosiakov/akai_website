import React from "react";
import Image from "next/image";

import Sketch1 from "../../../../../public/sketches/01.jpg";
import Sketch2 from "../../../../../public/sketches/02.jpg";
import Sketch3 from "../../../../../public/sketches/03.jpg";
import Sketch4 from "../../../../../public/sketches/04.jpg";
import Sketch5 from "../../../../../public/sketches/05.jpg";
import Sketch6 from "../../../../../public/sketches/06.jpg";
import Sketch7 from "../../../../../public/sketches/07.jpg";
import Sketch8 from "../../../../../public/sketches/08.jpg";
import Sketch9 from "../../../../../public/sketches/09.jpg";
import Sketch10 from "../../../../../public/sketches/10.jpg";
import Sketch11 from "../../../../../public/sketches/11.jpg";
import Sketch12 from "../../../../../public/sketches/12.jpg";
import Sketch13 from "../../../../../public/sketches/13.jpg";
import Sketch14 from "../../../../../public/sketches/14.jpg";
import Sketch15 from "../../../../../public/sketches/15.jpg";
import Sketch16 from "../../../../../public/sketches/16.jpg";
import Sketch17 from "../../../../../public/sketches/17.jpg";
import Sketch18 from "../../../../../public/sketches/18.jpg";
import Sketch19 from "../../../../../public/sketches/19.jpg";

function Sketchbook() {
  return (
    <div className="grid h-full grid-cols-3 grid-rows-5 place-items-stretch  gap-3">
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
          src={Sketch3}
          alt="sketch"
        ></Image>
      </div>
      <div className=" col-start-1 col-end-4">
        <Image
          className="h-full w-full object-cover"
          src={Sketch16}
          alt="sketch"
        ></Image>
      </div>
      <div className=" col-start-1 col-end-2 ">
        <Image
          className="h-full w-full object-cover"
          src={Sketch17}
          alt="sketch"
        ></Image>
      </div>
      <div className=" col-start-2 col-end-3">
        <Image
          className="h-full w-full object-cover"
          src={Sketch18}
          alt="sketch"
        ></Image>
      </div>
      <div className=" col-start-3 col-end-4">
        <Image
          className="h-full w-full object-cover"
          src={Sketch19}
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
          src={Sketch6}
          alt="sketch"
        ></Image>
      </div>
      <div className=" col-start-3 col-end-4">
        <Image
          className="h-full w-full object-cover"
          src={Sketch7}
          alt="sketch"
        ></Image>
      </div>
      <div className=" col-start-1 col-end-4">
        <Image
          className="h-full w-full object-cover"
          src={Sketch8}
          alt="sketch"
        ></Image>
      </div>
      <div className=" col-start-1 col-end-2">
        <Image
          className="h-full w-full object-cover"
          src={Sketch9}
          alt="sketch"
        ></Image>
      </div>
      <div className=" col-start-2 col-end-3">
        <Image
          className="h-full w-full object-cover"
          src={Sketch10}
          alt="sketch"
        ></Image>
      </div>
      <div className=" col-start-3 col-end-4">
        <Image
          className="h-full w-full object-cover"
          src={Sketch11}
          alt="sketch"
        ></Image>
      </div>
      <div className=" col-start-1 col-end-4">
        <Image
          className="h-full w-full object-cover"
          src={Sketch12}
          alt="sketch"
        ></Image>
      </div>
      <div className=" col-start-1 col-end-2">
        <Image
          className="h-full w-full object-cover"
          src={Sketch13}
          alt="sketch"
        ></Image>
      </div>
      <div className=" col-start-2 col-end-3">
        <Image
          className="h-full w-full object-cover"
          src={Sketch14}
          alt="sketch"
        ></Image>
      </div>
      <div className=" col-start-3 col-end-4">
        <Image
          className="h-full w-full object-cover"
          src={Sketch15}
          alt="sketch"
        ></Image>
      </div>
    </div>
  );
}
export default Sketchbook;
