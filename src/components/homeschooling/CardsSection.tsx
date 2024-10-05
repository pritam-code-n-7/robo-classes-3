"use client";
import BlueButton from "@/demo/BlueButton";
import { CardDemo } from "@/demo/CardDemo";
import React, { useState } from "react";
import "swiper/css";
import Data from "../../data/roboticsData.json";
import PData from "../../data/programmingData.json";
import SData from "../../data/stemData.json";
import OData from "../../data/OnlineCoursesData.json";
import { useRouter } from "next/navigation";
import {
  PROGRAMMING_COURSES,
  ROBOTICS_COURSES,
  STEM_CLASSES,
} from "@/constants/links";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

const CardsSection = () => {
  const [isFilter, setIsFilter] = useState(false);
  const [selectedAge, setSelectedAge] = useState<string>("All ages");
  const router = useRouter();

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

  //filter logic for robotics cards
  const filteredAge = isFilter
    ? Data.filter((item) => item.age === selectedAge)
    : Data;

  //filter logic for programming cards
  const filteredAgeP = isFilter
    ? PData.filter((item) => item.age === selectedAge)
    : PData;

  //filter logic for STEM cards
  const filteredAgeS = isFilter
    ? SData.filter((item) => item.age === selectedAge)
    : SData;

  //filter logic for Online course cards
  const filteredAgeO = isFilter
    ? OData.filter((item) => item.age === selectedAge)
    : OData;

  return (
    <div className="flex flex-col p-8 gap-4 py-20">
      <div className="flex flex-col items-center">
        <p className="text-4xl font-extrabold mb-4">Featured Courses</p>
        <p className="text-sm font-bold" style={{ letterSpacing: "0.09em" }}>
          See age appropriate courses
        </p>
        <div className="p-4 flex justity-center items-center">
          <div className="bg-[#F0F0F0] dark:bg-slate-300 p-2 rounded-[30px] font-medium flex gap-2 md:gap-6">
            {ageGroups.map((age) => (
              <button
                key={age}
                onClick={() => handleAgeFilter(age)}
                className={`text-xs font-bold md:text-sm p-2 md:px-4 rounded-full cursor-pointer 
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

      <div className="flex flex-row justify-between items-center px-5">
        <p className="font-extrabold text-2xl">Robotics Courses</p>
        <BlueButton
          name="Show All"
          type="button"
          onClick={() => router.push(ROBOTICS_COURSES)}
        />
      </div>
      <Carousel className="w-full max-w-8xl cursor-grab">
        <CarouselContent className="-ml-1">
          {filteredAge.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <CardDemo {...item} href={`/collections/${item.id}`} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="flex flex-row justify-between items-center px-5">
        <p className="font-extrabold text-2xl">Programming Courses</p>
        <BlueButton
          name="Show All"
          type="button"
          onClick={() => router.push(PROGRAMMING_COURSES)}
        />
      </div>
      <Carousel className="w-full max-w-8xl cursor-grab">
        <CarouselContent className="-ml-1">
          {filteredAgeP.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <CardDemo {...item} href={`/collections/${item.id}`} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="flex flex-row justify-between items-center px-5">
        <p className="font-extrabold text-2xl">STEM Classes</p>
        <BlueButton
          name="Show All"
          type="button"
          onClick={() => router.push(STEM_CLASSES)}
        />
      </div>
      <Carousel className="w-full max-w-8xl cursor-grab">
        <CarouselContent className="-ml-1">
          {filteredAgeS.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <CardDemo {...item} href={`/collections/${item.id}`} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="flex flex-row justify-between items-center px-5">
        <p className="font-extrabold text-2xl">Online Courses</p>
        <BlueButton
          name="Show All"
          type="button"
          onClick={() => router.push(STEM_CLASSES)}
        />
      </div>
      <Carousel className="w-full max-w-8xl cursor-grab">
        <CarouselContent className="-ml-1">
          {filteredAgeO.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <CardDemo {...item} href={`/collections/${item.id}`} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CardsSection;
