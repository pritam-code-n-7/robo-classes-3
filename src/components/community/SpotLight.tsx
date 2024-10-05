"use client";
import { CHRIS } from "@/constants/Images";
import { SPOTLIGHT } from "@/constants/links";
import { ButtonDemo } from "@/demo/ButtonDemo";
import Image from "next/image";
import React from "react";

const SpotLight = () => {
  return (
    <div className="flex justify-center text-white px-28 py-14 gap-10 relative bg-custom-gradient">
      <div className="absolute top-0 right-0 w-32 h-1/5 bg-gray-200/30 rounded-bl-full"></div>
      <div className="flex flex-row gap-96">
        <div className="flex flex-col justify-center gap-6">
          <p className="text-4xl font-bold mb-2">Student spotlight</p>
          <div className="flex flex-col gap-2">
            <p className="font-bold text-lg">Chris Smith, 7 years</p>
            <p className="text-lg font-thin">Winner: WeDo 2.0 competition</p>
          </div>
          <div>
            <ButtonDemo
              name="View reel"
              type="button"
              className="rounded-full px-9 py-6 bg-white text-sky-500
    hover:bg-sky-500 hover:text-white shadow-md text-lg dark:bg-sky-500"
              onClick={() =>
                window.open(SPOTLIGHT, "_blank", "noopener,noreferrer")
              }
            />
          </div>
        </div>
        <div>
          <Image src={CHRIS} alt="winner image" height={444} width={420} />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-32 h-1/5 bg-gray-200/30 rounded-tr-full"></div>
    </div>
  );
};

export default SpotLight;
