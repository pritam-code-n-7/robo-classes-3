import { BACKGROUND_IMG } from "@/constants/Images";
import { EnrollCardDemo } from "@/demo/community-demo/EnrollCardDemo";
import React from "react";

const HeroSection = () => {
  return (
    <div >
      <div
        className="bg-cover bg-center h-[300px] sm:h-[400px] md:h-[500px] lg:h-[500px] xl:h-[500px] flex p-20"
        style={{ backgroundImage: `url(${BACKGROUND_IMG})` }}
      >
        <EnrollCardDemo />
      </div>
    </div>
  );
};

export default HeroSection;
