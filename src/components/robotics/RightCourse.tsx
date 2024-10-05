"use client";
import { BB, PLANE } from "@/constants/Images";
import Image from "next/image";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { DialogDemo } from "@/demo/DialogDemo";
import { WHATSAPP } from "@/constants/links";

const RightCourse = () => {
  const Data = [
    {
      id: 1,
      li: "Which are the latest, in demand course?",
      p: "Speak to our specialist who can guide you and help you decide.",
    },
    {
      id: 2,
      li: "What age appropriate course is right for my child?",
      p: "Message us on What’s app and we’ll call you right back.",
    },
    {
      id: 3,
      li: "How will my child use what he has learnt and how will it help him?",
      p: "",
    },
  ];

  return (
    <div className="flex flex-row gap-32 items-center p-20  bg-custom-gradient relative">
      <div className="absolute top-0 right-0 w-1/6 h-2/6 bg-gray-200/20 rounded-bl-full "></div>
      <div className="items-center text-white gap-8">
        <div className="flex flex-col gap-5 text-base">
          <p className="text-4xl font-bold">
            Which course is right for my child?
          </p>
          <div className="flex flex-col">
            {Data.map((item) => (
              <ul className="list-disc list-inside ml-6 right-course-bullet" key={item.id}>
                <li style={{ letterSpacing: "0.05em" }}>{item.li}</li>
              </ul>
            ))}
            {Data.map((item) => (
              <div
                className="flex flex-col mt-2"
                style={{ letterSpacing: "0.05em" }}
                key={item.id}
              >
                <p>{item.p}</p>
              </div>
            ))}
          </div>
        </div>

        <Image
          src={PLANE}
          alt="plane-image"
          height={200}
          width={300}
          className="py-10 ml-36"
          style={{height:'auto' ,width:'auto'}}
        />
        <div className="flex flex-row gap-5 justify-center">
          <DialogDemo />
          <button
            className=" flex flex-row px-6 py-3 bg-white rounded-lg 
             text-green-500 font-semibold text-sm focus:bg-gray-300 focus:border-none focus:text-[#16A34A] transition-all duration-300 ease-in-out dark:bg-gray-300 dark:text-[#16A34A] dark:border-none"
            onClick={() => window.open(WHATSAPP)}
          >
            <div className="flex flex-row items-center gap-1">
              {<FaWhatsapp size={17} />} Talk to us
            </div>
          </button>
        </div>
      </div>
      <div className="mb-10">
        <Image src={BB} alt="bb-image" height={555} width={444} />
      </div>
      <div className="absolute bottom-0 left-0 w-36 h-1/5 bg-gray-200/20 rounded-tr-full "></div>
    </div>
  );
};

export default RightCourse;
