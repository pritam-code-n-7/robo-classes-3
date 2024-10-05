import FormSection from "@/components/coding-and-robotics-courses/FormSection";
import HeroSection from "@/components/coding-and-robotics-courses/HeroSection";
import AboutUs from "@/components/AboutUs";
import CarouselFe from "@/components/CarouselFe";
import ParentsCorner from "@/components/ParentsCorner";
import TrendingCarouselFe from "@/components/TrendingCarouselFe";
import CardsSection from "@/components/homeschooling/CardsSection";
import React from "react";
import RightCourse from "@/components/robotics/RightCourse";

const page = () => {
  return (
    <div>
      <HeroSection />
      <CardsSection />
      <FormSection />
      <AboutUs />
      <RightCourse />
      <ParentsCorner />
      <CarouselFe />
      <TrendingCarouselFe />
    </div>
  );
};

export default page;
