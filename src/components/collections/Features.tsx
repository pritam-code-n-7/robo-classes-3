"use client";
import React, { useState } from "react";

import "swiper/css";
import Data from "../../data/roboticsData.json";
import CodeData from "../../data/programmingData.json";
import StemData from "../../data/stemData.json";
import BlueButton from "@/demo/BlueButton";
import { CardDemo } from "@/demo/CardDemo";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

const Features = () => {
  const [isFilter, setIsFilter] = useState(false);
  const [selectedAge, setSelectedAge] = useState<string>("All ages");
  const [isShowAll, setIsShowAll] = useState(false);

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

  const combinedData = [...Data, ...CodeData, ...StemData];

  // Filter logic for cards based on age
  const filteredData = isFilter
    ? combinedData.filter((item) => item.age === selectedAge)
    : combinedData;

  // Handle expanding or collapsing all cards
  const handleShowAll = () => {
    setIsShowAll((prev) => !prev);
  };

  return (
    <div className="flex flex-col p-8 gap-4 ">
      <div className="flex flex-col items-center">
        <p className="text-4xl font-extrabold mb-4">Courses Collection</p>
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
      <div className="flex flex-row justify-between pl-5 items-center">
        <p className="font-extrabold">All Courses</p>
        <BlueButton
          name={isShowAll ? "Show Less" : "Show All"}
          type="button"
          onClick={handleShowAll}
        />
      </div>
      {isShowAll ? (
        <div className="flex flex-wrap gap-5 justify-center pb-20">
          {filteredData.map((item, index) => (
            <div key={index}>
              <CardDemo {...item} href={`/collections/${item.id}`}/>
            </div>
          ))}
        </div>
      ) : (
        <Carousel className="w-full max-w-8xl cursor-grab">
          <CarouselContent className="-ml-1">
            {filteredData.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <CardDemo {...item} href={`/collections/${item.id}`}/>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      )}
    </div>
  );
};

export default Features;
