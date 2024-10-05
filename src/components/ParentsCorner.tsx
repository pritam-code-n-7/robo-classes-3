"use client";
import BlueButton from "@/demo/BlueButton";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import Image from "next/image";
import Data from "../data/parentsData.json";
import { QUOTE } from "@/constants/Images";
import { usePathname, useRouter } from "next/navigation";
import { STUDENT_SPEAKS } from "@/constants/links";

const ParentsCorner = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex flex-col items-center p-20 ">
      <div className="flex flex-col items-center gap-4 ">
        <p className="text-4xl font-extrabold">Parent’s corner</p>
        <p className="text-xs font-bold" style={{ letterSpacing: "0.09em" }}>
          What do parents have to say
        </p>
      </div>
      <section className="py-10">
        <div className="container mx-auto md:px-10 ">
          <Swiper
            spaceBetween={3}
            slidesPerView={4}
            effect="coverflow"
            loop={true}
            navigation={true}
            modules={[Navigation]}
          >
            {Data.map((item, index) => (
              <SwiperSlide key={index} className="mb-10 pl-2 ">
                <Card
                  className="w-[320px] h-[380px] flex flex-col items-center rounded-xl  dark:shadow-black
                 bg-[#F0F0F0] dark:bg-black dark:text-white relative shadow-xl shadow-pink-200"
                >
                  <CardHeader className="border-t-8 border-violet-800 rounded-lg shadow-md mb-2">
                    <Image
                      src={QUOTE}
                      alt={item.alt}
                      height={24}
                      width={36.5}
                    />
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm font-semibold w-[270px] line-clamp-6 mt-5 text-balance">
                      {item.review}
                    </p>
                  </CardContent>
                  <CardFooter className="absolute bottom-2 w-full">
                    <div className="flex flex-row gap-2 bg-gray-300 dark:bg-gray-600 rounded-full items-center">
                      <Image
                        src={item.pic}
                        alt={item.alt}
                        height={62}
                        width={62}
                        className="rounded-full"
                      />
                      <div className="flex flex-col gap-1">
                        <p className="font-bold ">{item.name}</p>
                        <Image
                          src={item.rating}
                          alt={item.alt}
                          height={50}
                          width={777}
                          className="ml-2"
                        />
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {pathname !== STUDENT_SPEAKS && (
        <BlueButton
          name="View All"
          type="button"
          onClick={() => router.push(STUDENT_SPEAKS)}
        />
      )}
    </div>
  );
};

export default ParentsCorner;
