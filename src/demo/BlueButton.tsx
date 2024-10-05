import { ButtonTypes } from "@/types/ButtonTypes";
import React from "react";

const BlueButton = ({ name, type, onClick, icon }: ButtonTypes) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="py-3 px-3 rounded-lg  bg-sky-500 text-white text-sm font-semibold
        hover:bg-gray-300 hover:text-sky-500 focus:bg-gray-300 focus:text-sky-500 transition-all duration-300 ease-in-out flex flex-row items-center shadow-md dark:shadow-lg"
    >
      {icon && <span className="mr-1">{icon}</span>}
      {name}
    </button>
  );
};

export default BlueButton;
