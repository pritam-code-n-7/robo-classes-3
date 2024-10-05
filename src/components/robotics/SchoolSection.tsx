"use client";
import RoundedButton from "@/demo/RoundedButton";
import { cardType } from "@/types/CourseTypes";
import { useRouter } from "next/navigation";
import React from "react";
import { FaSchool } from "react-icons/fa6";

const SchoolSection = ({ course }: cardType) => {
  const route = useRouter();

  return (
    <div className="flex flex-row justify-between p-28 bg-custom-gradient relative text-white">
      <div className="absolute top-0 right-0 w-32 h-1/3 bg-gray-200/20 rounded-bl-full "></div>
      <div className="flex flex-col">
        <div className="flex flex-col gap-4 justify-center">
          <p className="text-4xl font-bold">
            Looking to teach {course} in schools?
          </p>
          <p style={{ letterSpacing: "0.05em" }} >
            Stay upto date with the latest info on Robotics, programming and
            STEM education.
          </p>
        </div>
        <div className="mt-8">
          <RoundedButton
            name="Get In Touch"
            type="button"
            className="py-5 px-10 rounded-full bg-sky-500 text-white hover:bg-white dark:shadow-black
             hover:text-sky-500 shadow-lg dark:shadow-none transition-all duration-300 delay-75 ease-in-out"
            onClick={() => route.push("/pages/contact")}
          />
        </div>
      </div>
      <div className="rounded-full p-8 border-2 border-white text-white ">
        <FaSchool size={130} />
      </div>
      <div className="absolute bottom-0 left-0 w-32 h-1/3 bg-gray-200/20 rounded-tr-full "></div>
    </div>
  );
};

export default SchoolSection;
