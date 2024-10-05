"use client";
import { YOUTUBE } from "@/constants/links";
import BlueButton from "@/demo/BlueButton";
import { YoutubeSlides } from "@/demo/YoutubeSlides";
import React from "react";

const CarouselFe = () => {
  const handleRoute = () => {
    window.open(YOUTUBE, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex flex-col gap-6 p-6 bg-custom-gradient dark:bg-neutral-800/50 items-center py-16 relative text-white">
      <div className="absolute top-0 right-0 w-36 h-1/4 bg-gray-200/20 rounded-bl-full "></div>

      <div className="flex flex-col gap-2 items-center">
        <p className="text-4xl font-extrabold">Kids creativity</p>
        <p className="text-sm font-bold" style={{ letterSpacing: "0.09em" }}>
          Creative projects done by some of our kids
        </p>
      </div>
      <div>
        <YoutubeSlides />
      </div>
      <div>
        <BlueButton name="SEE MORE" type="button" onClick={handleRoute} />
      </div>
      <div className="absolute bottom-0 left-0 w-36 h-1/4 bg-gray-200/20 rounded-tr-full "></div>
    </div>
  );
};

export default CarouselFe;
