"use client";
import React from "react";
import NavBar from "@/demo/NavBar";


const Header = () => {
  return (
    <>
      <div className="fixed w-full bg-white dark:bg-black z-50">
        <NavBar />
      </div>
      <div className="h-[70px]" />
    </>
  );
};

export default Header;
