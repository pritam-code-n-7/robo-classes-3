import { ButtonTypes } from "@/types/ButtonTypes";
import React from "react";

const RoundedButton = ({ name, type, onClick, icon, className }: ButtonTypes) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {name}
    </button>
  );
};

export default RoundedButton;
