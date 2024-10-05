import { ROBOTICS_BG } from "@/constants/Images";
import { AlertDemo } from "@/demo/AlertDemo";
import { EnrollCardDemo } from "@/demo/coding-and-robotics-courses-demo/EnrollCardDemo";
import React from "react";

const HeroSection = () => {
  const Data = [
    { title: "2400+", desc: "Students" },
    { title: "1 : 1 or group classes", desc: "Live online learning" },
    { title: "40+", desc: "Specialized courses" },
    { title: "12000+", desc: "hours of learning" },
  ];

  return (
    <div>
      <div
        className="bg-cover bg-center h-[300px] sm:h-[400px] md:h-[500px] lg:h-[500px] xl:h-[600px]  p-20"
        style={{ backgroundImage: `url(${ROBOTICS_BG})` }}
      >
        <EnrollCardDemo />
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
