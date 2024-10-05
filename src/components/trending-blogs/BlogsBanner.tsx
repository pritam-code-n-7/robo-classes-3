import { BreadcrumbDemo } from "@/demo/BreadcrumbDemo";
import React from "react";

const BlogsBanner = ({title}:alertTypes) => {
  return (
    <div className="flex flex-col items-center justify-center text-white py-20 gap-10 relative bg-custom-gradient">
      <div className="absolute top-0 right-0 w-24 h-2/6 bg-gray-200/20 rounded-bl-full"></div>
      <div className="flex flex-col text-center gap-2">
        <p className="text-4xl font-extrabold">
          Nurturing Young Minds: 10 Steps to Guide Your Child for STEM
        </p>
        <p className="text-4xl font-extrabold"> Education</p>
      </div>
      <div>
        <BreadcrumbDemo title={title}/>
      </div>
      <div className="absolute bottom-0 left-0 w-24 h-2/6 bg-gray-200/20 rounded-tr-full"></div>
    </div>
  );
};

export default BlogsBanner;
