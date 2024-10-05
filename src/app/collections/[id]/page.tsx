"use client";
import CarouselFe from "@/components/CarouselFe";
import ParentsCorner from "@/components/ParentsCorner";
import AnimatedCard from "@/components/course/AnimatedCard";
import CourseDetails from "@/components/course/CourseDetails";
import HeroSection from "@/components/course/HeroSection";
import Level from "@/components/course/Level";
import RelatedProducts from "@/components/course/RelatedProducts";
import Faq from "@/components/robotics/Faq";
import { Card } from "@/components/ui/card";
import React from "react";
import { BiSolidBadge } from "react-icons/bi";
import { FaBook } from "react-icons/fa";
import Data from "../courseData.json";
import { DialogDemo } from "@/demo/DialogDemo";
import CardDemo from "@/components/course/CardDemo";
import { useCart } from "@/contexts/UseCart";
import { cartTypes } from "@/types/CartTypes";
import { useRouter } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const details = Data.find((item) => item.id === Number(id));

  const { dispatch } = useCart();
  const router = useRouter();

  const addToCart = (product: cartTypes) => {
    dispatch({ type: "ADD_TO_CART", product });
    router.push("/cart");
  };

  if (!details) {
    return <p>Blog post not found</p>;
  }

  return (
    <div className="min-w-screen" key={details.id}>
      <HeroSection course={details.course} />

      <CourseDetails
        overridenPrice={details.overridenPrice}
        price={details.price}
        installment={details.installment}
        age={details.age}
        classes={details.classes}
        batchSize={details.batchSize}
        instruction={details.instruction}
        onClick={() => addToCart(details)}
      />

      <section>
        <div className="flex flex-row gap-6 items-center py-20 ">
          <Swiper
            spaceBetween={200}
            slidesPerView={4}
            grabCursor={false}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            {details.src.map((item, index) => (
              <SwiperSlide key={index}>
                <AnimatedCard {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <div className="flex flex-col gap-8 items-center p-20 bg-custom-gradient relative">
        <div className="absolute top-0 right-0 w-36 h-1/4 bg-gray-200/20 rounded-bl-full "></div>
        <div className="flex flex-col gap-2 text-center ">
          <p className="text-4xl font-bold">Course details</p>
          <p className="text-lg ">Quick overview</p>
        </div>
        <div className="flex flex-col ">
          <strong className="flex flex-row items-center text-2xl font-extrabold">
            {<FaBook size={20} className="text-green-500 mr-5" />}Learn
          </strong>
          <div className="flex gap-10 items-center ml-10">
            {details.learn.map((item, index) => (
              <strong
                className="flex text-pretty flex-wrap w-[300px] gap-3"
                key={index}
              >
                <p className="font-bold text-lg">{item.title}</p>
                <p
                  className="max-w-2xl text-sm text-gray-600 text-balance"
                  style={{ letterSpacing: "0.05em" }}
                >
                  {item.desc}
                </p>
              </strong>
            ))}
          </div>
        </div>
        <DialogDemo />
        <div className="absolute bottom-0 left-0 w-36 h-1/4 bg-gray-200/20 rounded-tr-full "></div>
      </div>

      <div className="ml-36 py-10">
        <Card className="max-w-6xl h-auto bg-gray-50 p-10 dark:text-black dark:bg-sky-100">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="gap-2">
              <AccordionTrigger className="text-2xl font-extrabold">
                Syllabus
              </AccordionTrigger>

              <AccordionContent className="text-lg flex flex-col gap-2">
                {details.list.map((item, index) => (
                  <ul
                    className="list-inside list-disc font-extrabold "
                    key={index}
                  >
                    <li>{item.list}</li>
                  </ul>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>
      </div>

      <div className="flex flex-row justify-between p-28">
        <div className="space-y-4">
          <p className="flex flex-row gap-5 items-center text-xl font-bold">
            {<FaBook size={27} className="text-green-500" />}Benefits
          </p>
          <ul className="list-inside list-disc ml-12">
            {details.benefits.map((item, index) => (
              <li key={index} className="font-semibold">
                {item.benefits}
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <p className="flex flex-row gap-5 items-center text-xl font-bold">
            {<BiSolidBadge size={27} className="text-green-500" />}Certification
          </p>
          <p className="max-w-xl ml-12 font-semibold">
            {details.certification}
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-20 bg-custom-gradient justify-center">
        <div className="flex flex-col items-center gap-10 p-20  text-white">
          <p className="text-4xl font-extrabold">Enroll Now</p>
          <div className="flex flex-row items-center gap-20">
            {details.card.map((item, index) => (
              <CardDemo {...item} key={index} />
            ))}
          </div>
          <DialogDemo />
        </div>
      </div>
      <Level />
      <Faq />
      <ParentsCorner />
      <CarouselFe />
      <RelatedProducts />
    </div>
  );
};

export default Page;
