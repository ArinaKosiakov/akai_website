"use client";

import { HiCalendar } from "react-icons/hi";
import { Chrono } from "react-chrono";

function TimelineCustom() {
  // const items = [
  //   {
  //     date: "17 December, 2023",
  //     cardTitle: "Graduation from University of Padua",
  //     cardSubTitle:
  //       "Obtained my Master's Degree in ICT for Internet and Multimedia",
  //   },
  //   {
  //     date: "28 August, 2024",
  //     cardTitle: "Master in Concept art",
  //     cardSubTitle: "Completed the master in Concept art at BigRock accademy",
  //   },
  //   {
  //     date: "September, 2024",
  //     cardTitle: "Freelance artist",
  //     cardSubTitle: "Started my career as a frellance artist",
  //   },
  // ];
  const items = [
    {
      title: "Graduation from University of Padua, Dec 2023",
    },
    {
      title: "Master in Concept art, Aug 2024",
    },
    {
      title: "Freelance artist, Sep 2024 ",
    },
  ];

  return (
    <div className="mt-10">
      <Chrono
        items={items}
        mode={"HORIZONTAL"}
        showSingle
        cardLess
        disableToolbar
        fontSizes={{ title: "0.8rem" }}
        theme={{
          primary: "rgba(203, 73, 73, 0.75)",
          secondary: "rgba(203, 73, 73)",
          titleColor: "rgba(255,255,255,0.3)",
          titleColorActive: "#fff",
          toolbarBgColor: "none",
          toolbarBtnBgColor: "none",
          cardBgColor: "#262627",
          cardTitleColor: "rgba(255,255,255,0.7)",
          cardSubtitleColor: "rgba(255,255,255,0.7)",
        }}
        classNames={{ card: "my-card" }}
      ></Chrono>
    </div>
  );
  // <div className="relative mt-3 flex h-52 w-full items-center justify-center scrollbar-hide">
  //   <div className="flex flex-row gap-5">
  //     <div className="flex -translate-y-12 flex-col items-center">
  //       <div className="mb-3 flex flex-col text-center">
  //         <span className="text-sm">Graduation at University of Padua</span>
  //         <span>2019-2023</span>
  //       </div>
  //       <span className="h-0.5 w-7 rotate-90 bg-gradient-to-r from-white/5 to-white/50"></span>
  //     </div>
  //     <div className="flex translate-y-12 flex-col items-center">
  //       <span className="h-0.5 w-7 -rotate-90 bg-gradient-to-r from-white/5 to-white/50"></span>
  //       <div className="mt-3 flex flex-col text-center">
  //         <span className="text-sm">
  //           Master in Concept art at BigRock school
  //         </span>
  //         <span>2024</span>
  //       </div>
  //     </div>
  //   </div>
  //   <span className="absolute my-auto h-0.5 w-full bg-gradient-to-r from-white/5 via-white/50 to-white/5"></span>
  // </div>
}

export default TimelineCustom;
