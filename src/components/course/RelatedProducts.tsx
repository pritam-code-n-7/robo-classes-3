"use client";
import React from "react";

import Data from "../../data/roboticsData.json";
import CodeData from "../../data/programmingData.json";
import StemData from "../../data/stemData.json";
import { CardDemo } from "@/demo/CardDemo";

import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

const RelatedProducts = () => {
  const allData = [...Data, ...CodeData, ...StemData];

  return (
    <div className="flex flex-col p-8 gap-4 py-20">
      <div className="flex flex-col items-center">
        <p className="text-4xl font-extrabold mb-4">Related Products</p>
        <p className="text-sm font-bold">You might be interested in these</p>
      </div>
        <p className=" text-xl font-bold">All Courses</p>

      <Carousel className="w-full max-w-8xl cursor-grab">
        <CarouselContent className="-ml-1 ">
          {allData.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <CardDemo {...item} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default RelatedProducts;
