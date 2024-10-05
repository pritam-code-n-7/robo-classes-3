"use client";
import BlueButton from "@/demo/BlueButton";
import React from "react";
import Data from "../../data/trendingData.json";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const TrendingCarouselFe = () => {
  return (
    <div className="flex flex-col gap-8 items-center pb-48 pt-20">
      <div className="flex flex-wrap justify-center gap-4">
        {Data.map((item) => (
          <Card
            className="max-w-80 h-[530px] relative hover:shadow-2xl transition-shadow ease-linear duration-300 delay-150 shadow-pink-100 hover:shadow-pink-300 dark:shadow-black"
            key={item.id}
          >
            <CardContent className="flex aspect-square items-center p-5">
              <span>
                <div className="flex flex-col items-center">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    height={200}
                    width={300}
                    className="transform transition-transform duration-300 hover:scale-110 h-[200px] w-[300px] rounded-lg"
                  />
                  <div className="space-y-4 p-4">
                    <div className="text-sm text-[#808080]">
                      <ul className="list-disc list-inside custom-bullet">
                        <li>Education</li>
                      </ul>
                    </div>
                    <p className="text-lg font-extrabold text-balance">
                      {item.title}
                    </p>
                    <p className="text-xs text-[#808080] line-clamp-3">
                      {item.desc}
                    </p>
                  </div>
                  <Link
                    href={`/blogs/trending-blogs/${item.id}`}
                    className="absolute bottom-4"
                  >
                    <BlueButton name="Read More" type="button" />
                  </Link>
                </div>
              </span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TrendingCarouselFe;
