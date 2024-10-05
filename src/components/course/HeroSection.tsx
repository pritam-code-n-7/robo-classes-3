import { ROBOTICS_BG } from "@/constants/Images";
import { EnrollCardDemo } from "@/demo/course-demo/EnrollCardDemo";
import { cartTypes } from "@/types/CartTypes";
import React from "react";

const HeroSection = ({course}:cartTypes) => {
  return (
    <div >
      <div
        className="bg-cover bg-center h-[300px] sm:h-[400px] md:h-[500px] lg:h-[500px] xl:h-[600px] flex p-20"
        style={{ backgroundImage: `url(${ROBOTICS_BG})` }}
      >
        <EnrollCardDemo course={course}/>
      </div>
    </div>
  );
};

export default HeroSection;
