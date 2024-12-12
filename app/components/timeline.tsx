"use client";
import React, { useState } from "react";
import { ls } from "../i18n/translations";

type Event = {
  id: number;
  date: string;
  title: string;
  content: string;
};

interface HorizontalTimelineProps {
  styles: string;
}

const HorizontalTimeline: React.FC<HorizontalTimelineProps> = ({ styles }) => {
  const events: Event[] = [
    {
      id: 0,
      date: "Dec 2023",
      title: ls.events[0].title,
      content: ls.events[0].content,
    },
    {
      id: 1,
      date: "Aug 2024",
      title: ls.events[1].title,
      content: ls.events[1].content,
    },
    {
      id: 2,
      date: "Sep 2024",
      title: ls.events[2].title,
      content: ls.events[2].content,
    },
  ];
  const [activeEvent, setActiveEvent] = useState<number>(0);

  const handleDotClick = (id: number) => {
    setActiveEvent(id);
  };

  const handlePrevious = () => {
    const prevEvent = Math.max(activeEvent - 1, 0);
    setActiveEvent(prevEvent);
  };

  const handleNext = () => {
    const nextEvent = Math.min(activeEvent + 1, events.length - 1);
    setActiveEvent(nextEvent);
  };

  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center text-center">
      <div className="flex w-full items-center justify-center">
        <button onClick={handlePrevious} disabled={activeEvent === 0}>
          {"<"}
        </button>
        <div className="relative mx-3 h-[2px] w-4/5 bg-white">
          <div className="absolute -top-[6px] flex w-full justify-around">
            {events.map((event, index) => (
              <div
                key={event.id}
                className="flex cursor-pointer justify-items-center"
              >
                {/* dot */}
                <div
                  key={event.id}
                  onClick={() => handleDotClick(index)}
                  className="h-4 w-4 rounded-full border border-white bg-custom_gray-700 hover:bg-akai-500"
                  style={{
                    backgroundColor: index === activeEvent ? "#CB4949" : "",
                    border: index === activeEvent ? "#CB4949" : "",
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={handleNext}
          disabled={activeEvent === events.length - 1}
        >
          {">"}
        </button>
      </div>
      <div className="mt-10 min-h-24 w-auto max-w-[75%] border-l border-akai-500 px-7 py-3">
        <div>
          {events[activeEvent].date} - {events[activeEvent].title}
        </div>
        <div className="text-white text-opacity-50">
          {events[activeEvent].content}
        </div>
      </div>
    </div>
  );
};

export default HorizontalTimeline;
