import React from "react";

const TrendBanner = () => {
  return (
    <div className="flex justify-center text-white px-28 py-14 gap-10 relative bg-custom-gradient">
      <div className="absolute top-0 right-0 w-24 h-4/6 bg-gray-200/20 rounded-bl-full"></div>
      <div>
        <p className="text-3xl font-extrabold">What’s trending</p>
      </div>
      <div className="absolute bottom-0 left-0 w-24 h-4/6 bg-gray-200/20 rounded-tr-full"></div>
    </div>
  );
};

export default TrendBanner;
