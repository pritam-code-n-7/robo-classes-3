import {
  AWARD,
  BULB,
  INTL,
  LAPTOP,
  REFRESH,
  SUBJECT,
} from "@/constants/Images";
import Image from "next/image";
import React from "react";

const WhyParticipate = () => {
  const Data = [
    { id: 1, src: REFRESH, title: "Refresh or Learn Robotics coding" },
    { id: 2, src: SUBJECT, title: "Learn a completely new subject" },
    { id: 3, src: LAPTOP, title: "Hone your presentation skills" },
    { id: 4, src: AWARD, title: "Get Recognized with awards/certificates" },
    {
      id: 5,
      src: INTL,
      title:
        "Prepare yourself to participate in other international competitions",
    },
    {
      id: 6,
      src: BULB,
      title: "Enlighten yourself with skills of 21st century",
    },
  ];

  return (
    <div className="flex flex-col gap-8 items-center px-20 py-28 ">
      <p className="text-4xl font-bold">Why Participate?</p>
      <div>
        <div className="flex flex-wrap gap-8 justify-center">
          {Data.map((item) => (
            <div key={item.id} className='flex flex-row gap-4'>
              <div className="flex flex-col gap-2 items-center"  >
                <Image
                  src={item.src}
                  alt="participation image"
                  width={350}
                  height={300}
                 
                />
                <p className="w-[300px] text-center text-lg">{item.title}</p>
              </div>
              <div className="flex -space-x-4">
                <div className="border-l-4 border-[#f0f0f0] h-20 mx-4 mt-28" />
                <div className="border-l-2 border-gray-400 h-20 mx-4 mt-28" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyParticipate;
