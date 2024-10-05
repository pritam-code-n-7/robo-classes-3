"use client";
import { TRENDING_BLOGS } from "@/constants/links";
import BlueButton from "@/demo/BlueButton";
import { CarouselSpacing } from "@/demo/CarouselSpacing";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const TrendingCarouselFe = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div
      className={`flex flex-col gap-8 items-center ${
        pathname !== "/pages/community" ? "pb-48" : "pb-20"
      } pt-20 dark:bg-slate-900`}
    >
      <div className="flex flex-col gap-4 items-center">
        <p className="text-4xl font-extrabold">What’s trending today</p>
        <p className="text-sm font-bold" style={{ letterSpacing: "0.09em" }} 
        >See age appropriate courses</p>
        <BlueButton
          name="See All"
          type="button"
          onClick={() => router.push(TRENDING_BLOGS)}
        />
      </div>
      <CarouselSpacing />
    </div>
  );
};

export default TrendingCarouselFe;
