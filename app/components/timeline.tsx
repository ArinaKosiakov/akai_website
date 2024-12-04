"use client";
import { title } from "process";
import { Timeline } from "flowbite-react";
import { HiCalendar } from "react-icons/hi";

function TimelineCustom() {
  const events = [
    {
      year: "October 2019 - December 2023",
      title: "Master's degree in Information engineering, University of Padua",
    },
    {
      year: "March 2024 - August 2024",
      title: "Master in Concept Art, BigRock school",
    },
    {
      year: "March 2024 - August 2024",
      title: "Master in Concept Art, BigRock school",
    },
    {
      year: "March 2024 - August 2024",
      title: "Master in Concept Art, BigRock school",
    },
  ];

  return (
    <div className="overflow-x">
      <Timeline horizontal>
        {events.map((event, key) => (
          <Timeline.Item key={key}>
            <Timeline.Point icon={HiCalendar} />
            <Timeline.Content>
              <Timeline.Time>{event.year}</Timeline.Time>
              <Timeline.Title>{event.title}</Timeline.Title>
            </Timeline.Content>
          </Timeline.Item>
        ))}
      </Timeline>
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
