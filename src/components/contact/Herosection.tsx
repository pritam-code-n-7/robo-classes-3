import { ROBOTICS_BG } from "@/constants/Images";
import { EnrollCardDemo } from "@/demo/contact-demo/EnrollCardDemo";
import React from "react";

const HeroSection = () => {
  return (
    <div className="pb-28">
      <div
        className="bg-cover bg-center h-[300px] sm:h-[400px] md:h-[500px] lg:h-[500px] xl:h-[600px] flex p-20"
        style={{ backgroundImage: `url(${ROBOTICS_BG})` }}
      >
        <EnrollCardDemo />
      </div>
    </div>
  );
};

export default HeroSection;
