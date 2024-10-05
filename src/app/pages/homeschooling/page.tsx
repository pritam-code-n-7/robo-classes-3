import CarouselFe from "@/components/CarouselFe";
import ParentsCorner from "@/components/ParentsCorner";
import TrendingCarouselFe from "@/components/TrendingCarouselFe";
import AboutUs from "@/components/homeschooling/AboutUs";
import CardsSection from "@/components/homeschooling/CardsSection";
import Feature from "@/components/homeschooling/Feature";
import HeroSection from "@/components/homeschooling/HeroSection";
import RightCourse from "@/components/robotics/RightCourse";
import React from "react";

const page = () => {
  return (
    <div>
      <HeroSection title="Group Classes For Home-Schooled Kids" />
      <Feature />
      <CardsSection />
      <AboutUs />
      <CarouselFe />
      <ParentsCorner />
      <RightCourse />
      <TrendingCarouselFe />
    </div>
  );
};

export default page;
