import { AGE, CUP, GLOBE, GROUP } from "@/constants/Images";
import Image from "next/image";
import React from "react";

const Feature = () => {
  const Data = [
    { id: 1, img: CUP, alt: "Awards + R&R" },
    { id: 2, img: AGE, alt: "6-16 Years" },
    { id: 3, img: GROUP, alt: "Individual only" },
    { id: 4, img: GLOBE, alt: "INDIA Kids only or existing student" },
  ];

  return (
    <div className="flex flex-col gap-20 items-center px-20 py-20 ml-10">
      <div className="w-[800px] text-wrap text-gray-600">
        <p style={{ letterSpacing: "0.05em" }} >
          <b className='text-2xl text-black bg-slate-100 dark:bg-sky-200 w-[550px]'>ROBOROMP 2024 is our annual Robotics Competition.</b> Our Aim is to become
          the biggest online Robotics Competition and this is the first
          edition.Students of <b className='text-black dark:text-gray-600 text-lg'> Age Group 6-16 years</b>, can participate in this
          event where they will make innovative projects using different
          Robotics Kits. They will get an opportunity to explore the exciting
          world of <b className='text-black dark:text-gray-600 text-lg'>Robotics,AI,Machine Learning and coding</b> with interactive
          activities and projects. This is just the beginning to impart Next-Gen
          Skills to today’s child!
        </p>
      </div>
      <div className="flex flex-row items-center gap-10  ">
        {Data.map((item) => (
          <div className="flex flex-row items-center gap-10" key={item.id}>
            <div className="flex flex-col gap-4 items-center">
              <Image src={item.img} alt={item.alt} width={120} height={120} />
              <p className="text-lg">{item.alt}</p>
            </div>
            <div className="border-l border-gray-300 h-20 mx-4" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
