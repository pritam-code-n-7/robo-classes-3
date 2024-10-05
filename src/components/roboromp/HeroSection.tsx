"use client";
import React from "react";
import Image from "next/image";
import { ROBO_ROMP } from "@/constants/Images";
import { FormDemo } from "@/demo/roboromp-demo/FormDemo";

const HeroSection = () => {
  return (
    <div className="flex flex-row justify-between px-40 pt-12 bg-custom-gradient relative">
      <div className="absolute top-0 right-0 w-48 h-1/4 bg-gray-200/20 rounded-bl-full "></div>
      <div className="lg:flex hidden ">
        <Image src={ROBO_ROMP} alt="robo romp image" width={600} height={500} />
      </div>
      <div className="mt-16 pb-5">
        <FormDemo />
      </div>
      <div className="absolute bottom-0 left-0 w-48 h-1/4 bg-gray-200/20 rounded-tr-full "></div>
    </div>
  );
};

export default HeroSection;
