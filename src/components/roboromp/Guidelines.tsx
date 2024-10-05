import { GUIDELINES } from "@/constants/Images";
import { GuideLinesData } from "@/data/AboutData";
import Image from "next/image";
import React from "react";
import { FaLocationArrow } from "react-icons/fa";

const Guidelines = () => {
  return (
    <div className="flex flex-row justify-between items-center px-20 py-20">
      <div className="flex flex-col justify-center gap-8">
        <p className="text-4xl font-bold">Guidelines</p>
        <ul className="flex flex-col gap-3">
          {GuideLinesData.map((item, index) => (
            <li
              className="flex flex-row justify-center items-center gap-3 w-[620px]"
              key={index}
            >
              <div className="w-10 h-10">
                <FaLocationArrow className="text-sky-500 rotate-45" />
              </div>
              <p className="text-lg">{item.point}</p>
            </li>
          ))}
        </ul>
      </div>

      <Image
        src={GUIDELINES}
        alt="guidelines image"
        width={650}
        height={600}
        className="mr-8"
      />
    </div>
  );
};

export default Guidelines;
