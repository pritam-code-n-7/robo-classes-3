"use client";
import React, { useState } from "react";

import "swiper/css";
import Data from "../../data/stemData.json";
import { CardDemo } from "@/demo/CardDemo";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

const Features = () => {
  const [isFilter, setIsFilter] = useState(false);
  const [selectedAge, setSelectedAge] = useState<string>("All ages");

  const ageGroups = [
    "All ages",
    "4-6 years",
    "6-9 years",
    "9-13 years",
    "13+ years",
  ];

  const handleAgeFilter = (age: string) => {
    setSelectedAge(age);
    setIsFilter(age !== "All ages");
  };

  //filter logic for cards
  const filteredAge = isFilter
    ? Data.filter((item) => item.age === selectedAge)
    : Data;

  return (
    <div className="flex flex-col p-8 gap-4 mb-20">
      <div className="flex flex-col items-center">
        <p className="text-4xl font-extrabold mb-4">STEM Classes</p>
        <p className="text-sm font-bold" style={{ letterSpacing: "0.09em" }} 
        >See age appropriate courses</p>
        <div className="p-4 flex justity-center items-center">
          <div className="bg-[#F0F0F0] dark:bg-slate-300 p-2 rounded-[30px] font-medium flex gap-2 md:gap-6">
            {ageGroups.map((age) => (
              <button
                key={age}
                onClick={() => handleAgeFilter(age)}
                className={`text-xs font-semibold md:text-sm p-2 md:px-4 rounded-full cursor-pointer 
            transition-colors duration-300 ease-in-out ${
              selectedAge === age ? "bg-white text-[#16A34A]" : "text-black"
            }`}
              >
                {age}
              </button>
            ))}
          </div>
        </div>
      </div>
        <p className="font-extrabold px-5">STEM Courses</p>
      <Carousel className="w-full max-w-8xl cursor-grab">
        <CarouselContent className="-ml-1">
          {filteredAge.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <CardDemo {...item} href={`/collections/${item.id}`}/>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Features;
