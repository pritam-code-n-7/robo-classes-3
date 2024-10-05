import { ButtonTypes } from "@/types/ButtonTypes";
import React from "react";

const GradientButton = ({ name, type, onClick, icon }: ButtonTypes) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="py-3 px-3 rounded-lg  bg-custom-gradient text-white text-sm font-medium
        hover:bg-gray-300 hover:text-custom-gradient focus:bg-gray-300 focus:text-custom-gradient transition-all duration-300 ease-in-out flex flex-row items-center shadow-md dark:shadow-lg"
        style={{ letterSpacing: "0.05em" }} >
      {icon && <span className="mr-1">{icon}</span>}
      {name}
    </button>
  );
};

export default GradientButton;
