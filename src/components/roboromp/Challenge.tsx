"use client";
import { ARDUINO_PROJECT_IMG, ROBOTICS_PROJECT_IMG } from "@/constants/Images";
import { WHATSAPP } from "@/constants/links";
import RoundedButton from "@/demo/RoundedButton";
import { Calendar } from "lucide-react";
import Image from "next/image";
import React from "react";

const Challenge = () => {
  const handleClick = () => window.open(WHATSAPP);

  const Data = [
    { id: 1, src: ROBOTICS_PROJECT_IMG },
    { id: 2, src: ARDUINO_PROJECT_IMG },
  ];

  return (
    <div className="flex flex-row justify-between px-32 py-24 items-center text-white bg-custom-gradient relative">
      <div className="absolute top-0 right-0 w-32 h-1/4 bg-gray-200/20 rounded-bl-full "></div>
      <div className="flex flex-col justify-center gap-4">
        <p className="text-4xl font-bold">What Can You Make?</p>
        <div
          className="flex flex-col gap-1 justify-center text-lg"
          style={{ letterSpacing: "0.05em" }}
        >
          <p>Create a model using Lego WeDo2.0, Mindstorms Ev3,Spike</p>
          <p>Essential,Spike Prime or Arduino Kit and code the same.</p>
        </div>
        <div>
          <RoundedButton
            name="Ask Us For More Details"
            icon={<Calendar size={20} />}
            type="button"
            onClick={handleClick}
            className="py-4 px-8 font-semibold rounded-full shadow-xl border border-sky-500 bg-white text-sky-500  hover:bg-sky-500 hover:text-white transition-all flex flex-row items-center duration-300 ease-in-out delay-75"
          />
        </div>
      </div>
      <div className="flex flex-row justify-between items-center">
        {Data.map((item) => (
          <Image
            src={item.src}
            alt="project images"
            width={300}
            height={200}
            key={item.id}
          />
        ))}
      </div>
      <div className="absolute bottom-0 left-0 w-32 h-1/4 bg-gray-200/20 rounded-tr-full "></div>
    </div>
  );
};

export default Challenge;
