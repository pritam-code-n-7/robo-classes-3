import { ROBOTICS_BG } from "@/constants/Images";
import { AlertDemo } from "@/demo/AlertDemo";
import { EnrollCardDemo } from "@/demo/robotics-demo/EnrollCardDemo";
import { cardType } from "@/types/CourseTypes";
import React from "react";

const HeroSection = ({ title }: cardType) => {
  const Data = [
    { title: "STEM", desc: "ACCREDITED PROGRAM" },
    { title: "2600+", desc: "Students" },
    { title: "30+", desc: "Specialized courses" },
    { title: "2400+", desc: "Happy parents" },
  ];

  return (
    <div className="pb-10">
      <div
        className="bg-cover bg-center h-[300px] sm:h-[400px] md:h-[500px] lg:h-[500px] xl:h-[600px] flex p-20"
        style={{ backgroundImage: `url(${ROBOTICS_BG})` }}
      >
        <EnrollCardDemo title={title} />
      </div>
      <div className="flex flex-row gap-6 justify-center py-8 bg-custom-gradient relative">
        <div className="absolute top-0 right-0 w-28 h-2/3 bg-gray-200/20 rounded-bl-full "></div>
        {Data.map((item) => (
          <AlertDemo {...item} key={item.title} />
        ))}
        <div className="absolute bottom-0 left-0  w-28 h-2/3 bg-gray-200/20 rounded-tr-full "></div>
      </div>
    </div>
  );
};

export default HeroSection;
