import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const ProgressBarDemo = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      {/* Progress Bar */}
      <div className="relative flex  items-center">
        {/* Icon 1 */}
        <div className="flex flex-col items-center z-10">
          <div className="bg-white p-2 rounded-full border border-gray-300 shadow-md">
            <FaCheckCircle className="text-black" size={22} />
          </div>
        </div>

        {/* Line Segment */}
        <div className="w-52 h-1 bg-custom-gradient"></div>

        {/* Icon 2 */}
        <div className="flex flex-col items-center z-10">
          <div className="bg-white p-2 rounded-full border border-gray-300 shadow-md">
            <FaCheckCircle className="text-black" size={22} />
          </div>
        </div>

        {/* Line Segment */}
        <div className="w-52 h-1 bg-custom-gradient"></div>

        {/* Icon 3 */}
        <div className="flex flex-col items-center z-10">
          <div className="bg-white p-2 rounded-full border border-gray-300 shadow-md">
            <FaCheckCircle className="text-black" size={22} />
          </div>
        </div>

        {/* Line Segment */}
        <div className="w-52 h-1 bg-custom-gradient"></div>

        {/* Icon 4 */}
        <div className="flex flex-col items-center z-10">
          <div className="bg-white p-2 rounded-full border border-gray-300 shadow-md">
            <FaCheckCircle className="text-black" size={22} />
          </div>
        </div>

        {/* Line Segment */}
        <div className="w-52 h-1 bg-custom-gradient"></div>

        {/* Icon 5 */}
        <div className="flex flex-col items-center z-10">
          <div className="bg-white p-2 rounded-full border border-gray-300 shadow-md">
            <FaCheckCircle className="text-black" size={22} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBarDemo;
