import { ButtonTypes } from "@/types/ButtonTypes";
import React from "react";

const WhiteButton = ({ name, type, onClick, icon }: ButtonTypes) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className=" flex flex-row py-3 px-4 bg-transparent rounded-lg border-2 border-white
             text-white text-sm font-semibold focus:bg-gray-300 focus:border-none focus:text-[#16A34A] transition-all duration-300 ease-in-out dark:bg-gray-300 dark:text-[#16A34A] dark:border-none"
    >
      {icon && <span className="mr-2">{icon}</span>}
      {name}
    </button>
  );
};

export default WhiteButton;
