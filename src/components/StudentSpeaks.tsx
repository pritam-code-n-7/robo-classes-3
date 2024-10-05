"use client";
import { OUR_STUDENT } from "@/constants/Images";
import Image from "next/image";
import React from "react";
import { WiStars } from "react-icons/wi";
import { motion } from "framer-motion";

const StudentSpeaks = () => {
  return (
    <>
      <div className="flex flex-row items-center px-28 py-16 gap-10 relative bg-custom-gradient">
        <div className="absolute top-0 right-0 w-1/5 h-3/6 bg-gradient-to-l from-green-200/40 to-transparent rounded-bl-full"></div>
        <div className="flex flex-col max-w-3xl text-justify text-white">
          <p className="font-extrabold text-3xl mb-4">Student Speaks</p>
          <p className="font-semibold text-lg">Meera Al Khaldi</p>
          <p className="text-base">
            My name is Meera Al Khaldi - a INDIA National - I am 7 years old. I
            attended Wedo Lego program level one during my spring break 2022,
            and it was an interesting, creative, and meaningful journey. I
            recommend all the children to utilize their vacation by attending
            such programs to support their creative thinking. I thank my teacher
            for providing me with necessary guidance, challenges, and materials.
          </p>
        </div>
        <div className="ml-10 relative">
          <motion.div
            className="absolute -top-10 -right-10 "
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{willChange:"ease"}}
          >
            <WiStars size={100} className="text-white" />
          </motion.div>
          <Image src={OUR_STUDENT} alt="student-pic" height={500} width={350} />
          <motion.div
            className="absolute -bottom-10 -left-10 "
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{willChange:"ease"}}

          >
            <WiStars size={100} className="text-white" />
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 h-52 w-60 bg-gray-200/20 rounded-tr-full"></div>
      </div>
    </>
  );
};

export default StudentSpeaks;
