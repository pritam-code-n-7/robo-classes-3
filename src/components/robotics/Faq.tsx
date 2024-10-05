"use client";
import { FaqData } from "@/data/AboutData";
import FaqCard from "@/demo/robotics-demo/FaqCard";
import React from "react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const Faq = () => {
  return (
    <div className="flex flex-col gap-8 items-center pt-10 pb-40 p-2 relative">
      <div className="flex flex-col gap-2 text-center">
        <p className="text-4xl font-extrabold">FAQ</p>
        <p className="text-lg " style={{ letterSpacing: "0.05em" }}>
          Additional information
        </p>
      </div>
      <Carousel className="max-w-7xl -space-x-3">
        <CarouselContent className="-ml-1 pr-72">
          {FaqData.map((item) => (
            <CarouselItem
              key={item.id}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <FaqCard {...item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
export default Faq;
