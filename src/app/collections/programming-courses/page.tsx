const CarouselFe = dynamic(() => import("@/components/CarouselFe"));
import AboutRobotics from "@/components/robotics/AboutRobotics";
import Faq from "@/components/robotics/Faq";
import JoinOurTeacherCard from "@/components/robotics/JoinOurTeacherCard";
import RightCourse from "@/components/robotics/RightCourse";
import SchoolSection from "@/components/robotics/SchoolSection";
const HeroSection = dynamic(() => import("@/components/robotics/HeroSection"));
const Features = dynamic(() => import("@/components/programming/Features"));
const LearningPath = dynamic(
  () => import("@/components/robotics/LearningPath")
);

import dynamic from "next/dynamic";
import React from "react";

const page = () => {
  return (
    <div>
      <HeroSection title="Programming" />
      <Features />
      <RightCourse />
      <LearningPath />
      <SchoolSection course="Programming" />
      <AboutRobotics title="Programming" course="Programming" />
      <CarouselFe />
      <div className="mb-48">
        <div className="z-30 absolute flex justify-center left-64 mt-64 pt-48">
          <JoinOurTeacherCard />
        </div>
        <Faq />
      </div>
    </div>
  );
};

export default page;
