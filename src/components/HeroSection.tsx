"use client";
import { BACKGROUND_IMG } from "@/constants/Images";
import { AlertDemo } from "@/demo/AlertDemo";
import { DialogDemo } from "@/demo/DialogDemo";
import { FormDemo } from "@/demo/FormDemo";
import WhiteButton from "@/demo/WhiteButton";
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const Data = [
    { title: "STEM", desc: "ACCREDITED PROGRAM" },
    { title: "2600+", desc: "Students" },
    { title: "30+", desc: "Specialized courses" },
    { title: "2400+", desc: "Happy parents" },
  ];

  return (
    <div>
      <div
        className="bg-cover bg-center h-[300px] sm:h-[400px] md:h-[500px] lg:h-[500px] xl:h-[600px] flex flex-row gap-80 justify-center items-center "
        style={{ backgroundImage: `url(${BACKGROUND_IMG})` }}
      >
        <div className="lg:flex hidden flex-col flex-wrap gap-4 ">
          <div className="flex flex-col gap-4 text-wrap text-white ">
            <p className="text-4xl">Building critical</p>
            <motion.p
              className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-l
             from-gold via-white to-beige"
              animate={{ backgroundPositionX: ["0%", "200%"] }}
              transition={{
                duration: 8,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
              }}
              style={{
                backgroundSize: "200% 200%",
                willChange: "background-position",
              }}
            >
              thinking and skills
            </motion.p>
            <p className="text-4xl">of the future!</p>
            <p
              style={{
                letterSpacing: "0.09em",
              }}
              className="mt-2 text-sm"
            >
              Robotics courses for kids!
            </p>
          </div>
          <div className="flex flex-row items-center gap-2 ">
            <DialogDemo />
            <WhiteButton
              name="Book a demo"
              type="button"
              className="rounded-lg px-8 "
            />
          </div>
        </div>
        <div className="ml-20">
          <FormDemo />
        </div>
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
